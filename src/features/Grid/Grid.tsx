import { createContext, useCallback, useReducer } from "react";
import { PrimaryButton } from "../../components/Button";
import { ROWS, Row } from "../../config/grid";
import { Square } from "./Square";
import { Placement } from "./Placement";
import { DefaultState, GridReducer, State } from "./reducer";
import { validateCoords } from "../../utilities/validate-grid";

export const GridContext = createContext<State>(DefaultState);

const RowView = ({ row }: { row: Row }) => {
  return (
    <>
      {row.items.map((x) => (
        <Square key={`y-${row.y}-x-${x}`} x={x} y={row.y} />
      ))}
    </>
  );
};

export const Grid = () => {
  const [state, dispatch] = useReducer(GridReducer, DefaultState);
  const disabled = !validateCoords(state.x, state.y);

  const onPlace = useCallback(
    (newState: State) => {
      dispatch({ type: "PLACE", payload: newState });
    },
    [dispatch]
  );

  return (
    <GridContext.Provider value={state}>
      <div className="flex flex-col md:flex-row items-center space-x-8">
        <div className="grid grid-cols-5 border border-white">
          {ROWS.map((row) => (
            <RowView key={row.y} row={row} />
          ))}
        </div>
        <div className="mt-3 flex flex-col items-center space-y-3">
          <div className="flex flex-col items-center">
            <div>FACING: {state.facing}</div>
            <div className="flex space-x-3">
              <div>X: {state.x}</div>
              <div>Y: {state.y}</div>
            </div>
          </div>

          <Placement onDone={onPlace} />
          <div className="flex space-x-3">
            <PrimaryButton
              disabled={disabled}
              onClick={() => dispatch({ type: "MOVE" })}
            >
              Move
            </PrimaryButton>
            <PrimaryButton
              disabled={disabled}
              onClick={() => dispatch({ type: "TURN", payload: "LEFT" })}
            >
              Left
            </PrimaryButton>
            <PrimaryButton
              disabled={disabled}
              onClick={() => dispatch({ type: "TURN", payload: "RIGHT" })}
            >
              Right
            </PrimaryButton>
          </div>
        </div>
      </div>
    </GridContext.Provider>
  );
};
