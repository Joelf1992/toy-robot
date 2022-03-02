import { FC } from "react";

export const PrimaryButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <button className="bg-blue-400 rounded-lg px-4 py-2" {...props} />;
};
