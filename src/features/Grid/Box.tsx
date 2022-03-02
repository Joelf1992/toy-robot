export const Box = ({ x, y }: { x: number; y: number }) => {
  return (
    <div key={`${x}-${y}`} className="border border-white w-20 h-20 text-sm">
      x: {x} y: {y}
    </div>
  );
};
