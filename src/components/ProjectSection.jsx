const ProjectSection = () => {
    return (
      <section className="relative py-20 px-6 text-center text-gray-300 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5 bg-center bg-cover pointer-events-none" />
  
        <p className="tracking-widest text-sm text-gray-400 mb-6">
          EXPLORE MY PROJECTS
        </p>
  
        <div className="flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mb-2" />
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-900 to-purple-400 text-black font-bold">
            2
          </div>
        </div>
  
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 bg-gradient-to-r from-purple-900 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>
  
        <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
          I'm Antoine Junot! I’ve got 2+ years of web dev experience, mainly focusing on front-end magic with ReactJS. I'm all about embracing new challenges and learning opportunities. Let’s build something awesome together!
        </p>
      </section>
    );
  };
  
  export default ProjectSection;
  