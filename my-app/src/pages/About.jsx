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

      // -----------------------------------------
      // Initial states
      // -----------------------------------------

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

      // -----------------------------------------
      // Main About entrance
      // -----------------------------------------

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

      // -----------------------------------------
      // Orbit animation
      // -----------------------------------------

      gsap.to('.solar-orbit', {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: 'none',
      });

      // -----------------------------------------
      // Solar glow
      // -----------------------------------------

      gsap.to('.solar-glow', {
        scale: 1.15,
        opacity: 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // -----------------------------------------
      // Sun breathing
      // -----------------------------------------

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
        overflow-hidden
        bg-[#0B0B09]
        py-28
        text-white
        md:py-36
        lg:py-40
        scroll-mt-24
        mt-28
      "
    >

      {/* =========================================
          Background Atmosphere
      ========================================= */}

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

      {/* Vertical cinematic lines */}

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

        {/* =========================================
            Section Label
        ========================================= */}

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
            01
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
            Solar Power Engineering
          </span>

        </div>


        {/* =========================================
            Main Content
        ========================================= */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-24
          "
        >

          {/* =======================================
              LEFT CONTENT
          ======================================= */}

          <div>

            <h2
              ref={titleRef}
              className="
                max-w-3xl
                text-2xl
                font-bold
                leading-[0.98]
                tracking-[-0.045em]
                md:text-6xl
                lg:text-[4.5rem]
              "
            >

              I don't just design

              <span className="block text-amber-400">
                solar systems.
              </span>

              <span className="mt-3 block text-white/90">
                I engineer how
                <br className="hidden md:block" />
                energy moves.
              </span>

            </h2>


            {/* ---------------------------------------
                Description
            --------------------------------------- */}

            <div
              ref={textRef}
              className="
                mt-9
                max-w-xl
                space-y-5
                text-[15px]
                leading-[1.85]
                text-white/50
                md:text-base
              "
            >

              <p>
                I'm Ibrahim, a Solar Power Engineer focused
                on transforming solar energy potential into
                efficient, reliable and practical PV systems.
              </p>

              <p>
                My approach combines electrical engineering,
                system design and performance analysis to
                create solutions that are built for
                real-world conditions.
              </p>

            </div>


            {/* ---------------------------------------
                Engineering Focus
            --------------------------------------- */}

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

              {/* Card 01 */}

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

                <h3 className="mt-5 text-sm font-semibold">
                  Solar PV Design
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[180px]
                    text-xs
                    leading-relaxed
                    text-white/30
                  "
                >
                  System sizing, configuration and optimization.
                </p>

              </div>


              {/* Card 02 */}

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

                <h3 className="mt-5 text-sm font-semibold">
                  Electrical Engineering
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[180px]
                    text-xs
                    leading-relaxed
                    text-white/30
                  "
                >
                  Electrical analysis, protection and power systems.
                </p>

              </div>


              {/* Card 03 */}

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

                <h3 className="mt-5 text-sm font-semibold">
                  Performance
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[180px]
                    text-xs
                    leading-relaxed
                    text-white/30
                  "
                >
                  Efficiency analysis and system optimization.
                </p>

              </div>

            </div>

          </div>


          {/* =======================================
              RIGHT — YOUR ORIGINAL ORBIT
          ======================================= */}

          <div
            ref={visualRef}
            className="
              relative
              w-full
            "
          >

            <div
              className="
                relative
                mx-auto
                aspect-square
                max-w-[520px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-[#151511]
              "
            >

              {/* -----------------------------------
                  Technical Grid
              ----------------------------------- */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.08]
                  bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                  bg-[size:50px_50px]
                "
              />


              {/* -----------------------------------
                  Central Sun
              ----------------------------------- */}

              <div
                className="
                  solar-glow
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-32
                  h-32
                  md:w-40
                  md:h-40
                  rounded-full
                  bg-amber-400/20
                  blur-2xl
                "
              />

              <div
                className="
                  solar-core
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-20
                  h-20
                  md:w-24
                  md:h-24
                  rounded-full
                  bg-amber-400
                  shadow-[0_0_80px_rgba(245,158,11,0.45)]
                "
              />


              {/* -----------------------------------
                  Main Orbit
              ----------------------------------- */}

              <div
                className="
                  solar-orbit
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[65%]
                  h-[65%]
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
                    -translate-x-1/2
                    w-4
                    h-4
                    rounded-full
                    bg-amber-300
                    shadow-[0_0_20px_rgba(251,191,36,0.8)]
                  "
                />

              </div>


              {/* -----------------------------------
                  Second Orbit
              ----------------------------------- */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[82%]
                  h-[82%]
                  rounded-full
                  border
                  border-white/5
                "
              />


              {/* -----------------------------------
                  Top Label
              ----------------------------------- */}

              <div
                className="
                  absolute
                  top-7
                  left-7
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/30
                "
              >
                Solar Engineering
              </div>


              {/* Small index */}

              <div
                className="
                  absolute
                  top-7
                  right-7
                  font-mono
                  text-[9px]
                  tracking-widest
                  text-white/20
                "
              >
                01 / 03
              </div>


              {/* -----------------------------------
                  Bottom Data
              ----------------------------------- */}

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
                      text-white/30
                      uppercase
                      tracking-widest
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
                    Clean
                  </p>

                </div>


                {/* Focus */}

                <div className="text-right">

                  <p
                    className="
                      text-xs
                      text-white/30
                      uppercase
                      tracking-widest
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
                    PV Systems
                  </p>

                </div>

              </div>

            </div>


            {/* -----------------------------------
                Visual Caption
            ----------------------------------- */}

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
                From sunlight to performance
              </span>

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-widest
                  text-amber-400/40
                "
              >
                SOL / PV / 001
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            Divider
        ========================================= */}

        <div
          ref={dividerRef}
          className="
            mt-20
            h-px
            w-full
            bg-gradient-to-r
            from-amber-400/40
            via-white/10
            to-transparent
            md:mt-28
          "
        />


        {/* =========================================
            Technical Environment
        ========================================= */}

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