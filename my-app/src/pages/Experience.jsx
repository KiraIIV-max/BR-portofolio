import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// =========================================================
// EXPERIENCE DATA
// =========================================================

const stages = [
  {
    id: '01',
    label: 'PV DESIGN',
    title: 'Engineering',
    accent: 'the system.',
    text:
      'Developing photovoltaic system designs from project requirements into practical electrical configurations — from array sizing and string configuration to inverter selection and AC/DC design.',
    meta: 'SketchUp · PVsyst · AutoCAD',
  },
  {
    id: '02',
    label: 'SIMULATION',
    title: 'Validating',
    accent: 'the performance.',
    text:
      'Using PVsyst simulation to evaluate energy yield, losses, shading effects and expected system performance before moving the design toward execution.',
    meta: 'PVsyst · Yield · Loss Analysis',
  },
  {
    id: '03',
    label: 'CAD DOCUMENTATION',
    title: 'Translating',
    accent: 'design into drawings.',
    text:
      'Turning engineering calculations into clear technical documentation including single line diagrams, string layouts, cable routing, earthing layouts and structural details.',
    meta: 'AutoCAD · SLDs · Layouts',
  },
  {
    id: '04',
    label: 'TENDERING',
    title: 'Connecting',
    accent: 'design to business.',
    text:
      'Supporting technical and commercial decision-making through BOQs, technical offers, cost evaluation, vendor assessment and project tendering.',
    meta: 'BOQ · ROI · Vendor Evaluation',
  },
  {
    id: '05',
    label: 'ENGINEERING COORDINATION',
    title: 'Moving',
    accent: 'projects forward.',
    text:
      'Connecting design, procurement and project requirements through technical coordination, vendor communication, site support and practical engineering problem-solving.',
    meta: 'Coordination · Procurement · Site Support',
  },
  {
    id: '06',
    label: 'R&D / AUTOMATION',
    title: 'Automating',
    accent: 'engineering decisions.',
    text:
      'Developing an Excel-based hybrid PV design and sizing automation tool to streamline calculations, improve consistency and accelerate technical evaluation.',
    meta: 'Excel · PV Sizing · Automation',
  },
];

// =========================================================
// SOLAR FIELD PANELS
// =========================================================

const panels = [
  [0, 0],
  [70, 0],
  [140, 0],
  [210, 0],
  [280, 0],
  [350, 0],

  [35, 45],
  [105, 45],
  [175, 45],
  [245, 45],
  [315, 45],
  [385, 45],

  [0, 90],
  [70, 90],
  [140, 90],
  [210, 90],
  [280, 90],
  [350, 90],
];

// =========================================================
// COMPONENT
// =========================================================

