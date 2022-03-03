import { Facing, State } from "./types";
import { GridReducer, DefaultState } from "./reducer";

const placementTestCases: Array<{
  input: [number, number, string];
  expected: State;
}> = [
  {
    input: [2, 2, "NORTH"],
    expected: { x: 2, y: 2, facing: "NORTH" },
  },
  {
    input: [4, 0, "SOUTH"],
    expected: { x: 4, y: 0, facing: "SOUTH" },
  },
  {
    input: [5, 3, "invalid facing"],
    expected: DefaultState,
  },
  {
    input: [5, 3, "NORTH"],
    expected: DefaultState,
  },
  {
    input: [5, 3, "NORTH"],
    expected: DefaultState,
  },
];

const movementTestCases: Array<{
  input: [number, number, Facing];
  expected: State;
}> = [
  {
    input: [2, 2, "NORTH"],
    expected: { x: 2, y: 3, facing: "NORTH" },
  },
  {
    input: [3, 1, "WEST"],
    expected: { x: 2, y: 1, facing: "WEST" },
  },
  {
    input: [0, 0, "WEST"],
    expected: { x: 0, y: 0, facing: "WEST" },
  },
  {
    input: [0, 4, "NORTH"],
    expected: { x: 0, y: 4, facing: "NORTH" },
  },
];

const turningTestCases: Array<{
  initial: [number, number, Facing];
  input: "LEFT" | "RIGHT";
  expected: State;
}> = [
  {
    initial: [2, 2, "NORTH"],
    input: "LEFT",
    expected: { x: 2, y: 2, facing: "WEST" },
  },
  {
    initial: [0, 0, "SOUTH"],
    input: "LEFT",
    expected: { x: 0, y: 0, facing: "EAST" },
  },
  {
    initial: [3, 5, "WEST"],
    input: "RIGHT",
    expected: { x: 3, y: 5, facing: "NORTH" },
  },
];

describe("GridReducer", () => {
  placementTestCases.forEach((testCase) => {
    const [x, y, facing] = testCase.input;
    test(`Robot state is ${JSON.stringify(testCase.expected)} after placing ${
      testCase.input
    }`, () => {
      expect(
        GridReducer(DefaultState, {
          type: "PLACE",
          payload: { x, y, facing: facing as Facing },
        })
      ).toEqual(testCase.expected);
    });
  });

  movementTestCases.forEach((testCase) => {
    const [x, y, facing] = testCase.input;
    test(`Robot state is ${JSON.stringify(testCase.expected)} after moving ${
      testCase.input
    }`, () => {
      expect(
        GridReducer(
          { x, y, facing },
          {
            type: "MOVE",
          }
        )
      ).toEqual(testCase.expected);
    });
  });

  turningTestCases.forEach((testCase) => {
    const [x, y, facing] = testCase.initial;
    test(`Robot state is ${JSON.stringify(testCase.expected)} after turning ${
      testCase.input
    }`, () => {
      expect(
        GridReducer(
          { x, y, facing },
          {
            type: "TURN",
            payload: testCase.input,
          }
        )
      ).toEqual(testCase.expected);
    });
  });
});

export {};
