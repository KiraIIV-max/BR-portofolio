import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  // =========================================================
  // PROJECT DATA
  // =========================================================

  const projects = [
    {
      number: '01',
      category: 'PV SYSTEM DESIGN PORTFOLIO',
      title: 'PV Systems',
      highlight: 'From 17 kW to 2.14 MW.',
      description:
        'A portfolio of real photovoltaic engineering work across residential, commercial, pumping, utility-scale, on-grid, off-grid and hybrid applications. The work spans system design, electrical calculations, engineering documentation and technical proposals.',
      capacity: '17 kW — 2.14 MW',
      role: 'PV Design / Technical Office',
      tools: ['PVsyst', 'AutoCAD', 'SketchUp', 'Excel'],
      scope: [
        'PV array sizing',
        'String configuration',
        'MPPT allocation',
        'Inverter selection',
        'AC/DC design',
        'Cable sizing',
        'SLDs',
        'General layouts',
        'String layouts',
        'Concrete / pile layouts',
        'Technical proposals',
      ],
      type: 'pv',
    },

    {
      number: '02',
      category: 'HYBRID ENERGY SYSTEMS',
      title: 'Hybrid PV +',
      highlight: 'BESS Systems.',
      description:
        'Designed hybrid PV+BESS configurations with a focus on system architecture, battery sizing, PCS selection and practical load-management strategies for energy storage applications.',
      capacity: 'PV + BESS',
      role: 'Hybrid System Design',
      tools: ['PVsyst', 'AutoCAD', 'Excel'],
      scope: [
        'AC-Coupled',
        'DC-Coupled',
        'BESS sizing',
        'PCS selection',
        'System architecture',
        'Load management',
        'Energy flow analysis',
      ],
      type: 'bess',
    },

    {
      number: '03',
      category: 'SOLAR PUMPING SYSTEMS',
      title: 'Solar Pumping',
      highlight: 'Engineered for Flow.',
      description:
        'Designed solar-powered pumping systems by combining load assessment, PV sizing, pump selection, inverter selection, cable sizing and simulation to develop practical pumping solutions.',
      capacity: '75 kW — 130 kW',
      role: 'Solar System Design',
      tools: ['PVsyst', 'AutoCAD', 'Excel', 'SketchUp'],
      scope: [
        'Load assessment',
        'PV sizing',
        'Pump selection',
        'Inverter selection',
        'Cable sizing',
        'Simulation',
        'Technical studies',
      ],
      type: 'pumping',
    },

    {
      number: '04',
      category: 'GRADUATION PROJECT',
      title: 'Intelligent PV',
      highlight: 'Cleaner.',
      description:
        'An intelligent photovoltaic cleaning system combining solar power, IoT monitoring and embedded control to reduce dust accumulation and improve PV module operation. Developed as a multidisciplinary electrical, control and mechanical system.',
      capacity: 'IoT / Automation',
      role: 'Team Leader',
      tools: ['Arduino', 'IoT', 'Embedded Systems', 'DC Motors'],
      scope: [
        'Arduino control architecture',
        'IoT monitoring',
        'DC motors',
        'Servo actuators',
        'Solenoid valves',
        'Water circulation',
        'Filtration',
        'Pumping',
        'System integration',
      ],
      achievement: 'National Competition Recognition',
      type: 'cleaner',
    },

    {
      number: '05',
      category: 'GRADUATION PROJECT',
      title: 'Solar Collector',
      highlight: '& Dryer Optimization.',
      description:
        'A solar thermal engineering project focused on collector and agricultural drying performance, combining thermal monitoring, environmental measurements, airflow control and iterative system optimization.',
      capacity: 'Solar Thermal',
      role: 'System Development',
      tools: ['MATLAB', 'Arduino', 'Sensors', 'Excel'],
      scope: [
        'Spherical solar collector',
        'Agricultural drying',
        'Thermal monitoring',
        'Temperature measurement',
        'Humidity measurement',
        'Airflow system',
        'Performance evaluation',
        'Iterative optimization',
      ],
      type: 'thermal',
    },
  ];

  // =========================================================
  // GSAP ANIMATIONS
  // =========================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectItems = projectsRef.current?.children;

      // -------------------------------------------------------
      // INITIAL STATES
      // -------------------------------------------------------

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

      // -------------------------------------------------------
      // HEADER + PROJECT ENTRANCE
      // -------------------------------------------------------

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
      }).to(
        projectItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: 'power4.out',
        },
        '-=0.35'
      ).to(
        footerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.3'
      );

      // -------------------------------------------------------
      // PROJECT VISUAL PARALLAX
      // -------------------------------------------------------

      gsap.utils.toArray('.project-visual').forEach((visual) => {
        gsap.fromTo(
          visual,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 1.5,
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

      // -------------------------------------------------------
      // BACKGROUND PROJECT NUMBERS
      // -------------------------------------------------------

      gsap.utils
        .toArray('.project-number-bg')
        .forEach((number) => {
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
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        });

      // -------------------------------------------------------
      // FLOATING TECHNICAL GRID
      // -------------------------------------------------------

      gsap.utils
        .toArray('.project-grid')
        .forEach((grid) => {
          gsap.to(grid, {
            y: -25,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });

      // -------------------------------------------------------
      // ENERGY FLOW ANIMATION
      // -------------------------------------------------------

      gsap.utils
        .toArray('.energy-flow')
        .forEach((flow) => {
          gsap.to(flow, {
            x: '18%',
            duration: 2,
            repeat: -1,
            ease: 'none',
          });
        });

      // -------------------------------------------------------
      // BESS PULSE
      // -------------------------------------------------------

      gsap.utils
        .toArray('.bess-pulse')
        .forEach((pulse) => {
          gsap.to(pulse, {
            opacity: 0.35,
            scale: 1.08,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });

      // -------------------------------------------------------
      // CLEANER SENSOR PULSE
      // -------------------------------------------------------

      gsap.utils
        .toArray('.sensor-node')
        .forEach((node, index) => {
          gsap.to(node, {
            opacity: 0.3,
            scale: 0.8,
            duration: 1.4,
            delay: index * 0.15,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // =========================================================
  // VISUAL COMPONENT
  // =========================================================

  const renderProjectVisual = (project) => {
    // =======================================================
    // 01 — PV SYSTEMS
    // =======================================================

    if (project.type === 'pv') {
      return (
        <div className="relative h-[65%] w-[72%]">
          {/* Solar array */}

          <div className="absolute inset-0 rotate-[-8deg]">
            <div className="grid h-full grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="
                    relative
                    overflow-hidden
                    border
                    border-amber-400/20
                    bg-[#101613]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-amber-400/[0.14]
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-full
                      w-px
                      bg-white/[0.06]
                    "
                  />

                  <div
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-px
                      w-full
                      bg-white/[0.06]
                    "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sun */}

          <div
            className="
              absolute
              -right-5
              -top-5
              h-20
              w-20
              rounded-full
              bg-amber-400/15
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
              shadow-[0_0_55px_rgba(245,158,11,0.5)]
            "
          />

          {/* Technical lines */}

          <div
            className="
              absolute
              bottom-[-20px]
              left-[10%]
              h-px
              w-[80%]
              bg-amber-400/20
            "
          />

          <div
            className="
              absolute
              bottom-[-35px]
              left-[25%]
              h-px
              w-[55%]
              bg-white/10
            "
          />
        </div>
      );
    }

    // =======================================================
    // 02 — HYBRID PV + BESS
    // =======================================================

    if (project.type === 'bess') {
      return (
        <div className="relative h-[75%] w-[80%]">
          {/* PV block */}

          <div
            className="
              absolute
              left-[3%]
              top-[24%]
              h-[34%]
              w-[27%]
              border
              border-amber-400/30
              bg-amber-400/[0.04]
            "
          >
            <div className="grid h-full grid-cols-4 gap-1 p-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                  "
                />
              ))}
            </div>
          </div>

          {/* PCS */}

          <div
            className="
              absolute
              left-1/2
              top-[37%]
              flex
              h-[25%]
              w-[22%]
              -translate-x-1/2
              items-center
              justify-center
              border
              border-white/15
              bg-white/[0.025]
            "
          >
            <span
              className="
                font-mono
                text-[9px]
                tracking-widest
                text-white/40
              "
            >
              PCS
            </span>
          </div>

          {/* BESS */}

          <div
            className="
              bess-pulse
              absolute
              right-[3%]
              top-[21%]
              h-[40%]
              w-[28%]
              border
              border-amber-400/30
              bg-amber-400/[0.05]
            "
          >
            <div className="flex h-full flex-col justify-center gap-1 p-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="
                    h-1
                    w-full
                    rounded-full
                    bg-amber-400/30
                  "
                />
              ))}

              <span
                className="
                  mt-2
                  text-center
                  font-mono
                  text-[8px]
                  tracking-widest
                  text-amber-400/60
                "
              >
                BESS
              </span>
            </div>
          </div>

          {/* DC / AC lines */}

          <div
            className="
              absolute
              left-[29%]
              top-[41%]
              h-px
              w-[21%]
              bg-amber-400/40
            "
          />

          <div
            className="
              absolute
              left-[61%]
              top-[41%]
              h-px
              w-[12%]
              bg-amber-400/40
            "
          />

          {/* Flow animation */}

          <div
            className="
              energy-flow
              absolute
              left-[31%]
              top-[39.5%]
              h-1
              w-2
              rounded-full
              bg-amber-300
              shadow-[0_0_15px_rgba(251,191,36,0.7)]
            "
          />

          {/* Microgrid */}

          <div
            className="
              absolute
              bottom-[2%]
              left-[18%]
              h-px
              w-[64%]
              bg-white/10
            "
          />

          <div
            className="
              absolute
              bottom-[-2%]
              left-1/2
              -translate-x-1/2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            MICROGRID / LOAD
          </div>
        </div>
      );
    }

    // =======================================================
    // 03 — PUMPING
    // =======================================================

    if (project.type === 'pumping') {
      return (
        <div className="relative h-[70%] w-[80%]">
          {/* Pump */}

          <div
            className="
              absolute
              left-[7%]
              top-1/2
              h-28
              w-28
              -translate-y-1/2
              rounded-full
              border
              border-amber-400/30
            "
          />

          <div
            className="
              absolute
              left-[13%]
              top-1/2
              h-16
              w-16
              -translate-y-1/2
              rounded-full
              bg-amber-400/[0.08]
            "
          />

          <div
            className="
              absolute
              left-[28%]
              top-[46%]
              h-1
              w-[33%]
              bg-amber-400/35
            "
          />

          {/* Water flow */}

          <div
            className="
              energy-flow
              absolute
              left-[30%]
              top-[43%]
              h-2
              w-3
              rounded-full
              bg-amber-300
              shadow-[0_0_15px_rgba(251,191,36,0.7)]
            "
          />

          {/* Inverter */}

          <div
            className="
              absolute
              right-[25%]
              top-[31%]
              h-[38%]
              w-[20%]
              border
              border-white/10
              bg-white/[0.02]
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-amber-400
                shadow-[0_0_25px_rgba(245,158,11,0.7)]
              "
            />
          </div>

          {/* Reservoir */}

          <div
            className="
              absolute
              bottom-[5%]
              right-[4%]
              h-[22%]
              w-[28%]
              overflow-hidden
              border
              border-blue-200/10
              bg-blue-300/[0.025]
            "
          >
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[45%]
                w-full
                bg-amber-300/[0.08]
              "
            />
          </div>

          {/* Flow direction */}

          <div
            className="
              absolute
              bottom-[28%]
              left-[14%]
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/20
            "
          >
            WATER FLOW
          </div>
        </div>
      );
    }

    // =======================================================
    // 04 — INTELLIGENT PV CLEANER
    // =======================================================

    if (project.type === 'cleaner') {
      return (
        <div className="relative h-[74%] w-[74%]">
          {/* Main PV panel */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[40%]
              w-[58%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-lg
              border
              border-amber-400/25
              bg-[#101614]
            "
          >
            <div className="grid h-full grid-cols-5 gap-1 p-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                  "
                />
              ))}
            </div>
          </div>

          {/* Cleaner rail */}

          <div
            className="
              absolute
              left-[15%]
              top-[36%]
              h-1
              w-[70%]
              bg-amber-400/50
            "
          />

          <div
            className="
              absolute
              left-[18%]
              top-[33%]
              h-7
              w-3
              rounded-full
              border
              border-amber-400/40
              bg-amber-400/[0.06]
            "
          />

          {/* IoT center */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-10
              w-10
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-amber-400
              shadow-[0_0_45px_rgba(245,158,11,0.5)]
            "
          />

          {/* Sensor nodes */}

          <div
            className="
              sensor-node
              absolute
              left-[6%]
              top-[12%]
              h-3
              w-3
              rounded-full
              bg-amber-400
            "
          />

          <div
            className="
              sensor-node
              absolute
              right-[6%]
              top-[18%]
              h-3
              w-3
              rounded-full
              bg-amber-400
            "
          />

          <div
            className="
              sensor-node
              absolute
              bottom-[13%]
              left-[13%]
              h-3
              w-3
              rounded-full
              bg-amber-400
            "
          />

          <div
            className="
              sensor-node
              absolute
              bottom-[12%]
              right-[13%]
              h-3
              w-3
              rounded-full
              bg-amber-400
            "
          />

          {/* Network lines */}

          <div
            className="
              absolute
              left-[8%]
              top-[15%]
              h-px
              w-[84%]
              rotate-[12deg]
              bg-amber-400/15
            "
          />

          <div
            className="
              absolute
              bottom-[16%]
              left-[14%]
              h-px
              w-[72%]
              rotate-[-12deg]
              bg-amber-400/15
            "
          />

          {/* Water spray */}

          <div
            className="
              absolute
              bottom-[25%]
              left-1/2
              h-[15%]
              w-[45%]
              -translate-x-1/2
              border-t
              border-dashed
              border-blue-200/20
            "
          />

          <div
            className="
              absolute
              bottom-[12%]
              left-1/2
              -translate-x-1/2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/20
            "
          >
            IoT / CLEAN / MONITOR
          </div>
        </div>
      );
    }

    // =======================================================
    // 05 — SOLAR COLLECTOR + DRYER
    // =======================================================

    if (project.type === 'thermal') {
      return (
        <div className="relative h-[76%] w-[76%]">
          {/* Collector */}

          <div
            className="
              absolute
              left-[8%]
              top-[18%]
              h-[42%]
              w-[42%]
              rounded-full
              border
              border-amber-400/30
              bg-amber-400/[0.04]
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[55%]
                w-[55%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-amber-400/35
                bg-amber-400/[0.08]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-4
                w-4
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-amber-400
                shadow-[0_0_30px_rgba(245,158,11,0.6)]
              "
            />
          </div>

          {/* Airflow pipe */}

          <div
            className="
              absolute
              left-[47%]
              top-[39%]
              h-1
              w-[27%]
              bg-amber-400/30
            "
          />

          {/* Dryer */}

          <div
            className="
              absolute
              right-[8%]
              top-[22%]
              h-[35%]
              w-[30%]
              border
              border-white/10
              bg-white/[0.025]
            "
          >
            <div
              className="
                absolute
                inset-4
                border
                border-white/[0.06]
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-1/2
                h-2
                w-10
                -translate-x-1/2
                rounded-full
                bg-amber-400/30
              "
            />
          </div>

          {/* Temperature node */}

          <div
            className="
              absolute
              left-[29%]
              bottom-[16%]
              h-3
              w-3
              rounded-full
              bg-amber-400
              shadow-[0_0_20px_rgba(245,158,11,0.6)]
            "
          />

          {/* Humidity node */}

          <div
            className="
              absolute
              right-[25%]
              bottom-[17%]
              h-3
              w-3
              rounded-full
              border
              border-amber-400/40
              bg-amber-400/10
            "
          />

          {/* Airflow */}

          <div
            className="
              energy-flow
              absolute
              left-[50%]
              top-[35%]
              h-1
              w-3
              rounded-full
              bg-amber-300
            "
          />

          {/* Label */}

          <div
            className="
              absolute
              bottom-[5%]
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/20
            "
          >
            THERMAL / AIRFLOW / DRYING
          </div>
        </div>
      );
    }

    return null;
  };

  // =========================================================
  // RENDER
  // =========================================================

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
        scroll-mt-24
        md:py-36
        lg:py-44
      "
    >
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

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
          bottom-[10%]
          right-[-250px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-amber-400/[0.035]
          blur-[150px]
        "
      />

      {/* =====================================================
          CINEMATIC VERTICAL LINES
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

        <div
          ref={headerRef}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4">
            <span
              className="
                font-mono
                text-sm
                tracking-wider
                text-amber-400
              "
            >
              03
            </span>

            <span className="h-px w-14 bg-amber-400/50" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-white/35
              "
            >
              Selected Projects
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
              Engineering Portfolio
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
              <p
                className="
                  text-sm
                  leading-7
                  text-white/40
                  md:text-base
                "
              >
                Real engineering work across photovoltaic
                systems, hybrid energy storage, solar pumping,
                intelligent automation and solar thermal
                applications.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <div
          ref={projectsRef}
          className="space-y-24 md:space-y-32"
        >
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
              {/* ===============================================
                  BACKGROUND NUMBER
              =============================================== */}

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

              {/* ===============================================
                  METADATA
              =============================================== */}

              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      font-mono
                      text-xs
                      text-amber-400
                    "
                  >
                    {project.number}
                  </span>

                  <span className="h-px w-8 bg-white/10" />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-white/30
                    "
                  >
                    {project.category}
                  </span>
                </div>

                <span
                  className="
                    hidden
                    font-mono
                    text-[9px]
                    tracking-widest
                    text-white/15
                    sm:block
                  "
                >
                  PROJECT /{' '}
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* ===============================================
                  MAIN GRID
              =============================================== */}

              <div
                className="
                  grid
                  gap-12
                  lg:grid-cols-[1.1fr_0.9fr]
                  lg:gap-20
                "
              >
                {/* =============================================
                    VISUAL
                ============================================= */}

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
                  {/* Technical grid */}

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

                  {/* Visual */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    {renderProjectVisual(project)}
                  </div>

                  {/* Top project tag */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/20
                    "
                  >
                    {project.type === 'pv' &&
                      'PV ARRAY / GRID / SYSTEM'}

                    {project.type === 'bess' &&
                      'PV / BESS / PCS / MICROGRID'}

                    {project.type === 'pumping' &&
                      'PV / PUMP / WATER FLOW'}

                    {project.type === 'cleaner' &&
                      'PV / IOT / AUTOMATION'}

                    {project.type === 'thermal' &&
                      'SOLAR THERMAL / DRYING'}
                  </div>

                  {/* Project code */}

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

                {/* =============================================
                    PROJECT CONTENT
                ============================================= */}

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

                    <p
                      className="
                        mt-7
                        max-w-lg
                        text-sm
                        leading-7
                        text-white/40
                        md:text-base
                      "
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* =========================================
                      PROJECT META
                  ========================================= */}

                  <div className="mt-12">
                    <div className="grid grid-cols-2 border-y border-white/10">
                      {/* Capacity */}

                      <div className="py-5">
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-white/25
                          "
                        >
                          Capacity
                        </p>

                        <p
                          className="
                            mt-2
                            font-mono
                            text-sm
                            text-white/80
                          "
                        >
                          {project.capacity}
                        </p>
                      </div>

                      {/* Role */}

                      <div
                        className="
                          border-l
                          border-white/10
                          py-5
                          pl-5
                        "
                      >
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-white/25
                          "
                        >
                          Role
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            text-white/70
                          "
                        >
                          {project.role}
                        </p>
                      </div>
                    </div>

                    {/* =========================================
                        ENGINEERING SCOPE
                    ========================================= */}

                    <div className="mt-7">
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-white/25
                        "
                      >
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

                    {/* =========================================
                        TOOLS
                    ========================================= */}

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-white/20
                        "
                      >
                        Tools
                      </span>

                      {project.tools.map(
                        (tool, toolIndex) => (
                          <React.Fragment key={tool}>
                            {toolIndex > 0 && (
                              <span className="text-white/10">
                                /
                              </span>
                            )}

                            <span
                              className="
                                font-mono
                                text-[10px]
                                text-amber-400/60
                              "
                            >
                              {tool}
                            </span>
                          </React.Fragment>
                        )
                      )}
                    </div>

                    {/* =========================================
                        ACHIEVEMENT
                    ========================================= */}

                    {project.achievement && (
                      <div
                        className="
                          mt-8
                          border-l
                          border-amber-400/30
                          pl-4
                        "
                      >
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-white/20
                          "
                        >
                          Recognition
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            text-amber-400/80
                          "
                        >
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

        {/* ===================================================
            PROJECT RANGE / SUMMARY
        =================================================== */}

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
            {/* Range */}

            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                PV Project Range
              </p>

              <div className="mt-3 flex items-end gap-3">
                <span
                  className="
                    font-mono
                    text-4xl
                    font-semibold
                    tracking-[-0.05em]
                    text-white
                    md:text-5xl
                  "
                >
                  17 kW
                </span>

                <span className="pb-2 text-xl text-amber-400">
                  →
                </span>

                <span
                  className="
                    font-mono
                    text-4xl
                    font-semibold
                    tracking-[-0.05em]
                    text-white
                    md:text-5xl
                  "
                >
                  2.14 MW
                </span>
              </div>
            </div>

            {/* Application Types */}

            <div
              className="
                flex
                flex-wrap
                gap-x-5
                gap-y-3
                md:justify-end
              "
            >
              {[
                'Residential',
                'Commercial',
                'Utility Scale',
                'On-Grid',
                'Off-Grid',
                'Pumping',
                'Hybrid',
                'PV+BESS',
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

          {/* Bottom technical line */}

          <div className="mt-10 flex items-center justify-between">
            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/15
              "
            >
              Solar Engineering / Selected Work
            </span>

            <span
              className="
                font-mono
                text-[8px]
                tracking-widest
                text-amber-400/40
              "
            >
              SOL / 003
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;