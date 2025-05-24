import { useState } from "react";
import TileTransition from "./TileTransition";
import FullscreenPopupSports from "./FullscreenPopupSports";

const SportSection = () => {
  const [open, setOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const openWithTransition = () => {
    setTransitioning(true);
    setShowPopup(false);
    setTimeout(() => {
      setOpen(true);
    }, 50);
  };

  const closeWithTransition = () => {
    setTransitioning(true);
    setShowPopup(false);
    setTimeout(() => {
      setOpen(false);
    }, 50);
  };

  return (
    <section className="relative py-20 px-6 text-center text-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 bg-center bg-cover pointer-events-none" />

      <p className="tracking-widest text-sm text-gray-400 mb-6">
        EXPLORE MY ACHIEVEMENTS IN TRAIL
      </p>

      <div className="flex flex-col items-center">
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mb-2" />
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-900 to-green-400 text-black font-bold">
          3
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold mt-4 bg-gradient-to-r from-green-900 to-green-400 bg-clip-text text-transparent">
        Trail running
      </h2>

      <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed">test</p>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => {
            openWithTransition();
            setTimeout(() => {
              setShowPopup(true);
              setTransitioning(false);
            }, 900);
          }}
          className="text-3xl bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-gray-100 transition"
        >
          +
        </button>
      </div>

      {transitioning && <TileTransition show={open} reverse={!open} />}
      {showPopup && open && (
        <FullscreenPopupSports
          onClose={() => {
            closeWithTransition();
            setTimeout(() => {
              setShowPopup(false);
              setTransitioning(false);
            }, 900);
          }}
        />
      )}
    </section>
  );
};

export default SportSection;
