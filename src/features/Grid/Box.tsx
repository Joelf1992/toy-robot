import { useContext } from "react";
import { GridContext } from "./Grid";
import { SiProbot } from "react-icons/si";

export const Box = ({ x, y }: { x: number; y: number }) => {
  const value = useContext(GridContext);

  const isCurrent = value.x === x && value.y === y;
  return (
    <div
      key={`${x}-${y}`}
      className="border border-white w-20 h-20 text-sm flex justify-center items-center"
    >
      {isCurrent && <SiProbot size={28} />}
    </div>
  );
};
