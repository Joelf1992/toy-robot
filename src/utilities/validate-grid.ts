import { GRID_SIZE } from "../config/grid";

export const validateCoords = (x: number, y: number) => {
  return x < GRID_SIZE && x >= 0 && y < GRID_SIZE && y >= 0;
};
