import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { State } from "./reducer";

export const Placement = ({ onDone }: { onDone: (state: State) => void }) => {
  const methods = useForm<{ placement: string }>({
    defaultValues: {
      placement: "",
    },
  });

  const { isValid } = methods.formState;
  const handleSubmit = useCallback<SubmitHandler<{ placement: string }>>(
    ({ placement }) => {
      if (!isValid) {
        return null;
      }
      const [x, y, f] = placement.split(",");
      onDone({ x: Number(x), y: Number(y), facing: f as any });
    },
    [isValid, onDone]
  );

  return (
    <form onSubmit={methods.handleSubmit(handleSubmit)}>
      <input
        {...methods.register("placement")}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Place X,Y,F"
      />
    </form>
  );
};
