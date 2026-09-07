import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  const projects = [
    {
      number: '01',
      category: 'ON-GRID PV SYSTEMS',
      title: 'From Site Data',
      highlight: 'To Solar Performance.',
      description:
        'Designed and prepared engineering documentation for multiple on-grid PV systems, ranging from commercial installations to utility-scale projects.',
      capacity: '17 kW — 2.14 MW',
      role: 'Technical Office Engineer',
      tools: ['PVsyst', 'AutoCAD', 'SketchUp', 'Excel'],
      scope: [
        'System sizing',
        'String configuration',
        'Single Line Diagrams',
        'Wiring layouts',
        'Structural layouts',
        'Technical & financial offers',
      ],
      accent: 'amber',
    },

    {
      number: '02',
      category: 'SOLAR PUMPING SYSTEMS',
      title: 'Engineering Energy',
      highlight: 'Where It Matters.',
      description:
        'Designed solar-powered pumping systems with different power requirements, focusing on system sizing, component selection and practical implementation.',
      capacity: '75 kW — 130 kW',
      role: 'Solar System Design',
      tools: ['PVsyst', 'AutoCAD', 'Excel', 'SketchUp'],
      scope: [
        'Load calculation',
        'PV array sizing',
        'Pump system design',
        'Inverter selection',
        'Cable sizing',
        'Technical documentation',
      ],
      accent: 'amber',
    },

    {
      number: '03',
      category: 'GRADUATION PROJECT',
      title: 'Intelligent PV',
      highlight: 'Cleaner + IoT.',
      description:
        'An intelligent photovoltaic cleaning system developed with IoT integration to improve PV module operation and reduce the impact of dust accumulation.',
      capacity: 'IoT / Solar',
      role: 'Team Leader',
      tools: ['IoT', 'Embedded Systems', 'PCB Design', 'Solar PV'],
      scope: [
        'System concept',
        'Solar energy integration',
        'IoT architecture',
        'Embedded systems',
        'Team leadership',
        'Competition development',
      ],
      achievement: 'National Competition Recognition',
      accent: 'amber',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectItems = projectsRef.current?.children;

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 45,
      });

      gsap.set(projectItems, {
        opacity: 0,
        y: 90,
      });

      gsap.set(footerRef.current, {
        opacity: 0,
        y: 30,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power4.out',
      })
        .to(
          projectItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: 'power4.out',
          },
          '-=0.35'
        )
        .to(
          footerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.3'
        );

      /*
       * Project image / visual reveal
       */
      gsap.utils.toArray('.project-visual').forEach((visual) => {
        gsap.fromTo(
          visual,
          {
            scale: 1.12,
          },
          {
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: visual,
              start: 'top 85%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );
      });

      /*
       * Background project numbers
       */
      gsap.utils.toArray('.project-number-bg').forEach((number) => {
        gsap.fromTo(
          number,
          {
            x: 60,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: number,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      /*
       * Floating technical grid
       */
      gsap.utils.toArray('.project-grid').forEach((grid) => {
        gsap.to(grid, {
          y: -30,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#0B0B09]
        py-28
        text-white
        md:py-36
        lg:py-44
        scroll-mt-24
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-250px]
          top-[15%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-amber-500/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-250px]
          bottom-[10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-amber-400/[0.035]
          blur-[150px]
        "
      />

      {/* Cinematic Vertical Lines */}

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-0
          hidden
          h-full
          w-px
          bg-white/[0.035]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-0
          hidden
          h-full
          w-px
          bg-white/[0.035]
          lg:block
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          md:px-12
          lg:px-16
        "
      >
        {/* =========================
            HEADER
        ========================== */}

        <div ref={headerRef} className="mb-20 md:mb-28">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm tracking-wider text-amber-400">
              02
            </span>

            <span className="h-px w-14 bg-amber-400/50" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Selected Projects
            </span>
          </div>

          <div
            className="
              mt-10
              grid
              gap-8
              lg:grid-cols-[1fr_0.65fr]
              lg:items-end
            "
          >
            <h2
              className="
                max-w-4xl
                text-5xl
                font-bold
                leading-[0.92]
                tracking-[-0.055em]
                md:text-7xl
                lg:text-[6.2rem]
              "
            >
              Engineering
              <span className="block text-amber-400">
                in practice.
              </span>
            </h2>

            <div className="max-w-md lg:pb-2">
              <p className="text-sm leading-7 text-white/40 md:text-base">
                A selection of solar energy and electrical engineering
                work — from PV system design and technical documentation
                to pumping systems and intelligent solar solutions.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            PROJECTS
        ========================== */}

        <div ref={projectsRef} className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className="
                group
                relative
                border-t
                border-white/10
                pt-7
              "
            >
              {/* Background Number */}

              <div
                className="
                  project-number-bg
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  hidden
                  select-none
                  font-mono
                  text-[10rem]
                  font-bold
                  leading-none
                  tracking-[-0.08em]
                  text-white/[0.025]
                  md:block
                  lg:text-[15rem]
                "
              >
                {project.number}
              </div>

              {/* Top Metadata */}

              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-amber-400">
                    {project.number}
                  </span>

                  <span className="h-px w-8 bg-white/10" />

                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                    {project.category}
                  </span>
                </div>

                <span className="hidden font-mono text-[9px] tracking-widest text-white/15 sm:block">
                  PROJECT / {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Main Grid */}

              <div
                className="
                  grid
                  gap-12
                  lg:grid-cols-[1.1fr_0.9fr]
                  lg:gap-20
                "
              >
                {/* =========================
                    VISUAL
                ========================== */}

                <div
                  className="
                    project-visual
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-[#141410]
                  "
                >
                  {/* Grid */}

                  <div
                    className="
                      project-grid
                      absolute
                      inset-[-5%]
                      opacity-[0.08]
                      bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                      bg-[size:45px_45px]
                    "
                  />

                  {/* Center Technical Visual */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    {index === 0 && (
                      <div className="relative h-[65%] w-[70%]">
                        {/* Solar Array */}

                        <div className="absolute inset-0 grid grid-cols-6 gap-2 rotate-[-8deg]">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div
                              key={i}
                              className="
                                relative
                                overflow-hidden
                                border
                                border-amber-400/20
                                bg-[#111714]
                              "
                            >
                              <div
                                className="
                                  absolute
                                  inset-0
                                  bg-gradient-to-br
                                  from-amber-400/[0.16]
                                  via-transparent
                                  to-transparent
                                "
                              />

                              <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.06]" />

                              <div className="absolute top-1/2 left-0 h-px w-full bg-white/[0.06]" />
                            </div>
                          ))}
                        </div>

                        {/* Sun */}

                        <div
                          className="
                            absolute
                            -right-5
                            -top-5
                            h-16
                            w-16
                            rounded-full
                            bg-amber-400/20
                            blur-2xl
                          "
                        />

                        <div
                          className="
                            absolute
                            -right-1
                            -top-1
                            h-8
                            w-8
                            rounded-full
                            bg-amber-400
                            shadow-[0_0_50px_rgba(245,158,11,0.5)]
                          "
                        />
                      </div>
                    )}

                    {index === 1 && (
                      <div className="relative flex h-[65%] w-[75%] items-center justify-center">
                        {/* Pumping System */}

                        <div
                          className="
                            absolute
                            left-[12%]
                            top-1/2
                            h-24
                            w-24
                            -translate-y-1/2
                            rounded-full
                            border
                            border-amber-400/30
                          "
                        />

                        <div
                          className="
                            absolute
                            left-[15%]
                            top-1/2
                            h-16
                            w-16
                            -translate-y-1/2
                            rounded-full
                            bg-amber-400/10
                          "
                        />

                        <div
                          className="
                            absolute
                            left-[23%]
                            top-1/2
                            h-1
                            w-[45%]
                            bg-amber-400/40
                          "
                        />

                        <div
                          className="
                            absolute
                            right-[10%]
                            top-1/2
                            h-28
                            w-20
                            -translate-y-1/2
                            border
                            border-white/10
                            bg-white/[0.02]
                          "
                        />

                        <div
                          className="
                            absolute
                            right-[17%]
                            top-[35%]
                            h-3
                            w-3
                            rounded-full
                            bg-amber-400
                            shadow-[0_0_25px_rgba(245,158,11,0.7)]
                          "
                        />

                        {/* Flow Lines */}

                        <div className="absolute left-[18%] top-[28%] h-px w-[55%] bg-amber-400/10" />
                        <div className="absolute left-[18%] top-[72%] h-px w-[55%] bg-amber-400/10" />
                      </div>
                    )}

                    {index === 2 && (
                      <div className="relative h-[72%] w-[72%]">
                        {/* Intelligent Cleaner / IoT */}

                        <div
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            h-28
                            w-44
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-xl
                            border
                            border-amber-400/30
                            bg-amber-400/[0.04]
                          "
                        />

                        <div
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            h-16
                            w-28
                            -translate-x-1/2
                            -translate-y-1/2
                            border
                            border-white/10
                            bg-white/[0.02]
                          "
                        />

                        {/* IoT Nodes */}

                        <div className="absolute left-[8%] top-[15%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.7)]" />

                        <div className="absolute right-[8%] top-[20%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.7)]" />

                        <div className="absolute bottom-[15%] left-[20%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.7)]" />

                        <div className="absolute bottom-[12%] right-[20%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.7)]" />

                        {/* Connection Lines */}

                        <div className="absolute left-[10%] top-[17%] h-px w-[80%] rotate-[13deg] bg-amber-400/15" />

                        <div className="absolute bottom-[17%] left-[15%] h-px w-[70%] rotate-[-12deg] bg-amber-400/15" />

                        <div className="absolute left-[10%] top-[20%] h-[60%] w-px rotate-[-25deg] bg-amber-400/10" />

                        {/* Core */}

                        <div
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            h-8
                            w-8
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-amber-400
                            shadow-[0_0_45px_rgba(245,158,11,0.5)]
                          "
                        />
                      </div>
                    )}
                  </div>

                  {/* Visual Label */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/20
                    "
                  >
                    {index === 0 && 'PV ARRAY / GRID / SYSTEM'}
                    {index === 1 && 'PV / PUMP / ENERGY FLOW'}
                    {index === 2 && 'PV / IOT / INTELLIGENT SYSTEM'}
                  </div>

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      font-mono
                      text-[8px]
                      tracking-widest
                      text-amber-400/40
                    "
                  >
                    SOL / {project.number}
                  </div>
                </div>

                {/* =========================
                    PROJECT CONTENT
                ========================== */}

                <div className="flex flex-col justify-between">
                  <div>
                    <h3
                      className="
                        max-w-xl
                        text-4xl
                        font-bold
                        leading-[0.98]
                        tracking-[-0.04em]
                        md:text-5xl
                        lg:text-6xl
                      "
                    >
                      {project.title}

                      <span className="block text-amber-400">
                        {project.highlight}
                      </span>
                    </h3>

                    <p className="mt-7 max-w-lg text-sm leading-7 text-white/40 md:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Meta */}

                  <div className="mt-12">
                    <div className="grid grid-cols-2 border-y border-white/10">
                      <div className="py-5">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                          Capacity
                        </p>

                        <p className="mt-2 font-mono text-sm text-white/80">
                          {project.capacity}
                        </p>
                      </div>

                      <div className="border-l border-white/10 py-5 pl-5">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                          Role
                        </p>

                        <p className="mt-2 text-sm text-white/70">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    {/* Scope */}

                    <div className="mt-7">
                      <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                        Engineering Scope
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.scope.map((item) => (
                          <span
                            key={item}
                            className="
                              rounded-full
                              border
                              border-white/10
                              px-3
                              py-2
                              text-[10px]
                              text-white/45
                              transition-all
                              duration-300
                              group-hover:border-amber-400/20
                              group-hover:text-white/65
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                        Tools
                      </span>

                      {project.tools.map((tool, toolIndex) => (
                        <React.Fragment key={tool}>
                          {toolIndex > 0 && (
                            <span className="text-white/10">/</span>
                          )}

                          <span className="font-mono text-[10px] text-amber-400/60">
                            {tool}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Achievement */}

                    {project.achievement && (
                      <div className="mt-8 border-l border-amber-400/30 pl-4">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                          Recognition
                        </p>

                        <p className="mt-2 text-sm text-amber-400/80">
                          {project.achievement}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            PROJECT RANGE
        ========================== */}

        <div
          ref={footerRef}
          className="
            mt-24
            border-t
            border-white/10
            pt-10
            md:mt-32
            md:pt-12
          "
        >
          <div
            className="
              grid
              gap-10
              md:grid-cols-[0.7fr_1fr]
              md:items-end
            "
          >
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                Project Range
              </p>

              <div className="mt-3 flex items-end gap-3">
                <span className="font-mono text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                  17 kW
                </span>

                <span className="pb-2 text-xl text-amber-400">
                  →
                </span>

                <span className="font-mono text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                  2.14 MW
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
              {[
                'On-Grid',
                'Off-Grid',
                'Hybrid',
                'Pumping',
                'Utility Scale',
              ].map((item) => (
                <span
                  key={item}
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/15">
              Solar Engineering / Selected Work
            </span>

            <span className="font-mono text-[8px] tracking-widest text-amber-400/40">
              SOL / 002
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;