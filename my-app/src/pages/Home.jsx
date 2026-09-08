import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import gsap from 'gsap';

import image1 from '../assets/land.png';

import About from './About';
import Projects from './Projects';
import EngineeringProcess from './EngineeringProcess';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Achievements from './Achievements';

const Home = () => {
  const heroRef = useRef(null);

  // =========================================================
  // BACKGROUND
  // =========================================================

  const heroImageRef = useRef(null);

  // =========================================================
  // MAIN ANIMATION ELEMENTS
  // =========================================================

  const badgeRef = useRef(null);
  const headlineLinesRef = useRef([]);
  const specializationRef = useRef([]);
  const specializationDotsRef = useRef([]);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const primaryButtonRef = useRef(null);

  // =========================================================
  // METRICS
  // =========================================================

  const metricsRef = useRef([]);
  const metricLinesRef = useRef([]);

  // =========================================================
  // SCROLL INDICATOR
  // =========================================================

  const scrollIndicatorRef = useRef(null);

  // =========================================================
  // STATE
  // =========================================================

  const [heroReady, setHeroReady] = useState(false);

  // =========================================================
  // NAVBAR → HERO SYNCHRONIZATION
  // =========================================================

  useEffect(() => {
    let cancelled = false;

    // -------------------------------------------------------
    // Wait for Navbar intro to FULLY finish
    // -------------------------------------------------------

    const handleNavbarIntroComplete = () => {
      if (cancelled) return;

      requestAnimationFrame(() => {
        if (!cancelled) {
          setHeroReady(true);
        }
      });
    };

    window.addEventListener(
      'navbarIntroComplete',
      handleNavbarIntroComplete
    );

    // -------------------------------------------------------
    // Fallback if Navbar already finished
    // -------------------------------------------------------

    const navbarAlreadyFinished =
      sessionStorage.getItem(
        'navbarIntroComplete'
      ) === 'true';

    if (navbarAlreadyFinished) {
      requestAnimationFrame(() => {
        if (!cancelled) {
          setHeroReady(true);
        }
      });
    }

    return () => {
      cancelled = true;

      window.removeEventListener(
        'navbarIntroComplete',
        handleNavbarIntroComplete
      );
    };
  }, []);

  // =========================================================
  // HERO GSAP ANIMATION
  // =========================================================

  useLayoutEffect(() => {
    if (!heroReady || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // -------------------------------------------------------
      // CLEAN REF ARRAYS
      // -------------------------------------------------------

      headlineLinesRef.current =
        headlineLinesRef.current.filter(Boolean);

      specializationRef.current =
        specializationRef.current.filter(Boolean);

      specializationDotsRef.current =
        specializationDotsRef.current.filter(Boolean);

      metricsRef.current =
        metricsRef.current.filter(Boolean);

      metricLinesRef.current =
        metricLinesRef.current.filter(Boolean);

      // =======================================================
      // INITIAL STATES
      // =======================================================

      // -------------------------------------------------------
      // BACKGROUND
      //
      // IMPORTANT:
      // Reduced zoom animation to avoid a second "intro"
      // appearing after the Navbar.
      // -------------------------------------------------------

      gsap.set(heroImageRef.current, {
        scale: reduceMotion ? 1 : 1.025,

        filter: reduceMotion
          ? 'blur(0px) brightness(1)'
          : 'blur(3px) brightness(0.84)',
      });

      // -------------------------------------------------------
      // Badge
      // -------------------------------------------------------

      gsap.set(badgeRef.current, {
        opacity: 0,
        y: 15,
      });

      // -------------------------------------------------------
      // Headline
      // -------------------------------------------------------

      gsap.set(headlineLinesRef.current, {
        clipPath: 'inset(0 100% 0 0)',
      });

      // -------------------------------------------------------
      // Specialization text
      // -------------------------------------------------------

      gsap.set(specializationRef.current, {
        opacity: 0,
        x: -12,
      });

      // -------------------------------------------------------
      // Specialization dots
      // -------------------------------------------------------

      gsap.set(specializationDotsRef.current, {
        opacity: 0,
        scale: 0,
      });

      // -------------------------------------------------------
      // Description
      // -------------------------------------------------------

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)',
      });

      // -------------------------------------------------------
      // CTA
      // -------------------------------------------------------

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 15,
      });

      // -------------------------------------------------------
      // Metrics
      // -------------------------------------------------------

      gsap.set(metricsRef.current, {
        opacity: 0,
        y: 10,
      });

      gsap.set(metricLinesRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
      });

      // -------------------------------------------------------
      // Scroll indicator
      // -------------------------------------------------------

      gsap.set(scrollIndicatorRef.current, {
        opacity: 0,
      });

      // =======================================================
      // MASTER TIMELINE
      // =======================================================

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      // =======================================================
      // 0.00 — BACKGROUND
      // =======================================================

      if (reduceMotion) {
        tl.set(
          heroImageRef.current,
          {
            scale: 1,
            filter:
              'blur(0px) brightness(1)',
          },
          0
        );
      } else {
        tl.to(
          heroImageRef.current,
          {
            duration: 1.25,

            // Very subtle movement only.
            scale: 1,

            filter:
              'blur(0px) brightness(1)',

            ease: 'power2.out',
          },
          0
        );
      }

      // =======================================================
      // 0.12 — BADGE
      // =======================================================

      tl.to(
        badgeRef.current,
        {
          duration: reduceMotion
            ? 0.2
            : 0.55,

          opacity: 1,
          y: 0,

          ease: 'power3.out',
        },
        0.12
      );

      // =======================================================
      // 0.32 — HEADLINE
      // =======================================================

      headlineLinesRef.current.forEach(
        (line, index) => {
          tl.to(
            line,
            {
              duration: reduceMotion
                ? 0.2
                : 0.65,

              clipPath:
                'inset(0 0% 0 0)',

              ease: 'power3.inOut',
            },
            0.32 + index * 0.2
          );
        }
      );

      // =======================================================
      // 0.90 — SPECIALIZATION DOTS
      // =======================================================

      specializationDotsRef.current.forEach(
        (dot, index) => {
          tl.to(
            dot,
            {
              duration: reduceMotion
                ? 0.1
                : 0.3,

              opacity: 1,
              scale: 1,

              ease: 'back.out(2)',
            },
            0.9 + index * 0.1
          );
        }
      );

      // =======================================================
      // 0.95 — SPECIALIZATION TEXT
      // =======================================================

      specializationRef.current.forEach(
        (item, index) => {
          tl.to(
            item,
            {
              duration: reduceMotion
                ? 0.15
                : 0.4,

              opacity: 1,
              x: 0,

              ease: 'power3.out',
            },
            0.95 + index * 0.1
          );
        }
      );

      // =======================================================
      // 1.28 — DESCRIPTION
      // =======================================================

      tl.to(
        descriptionRef.current,
        {
          duration: reduceMotion
            ? 0.2
            : 0.65,

          opacity: 1,
          y: 0,
          filter: 'blur(0px)',

          ease: 'power3.out',
        },
        1.28
      );

      // =======================================================
      // 1.48 — CTA
      // =======================================================

      tl.to(
        ctaRef.current,
        {
          duration: reduceMotion
            ? 0.2
            : 0.55,

          opacity: 1,
          y: 0,

          ease: 'power3.out',
        },
        1.48
      );

      // =======================================================
      // 1.78 — METRICS
      // =======================================================

      metricsRef.current.forEach(
        (metric, index) => {
          tl.to(
            metric,
            {
              duration: reduceMotion
                ? 0.15
                : 0.45,

              opacity: 1,
              y: 0,

              ease: 'power3.out',
            },
            1.78 + index * 0.1
          );

          if (metricLinesRef.current[index]) {
            tl.to(
              metricLinesRef.current[index],
              {
                duration: reduceMotion
                  ? 0.15
                  : 0.5,

                scaleX: 1,

                ease: 'power2.out',
              },
              1.78 + index * 0.1
            );
          }
        }
      );

      // =======================================================
      // 2.18 — SCROLL INDICATOR
      // =======================================================

      tl.to(
        scrollIndicatorRef.current,
        {
          duration: reduceMotion
            ? 0.2
            : 0.6,

          opacity: 1,

          ease: 'power2.out',
        },
        2.18
      );

      // =======================================================
      // 2.33 — PRIMARY BUTTON SIGNAL
      // =======================================================

      if (
        !reduceMotion &&
        primaryButtonRef.current
      ) {
        tl.to(
          primaryButtonRef.current,
          {
            boxShadow:
              '0 10px 30px rgba(245, 158, 11, 0.28)',

            duration: 0.8,

            ease: 'sine.inOut',
          },
          2.33
        );

        tl.to(
          primaryButtonRef.current,
          {
            boxShadow:
              '0 10px 30px rgba(245, 158, 11, 0.14)',

            duration: 0.8,

            ease: 'sine.inOut',
          },
          3.13
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [heroReady]);

  // =========================================================
  // REF HELPERS
  // =========================================================

  const addHeadlineLine = (element) => {
    if (
      element &&
      !headlineLinesRef.current.includes(element)
    ) {
      headlineLinesRef.current.push(element);
    }
  };

  const addSpecialization = (element) => {
    if (
      element &&
      !specializationRef.current.includes(element)
    ) {
      specializationRef.current.push(element);
    }
  };

  const addSpecializationDot = (element) => {
    if (
      element &&
      !specializationDotsRef.current.includes(element)
    ) {
      specializationDotsRef.current.push(element);
    }
  };

  const addMetric = (element) => {
    if (
      element &&
      !metricsRef.current.includes(element)
    ) {
      metricsRef.current.push(element);
    }
  };

  const addMetricLine = (element) => {
    if (
      element &&
      !metricLinesRef.current.includes(element)
    ) {
      metricLinesRef.current.push(element);
    }
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-screen bg-[#0B0B09] text-white">

      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          flex
          min-h-[88vh]
          w-full
          items-center
          overflow-hidden
        "
      >

        {/* ===================================================
            BACKGROUND
        =================================================== */}

        <div className="absolute inset-0">

          <img
            ref={heroImageRef}
            src={image1}
            alt="Solar photovoltaic system at sunset"
            className="
              h-full
              w-full
              object-cover
              object-center
              will-change-transform
            "
          />

          {/* Main dark gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/90
              via-black/65
              to-black/20
            "
          />

          {/* Subtle amber tint */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-amber-400/[0.06]
              via-transparent
              to-amber-500/[0.04]
            "
          />

          {/* Bottom fade */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-44
              bg-gradient-to-t
              from-[#0B0B09]
              via-[#0B0B09]/60
              to-transparent
            "
          />

          {/* Vignette */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_65%_45%,transparent_0%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.7)_100%)]
            "
          />

        </div>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl

            px-6
            pb-14
            pt-28

            md:px-12
            md:pb-16
            md:pt-28

            lg:px-16
            lg:pb-16
            lg:pt-24
          "
        >

          <div
            className="
              max-w-3xl
              lg:max-w-4xl
            "
          >

            {/* =================================================
                BADGE
            ================================================= */}

            <div
              ref={badgeRef}
              className="
                mb-5
                inline-flex
                items-center
                gap-2.5

                rounded-full

                border
                border-amber-400/25

                bg-black/30

                px-3.5
                py-1.5

                backdrop-blur-md

                will-change-transform
              "
            >

              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-amber-400
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-amber-400
                    shadow-[0_0_12px_rgba(251,191,36,0.8)]
                  "
                />

              </span>

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-amber-300
                "
              >
                Renewable Energy Engineer
              </span>

            </div>

            {/* =================================================
                HEADLINE
            ================================================= */}

            <div
              className="
                max-w-4xl

                text-[3.4rem]
                font-bold
                leading-[0.92]

                tracking-[-0.055em]

                sm:text-[4rem]

                md:text-[4.6rem]

                lg:text-[5rem]

                xl:text-[5.3rem]
              "
            >

              <div className="overflow-hidden">

                <div
                  ref={addHeadlineLine}
                  className="
                    will-change-[clip-path]
                    text-white
                  "
                >
                  Engineering the
                </div>

              </div>

              <div className="overflow-hidden">

                <div
                  ref={addHeadlineLine}
                  className="
                    will-change-[clip-path]
                    text-white/40
                  "
                >
                  Power
                </div>

              </div>

              <div className="overflow-hidden">

                <div
                  ref={addHeadlineLine}
                  className="
                    will-change-[clip-path]
                    text-white
                  "
                >
                  of Sunlight
                  <span className="text-amber-400">
                    .
                  </span>
                </div>

              </div>

            </div>

            {/* =================================================
                SPECIALIZATION
            ================================================= */}

            <div
              className="
                mt-4

                flex
                flex-wrap
                items-center

                gap-x-3
                gap-y-1.5
              "
            >

              <span
                ref={addSpecialization}
                className="
                  text-xs
                  font-medium
                  text-white/75
                  will-change-transform
                  md:text-sm
                "
              >
                PV System Design
              </span>

              <span
                ref={addSpecializationDot}
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-amber-400
                "
              />

              <span
                ref={addSpecialization}
                className="
                  text-xs
                  font-medium
                  text-white/75
                  will-change-transform
                  md:text-sm
                "
              >
                Hybrid PV & BESS
              </span>

              <span
                ref={addSpecializationDot}
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-amber-400
                "
              />

              <span
                ref={addSpecialization}
                className="
                  text-xs
                  font-medium
                  text-white/50
                  will-change-transform
                  md:text-sm
                "
              >
                Electrical Engineering
              </span>

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              ref={descriptionRef}
              className="
                mt-5
                max-w-xl

                text-xs
                leading-6
                text-white/60

                sm:text-sm
                sm:leading-6

                md:text-base
                md:leading-7

                will-change-transform
              "
            >
              Renewable Energy Engineer with close to two years
              of hands-on experience designing and documenting
              photovoltaic systems — from residential rooftops
              to utility-scale plants.

              <span className="text-white/80">
                {' '}
                Focused on PV design, hybrid PV+BESS,
                electrical engineering, simulation,
                technical documentation and project development.
              </span>
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              ref={ctaRef}
              className="
                mt-6

                flex
                flex-wrap
                items-center
                gap-3

                will-change-transform
              "
            >

              <a
                ref={primaryButtonRef}
                href="#projects"
                className="
                  group

                  relative
                  inline-flex
                  items-center
                  gap-2.5

                  overflow-hidden
                  rounded-lg

                  bg-amber-400

                  px-5
                  py-2.5

                  text-xs
                  font-semibold
                  text-black

                  shadow-lg
                  shadow-amber-500/20

                  transition-all
                  duration-300

                  hover:bg-amber-300
                  hover:shadow-amber-400/30

                  md:px-6
                  md:py-3
                  md:text-sm
                "
              >

                <span
                  className="
                    pointer-events-none

                    absolute
                    inset-y-0
                    -left-1/2

                    w-1/2

                    -skew-x-12

                    bg-white/25

                    opacity-0

                    transition-all
                    duration-700

                    group-hover:left-[120%]
                    group-hover:opacity-100
                  "
                />

                <span className="relative z-10">
                  Explore My Work
                </span>

                <span
                  className="
                    relative
                    z-10

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2.5

                  rounded-lg

                  border
                  border-white/15

                  bg-white/[0.06]

                  px-5
                  py-2.5

                  text-xs
                  font-semibold

                  text-white

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:border-white/25
                  hover:bg-white/[0.1]

                  md:px-6
                  md:py-3
                  md:text-sm
                "
              >

                Let's Connect

                <span className="text-amber-400">
                  ↗
                </span>

              </a>

            </div>

            {/* =================================================
                PROFILE METRICS
            ================================================= */}

            <div
              className="
                mt-8

                grid
                max-w-4xl
                grid-cols-2

                md:grid-cols-4
              "
            >

              <div
                ref={addMetric}
                className="
                  relative

                  px-5
                  pb-1
                  pt-5

                  will-change-transform
                "
              >

                <span
                  ref={addMetricLine}
                  className="
                    absolute
                    left-0
                    top-0

                    h-px
                    w-full

                    bg-amber-400/70
                  "
                />

                <p
                  className="
                    text-xl
                    font-bold
                    tracking-tight

                    sm:text-2xl
                    md:text-2xl
                  "
                >
                  2.14
                  <span className="text-amber-400">
                    MW
                  </span>
                </p>

                <p
                  className="
                    mt-0.5

                    text-[8px]
                    uppercase
                    tracking-[0.12em]

                    text-white/35

                    sm:text-[9px]
                  "
                >
                  Largest PV Scope
                </p>

              </div>

              <div
                ref={addMetric}
                className="
                  relative

                  border-l
                  border-white/10

                  px-5
                  pb-1
                  pt-5

                  will-change-transform

                  md:px-7
                "
              >

                <span
                  ref={addMetricLine}
                  className="
                    absolute
                    left-0
                    top-0

                    h-px
                    w-full

                    bg-amber-400/70
                  "
                />

                <p
                  className="
                    text-xl
                    font-bold
                    tracking-tight

                    sm:text-2xl
                    md:text-2xl
                  "
                >
                  ~2
                  <span className="text-amber-400">
                    yrs
                  </span>
                </p>

                <p
                  className="
                    mt-0.5

                    text-[8px]
                    uppercase
                    tracking-[0.12em]

                    text-white/35

                    sm:text-[9px]
                  "
                >
                  Hands-on Experience
                </p>

              </div>

              <div
                ref={addMetric}
                className="
                  relative

                  border-t
                  border-white/10

                  px-5
                  pb-1
                  pt-4

                  will-change-transform

                  md:border-l
                  md:border-t-0
                  md:px-7
                  md:pt-5
                "
              >

                <span
                  ref={addMetricLine}
                  className="
                    absolute
                    left-0
                    top-0

                    h-px
                    w-full

                    bg-amber-400/70
                  "
                />

                <p
                  className="
                    text-xl
                    font-bold
                    tracking-tight

                    sm:text-2xl
                    md:text-2xl
                  "
                >
                  AC
                  <span className="text-amber-400">
                    /
                  </span>
                  DC
                </p>

                <p
                  className="
                    mt-0.5

                    text-[8px]
                    uppercase
                    tracking-[0.12em]

                    text-white/35

                    sm:text-[9px]
                  "
                >
                  Coupled PV+BESS
                </p>

              </div>

              <div
                ref={addMetric}
                className="
                  relative

                  border-l
                  border-t
                  border-white/10

                  px-5
                  pb-1
                  pt-4

                  will-change-transform

                  md:border-t-0
                  md:px-7
                  md:pt-5
                "
              >

                <span
                  ref={addMetricLine}
                  className="
                    absolute
                    left-0
                    top-0

                    h-px
                    w-full

                    bg-amber-400/70
                  "
                />

                <p
                  className="
                    text-xl
                    font-bold
                    tracking-tight

                    sm:text-2xl
                    md:text-2xl
                  "
                >
                  PV
                  <span className="text-amber-400">
                    +
                  </span>
                  BESS
                </p>

                <p
                  className="
                    mt-0.5

                    text-[8px]
                    uppercase
                    tracking-[0.12em]

                    text-white/35

                    sm:text-[9px]
                  "
                >
                  Energy Systems
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <div
          ref={scrollIndicatorRef}
          className="
            absolute

            bottom-7
            right-8

            hidden

            flex-col
            items-center
            gap-2

            text-white/30

            md:flex
          "
        >

          <span
            className="
              mb-4
              rotate-90

              text-[8px]
              uppercase
              tracking-[0.35em]
            "
          >
            Scroll
          </span>

          <div
            className="
              h-10
              w-px

              bg-gradient-to-b
              from-amber-400
              to-transparent
            "
          />

        </div>

      </section>

      {/* =====================================================
          02 — ABOUT
      ===================================================== */}

      <About />

      {/* =====================================================
          03 — PROJECTS
      ===================================================== */}

      <Projects />

      {/* =====================================================
          04 — ENGINEERING PROCESS
      ===================================================== */}

      <EngineeringProcess />

      {/* =====================================================
          05 — EXPERIENCE
      ===================================================== */}

      <Experience />

      {/* =====================================================
          06 — SKILLS
      ===================================================== */}

      <Skills />

      {/* =====================================================
          07 — ACHIEVEMENTS
      ===================================================== */}

      <Achievements />

      {/* =====================================================
          08 — CONTACT
      ===================================================== */}

      <Contact />

    </div>
  );
};

export default Home;