import { useContext } from "react";
import { GridContext } from "./Grid";
import { SiProbot } from "react-icons/si";

export const Square = ({ x, y }: { x: number; y: number }) => {
  const state = useContext(GridContext);

  const isRobotPosition = state.x === x && state.y === y;
  return (
    <div
      key={`${x}-${y}`}
      className="border bg-blue-500 border-white w-16 h-16 text-sm flex justify-center items-center"
    >
      {isRobotPosition && <SiProbot size={28} />}
    </div>
  );
};
