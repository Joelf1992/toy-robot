import { FC } from "react";

export const PrimaryButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <button
      className="bg-blue-500 rounded-lg px-4 py-2 disabled:bg-gray-400"
      {...props}
    />
  );
};
