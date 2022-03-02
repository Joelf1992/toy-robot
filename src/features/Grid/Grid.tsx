import { createContext, useReducer } from "react";
import { PrimaryButton } from "../../components/Button";
import { ROWS } from "../../config/grid";
import { Box } from "./Box";
import { Placement } from "./Placement";
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
        <div>FACING: {state.facing}</div>

        <Placement
          onDone={(state) => dispatch({ type: "PLACE", payload: state })}
        />
        <div className="flex space-x-3">
          <PrimaryButton onClick={() => dispatch({ type: "MOVE" })}>
            Move
          </PrimaryButton>
          <PrimaryButton
            onClick={() => dispatch({ type: "TURN", payload: "LEFT" })}
          >
            Left
          </PrimaryButton>
          <PrimaryButton
            onClick={() => dispatch({ type: "TURN", payload: "RIGHT" })}
          >
            Right
          </PrimaryButton>
        </div>
      </div>
    </GridContext.Provider>
  );
};