const Experience = () => {
  const sectionRef = useRef(null);

  const introRef = useRef(null);

  const sunRef = useRef(null);
  const sunGlowRef = useRef(null);

  const horizonRef = useRef(null);
  const fieldRef = useRef(null);
  const fieldGroundRef = useRef(null);

  const energyRef = useRef(null);
  const energyBeamRef = useRef(null);
  const energyParticleRef = useRef(null);

  const gridRef = useRef(null);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const stageRef = useRef(null);
  const counterRef = useRef(null);

  const finalRef = useRef(null);
  const scaleRef = useRef(null);

  const panelRefs = useRef([]);
  const stageTextRefs = useRef([]);

  const internshipRef = useRef(null);

  // =========================================================
  // GSAP
  // =========================================================

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================
      // DESKTOP
      // =====================================================

      mm.add('(min-width: 1024px)', () => {
        // ===================================================
        // INITIAL STATES
        // ===================================================

        gsap.set(introRef.current, {
          autoAlpha: 1,
        });

        gsap.set(sunRef.current, {
          autoAlpha: 0,
          scale: 0.55,
          y: 80,
        });

        gsap.set(sunGlowRef.current, {
          scale: 0.7,
          opacity: 0.3,
        });

        gsap.set(horizonRef.current, {
          autoAlpha: 0,
          scaleX: 0,
        });

        gsap.set(fieldRef.current, {
          autoAlpha: 0,
          y: 80,
          scale: 0.92,
        });

        gsap.set(fieldGroundRef.current, {
          opacity: 0,
          scaleX: 0.8,
        });

        gsap.set(panelRefs.current, {
          autoAlpha: 0,
          y: 50,
          scale: 0.8,
        });

        gsap.set(energyRef.current, {
          autoAlpha: 0,
        });

        gsap.set(energyBeamRef.current, {
          scaleX: 0,
          transformOrigin: 'left center',
        });

        gsap.set(energyParticleRef.current, {
          xPercent: -100,
          opacity: 0,
        });

        gsap.set(gridRef.current, {
          autoAlpha: 0,
          y: 25,
        });

        gsap.set(titleRef.current, {
          autoAlpha: 0,
          y: 35,
        });

        gsap.set(descriptionRef.current, {
          autoAlpha: 0,
          y: 25,
        });

        gsap.set(stageRef.current, {
          autoAlpha: 0,
          y: 20,
        });

        gsap.set(stageTextRefs.current, {
          autoAlpha: 0,
          y: 35,
          filter: 'blur(8px)',
        });

        gsap.set(finalRef.current, {
          autoAlpha: 0,
        });

        gsap.set(scaleRef.current, {
          scaleX: 0,
          transformOrigin: 'left center',
        });

        gsap.set(internshipRef.current, {
          autoAlpha: 0,
          y: 30,
        });

        // ===================================================
        // MASTER SCROLL TIMELINE
        // ===================================================

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=7600',
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },

          defaults: {
            ease: 'power2.out',
          },
        });

        // ===================================================
        // 01 — INTRO
        // ===================================================

        tl.to(introRef.current, {
          autoAlpha: 0,
          scale: 1.04,
          y: -25,
          duration: 0.8,
          ease: 'power2.inOut',
        });

        // ===================================================
        // 02 — SUNRISE
        // ===================================================

        tl.to(
          sunRef.current,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 1.4,
            ease: 'power3.out',
          },
          '-=0.2'
        );

        tl.to(
          sunGlowRef.current,
          {
            scale: 1.15,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
          },
          '<'
        );

        // Sun moves upward
        tl.to(
          sunRef.current,
          {
            y: -80,
            scale: 1.08,
            duration: 3,
            ease: 'none',
          },
          '+=0.2'
        );

        // ===================================================
        // 03 — HORIZON
        // ===================================================

        tl.to(
          horizonRef.current,
          {
            autoAlpha: 1,
            scaleX: 1,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=2.5'
        );

        // ===================================================
        // 04 — SOLAR FIELD
        // ===================================================

        tl.to(
          fieldRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1.8'
        );

        tl.to(
          fieldGroundRef.current,
          {
            opacity: 1,
            scaleX: 1,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.8'
        );

        // ===================================================
        // 05 — PANELS BUILD
        // ===================================================

        tl.to(
          panelRefs.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            stagger: {
              each: 0.055,
              from: 'center',
            },
            ease: 'power3.out',
          },
          '-=0.6'
        );

        // ===================================================
        // 06 — ENERGY FLOW
        // ===================================================

        tl.to(
          energyRef.current,
          {
            autoAlpha: 1,
            duration: 0.5,
          },
          '+=0.1'
        );

        tl.to(
          energyBeamRef.current,
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power3.inOut',
          },
          '-=0.2'
        );

        tl.to(
          energyParticleRef.current,
          {
            xPercent: 100,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut',
          },
          '-=0.8'
        );

        // ===================================================
        // 07 — GRID CONNECTION
        // ===================================================

        tl.to(
          gridRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        );

        // ===================================================
        // 08 — MAIN EXPERIENCE INTRO
        // ===================================================

        tl.to(
          titleRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '+=0.2'
        );

        tl.to(
          descriptionRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.45'
        );

        // ===================================================
        // 09 — EXPERIENCE STAGES
        // ===================================================

        stages.forEach((stage, index) => {
          const current =
            stageTextRefs.current[index];

          if (!current) return;

          // Stage container
          tl.to(
            stageRef.current,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: 'power2.out',
            },
            '+=0.15'
          );

          // Stage content
          tl.to(
            current,
            {
              autoAlpha: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.2'
          );

          // Counter
          tl.to(
            counterRef.current,
            {
              textContent: stage.id,
              duration: 0.35,
              ease: 'none',
              snap: {
                textContent: 1,
              },
            },
            '<'
          );

          // Hold
          tl.to(
            {},
            {
              duration: 0.8,
            }
          );

          // Exit
          tl.to(
            current,
            {
              autoAlpha: 0,
              y: -25,
              filter: 'blur(6px)',
              duration: 0.65,
              ease: 'power2.inOut',
            },
            '+=0.05'
          );
        });

        // ===================================================
        // 10 — INTERNSHIP
        // ===================================================

        tl.to(
          [
            sunRef.current,
            horizonRef.current,
            fieldRef.current,
            energyRef.current,
            gridRef.current,
            titleRef.current,
            descriptionRef.current,
            stageRef.current,
          ],
          {
            autoAlpha: 0,
            y: -20,
            duration: 1,
            ease: 'power3.inOut',
          },
          '+=0.2'
        );

        tl.to(
          internshipRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.25'
        );

        // ===================================================
        // 11 — FINAL SCALE
        // ===================================================

        tl.to(
          internshipRef.current,
          {
            autoAlpha: 0,
            y: -20,
            duration: 0.8,
            ease: 'power3.inOut',
          },
          '+=0.7'
        );

        tl.to(
          finalRef.current,
          {
            autoAlpha: 1,
            duration: 1.1,
            ease: 'power3.out',
          },
          '-=0.3'
        );

        tl.to(
          scaleRef.current,
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power3.inOut',
          },
          '-=0.5'
        );

        // ===================================================
        // AMBIENT ANIMATIONS
        // ===================================================

        gsap.to(sunGlowRef.current, {
          scale: 1.08,
          opacity: 0.85,
          repeat: -1,
          yoyo: true,
          duration: 2.8,
          ease: 'sine.inOut',
        });

        gsap.to(energyParticleRef.current, {
          opacity: 0.65,
          repeat: -1,
          yoyo: true,
          duration: 1.1,
          ease: 'sine.inOut',
        });

        gsap.to(fieldGroundRef.current, {
          y: -4,
          repeat: -1,
          yoyo: true,
          duration: 5,
          ease: 'sine.inOut',
        });
      });

      // =====================================================
      // MOBILE
      // =====================================================

      mm.add('(max-width: 1023px)', () => {
        // ---------------------------------------------------
        // Initial states
        // ---------------------------------------------------

        gsap.set(introRef.current, {
          display: 'none',
        });

        gsap.set(
          [
            sunRef.current,
            horizonRef.current,
            fieldRef.current,
            energyRef.current,
            gridRef.current,
            titleRef.current,
            descriptionRef.current,
            stageRef.current,
            finalRef.current,
            internshipRef.current,
          ],
          {
            opacity: 0,
          }
        );

        gsap.set(stageTextRefs.current, {
          opacity: 0,
          y: 25,
          filter: 'blur(5px)',
        });

        // ---------------------------------------------------
        // Solar scene
        // ---------------------------------------------------

        gsap.to(
          [
            sunRef.current,
            horizonRef.current,
            fieldRef.current,
          ],
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: 'power3.out',

            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              once: true,
            },
          }
        );

        // ---------------------------------------------------
        // Energy
        // ---------------------------------------------------

        gsap.to(energyRef.current, {
          opacity: 1,
          duration: 0.8,

          scrollTrigger: {
            trigger: energyRef.current,
            start: 'top 85%',
            once: true,
          },
        });

        // ---------------------------------------------------
        // Grid
        // ---------------------------------------------------

        gsap.to(gridRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,

          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            once: true,
          },
        });

        // ---------------------------------------------------
        // Main title
        // ---------------------------------------------------

        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 82%',
            once: true,
          },
        });

        // ---------------------------------------------------
        // Description
        // ---------------------------------------------------

        gsap.to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            once: true,
          },
        });

        // ---------------------------------------------------
        // Experience stages
        // ---------------------------------------------------

        stageTextRefs.current.forEach(
          (text, index) => {
            if (!text) return;

            gsap.to(text, {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.8,
              delay: index * 0.08,
              ease: 'power3.out',

              scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                once: true,
              },
            });
          }
        );

        // ---------------------------------------------------
        // Internship
        // ---------------------------------------------------

        gsap.to(internshipRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: internshipRef.current,
            start: 'top 85%',
            once: true,
          },
        });

        // ---------------------------------------------------
        // Final
        // ---------------------------------------------------

        gsap.to(finalRef.current, {
          opacity: 1,
          duration: 1,

          scrollTrigger: {
            trigger: finalRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#080807]
        text-white
        scroll-mt-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Solar atmosphere */}

        <div
          className="
            absolute
            left-1/2
            top-[5%]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-amber-500/[0.045]
            blur-[160px]
          "
        />

        {/* Technical grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Ground darkness */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[50%]
            bg-gradient-to-t
            from-black
            via-black/50
            to-transparent
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.65)_100%)]
          "
        />
      </div>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div
        ref={introRef}
        className="
          absolute
          inset-0
          z-50
          flex
          min-h-screen
          items-center
          justify-center
          px-6
        "
      >
        <div className="text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-amber-400" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.45em]
                text-amber-400/70
              "
            >
              05 / Experience
            </span>

            <span className="h-px w-8 bg-amber-400" />
          </div>

          <h2
            className="
              text-5xl
              font-light
              leading-none
              tracking-[-0.05em]
              sm:text-7xl
              lg:text-[8rem]
            "
          >
            The Engineer
            <br />

            <span className="text-white/20">
              Behind The Systems.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-md
              text-xs
              leading-6
              text-white/30
            "
          >
            Turning photovoltaic engineering into
            practical, documented and commercially
            viable energy systems.
          </p>
        </div>
      </div>

      {/* =====================================================
          SUN
      ===================================================== */}

      <div
        ref={sunRef}
        className="
          absolute
          left-1/2
          top-[17%]
          z-10
          h-24
          w-24
          -translate-x-1/2
          rounded-full
          bg-amber-300
          shadow-[0_0_50px_rgba(251,191,36,.55),0_0_150px_rgba(245,158,11,.2)]
          sm:h-32
          sm:w-32
        "
      >
        <div
          ref={sunGlowRef}
          className="
            absolute
            inset-[-30px]
            rounded-full
            border
            border-amber-300/10
          "
        />

        <div
          className="
            absolute
            inset-[-55px]
            rounded-full
            border
            border-amber-300/5
          "
        />
      </div>

      {/* =====================================================
          HORIZON
      ===================================================== */}

      <div
        ref={horizonRef}
        className="
          absolute
          inset-x-0
          bottom-[31%]
          z-10
          h-px
          origin-center
          bg-gradient-to-r
          from-transparent
          via-amber-400/30
          to-transparent
        "
      />

      {/* =====================================================
          SOLAR FIELD
      ===================================================== */}

      <div
        ref={fieldRef}
        className="
          absolute
          bottom-[18%]
          left-1/2
          z-10
          h-[230px]
          w-[650px]
          -translate-x-1/2
          sm:h-[300px]
          sm:w-[850px]
        "
      >
        {/* Ground */}

        <div
          ref={fieldGroundRef}
          className="
            absolute
            inset-x-[-20%]
            bottom-0
            h-[55%]
            origin-center
            rounded-[50%]
            border-t
            border-white/10
            bg-gradient-to-b
            from-white/[0.025]
            to-transparent
          "
        />

        {/* Panels */}

        {panels.map(([x, y], index) => (
          <div
            key={`panel-${index}`}
            ref={(el) => {
              panelRefs.current[index] = el;
            }}
            className="
              absolute
              h-[30px]
              w-[55px]
              will-change-transform
              border
              border-amber-400/20
              bg-gradient-to-br
              from-slate-800
              via-slate-900
              to-black
              shadow-[0_0_20px_rgba(245,158,11,.03)]
              sm:h-[38px]
              sm:w-[70px]
            "
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform:
                'rotate(-12deg) skewX(-12deg)',
            }}
          >
            <div className="absolute inset-1 border border-white/5" />

            <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />

            <div className="absolute inset-y-0 left-1/2 w-px bg-white/5" />

            <div className="absolute inset-0 bg-gradient-to-br from-amber-300/[0.02] to-transparent" />
          </div>
        ))}

        {/* Inverter */}

        <div
          className="
            absolute
            bottom-[15px]
            right-[2%]
            h-20
            w-14
            border
            border-white/15
            bg-[#0B0B09]
            shadow-[0_10px_40px_rgba(0,0,0,.4)]
            sm:h-24
            sm:w-16
          "
        >
          <div
            className="
              mx-auto
              mt-3
              h-1.5
              w-1.5
              rounded-full
              bg-amber-400
              shadow-[0_0_8px_rgba(245,158,11,.9)]
            "
          />

          <div className="mt-3 space-y-1 px-2">
            <div className="h-px bg-white/10" />
            <div className="h-px bg-white/10" />
            <div className="h-px bg-white/10" />
          </div>

          <span
            className="
              absolute
              -bottom-5
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              font-mono
              text-[6px]
              uppercase
              tracking-[0.2em]
              text-white/20
            "
          >
            INVERTER
          </span>
        </div>
      </div>

      {/* =====================================================
          ENERGY FLOW
      ===================================================== */}

      <div
        ref={energyRef}
        className="
          absolute
          inset-x-0
          bottom-[38%]
          z-20
        "
      >
        <div className="mx-auto w-[min(900px,90vw)]">
          <div className="relative overflow-hidden">
            {/* Base line */}

            <div
              className="
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            />

            {/* Energy beam */}

            <div
              ref={energyBeamRef}
              className="
                absolute
                left-0
                top-1/2
                h-px
                w-full
                origin-left
                -translate-y-1/2
                bg-gradient-to-r
                from-transparent
                via-amber-400
                to-transparent
                shadow-[0_0_12px_rgba(245,158,11,.8)]
              "
            />

            {/* Moving particle */}

            <div
              ref={energyParticleRef}
              className="
                absolute
                left-0
                top-1/2
                h-1
                w-20
                -translate-y-1/2
                rounded-full
                bg-amber-300
                shadow-[0_0_15px_rgba(245,158,11,.9)]
              "
            />
          </div>

          <div
            className="
              mt-2
              text-right
              font-mono
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-amber-400/50
            "
          >
            Engineering Flow
          </div>
        </div>
      </div>

      {/* =====================================================
          GRID CONNECTION
      ===================================================== */}

      <div
        ref={gridRef}
        className="
          absolute
          bottom-[28%]
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-5
        "
      >
        <div className="h-px w-20 bg-gradient-to-r from-amber-400/60 to-white/10" />

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-white/10
            bg-black/50
            backdrop-blur-sm
          "
        >
          <div className="h-3 w-3 border border-amber-400/60" />
        </div>

        <div className="h-px w-20 bg-gradient-to-r from-white/10 to-amber-400/60" />

        <span
          className="
            font-mono
            text-[7px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          MASHREQ
        </span>
      </div>

      {/* =====================================================
          MAIN TITLE
      ===================================================== */}

      <div
        ref={titleRef}
        className="
          absolute
          left-6
          top-[16%]
          z-30
          sm:left-10
          lg:left-14
          xl:left-20
        "
      >
        <div
          className="
            text-[9px]
            uppercase
            tracking-[0.45em]
            text-amber-400/60
          "
        >
          Professional Experience
        </div>

        <h3
          className="
            mt-4
            max-w-[600px]
            text-4xl
            font-light
            leading-[0.95]
            tracking-[-0.04em]
            sm:text-5xl
            lg:text-6xl
          "
        >
          Technical Office Engineer
          <br />

          <span className="text-amber-400">
            at Mashreq for Energy Systems.
          </span>
        </h3>
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <div
        ref={descriptionRef}
        className="
          absolute
          bottom-[9%]
          left-6
          z-30
          max-w-[480px]
          sm:left-10
          lg:left-14
          xl:left-20
        "
      >
        <p
          className="
            text-xs
            leading-6
            text-white/35
            sm:text-sm
          "
        >
          Cairo, Egypt · 2025 — Present
          <br />
          Designing, simulating and documenting
          photovoltaic energy systems while supporting
          tendering, cost evaluation and engineering
          coordination.
        </p>
      </div>

      {/* =====================================================
          EXPERIENCE STAGE
      ===================================================== */}

      <div
        ref={stageRef}
        className="
          absolute
          right-6
          top-1/2
          z-40
          w-[340px]
          -translate-y-1/2
          sm:right-10
          sm:w-[420px]
          lg:right-14
          lg:w-[500px]
          xl:right-20
        "
      >
        {/* Header */}

        <div
          className="
            mb-7
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-4
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/25
            "
          >
            Mashreq / Engineering Signal
          </span>

          <span
            ref={counterRef}
            className="
              font-mono
              text-xs
              text-amber-400
            "
          >
            01
          </span>
        </div>

        {/* Stage content */}

        <div className="relative min-h-[360px]">
          {stages.map((stage, index) => (
            <div
              key={`stage-${stage.id}`}
              ref={(el) => {
                stageTextRefs.current[index] =
                  el;
              }}
              className="
                absolute
                left-0
                top-0
                w-full
                will-change-transform
              "
            >
              <div
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.35em]
                  text-amber-400
                "
              >
                {stage.id}
              </div>

              <div
                className="
                  mt-4
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-white/30
                "
              >
                {stage.label}
              </div>

              <h4
                className="
                  mt-4
                  text-4xl
                  font-medium
                  leading-[0.95]
                  tracking-[-0.035em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {stage.title}

                <span className="block text-amber-400">
                  {stage.accent}
                </span>
              </h4>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-white/40
                "
              >
                {stage.text}
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-8 bg-amber-400/50" />

                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-white/25
                  "
                >
                  {stage.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          INTERNSHIP
      ===================================================== */}

      <div
        ref={internshipRef}
        className="
          absolute
          inset-0
          z-50
          flex
          items-center
          justify-center
          px-6
        "
      >
        <div className="w-full max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-amber-400/60
                "
              >
                Summer 2025
              </div>

              <h3
                className="
                  mt-5
                  text-5xl
                  font-light
                  leading-[0.92]
                  tracking-[-0.05em]
                  sm:text-6xl
                  lg:text-[7rem]
                "
              >
                Technical Office
                <br />

                <span className="text-white/20">
                  Engineer — Internship.
                </span>
              </h3>
            </div>

            <div className="lg:pb-2">
              <div className="border-l border-amber-400/30 pl-6">
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/20
                  "
                >
                  Mashreq for Energy Systems
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  Shop drawings · As-built plans ·
                  Technical submissions · Solar pumping ·
                  On-grid PV studies
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Shop Drawings',
                  'As-Built',
                  'Technical Submissions',
                  'Solar Pumping',
                  'On-Grid PV',
                ].map((item) => (
                  <span
                    key={item}
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
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}

      <div
        ref={finalRef}
        className="
          absolute
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-[#080807]
          px-6
          text-center
        "
      >
        <div className="max-w-5xl">
          <div
            className="
              mb-6
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-amber-400/60
            "
          >
            Current Scale
          </div>

          <h3
            className="
              text-5xl
              font-light
              leading-[0.9]
              tracking-[-0.05em]
              sm:text-7xl
              lg:text-[8rem]
            "
          >
            Engineering
            <br />

            <span className="text-white/20">
              that scales.
            </span>
          </h3>

          {/* Scale line */}

          <div className="mt-8 overflow-hidden">
            <div
              ref={scaleRef}
              className="
                mx-auto
                h-px
                w-full
                origin-left
                bg-amber-400
                shadow-[0_0_15px_rgba(245,158,11,.8)]
              "
            />
          </div>

          {/* Capacity */}

          <div className="mt-8">
            <div
              className="
                text-3xl
                font-light
                tracking-tight
                text-amber-400
                sm:text-5xl
              "
            >
              17 kW

              <span className="mx-4 text-white/15">
                →
              </span>

              2.14 MW
            </div>

            <p
              className="
                mt-4
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              From individual PV systems to
              large-scale solar engineering
            </p>
          </div>

          {/* Main professional statement */}

          <div
            className="
              mt-10
              text-2xl
              font-light
              tracking-[-0.02em]
              sm:text-3xl
            "
          >
            Design.
            <span className="text-white/25">
              {' '}
              Simulate.
            </span>{' '}
            Document.
            <span className="text-white/25">
              {' '}
              Deliver.
            </span>
          </div>

          {/* R&D */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/30
            "
          >
            PV engineering supported by technical
            documentation, commercial analysis and
            automation.
          </p>
        </div>
      </div>

      {/* =====================================================
          FOOTER LABEL
      ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-6
          z-[60]
          font-mono
          text-[7px]
          uppercase
          tracking-[0.3em]
          text-white/20
          sm:left-10
        "
      >
        Solar Engineering / 05
      </div>

      <div
        className="
          absolute
          bottom-6
          right-6
          z-[60]
          font-mono
          text-[7px]
          uppercase
          tracking-[0.3em]
          text-white/20
          sm:right-10
        "
      >
        MASHREQ / 2025 — PRESENT
      </div>
    </section>
  );
};

export default Experience;