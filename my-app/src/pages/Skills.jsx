import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const groupsRef = useRef(null);
  const signalRef = useRef(null);
  const footerRef = useRef(null);

  // =========================================================
  // SKILL GROUPS
  // =========================================================

  const skillGroups = [
    {
      number: '01',
      code: 'PV / 001',
      title: 'PV System Design',
      description:
        'End-to-end photovoltaic system design across on-grid, off-grid, pumping and hybrid applications, from system sizing to equipment selection and electrical configuration.',
      skills: [
        'On-Grid',
        'Off-Grid',
        'Solar Pumping',
        'Hybrid Systems',
        'PV Array Sizing',
        'String Sizing',
        'Inverter Selection',
        'MPPT Configuration',
        'AC / DC Design',
      ],
      level: 'CORE',
    },

    {
      number: '02',
      code: 'BESS / 002',
      title: 'Hybrid PV + BESS',
      description:
        'Designing hybrid photovoltaic and battery energy storage architectures with attention to system topology, storage requirements, PCS selection and load behavior.',
      skills: [
        'AC-Coupled',
        'DC-Coupled',
        'BESS Sizing',
        'DoD',
        'SoH',
        'Round-Trip Efficiency',
        'C-Rate',
        'PCS Selection',
        'Microgrid Architecture',
        'Load Management',
      ],
      level: 'SPECIALIZATION',
      featured: true,
    },

    {
      number: '03',
      code: 'ELEC / 003',
      title: 'Electrical Design',
      description:
        'Electrical engineering focused on safe, reliable and efficient photovoltaic system implementation through calculations, verification, protection and grounding.',
      skills: [
        'Load Assessment',
        'Cable Sizing',
        'Voltage Drop',
        'Protection Selection',
        'String Voltage Verification',
        'String Current Verification',
        'MPPT Allocation',
        'Earthing',
        'Grounding',
      ],
      level: 'ENGINEERING',
    },

    {
      number: '04',
      code: 'CAD / 004',
      title: 'CAD + Documentation',
      description:
        'Translating engineering calculations into precise technical drawings and project documentation that can be reviewed, coordinated, procured and executed.',
      skills: [
        'AutoCAD',
        'SketchUp',
        'General Layouts',
        'String Layouts',
        'Wiring Diagrams',
        'SLDs',
        'Cable Routing',
        'Earthing Layouts',
        'Shop Drawings',
        'As-Built Drawings',
      ],
      level: 'DOCUMENTATION',
    },

    {
      number: '05',
      code: 'PERF / 005',
      title: 'Performance + Commercial',
      description:
        'Combining technical analysis with commercial evaluation to understand energy yield, system economics, project feasibility and procurement requirements.',
      skills: [
        'PVsyst',
        'PV*SOL',
        'Energy Yield',
        'Loss Analysis',
        'Performance Ratio',
        'Shading Analysis',
        'Feasibility Studies',
        'ROI',
        'Payback Analysis',
        'BOQs',
        'Cost Estimation',
        'Vendor Evaluation',
        'Technical Compliance',
        'RFIs',
      ],
      level: 'ANALYSIS',
    },

    {
      number: '06',
      code: 'AUTO / 006',
      title: 'Automation + Software',
      description:
        'A multidisciplinary software and automation foundation spanning industrial control, simulation, electrical documentation, embedded systems and engineering data workflows.',
      skills: [
        'PLC',
        'Siemens',
        'Schneider',
        'Delta',
        'TIA Portal',
        'Factory I/O',
        'MATLAB / Simulink',
        'EPLAN',
        'Excel',
        'Embedded Systems',
        'PCB Design',
        'Proteus',
        'Multisim',
      ],
      level: 'MULTIDISCIPLINARY',
    },
  ];

  // =========================================================
  // GSAP ANIMATIONS
  // =========================================================

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const groups = Array.from(
        groupsRef.current?.children || []
      );

      // =====================================================
      // INITIAL STATES
      // =====================================================

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set(groups, {
        opacity: 0,
        y: 70,
      });

      gsap.set(footerRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(signalRef.current, {
        scaleY: 0,
        transformOrigin: 'top center',
      });

      // =====================================================
      // HEADER
      // =====================================================

      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions:
            'play none none reverse',
        },
      });

      // =====================================================
      // SIGNAL LINE
      // =====================================================

      gsap.to(signalRef.current, {
        scaleY: 1,
        duration: 1.4,
        ease: 'power3.inOut',

        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions:
            'play none none reverse',
        },
      });

      // =====================================================
      // SKILL GROUPS
      // =====================================================

      groups.forEach((group, index) => {
        const number =
          group.querySelector('.skill-number');

        const code =
          group.querySelector('.skill-code');

        const line =
          group.querySelector('.skill-line');

        const tags =
          group.querySelectorAll('.skill-tag');

        const progress =
          group.querySelector('.skill-progress');

        const featuredPulse =
          group.querySelector('.featured-pulse');

        // ---------------------------------------------------
        // GROUP ENTRANCE
        // ---------------------------------------------------

        gsap.to(group, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.05,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
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
              x: index % 2 === 0 ? -20 : 20,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: group,
                start: 'top 82%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // ---------------------------------------------------
        // CODE
        // ---------------------------------------------------

        if (code) {
          gsap.fromTo(
            code,
            {
              opacity: 0,
              y: 8,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.1,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: group,
                start: 'top 82%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // ---------------------------------------------------
        // DIVIDER LINE
        // ---------------------------------------------------

        if (line) {
          gsap.fromTo(
            line,
            {
              scaleX: 0,
              transformOrigin: 'left center',
            },
            {
              scaleX: 1,
              duration: 0.8,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: group,
                start: 'top 82%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // ---------------------------------------------------
        // TAGS
        // ---------------------------------------------------

        if (tags.length) {
          gsap.fromTo(
            tags,
            {
              opacity: 0,
              y: 8,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              stagger: 0.04,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: group,
                start: 'top 76%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // ---------------------------------------------------
        // PROGRESS
        // ---------------------------------------------------

        if (progress) {
          gsap.fromTo(
            progress,
            {
              scaleX: 0,
              transformOrigin: 'left center',
            },
            {
              scaleX: 1,
              duration: 1,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: group,
                start: 'top 78%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // ---------------------------------------------------
        // FEATURED BESS PULSE
        // ---------------------------------------------------

        if (featuredPulse) {
          gsap.to(featuredPulse, {
            opacity: 0.7,
            scale: 1.05,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });

      // =====================================================
      // FLOATING SIGNAL
      // =====================================================

      gsap.to('.skills-signal-dot', {
        y: 90,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // =====================================================
      // BACKGROUND GRID
      // =====================================================

      const grid =
        section.querySelector('.skills-grid');

      if (grid) {
        gsap.to(grid, {
          y: -35,
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
        opacity: 1,
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
      id="skills"
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
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-amber-400/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-amber-500/[0.025]
          blur-[140px]
        "
      />

      {/* =====================================================
          TECHNICAL GRID
      ===================================================== */}

      <div
        className="
          skills-grid
          pointer-events-none
          absolute
          right-[4%]
          top-[10%]
          hidden
          h-[600px]
          w-[34%]
          opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          bg-[size:35px_35px]
          lg:block
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
              06
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
              Engineering Skills
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
              Systems / Analysis / Automation
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
            <div>
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
                Systems.
                <span className="text-white/35">
                  {' '}
                  Analysis.
                </span>

                <span className="block text-amber-400">
                  Engineering.
                </span>
              </h2>
            </div>

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
                A multidisciplinary engineering
                toolkit built around photovoltaic
                systems, battery storage, electrical
                design, technical documentation,
                performance analysis and automation.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            SKILL MATRIX
        =================================================== */}

        <div
          className="
            relative
            mt-24
            md:mt-32
            lg:mt-40
          "
        >
          {/* =================================================
              VERTICAL SIGNAL
          ================================================= */}

          <div
            ref={signalRef}
            className="
              absolute
              bottom-0
              left-0
              top-0
              hidden
              w-px
              bg-gradient-to-b
              from-amber-400/60
              via-amber-400/20
              to-transparent
              lg:block
            "
          />

          {/* =================================================
              MOVING SIGNAL DOT
          ================================================= */}

          <div
            className="
              skills-signal-dot
              pointer-events-none
              absolute
              left-0
              top-[5%]
              hidden
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-amber-300
              shadow-[0_0_22px_rgba(251,191,36,0.8)]
              lg:block
            "
          />

          {/* =================================================
              GROUPS
          ================================================= */}

          <div
            ref={groupsRef}
            className="
              space-y-10
              lg:space-y-14
            "
          >
            {skillGroups.map(
              (group, index) => (
                <article
                  key={group.number}
                  className={`
                    skill-group
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-white/[0.025]
                    p-6
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    md:p-8
                    lg:ml-10
                    lg:p-10

                    ${
                      group.featured
                        ? `
                          border-amber-400/20
                          bg-amber-400/[0.025]
                          shadow-[0_0_80px_rgba(245,158,11,0.035)]
                        `
                        : `
                          border-white/10
                          hover:border-amber-400/20
                          hover:bg-white/[0.035]
                        `
                    }
                  `}
                >
                  {/* =================================================
                      TOP LINE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-amber-400/0
                      via-amber-400/30
                      to-amber-400/0
                    "
                  />

                  {/* =================================================
                      FEATURED BESS SIGNAL
                  ================================================= */}

                  {group.featured && (
                    <div
                      className="
                        featured-pulse
                        pointer-events-none
                        absolute
                        right-[-60px]
                        top-[-60px]
                        h-40
                        w-40
                        rounded-full
                        bg-amber-400/[0.05]
                        blur-3xl
                      "
                    />
                  )}

                  <div
                    className="
                      grid
                      gap-8
                      lg:grid-cols-[170px_1fr]
                      lg:gap-12
                    "
                  >
                    {/* =================================================
                        NUMBER
                    ================================================= */}

                    <div
                      className="
                        skill-number
                        relative
                        flex
                        items-start
                      "
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
                            text-white/[0.055]
                            md:text-[6rem]
                          "
                        >
                          {group.number}
                        </span>

                        <span
                          className="
                            skill-code
                            absolute
                            left-1
                            top-1
                            font-mono
                            text-[9px]
                            tracking-[0.2em]
                            text-amber-400
                          "
                        >
                          {group.code}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div>
                      {/* Cluster meta */}

                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-3
                        "
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
                          {group.level}
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
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-amber-400/60
                          "
                        >
                          Skill Cluster
                        </span>

                        {group.featured && (
                          <>
                            <span className="text-white/10">
                              /
                            </span>

                            <span
                              className="
                                font-mono
                                text-[9px]
                                uppercase
                                tracking-[0.25em]
                                text-amber-400
                              "
                            >
                              Key Differentiator
                            </span>
                          </>
                        )}
                      </div>

                      {/* Title */}

                      <div
                        className="
                          mt-4
                          flex
                          flex-col
                          gap-5
                          md:flex-row
                          md:items-end
                          md:justify-between
                        "
                      >
                        <h3
                          className="
                            text-3xl
                            font-semibold
                            leading-none
                            tracking-[-0.04em]
                            md:text-4xl
                            lg:text-5xl
                          "
                        >
                          {group.title}
                        </h3>

                        <div
                          className="
                            hidden
                            items-center
                            gap-3
                            md:flex
                          "
                        >
                          <span
                            className="
                              font-mono
                              text-[9px]
                              tracking-[0.25em]
                              text-white/20
                            "
                          >
                            SYSTEM
                          </span>

                          <div
                            className="
                              h-px
                              w-24
                              bg-white/10
                            "
                          >
                            <div
                              className="
                                skill-progress
                                h-full
                                origin-left
                                bg-amber-400/70
                              "
                              style={{
                                transform:
                                  'scaleX(0.9)',
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Divider */}

                      <div
                        className="
                          skill-line
                          mt-5
                          h-px
                          w-full
                          origin-left
                          bg-white/10
                        "
                      />

                      {/* Description */}

                      <p
                        className="
                          mt-5
                          max-w-3xl
                          text-sm
                          leading-7
                          text-white/35
                          md:text-base
                          md:leading-8
                        "
                      >
                        {group.description}
                      </p>

                      {/* =================================================
                          SKILL TAGS
                      ================================================= */}

                      <div
                        className="
                          mt-7
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {group.skills.map(
                          (skill) => (
                            <span
                              key={skill}
                              className="
                                skill-tag
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.02]
                                px-3
                                py-2
                                text-[9px]
                                uppercase
                                tracking-wider
                                text-white/40
                                transition-all
                                duration-300
                                hover:border-amber-400/30
                                hover:bg-amber-400/5
                                hover:text-amber-400
                              "
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      FOOTER INDEX
                  ================================================= */}

                  <div
                    className="
                      mt-8
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
                      Ibrahim / Engineering Skills
                    </span>

                    <span
                      className="
                        font-mono
                        text-[8px]
                        tracking-widest
                        text-amber-400/40
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        '0'
                      )}{' '}
                      / 06
                    </span>
                  </div>
                </article>
              )
            )}
          </div>
        </div>

        {/* ===================================================
            FOOTER STATEMENT
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
              lg:grid-cols-[0.8fr_1fr]
              lg:items-end
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                Engineering Philosophy
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
                Strong engineering comes from
                connecting the system, the numbers
                and the reality behind them.

                <span className="text-amber-400">
                  {' '}
                  The tools support the thinking.
                </span>
              </p>
            </div>

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
                  PV DESIGN
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  BESS
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  ELECTRICAL
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  CAD
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/25
                  "
                >
                  COMMERCIAL
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-amber-400/60
                  "
                >
                  AUTOMATION
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
              Engineering Skills / Renewable Energy
            </span>

            <span
              className="
                font-mono
                text-[8px]
                tracking-widest
                text-amber-400/40
              "
            >
              SOL / 006
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;