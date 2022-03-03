import { Facing, State } from "./types";
import { GridReducer, DefaultState } from "./reducer";

const placementTestCases: Array<{
  input: [number, number, Facing];
  expected: State;
}> = [
  {
    input: [2, 2, "NORTH"],
    expected: { x: 2, y: 2, facing: "NORTH" },
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

describe("GridReducer", () => {
  placementTestCases.forEach((testCase) => {
    const [x, y, facing] = testCase.input;
    test(`Robot state is ${JSON.stringify(
      testCase.expected
    )} after moving with state ${testCase.input}`, () => {
      expect(
        GridReducer(DefaultState, {
          type: "PLACE",
          payload: { x, y, facing },
        })
      ).toEqual(testCase.expected);
    });
  });
});

export {};
