export const GRID_SIZE = 5;

export const ROWS = Array.from(Array(GRID_SIZE))
  .fill(null)
  .map((v, i) => ({ y: i }))
  .map((y) => ({
    ...y,
    items: Array.from(
      Array(GRID_SIZE)
        .fill(null)
        .map((v, i) => i)
    ),
  }))
  .reverse();
