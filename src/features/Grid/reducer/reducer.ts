import { Facing } from ".";
import { GRID_SIZE } from "../../../config/grid";
import { Action, State } from "./types";

export const defaultState: State = {
  x: 0,
  y: 0,
  facing: "NORTH",
};

const validateCoords = (x: number, y: number) => {
  return x < GRID_SIZE && x >= 0 && y < GRID_SIZE && y >= 0;
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
    LEFT: "EAST",
    RIGHT: "WEST",
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
      if (!validateCoords(nextX, nextY)) {
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
    case "PLACE": {
      if (!validateCoords(action.payload.x, action.payload.y)) {
        return state;
      }
      if (!Object.keys(transitions).includes(action.payload.facing)) {
        return state;
      }
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
