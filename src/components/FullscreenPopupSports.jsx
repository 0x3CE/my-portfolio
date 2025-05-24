import { useState, useRef, useEffect } from "react";
import ParisImg from "../../public/Paris.png";
import ViaducImg from "../../public/Viaduc.png";

const FullscreenPopupSports = ({ onClose }) => {
  const slides = [
    {
      title: "Marathon de Paris",
      date: "Avril 2022",
      description:
        "Un des plus beaux marathons au monde, mais une des prépas les plus chaotiques. Seulement 4 semaines de vrai entraînement, et une blessure juste avant... Pourtant, l'envie de se surpasser et la magie de l'événement ont rendu l'expérience inoubliable.",
      image: ParisImg,
    },
    {
      title: "Course du Viaduc de Millau",
      date: "Mai 2022",
      description: (
        <>
        "Une prépa un peu moins catastrophique mais encore entaché par une tendinite sur la face 
        externe du tibia... A ce moment là le renforcement musculaire je ne connais pas. 
        Il fait <span className="font-bold mt-4 bg-gradient-to-r from-purple-900 to-purple-400 bg-clip-text text-transparent">super chaud </span> 
        ce jour là. D'ailleurs beaucoup de personne ont du abandonner à cause de la chaleur. Le 
        début de course se déroule très bien, je suis avec Rémi et Marty. Arrive la première côte. 
        Avec Marty on se sent pousser des ailes. On y va, on double, on court, on ne marche pas. Rémi 
        est distancé... Sur le viaduc, arrive la longue montée en pente douce qui parait interminable. 
        Baptiste me lache et je suis avec son frère. Arrive le moment de descendre. Tout va bien mais 
        je ressens quand même des difficultés musculaire. et le moment fatidique arrive. Je commence 
        à cramper. Je dois m'arrêter. Et là miracle, je vois rémi qui me double. 
        J'essaie de le suivre mais mes crampes sont beacoup trop intense. Je réussi à repartir quand 
        je vois un ancien me doubler. Au final 2H17. <br />
        Pas encore ouf mais on s'améliore.",
        </>
      ),
      image: ViaducImg,
    },
    {
      title: "Marathon du Mont-Blanc",
      date: "Juin 2022",
      description:
        "Un parcours exigeant en pleine nature alpine. Rochers, neige, vues à couper le souffle. Le corps souffre, mais la tête plane.",
      image:
        "https://www.montblancmarathon.net/sites/default/files/styles/slider_home_1920x1080/public/2023-07/MARATHON-MONTBLANC-22_0066.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef();

  // Handle manual scroll to update index
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const newIndex = Math.round(container.scrollLeft / window.innerWidth);
      setIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click-based navigation
  const goTo = (i) => {
    if (i >= 0 && i < slides.length) {
      containerRef.current.scrollTo({
        left: i * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-hidden flex flex-col">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-white text-black rounded-full w-10 h-10 text-xl flex items-center justify-center shadow-md hover:bg-gray-100 transition"
        aria-label="Fermer"
      >
        ✕
      </button>

      {/* Slides Container */}
      <div
        ref={containerRef}
        className="flex flex-1 overflow-x-auto snap-x snap-mandatory scroll-smooth"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-screen h-full flex-shrink-0 snap-center flex items-center justify-center relative px-6"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 object-cover w-full h-full opacity-90 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 z-0" />

            {/* Slide Content */}
            <div className="z-10 max-w-3xl text-center px-4">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                {slide.title}
              </h2>
              <p className="text-gray-400 text-md mb-6">{slide.date}</p>
              <p className="md:text-xl text-gray-200 leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation + Indicators */}
      <div className="absolute bottom-8 w-full flex items-center justify-center gap-6 z-20">
        <button
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className={`text-white text-2xl p-2 hover:text-gray-300 ${
            index === 0 && "opacity-30 cursor-default"
          }`}
        >
          ◀
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-white" : "bg-gray-600"
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(index + 1)}
          disabled={index === slides.length - 1}
          className={`text-white text-2xl p-2 hover:text-gray-300 ${
            index === slides.length - 1 && "opacity-30 cursor-default"
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default FullscreenPopupSports;
