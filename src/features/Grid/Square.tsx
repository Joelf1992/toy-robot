import { useContext } from "react";
import { GridContext } from "./Grid";
import { SiProbot } from "react-icons/si";

export const Square = ({ x, y }: { x: Number; y: Number }) => {
  const state = useContext(GridContext);

  const isRobotPosition = state.x === x && state.y === y;
  return (
    <div
      key={`${x}-${y}`}
      className="border border-white w-20 h-20 text-sm flex justify-center items-center"
    >
      {isRobotPosition && <SiProbot size={28} />}
    </div>
  );
};
