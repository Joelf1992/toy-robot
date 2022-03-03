import { Facing } from ".";
import { GRID_SIZE } from "../../../config/grid";
import { validateCoords } from "../../../utilities/validate-grid";
import { Action, State } from "./types";

/*
  Robot starts off the Grid
*/
export const DefaultState: State = {
  x: -1,
  y: GRID_SIZE,
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
    LEFT: "EAST",
    RIGHT: "WEST",
  },
  WEST: {
    LEFT: "SOUTH",
    RIGHT: "NORTH",
  },
};

export const GridReducer = (state: State = DefaultState, action: Action) => {
  switch (action.type) {
    case "MOVE": {
      let nextX = state.x;
      let nextY = state.y;
      if (state.facing === "EAST") {
        nextX++;
      } else if (state.facing === "WEST") {
        nextX--;
      } else if (state.facing === "NORTH") {
        nextY++;
      } else {
        nextY--;
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
