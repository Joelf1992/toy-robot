export type Facing = "NORTH" | "EAST" | "SOUTH" | "WEST";

export type State = {
  x: number;
  y: number;
  facing: Facing;
};
export type MoveAction = {
  type: "MOVE";
};
export type TurnAction = {
  type: "TURN";
  payload: "LEFT" | "RIGHT";
};

export type Action = MoveAction | TurnAction;
