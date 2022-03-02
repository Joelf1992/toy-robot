import { ROWS } from "../../config/grid";
import { Box } from "./Box";

export const Grid = () => {
  return (
    <div className="grid grid-cols-5">
      {ROWS.map((row) => row.items.map((x) => <Box x={x} y={row.y} />).flat())}
    </div>
  );
};
