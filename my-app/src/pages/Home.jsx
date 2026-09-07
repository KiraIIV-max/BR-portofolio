import React from 'react';
import image1 from '../assets/land.png';
import About from './About';
import Projects from './Projects';
import EngineeringProcess from './EngineeringProcess';
import Experience from './Experience';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0B0B09]">

      {/* Hero Section */}
      <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image1}
            alt="Solar panels on a modern home"
            className="w-full h-full object-cover scale-[1.02]"
          />

          {/* Warm cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

          {/* Golden sunlight tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 via-transparent to-[#FBBF24]/10" />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B0B09] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20">

          <div className="max-w-3xl">

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-3
                px-4 py-2 mb-7
                rounded-full
                bg-black/30 backdrop-blur-md
                border border-amber-400/30
                text-amber-300
                text-sm font-medium
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
              </span>

              Solar Power Engineer
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                tracking-tight
                leading-[1.05]
                text-white
                mb-6
              "
            >
              Engineering the
              <span className="block text-amber-400">
                power of the sun.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                max-w-2xl
                text-base
                md:text-lg
                leading-relaxed
                text-white/75
                mb-9
              "
            >
              Designing efficient and reliable solar PV systems
              that turn clean energy into measurable performance
              and a more sustainable future.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">

              <a
                href="#projects"
                className="
                  group
                  inline-flex items-center gap-3
                  px-7 py-3.5
                  rounded-xl
                  bg-amber-400
                  hover:bg-amber-300
                  text-black
                  font-semibold
                  transition-all duration-300
                  shadow-xl shadow-amber-500/20
                "
              >
                Explore Projects

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="
                  inline-flex items-center gap-3
                  px-7 py-3.5
                  rounded-xl
                  bg-white/10
                  hover:bg-white/15
                  backdrop-blur-md
                  border border-white/20
                  text-white
                  font-semibold
                  transition-all duration-300
                "
              >
                Get In Touch
              </a>

            </div>

          </div>

          {/* Engineering Stats */}
          <div
            className="
              mt-16
              grid grid-cols-2 md:grid-cols-4
              max-w-3xl
              border-t border-white/15
              pt-7
            "
          >

            <div className="pr-6">
              <p className="text-2xl md:text-3xl font-bold text-white">
                2.5<span className="text-amber-400">MW</span>
              </p>
              <p className="mt-1 text-xs md:text-sm text-white/50">
                Systems Designed
              </p>
            </div>

            <div className="px-6 border-l border-white/10">
              <p className="text-2xl md:text-3xl font-bold text-white">
                25<span className="text-amber-400">+</span>
              </p>
              <p className="mt-1 text-xs md:text-sm text-white/50">
                Projects
              </p>
            </div>

            <div className="px-6 border-l border-white/10">
              <p className="text-2xl md:text-3xl font-bold text-white">
                98<span className="text-amber-400">%</span>
              </p>
              <p className="mt-1 text-xs md:text-sm text-white/50">
                Design Efficiency
              </p>
            </div>

            <div className="px-6 border-l border-white/10">
              <p className="text-2xl md:text-3xl font-bold text-white">
                4<span className="text-amber-400">+</span>
              </p>
              <p className="mt-1 text-xs md:text-sm text-white/50">
                Years Experience
              </p>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 mb-5">
            Scroll
          </span>

          <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent" />
        </div>
      </section>
      <About />
      <Projects />
      <EngineeringProcess />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;