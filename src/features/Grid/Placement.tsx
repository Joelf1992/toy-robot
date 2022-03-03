import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { State } from "./reducer";

export const Placement = ({ onDone }: { onDone: (state: State) => void }) => {
  const [placement, setPlacement] = useState<string>("");
  const debouncedPlacement = useDebounce<string>(placement, 500);

  useEffect(() => {
    if (debouncedPlacement) {
      const [x, y, facing] = debouncedPlacement.slice().split(",");
      if (x && y && facing) {
        onDone({
          x: Number(x),
          y: Number(y),
          facing: facing.toUpperCase() as any,
        });
      }
    }
  }, [debouncedPlacement, onDone]);

  return (
    <input
      onChange={(e) => setPlacement(e.target.value)}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="X,Y,F"
    />
  );
};
