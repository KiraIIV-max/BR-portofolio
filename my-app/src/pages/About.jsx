import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const visualRef = useRef(null);
  const cardsRef = useRef(null);
  const toolsRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      const tools = toolsRef.current?.children;

      // =====================================================
      // INITIAL STATES
      // =====================================================

      gsap.set(labelRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 55,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(visualRef.current, {
        opacity: 0,
        x: 70,
        scale: 0.96,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 30,
      });

      gsap.set(tools, {
        opacity: 0,
        y: 15,
      });

      gsap.set(dividerRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
      });

      // =====================================================
      // MAIN ABOUT ENTRANCE
      // =====================================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
      })

        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power4.out',
          },
          '-=0.2'
        )

        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
          },
          '-=0.5'
        )

        .to(
          visualRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.05,
            ease: 'power4.out',
          },
          '-=0.8'
        )

        .to(
          dividerRef.current,
          {
            scaleX: 1,
            duration: 0.75,
            ease: 'power3.inOut',
          },
          '-=0.5'
        )

        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.3'
        )

        .to(
          tools,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: 'power3.out',
          },
          '-=0.25'
        );

      // =====================================================
      // ORBIT ANIMATION
      // =====================================================

      gsap.to('.solar-orbit', {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: 'none',
      });

      // =====================================================
      // SOLAR GLOW
      // =====================================================

      gsap.to('.solar-glow', {
        scale: 1.15,
        opacity: 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // =====================================================
      // SUN BREATHING
      // =====================================================

      gsap.to('.solar-core', {
        scale: 1.04,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
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
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[20%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-amber-400/[0.055]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-amber-500/[0.035]
          blur-[130px]
        "
      />

      {/* =====================================================
          VERTICAL CINEMATIC LINES
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
            SECTION LABEL
        =================================================== */}

        <div
          ref={labelRef}
          className="
            mb-14
            flex
            items-center
            gap-4
            md:mb-20
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
            02
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
            About
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
            Renewable Energy Engineering
          </span>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-24
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            {/* =================================================
                MAIN HEADLINE
            ================================================= */}

            <h2
              ref={titleRef}
              className="
                max-w-3xl
                text-3xl
                font-bold
                leading-[0.98]
                tracking-[-0.045em]
                sm:text-4xl
                md:text-6xl
                lg:text-[4.5rem]
              "
            >
              I engineer how

              <span className="block text-amber-400">
                energy moves.
              </span>
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div
              ref={textRef}
              className="
                mt-9
                max-w-2xl
                space-y-6
                text-[15px]
                leading-[1.85]
                text-white/50
                md:text-base
              "
            >
              <p>
                Renewable Energy Engineer focused on PV design,
                hybrid PV+BESS architecture and electrical
                documentation across residential, commercial,
                pumping and utility-scale applications.
              </p>

              <p>
                My work combines{' '}
                <span className="text-white/80">
                  PV system design, electrical calculations,
                  PVsyst simulation, CAD documentation,
                  hybrid PV+BESS architecture, and
                  technical-commercial analysis
                </span>{' '}
                to turn requirements into reviewable, practical
                energy solutions that can move toward procurement
                and execution.
              </p>
            </div>

            {/* =================================================
                ENGINEERING FOCUS
            ================================================= */}

            <div
              ref={cardsRef}
              className="
                mt-14
                grid
                border-t
                border-white/10
                sm:grid-cols-3
              "
            >
              {/* =================================================
                  CARD 01 — PV SYSTEM DESIGN
              ================================================= */}

              <div
                className="
                  group
                  border-b
                  border-white/10
                  py-7
                  sm:border-b-0
                  sm:border-r
                  sm:pr-6
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      tracking-widest
                      text-amber-400
                    "
                  >
                    01
                  </span>

                  <span
                    className="
                      text-sm
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-amber-400
                    "
                  >
                    ↗
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                  "
                >
                  PV System Design
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[190px]
                    text-xs
                    leading-relaxed
                    text-white/30
                  "
                >
                  On-grid · Off-grid · Pumping · Hybrid
                </p>
              </div>

              {/* =================================================
                  CARD 02 — HYBRID ENERGY SYSTEMS
              ================================================= */}

              <div
                className="
                  group
                  border-b
                  border-white/10
                  py-7
                  sm:border-b-0
                  sm:border-r
                  sm:px-6
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      tracking-widest
                      text-amber-400
                    "
                  >
                    02
                  </span>

                  <span
                    className="
                      text-sm
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-amber-400
                    "
                  >
                    ↗
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                  "
                >
                  Hybrid Energy Systems
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[190px]
                    text-xs
                    leading-relaxed
                    text-white/30
                  "
                >
                  PV+BESS · AC Coupled · DC Coupled ·
                  Microgrids
                </p>
              </div>

              {/* =================================================
                  CARD 03 — ENGINEERING + COMMERCIAL
              ================================================= */}

              <div
                className="
                  group
                  py-7
                  sm:pl-6
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      tracking-widest
                      text-amber-400
                    "
                  >
                    03
                  </span>

                  <span
                    className="
                      text-sm
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-amber-400
                    "
                  >
                    ↗
                  </span>
                </div>

                <h3
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                  "
                >
                  Engineering + Commercial
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[190px]
                    text-xs
                    leading-relaxed
                    text-white/30
                  "
                >
                  Design · BOQ · ROI · Tendering
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — SOLAR ORBIT VISUAL
          ================================================= */}

          <div
            ref={visualRef}
            className="
              relative
              w-full
            "
          >
            <div
              className="
                group
                relative
                mx-auto
                aspect-square
                max-w-[520px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-[#151511]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:border-amber-400/45
                hover:shadow-[0_24px_70px_rgba(245,158,11,0.16)]
              "
            >
              <img
                src="/image.png"
                alt="Ibrahim, Renewable Energy Engineer"
                className="absolute inset-0 z-20 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-[#0B0B09]/95 via-transparent to-black/10 transition-opacity duration-500 group-hover:from-[#0B0B09]/85" />
              <div className="pointer-events-none absolute inset-0 z-30 border border-transparent transition-colors duration-500 group-hover:border-amber-300/25" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex translate-y-1 items-end justify-between p-7 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Ibrahim
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    Renewable Energy Engineer
                  </p>
                </div>
                <p className="text-right text-sm font-medium text-amber-300">
                  PV + BESS
                </p>
              </div>

              {/* ===============================================
                  TECHNICAL GRID
              =============================================== */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.08]
                  bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                  bg-[size:50px_50px]
                "
              />

              {/* ===============================================
                  CENTRAL SUN GLOW
              =============================================== */}

              <div
                className="
                  solar-glow
                  absolute
                  left-1/2
                  top-1/2
                  h-32
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-amber-400/20
                  blur-2xl
                  md:h-40
                  md:w-40
                "
              />

              {/* ===============================================
                  CENTRAL SUN
              =============================================== */}

              <div
                className="
                  solar-core
                  absolute
                  left-1/2
                  top-1/2
                  h-20
                  w-20
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-amber-400
                  shadow-[0_0_80px_rgba(245,158,11,0.45)]
                  md:h-24
                  md:w-24
                "
              />

              {/* ===============================================
                  MAIN ORBIT
              =============================================== */}

              <div
                className="
                  solar-orbit
                  absolute
                  left-1/2
                  top-1/2
                  h-[65%]
                  w-[65%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-amber-400/20
                "
              >
                <div
                  className="
                    absolute
                    -top-2
                    left-1/2
                    h-4
                    w-4
                    -translate-x-1/2
                    rounded-full
                    bg-amber-300
                    shadow-[0_0_20px_rgba(251,191,36,0.8)]
                  "
                />
              </div>

              {/* ===============================================
                  SECOND ORBIT
              =============================================== */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[82%]
                  w-[82%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/5
                "
              />

              {/* ===============================================
                  TOP LABEL
              =============================================== */}

              <div
                className="
                  absolute
                  left-7
                  top-7
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/30
                "
              >
                Energy Systems
              </div>

              {/* ===============================================
                  TOP INDEX
              =============================================== */}

              <div
                className="
                  absolute
                  right-7
                  top-7
                  font-mono
                  text-[9px]
                  tracking-widest
                  text-white/20
                "
              >
                02 / 03
              </div>

              {/* ===============================================
                  LEFT TECHNICAL LABEL
              =============================================== */}

              <div
                className="
                  absolute
                  left-7
                  top-1/2
                  hidden
                  -translate-y-1/2
                  flex-col
                  gap-1
                  md:flex
                "
              >
                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/20
                  "
                >
                  System
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-white/40
                  "
                >
                  PV + BESS
                </span>
              </div>

              {/* ===============================================
                  RIGHT TECHNICAL LABEL
              =============================================== */}

              <div
                className="
                  absolute
                  right-7
                  top-1/2
                  hidden
                  -translate-y-1/2
                  flex-col
                  items-end
                  gap-1
                  md:flex
                "
              >
                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/20
                  "
                >
                  Architecture
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-amber-400/60
                  "
                >
                  HYBRID
                </span>
              </div>

              {/* ===============================================
                  BOTTOM DATA
              =============================================== */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  flex
                  items-end
                  justify-between
                "
              >
                {/* Energy */}

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-widest
                      text-white/30
                    "
                  >
                    Energy
                  </p>

                  <p
                    className="
                      mt-1
                      text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    Engineered
                  </p>
                </div>

                {/* Focus */}

                <div className="text-right">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-widest
                      text-white/30
                    "
                  >
                    Focus
                  </p>

                  <p
                    className="
                      mt-1
                      text-2xl
                      font-semibold
                      text-amber-400
                    "
                  >
                    PV + BESS
                  </p>
                </div>
              </div>
            </div>

            {/* ===============================================
                VISUAL CAPTION
            =============================================== */}

            <div
              className="
                mx-auto
                mt-5
                flex
                max-w-[520px]
                items-center
                justify-between
                px-1
              "
            >
              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-white/20
                "
              >
                From sunlight to engineered systems
              </span>

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-widest
                  text-amber-400/40
                "
              >
                SOL / ENG / 002
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div
          ref={dividerRef}
          className="
            mt-20
            h-px
            w-full
            origin-left
            bg-gradient-to-r
            from-amber-400/40
            via-white/10
            to-transparent
            md:mt-28
          "
        />

        {/* =====================================================
            TECHNICAL ENVIRONMENT
        ===================================================== */}

        <div
          ref={toolsRef}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-4
          "
        >
          <span
            className="
              mr-2
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/20
            "
          >
            Technical Environment
          </span>

          <span className="font-mono text-xs text-white/40">
            PVsyst
          </span>

          <span className="text-white/10">
            /
          </span>

          <span className="font-mono text-xs text-white/40">
            AutoCAD
          </span>

          <span className="text-white/10">
            /
          </span>

          <span className="font-mono text-xs text-white/40">
            ETAP
          </span>

          <span className="text-white/10">
            /
          </span>

          <span className="font-mono text-xs text-white/40">
            MATLAB
          </span>

          <span className="text-white/10">
            /
          </span>

          <span className="font-mono text-xs text-white/40">
            Excel
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;