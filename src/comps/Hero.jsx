import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden 
       bg-cover bg-center"
    >
      <div className="abstract-circle"></div>
      <div className="abstract-circle"></div>

      <h1 className="mb-4 animate-[fadeIn_1s_ease-out] text-white drop-shadow-lg">
        MAHE Innovation Cell
      </h1>

      <p className="text-[clamp(1.2rem,3vw,1.8rem)] font-light opacity-80 mb-4 animate-[fadeIn_1.2s_ease-out] text-white drop-shadow">
        Empowering student innovators. Building future-ready solutions.
      </p>

      <p className="text-[clamp(1rem,2vw,1.2rem)] font-normal opacity-60 animate-[fadeIn_1.4s_ease-out] text-white drop-shadow">
        No idea is a bad idea. Reach us.
      </p>
    </section>
  );
};

export default Hero;
