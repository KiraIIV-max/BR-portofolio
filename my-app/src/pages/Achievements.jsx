import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    number: '01',
    category: 'SOLAR THERMAL / RESEARCH',
    title: 'Solar Collector',
    accent: '& Dryer',
    description:
      'A solar thermal engineering project focused on collector performance, agricultural drying, thermal monitoring and iterative optimization.',
    awards: [
      {
        place: '1st Place',
        event: 'Science & Innovation Competition — ASRT',
        featured: true,
      },
      {
        place: '2nd Place',
        event: 'Technological Conference',
      },
      {
        place: '4th Place',
        event: 'ISEC Competition',
      },
      {
        place: '6th Place',
        event: 'Research Center Hackathon',
      },
      {
        place: 'Finalist',
        event: 'Hult Prize Competition',
      },
    ],
    support: [
      'Funded by the Academy of Scientific Research and Technology',
      'Supported by the Innovation Support Foundation',
      'iHub — Ain Shams University Innovation Hub',
    ],
    tags: [
      'Solar Thermal',
      'Collector',
      'Agricultural Drying',
      'Thermal Monitoring',
      'Optimization',
    ],
    visual: 'thermal',
  },

  {
    number: '02',
    category: 'PV / IOT / AUTOMATION',
    title: 'Intelligent PV',
    accent: 'Cleaner',
    description:
      'An intelligent photovoltaic cleaning system combining IoT, embedded control, automation and mechanical/electrical integration.',
    awards: [
      {
        place: '1st Place',
        event:
          'Kemteck Valley — Egyptian Technological Universities',
        featured: true,
      },
      {
        place: '2nd Place',
        event:
          'Kemteck Valley — New Cairo Technological University',
      },
      {
        place: '3rd Place',
        event:
          'Innovators Support Fund — Greater Cairo',
      },
      {
        place: '10th Place',
        event:
          'Electronic Research Institute Hackathon',
      },
    ],
    support: [
      'Qualified through Innovators Support Fund competition rounds',
      'Qualified for Gen-Z TV',
    ],
    tags: [
      'IoT',
      'Arduino',
      'Embedded Systems',
      'Automation',
      'PV Cleaning',
    ],
    visual: 'cleaner',
  },
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards =
        Array.from(cardsRef.current?.children || []);

      // =====================================================
      // INITIAL STATES
      // =====================================================

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 80,
      });

      gsap.set(footerRef.current, {
        opacity: 0,
        y: 30,
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
      // ACHIEVEMENT CARDS
      // =====================================================

      cards.forEach((card, index) => {
        const visual =
          card.querySelector('.achievement-visual');

        const awardItems =
          card.querySelectorAll('.award-item');

        const supportItems =
          card.querySelectorAll('.support-item');

        const tags =
          card.querySelectorAll('.achievement-tag');

        // Main card
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: index * 0.12,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions:
              'play none none reverse',
          },
        });

        // Visual
        if (visual) {
          gsap.fromTo(
            visual,
            {
              scale: 0.92,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 1.1,
              delay: 0.1,
              ease: 'power4.out',

              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // Awards
        if (awardItems.length) {
          gsap.fromTo(
            awardItems,
            {
              opacity: 0,
              x: index === 0 ? -20 : 20,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: card,
                start: 'top 72%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // Support
        if (supportItems.length) {
          gsap.fromTo(
            supportItems,
            {
              opacity: 0,
              y: 10,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }

        // Tags
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
              duration: 0.4,
              stagger: 0.05,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: card,
                start: 'top 68%',
                toggleActions:
                  'play none none reverse',
              },
            }
          );
        }
      });

      // =====================================================
      // THERMAL VISUAL ANIMATION
      // =====================================================

      gsap.to('.achievement-thermal-sun', {
        scale: 1.08,
        opacity: 0.75,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.achievement-heat-wave', {
        y: -8,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // =====================================================
      // CLEANER VISUAL ANIMATION
      // =====================================================

      gsap.to('.achievement-cleaner-node', {
        scale: 1.25,
        opacity: 0.65,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.achievement-sensor', {
        scale: 0.75,
        opacity: 0.35,
        duration: 1.3,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: 'sine.inOut',
      });

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

    return () => ctx.revert();
  }, []);

  // =========================================================
  // VISUAL
  // =========================================================

  const renderVisual = (type) => {
    if (type === 'thermal') {
      return (
        <div className="relative h-full w-full">
          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.08]
              bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />

          {/* Sun */}

          <div
            className="
              achievement-thermal-sun
              absolute
              left-[22%]
              top-[18%]
              h-20
              w-20
              rounded-full
              bg-amber-400
              shadow-[0_0_60px_rgba(245,158,11,.45)]
            "
          />

          {/* Collector */}

          <div
            className="
              absolute
              left-[15%]
              top-[42%]
              h-32
              w-32
              rounded-full
              border
              border-amber-400/30
              bg-amber-400/[0.035]
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-20
                w-20
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-amber-400/30
                bg-amber-400/[0.07]
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
                shadow-[0_0_30px_rgba(245,158,11,.7)]
              "
            />
          </div>

          {/* Heat flow */}

          <div
            className="
              achievement-heat-wave
              absolute
              left-[38%]
              top-[51%]
              h-px
              w-[25%]
              bg-gradient-to-r
              from-amber-400/50
              to-transparent
            "
          />

          <div
            className="
              achievement-heat-wave
              absolute
              left-[39%]
              top-[58%]
              h-px
              w-[20%]
              bg-gradient-to-r
              from-amber-400/30
              to-transparent
            "
          />

          {/* Dryer */}

          <div
            className="
              absolute
              right-[13%]
              top-[37%]
              h-[32%]
              w-[25%]
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
                w-12
                -translate-x-1/2
                rounded-full
                bg-amber-400/30
              "
            />
          </div>

          {/* Sensors */}

          <div
            className="
              achievement-sensor
              absolute
              bottom-[20%]
              left-[29%]
              h-2.5
              w-2.5
              rounded-full
              bg-amber-400
            "
          />

          <div
            className="
              achievement-sensor
              absolute
              bottom-[19%]
              right-[25%]
              h-2.5
              w-2.5
              rounded-full
              bg-amber-300
            "
          />

          {/* Label */}

          <div
            className="
              absolute
              bottom-5
              left-6
              font-mono
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            THERMAL / MONITOR / DRY
          </div>

          <div
            className="
              absolute
              right-6
              top-5
              font-mono
              text-[8px]
              tracking-widest
              text-amber-400/40
            "
          >
            RESEARCH / 001
          </div>
        </div>
      );
    }

    if (type === 'cleaner') {
      return (
        <div className="relative h-full w-full">
          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.08]
              bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />

          {/* PV panel */}

          <div
            className="
              absolute
              left-1/2
              top-[47%]
              h-[42%]
              w-[52%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-lg
              border
              border-amber-400/25
              bg-[#101614]
            "
          >
            <div className="grid h-full grid-cols-5 gap-1 p-2">
              {Array.from({ length: 20 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="
                      border
                      border-white/[0.06]
                      bg-white/[0.025]
                    "
                  />
                )
              )}
            </div>
          </div>

          {/* Cleaner rail */}

          <div
            className="
              absolute
              left-[16%]
              top-[42%]
              h-1
              w-[68%]
              bg-amber-400/40
            "
          />

          <div
            className="
              absolute
              left-[20%]
              top-[38%]
              h-8
              w-3
              rounded-full
              border
              border-amber-400/30
              bg-amber-400/[0.06]
            "
          />

          {/* Core controller */}

          <div
            className="
              achievement-cleaner-node
              absolute
              left-1/2
              top-[48%]
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-amber-400
              shadow-[0_0_50px_rgba(245,158,11,.5)]
            "
          />

          {/* Sensor nodes */}

          <div
            className="
              achievement-sensor
              absolute
              left-[8%]
              top-[18%]
              h-3
              w-3
              rounded-full
              bg-amber-400
            "
          />

          <div
            className="
              achievement-sensor
              absolute
              right-[8%]
              top-[20%]
              h-3
              w-3
              rounded-full
              bg-amber-400
            "
          />

          <div
            className="
              achievement-sensor
              absolute
              bottom-[14%]
              left-[13%]
              h-3
              w-3
              rounded-full
              bg-amber-400
            "
          />

          <div
            className="
              achievement-sensor
              absolute
              bottom-[13%]
              right-[13%]
              h-3
              w-3
              rounded-full
              bg-amber-400
            "
          />

          {/* Connection paths */}

          <div
            className="
              absolute
              left-[10%]
              top-[21%]
              h-px
              w-[80%]
              rotate-[12deg]
              bg-amber-400/15
            "
          />

          <div
            className="
              absolute
              bottom-[17%]
              left-[14%]
              h-px
              w-[72%]
              rotate-[-12deg]
              bg-amber-400/15
            "
          />

          {/* Water indication */}

          <div
            className="
              absolute
              bottom-[7%]
              left-1/2
              -translate-x-1/2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/20
            "
          >
            IoT / CLEAN / MONITOR
          </div>

          <div
            className="
              absolute
              right-6
              top-5
              font-mono
              text-[8px]
              tracking-widest
              text-amber-400/40
            "
          >
            INNOVATION / 002
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
      id="achievements"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#090908]
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
          left-[-220px]
          top-[15%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-amber-500/[0.035]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          right-[-220px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-amber-400/[0.03]
          blur-[150px]
        "
      />

      {/* =====================================================
          CINEMATIC LINES
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
          <div className="flex items-center gap-4">
            <span
              className="
                font-mono
                text-sm
                tracking-wider
                text-amber-400
              "
            >
              08
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
              Achievements
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
              Research / Innovation / Competition
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
              Engineering
              <span className="block text-amber-400">
                beyond the brief.
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
                Recognition across science,
                innovation, technology and
                engineering competitions — turning
                technical ideas into projects that
                compete in the real world.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            ACHIEVEMENT CARDS
        =================================================== */}

        <div
          ref={cardsRef}
          className="
            mt-24
            grid
            gap-10
            lg:mt-32
            lg:grid-cols-2
            lg:gap-14
          "
        >
          {achievements.map(
            (achievement, index) => (
              <article
                key={achievement.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                  transition-all
                  duration-500
                  hover:border-amber-400/20
                  md:p-7
                "
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
                    HEADER META
                ================================================= */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        font-mono
                        text-xs
                        text-amber-400
                      "
                    >
                      {achievement.number}
                    </span>

                    <span className="h-px w-8 bg-white/10" />

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.28em]
                        text-white/25
                      "
                    >
                      {achievement.category}
                    </span>
                  </div>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      tracking-widest
                      text-white/15
                    "
                  >
                    PROJECT / {achievement.number}
                  </span>
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <div className="mt-8">
                  <h3
                    className="
                      text-4xl
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.045em]
                      md:text-5xl
                    "
                  >
                    {achievement.title}

                    <span className="block text-amber-400">
                      {achievement.accent}
                    </span>
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-sm
                      leading-7
                      text-white/35
                    "
                  >
                    {achievement.description}
                  </p>
                </div>

                {/* =================================================
                    VISUAL
                ================================================= */}

                <div
                  className="
                    achievement-visual
                    relative
                    mt-8
                    aspect-[16/10]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#11110F]
                  "
                >
                  {renderVisual(
                    achievement.visual
                  )}
                </div>

                {/* =================================================
                    AWARDS
                ================================================= */}

                <div className="mt-8">
                  <div
                    className="
                      mb-4
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-white/20
                      "
                    >
                      Project Recognition
                    </span>

                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="space-y-2">
                    {achievement.awards.map(
                      (award) => (
                        <div
                          key={`${award.place}-${award.event}`}
                          className={`
                            award-item
                            flex
                            items-start
                            gap-4
                            rounded-xl
                            border
                            px-4
                            py-3
                            transition-all
                            duration-300

                            ${
                              award.featured
                                ? `
                                  border-amber-400/20
                                  bg-amber-400/[0.045]
                                `
                                : `
                                  border-white/[0.07]
                                  bg-white/[0.015]
                                `
                            }
                          `}
                        >
                          <span
                            className={`
                              min-w-[72px]
                              font-mono
                              text-[10px]
                              font-semibold

                              ${
                                award.featured
                                  ? 'text-amber-400'
                                  : 'text-white/45'
                              }
                            `}
                          >
                            {award.place}
                          </span>

                          <span
                            className="
                              text-xs
                              leading-5
                              text-white/45
                            "
                          >
                            {award.event}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* =================================================
                    SUPPORT
                ================================================= */}

                <div className="mt-7">
                  <div
                    className="
                      mb-4
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/20
                    "
                  >
                    Support / Ecosystem
                  </div>

                  <div className="space-y-2">
                    {achievement.support.map(
                      (item) => (
                        <div
                          key={item}
                          className="
                            support-item
                            flex
                            items-start
                            gap-3
                          "
                        >
                          <span
                            className="
                              mt-2
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-amber-400/60
                            "
                          />

                          <span
                            className="
                              text-[10px]
                              leading-5
                              text-white/30
                            "
                          >
                            {item}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* =================================================
                    TAGS
                ================================================= */}

                <div className="mt-8 flex flex-wrap gap-2">
                  {achievement.tags.map(
                    (tag) => (
                      <span
                        key={tag}
                        className="
                          achievement-tag
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
                          hover:border-amber-400/25
                          hover:text-amber-400
                        "
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                {/* =================================================
                    CARD FOOTER
                ================================================= */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/10
                    pt-5
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.28em]
                      text-white/15
                    "
                  >
                    Research / Innovation
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
                    / 02
                  </span>
                </div>
              </article>
            )
          )}
        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div
          ref={footerRef}
          className="
            mt-24
            border-t
            border-white/10
            pt-10
            md:mt-32
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
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                Recognition
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
                Engineering ideas are stronger
                when they survive real-world
                evaluation.

                <span className="text-amber-400">
                  {' '}
                  Build. Compete. Improve.
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
                <span className="font-mono text-[10px] text-white/25">
                  RESEARCH
                </span>

                <span className="font-mono text-[10px] text-white/25">
                  INNOVATION
                </span>

                <span className="font-mono text-[10px] text-white/25">
                  AUTOMATION
                </span>

                <span className="font-mono text-[10px] text-white/25">
                  SOLAR
                </span>

                <span className="font-mono text-[10px] text-amber-400/60">
                  COMPETITION
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
              Achievements / Engineering Recognition
            </span>

            <span
              className="
                font-mono
                text-[8px]
                tracking-widest
                text-amber-400/40
              "
            >
              SOL / 008
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;