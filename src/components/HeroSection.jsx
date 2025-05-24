const HeroSection = () => {
    return (
      <section className="min-h-screen relative text-white flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-grid opacity-5 bg-center bg-cover pointer-events-none" />
  
        <img src="../../../public/profil.png" alt="Profile" className="w-24 h-24 rounded-full border-2 border-white mb-6" />
  
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Trailer & Data <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Engineer</span> <br />
        </h1>
  
        <p className="text-gray-400 mt-4 max-w-xl">
          I have a strong foundation in Python, SQL, Power BI and Machine Learning stack.
        </p>
  
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition">Contact me</button>
          <button className="bg-white text-black px-6 py-2 rounded-lg shadow-md transition">Download CV</button>
          <a href="https://github.com/0x3CE" target="_blank"><i className='bx bxl-github bx-md' style={{ color: '#ffffff' }}  ></i></a>
          <a href="https://www.linkedin.com/in/antoine-junot/" target="_blank"><i className='bx bxl-linkedin bx-md' style={{ color: '#ffffff' }} ></i></a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  