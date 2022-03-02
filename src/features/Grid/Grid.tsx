import { createContext, useReducer } from "react";
import { ROWS } from "../../config/grid";
import { Box } from "./Box";
import { defaultState, GridReducer, State } from "./reducer";

export const GridContext = createContext<State>(defaultState);

export const Grid = () => {
  const [state, dispatch] = useReducer(GridReducer, defaultState);

  return (
    <GridContext.Provider value={state}>
      <div className="grid grid-cols-5">
        {ROWS.map((row) =>
          row.items.map((x) => <Box x={x} y={row.y} />).flat()
        )}
      </div>
      <div className="mt-3 flex flex-col space-y-4 ">
        <div className="fle">FACING: {state.facing}</div>
        <div className="flex space-x-3">
          <button
            onClick={() => dispatch({ type: "MOVE" })}
            className="bg-blue-400 rounded-lg px-4 py-2"
          >
            Move
          </button>
          <button
            onClick={() => dispatch({ type: "TURN", payload: "LEFT" })}
            className="bg-blue-400 rounded-lg px-4 py-2"
          >
            Left
          </button>
          <button
            onClick={() => dispatch({ type: "TURN", payload: "RIGHT" })}
            className="bg-blue-400 rounded-lg px-4 py-2"
          >
            Right
          </button>
        </div>
      </div>
    </GridContext.Provider>
  );
};
