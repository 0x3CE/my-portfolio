import { useEffect, useState } from "react";

const TileTransition = ({ show, reverse = false, onComplete }) => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const rows = 6;
    const cols = 10;
    const tileArray = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const i = row * cols + col;
        const delay = reverse
          ? ((rows - 1 - row) + col) * 30 // bottom to top
          : (row + col) * 30; // top to bottom

        tileArray.push({
          id: i,
          delay,
        });
      }
    }

    setTiles(tileArray);

    const maxDelay = Math.max(...tileArray.map((t) => t.delay));
    const timeout = setTimeout(() => {
      onComplete?.();
    }, maxDelay + 500);

    return () => clearTimeout(timeout);
  }, [show, reverse]);

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none">
      <div className="grid grid-cols-10 grid-rows-6 w-full h-full">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className={`bg-black transition-all duration-300 ${
              show ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              transitionDelay: `${tile.delay}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TileTransition;
