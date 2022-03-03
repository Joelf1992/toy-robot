export const GRID_SIZE = 5;

export type Row = { y: number; items: Array<number> };

export const ROWS = Array.from(Array(GRID_SIZE))
  .fill(null)
  .map<Row>((_v, i) => ({
    y: i,
    items: Array.from(
      Array(GRID_SIZE)
        .fill(null)
        .map<number>((_v, i) => i)
    ),
  }))
  .reverse();
