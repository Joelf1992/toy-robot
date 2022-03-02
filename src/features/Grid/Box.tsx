import { useContext } from "react";
import { GridContext } from "./Grid";

export const Box = ({ x, y }: { x: number; y: number }) => {
  const value = useContext(GridContext);

  const isCurrent = value.x === x && value.y === y;
  return (
    <div
      key={`${x}-${y}`}
      className="border border-white w-28 h-28 text-sm flex flex-col space-y-3"
    >
      <div>x: {x}</div> <div>y: {y} </div>
      {isCurrent && <div>current</div>}
    </div>
  );
};
