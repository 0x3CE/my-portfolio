const HeroSection = () => {
    return (
      <section className="min-h-screen relative bg-black text-white flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-grid opacity-5 bg-center bg-cover pointer-events-none" />
  
        <img src="/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full border-2 border-white mb-6" />
  
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Experienced web developer <br />
          specializing in <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">ReactJS</span>.
        </h1>
  
        <p className="text-gray-400 mt-4 max-w-xl">
          I have a strong foundation in HTML, CSS, and JavaScript. I build interactive and visually appealing websites.
        </p>
  
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition">Contact me</button>
          <button className="bg-white text-black px-6 py-2 rounded-lg shadow-md transition">Download CV</button>
          <a href="#"><img src="/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" /></a>
          <a href="#"><img src="/github-icon.svg" alt="GitHub" className="w-6 h-6" /></a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  