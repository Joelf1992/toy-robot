import { createContext, useReducer } from "react";
import { PrimaryButton } from "../../components/Button";
import { ROWS, Row } from "../../config/grid";
import { Square } from "./Square";
import { Placement } from "./Placement";
import { defaultState, GridReducer, State } from "./reducer";

export const GridContext = createContext<State>(defaultState);

const RowView = ({ row }: { row: Row }) => {
  return (
    <>
      {row.items.map((x) => (
        <Square x={x} y={row.y} />
      ))}
    </>
  );
};

export const Grid = () => {
  const [state, dispatch] = useReducer(GridReducer, defaultState);

  return (
    <GridContext.Provider value={state}>
      <div className="grid grid-cols-5">
        {ROWS.map((row) => (
          <RowView key={row.y} row={row} />
        ))}
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
