import { useReducer } from "react";
export type State = {
  x: number;
  y: number;
  facing: "NORTH" | "EAST" | "SOUTH" | "WEST";
};
export type MoveAction = {
  type: "MOVE";
};
export type TurnAction = {
  type: "TURN";
};

export type Action = MoveAction | TurnAction;

const GridReducer = <State>(state: State, action: MoveAction | TurnAction) => {
  switch (action.type) {
    case "MOVE": {
      return state;
    }
    default:
      return state;
  }
};
export const useGridReducer = (initialState: State) => {
  return useReducer(
    (state: State, action: Action) => GridReducer(state, action),
    initialState
  );
};
