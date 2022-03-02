import { Facing } from ".";
import { Action, State } from "./types";

export const defaultState: State = {
  x: 0,
  y: 0,
  facing: "NORTH",
};

const transitions: Record<Facing, { LEFT: Facing; RIGHT: Facing }> = {
  NORTH: {
    LEFT: "WEST",
    RIGHT: "EAST",
  },
  EAST: {
    LEFT: "NORTH",
    RIGHT: "SOUTH",
  },
  SOUTH: {
    LEFT: "WEST",
    RIGHT: "EAST",
  },
  WEST: {
    LEFT: "SOUTH",
    RIGHT: "NORTH",
  },
};

export const GridReducer = (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case "MOVE": {
      let nextX = state.x;
      let nextY = state.y;
      if (state.facing === "EAST") {
        nextX = nextX + 1;
      } else if (state.facing === "WEST") {
        nextX = nextX - 1;
      } else if (state.facing === "NORTH") {
        nextY = nextY + 1;
      } else {
        nextY = nextY - 1;
      }
      if (nextX === -1 || nextX === 5) {
        return state;
      } else if (nextY === -1 || nextY === 5) {
        return state;
      }
      return {
        ...state,
        x: nextX,
        y: nextY,
      };
    }
    case "TURN": {
      return {
        ...state,
        facing: transitions[state.facing][action.payload],
      };
    }
    default:
      return state;
  }
};
