import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EngineeringProcess = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const processAreaRef = useRef(null);
  const processRef = useRef(null);
  const footerRef = useRef(null);

  const energyNodeRef = useRef(null);
  const energyGlowRef = useRef(null);

  // =========================================================
  // PROCESS DATA
  // =========================================================

  const steps = [
    {
      number: '01',
      code: 'SITE / 001',
      title: 'Understand',
      accent: 'the site.',
      description:
        'Site conditions, load requirements, available area, shading, electrical infrastructure and project constraints define the engineering problem.',
      points: [
        'Site conditions',
        'Load requirements',
        'Available area',
        'Shading',
        'Electrical infrastructure',
        'Project constraints',
      ],
      tool: 'SITE DATA',
    },

    {
      number: '02',
      code: 'DESIGN / 002',
      title: 'Engineer',
      accent: 'the system.',
      description:
        'The site data becomes an engineered energy system through electrical calculations, equipment selection and system architecture designed around the project requirements.',
      points: [
        'PV sizing',
        'String configuration',
        'MPPT allocation',
        'Inverter selection',
        'BESS sizing',
        'AC / DC design',
      ],
      tool: 'ENGINEERING',
    },

    {
      number: '03',
      code: 'SIMULATE / 003',
      title: 'Simulate',
      accent: 'the performance.',
      description:
        'The proposed system is modeled and evaluated before implementation to estimate energy yield, identify losses and understand expected performance under site-specific conditions.',
      points: [
        'PVsyst',
        'Energy yield',
        'Losses',
        'Performance ratio',
        'Shading analysis',
      ],
      tool: 'PVSYST',
    },

    {
      number: '04',
      code: 'DOCUMENT / 004',
      title: 'Translate',
      accent: 'design into drawings.',
      description:
        'Engineering calculations are transformed into clear technical documents that can be reviewed, coordinated, procured and executed in the field.',
      points: [
        'AutoCAD',
        'SLDs',
        'String layouts',
        'Cable routing',
        'Earthing layouts',
        'Concrete / pile layouts',
        'Shop drawings',
      ],
      tool: 'AUTOCAD',
    },

    {
      number: '05',
      code: 'COORDINATE / 005',
      title: 'Connect',
      accent: 'engineering to reality.',
      description:
        'Engineering continues beyond the drawing. Technical coordination, procurement support, vendor evaluation, site support and troubleshooting help turn the design into a working system.',
      points: [
        'Technical coordination',
        'Procurement',
        'Vendor evaluation',
        'Site support',
        'Troubleshooting',
      ],
      tool: 'FIELD',
    },

    {
      number: '06',
      code: 'OPTIMIZE / 006',
      title: 'Measure.',
      accent: 'Improve. Repeat.',
      description:
        'Performance data closes the engineering loop. Analysis of energy production, cost and system behavior reveals opportunities for optimization and better design decisions.',
      points: [
        'Performance analysis',
        'Cost optimization',
        'ROI',
        'Data analysis',
        'Design improvement',
      ],
      tool: 'PERFORMANCE',
    },
  ];

  // =========================================================
  // GSAP
  // =========================================================

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const stepElements = Array.from(
        processRef.current?.children || []
      );

      const energyNode = energyNodeRef.current;
      const energyGlow = energyGlowRef.current;
      const processArea = processAreaRef.current;

      // =====================================================
      // INITIAL STATES
      // =====================================================

      gsap.set(headerRef.current, {
        autoAlpha: 0,
        y: 50,
      });

      gsap.set(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top center',
      });

      gsap.set(stepElements, {
        autoAlpha: 0,
        y: 60,
      });

      gsap.set(footerRef.current, {
        autoAlpha: 0,
        y: 30,
      });

      if (energyNode) {
        gsap.set(energyNode, {
          top: '-28px',
        });
      }

      if (energyGlow) {
        gsap.set(energyGlow, {
          top: '-35px',
        });
      }

      // =====================================================
      // HEADER
      // =====================================================

      gsap.to(headerRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      });

      // =====================================================
      // CENTRAL LINE
      // =====================================================

      if (lineRef.current && processArea) {
        gsap.to(lineRef.current, {
          scaleY: 1,
          duration: 1.4,
          ease: 'power3.inOut',

          scrollTrigger: {
            trigger: processArea,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // =====================================================
      // STEP ANIMATIONS
      // =====================================================

      stepElements.forEach((step, index) => {
        const number =
          step.querySelector('.process-number');

        const dot =
          step.querySelector('.process-dot');

        const content =
          step.querySelector('.process-content');

        const arrow =
          step.querySelector('.process-arrow');

        // ---------------------------------------------------
        // STEP
        // ---------------------------------------------------

        gsap.to(step, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: step,
            start: 'top 84%',
            toggleActions:
              'play none none reverse',
          },
        });

        // ---------------------------------------------------
        // NUMBER
        // ---------------------------------------------------

        if (number) {
          gsap.fromTo(
            number,
            {
              opacity: 0.08,
              x: index % 2 === 0 ? -25 : 25,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: step,
                start: 'top 84%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // ---------------------------------------------------
        // DOT
        // ---------------------------------------------------

        if (dot) {
          gsap.fromTo(
            dot,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.55,
              ease: 'back.out(2.2)',

              scrollTrigger: {
                trigger: step,
                start: 'top 84%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // ---------------------------------------------------
        // CONTENT
        // ---------------------------------------------------

        if (content) {
          gsap.fromTo(
            content,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              delay: 0.08,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: step,
                start: 'top 82%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // ---------------------------------------------------
        // ARROW
        // ---------------------------------------------------

        if (arrow) {
          gsap.to(arrow, {
            x: 5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });

      // =====================================================
      // MOVING ENERGY NODE
      // =====================================================

      if (
        processArea &&
        energyNode &&
        energyGlow
      ) {
        // ---------------------------------------------------
        // Node follows scroll
        // ---------------------------------------------------

        gsap.to(energyNode, {
          top: 'calc(100% - 28px)',
          ease: 'none',

          scrollTrigger: {
            trigger: processArea,
            start: 'top 72%',
            end: 'bottom 28%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // ---------------------------------------------------
        // Glow follows node
        // ---------------------------------------------------

        gsap.to(energyGlow, {
          top: 'calc(100% - 35px)',
          ease: 'none',

          scrollTrigger: {
            trigger: processArea,
            start: 'top 72%',
            end: 'bottom 28%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // ---------------------------------------------------
        // Node breathing
        // ---------------------------------------------------

        gsap.to(energyNode, {
          scale: 1.4,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // ---------------------------------------------------
        // Glow breathing
        // ---------------------------------------------------

        gsap.to(energyGlow, {
          scale: 1.2,
          opacity: 0.65,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // =====================================================
      // TECHNICAL GRID
      // =====================================================

      const grid =
        section.querySelector('.process-grid');

      if (grid) {
        gsap.to(grid, {
          y: -40,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // =====================================================
      // FOOTER
      // =====================================================

      gsap.to(footerRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          toggleActions:
            'play none none reverse',
        },
      });

      // =====================================================
      // REFRESH
      // =====================================================

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section
      id="process"
      ref={sectionRef}
      className="
        relative
        mt-28
        overflow-hidden
        bg-[#0B0B09]
        py-28
        text-white
        scroll-mt-24
        md:py-36
        lg:py-44
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-250px]
          top-[25%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-amber-400/[0.035]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-[-250px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-amber-500/[0.025]
          blur-[140px]
        "
      />

      {/* =====================================================
          CINEMATIC GUIDE LINES
      ===================================================== */}

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

      {/* =====================================================
          CONTAINER
      ===================================================== */}

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
        {/* ===================================================
            HEADER
        =================================================== */}

        <div ref={headerRef}>
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                font-mono
                text-sm
                tracking-wider
                text-amber-400
              "
            >
              04
            </span>

            <span
              className="
                h-px
                w-14
                bg-amber-400/50
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/35
              "
            >
              Engineering Process
            </span>

            <span
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/15
                sm:block
              "
            >
              From Site Data to Performance
            </span>
          </div>

          <div
            className="
              mt-10
              grid
              gap-10
              lg:grid-cols-[1fr_0.55fr]
              lg:items-end
            "
          >
            <h2
              className="
                max-w-5xl
                text-5xl
                font-bold
                leading-[0.92]
                tracking-[-0.055em]
                md:text-7xl
                lg:text-[6rem]
              "
            >
              From
              <span className="text-white/35">
                {' '}
                site data
              </span>

              <span className="block">
                to{' '}
                <span className="text-amber-400">
                  performance.
                </span>
              </span>
            </h2>

            <div
              className="
                max-w-md
                lg:pb-2
              "
            >
              <p
                className="
                  text-sm
                  leading-7
                  text-white/40
                  md:text-base
                "
              >
                A structured engineering workflow
                connecting site assessment, system
                design, simulation, documentation,
                coordination and performance
                optimization.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            PROCESS AREA
        =================================================== */}

        <div
          ref={processAreaRef}
          className="
            relative
            mt-24
            md:mt-32
            lg:mt-40
          "
        >
          {/* =================================================
              CENTRAL LINE
          ================================================= */}

          <div
            ref={lineRef}
            className="
              absolute
              bottom-0
              left-[24px]
              top-0
              w-px
              bg-gradient-to-b
              from-amber-400/60
              via-amber-400/20
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* =================================================
              ENERGY GLOW
          ================================================= */}

          <div
            ref={energyGlowRef}
            className="
              pointer-events-none
              absolute
              left-[24px]
              top-[-35px]
              z-10
              h-12
              w-12
              -translate-x-1/2
              rounded-full
              bg-amber-400/20
              blur-xl
              md:left-1/2
            "
          />

          {/* =================================================
              ENERGY NODE
          ================================================= */}

          <div
            ref={energyNodeRef}
            className="
              pointer-events-none
              absolute
              left-[24px]
              top-[-28px]
              z-20
              h-3
              w-3
              -translate-x-1/2
              rounded-full
              bg-amber-300
              shadow-[0_0_25px_rgba(251,191,36,0.9)]
              md:left-1/2
            "
          />

          {/* =================================================
              TECHNICAL GRID
          ================================================= */}

          <div
            className="
              process-grid
              pointer-events-none
              absolute
              right-0
              top-[10%]
              hidden
              h-[500px]
              w-[35%]
              opacity-[0.04]
              bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
              bg-[size:35px_35px]
              lg:block
            "
          />

          {/* =================================================
              PROCESS STEPS
          ================================================= */}

          <div
            ref={processRef}
            className="
              relative
              space-y-20
              md:space-y-28
            "
          >
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className="
                    process-step
                    relative
                    grid
                    gap-8
                    pl-14
                    md:grid-cols-2
                    md:gap-20
                    md:pl-0
                  "
                >
                  {/* =================================================
                      DOT
                  ================================================= */}

                  <div
                    className="
                      process-dot
                      absolute
                      left-[24px]
                      top-2
                      h-3
                      w-3
                      -translate-x-1/2
                      rounded-full
                      border
                      border-amber-400/60
                      bg-[#0B0B09]
                      shadow-[0_0_18px_rgba(245,158,11,0.35)]
                      md:left-1/2
                    "
                  />

                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <div
                    className={`
                      process-number
                      flex
                      items-start
                      ${
                        isEven
                          ? 'md:order-2'
                          : 'md:order-1'
                      }
                    `}
                  >
                    <div className="relative">
                      <span
                        className="
                          block
                          font-mono
                          text-[5rem]
                          font-bold
                          leading-none
                          tracking-[-0.08em]
                          text-white/[0.06]
                          md:text-[7rem]
                        "
                      >
                        {step.number}
                      </span>

                      <span
                        className="
                          absolute
                          left-1
                          top-1
                          font-mono
                          text-[10px]
                          tracking-widest
                          text-amber-400
                        "
                      >
                        {step.code}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className={`
                      process-content
                      ${
                        isEven
                          ? 'md:order-1 md:text-right'
                          : 'md:order-2'
                      }
                    `}
                  >
                    {/* Tool / stage */}

                    <div
                      className={`
                        flex
                        items-center
                        gap-3
                        ${
                          isEven
                            ? 'md:justify-end'
                            : ''
                        }
                      `}
                    >
                      <span
                        className="
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[0.3em]
                          text-white/20
                        "
                      >
                        {step.tool}
                      </span>

                      <span
                        className="
                          h-px
                          w-8
                          bg-amber-400/30
                        "
                      />

                      <span
                        className="
                          process-arrow
                          text-xs
                          text-amber-400
                        "
                      >
                        →
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-semibold
                        leading-[1]
                        tracking-[-0.04em]
                        md:text-4xl
                        lg:text-5xl
                      "
                    >
                      {step.title}

                      <span
                        className="
                          block
                          text-amber-400
                        "
                      >
                        {step.accent}
                      </span>
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-6
                        max-w-xl
                        text-sm
                        leading-7
                        text-white/35
                        md:text-base
                        md:leading-8
                      "
                    >
                      {step.description}
                    </p>

                    {/* Technical Tags */}

                    <div
                      className={`
                        mt-7
                        flex
                        flex-wrap
                        gap-2
                        ${
                          isEven
                            ? 'md:justify-end'
                            : ''
                        }
                      `}
                    >
                      {step.points.map(
                        (point) => (
                          <span
                            key={point}
                            className="
                              rounded-full
                              border
                              border-white/10
                              px-3
                              py-2
                              text-[9px]
                              uppercase
                              tracking-wider
                              text-white/35
                              transition-all
                              duration-300
                              hover:border-amber-400/30
                              hover:text-amber-400
                            "
                          >
                            {point}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        =================================================== */}

        <div
          ref={footerRef}
          className="
            mt-28
            border-t
            border-white/10
            pt-10
            md:mt-40
            md:pt-14
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.75fr_1fr]
              lg:items-end
            "
          >
            {/* Statement */}

            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                Engineering Principle
              </p>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-2xl
                  font-medium
                  leading-tight
                  tracking-[-0.03em]
                  text-white/80
                  md:text-3xl
                "
              >
                Good engineering connects every
                decision — from the first site
                measurement to the final performance
                result.
              </p>
            </div>

            {/* Workflow */}

            <div className="lg:text-right">
              <div
                className="
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                  lg:justify-end
                "
              >
                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  SITE
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  DESIGN
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  SIMULATION
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  DRAWINGS
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  COORDINATION
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-amber-400/60
                  "
                >
                  OPTIMIZATION
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              META
          ================================================= */}

          <div
            className="
              mt-12
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/15
              "
            >
              Engineering Process / Solar Energy
            </span>

            <span
              className="
                font-mono
                text-[8px]
                tracking-widest
                text-amber-400/40
              "
            >
              SOL / 004
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringProcess;