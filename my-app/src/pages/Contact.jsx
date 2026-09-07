import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const nodeRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);

  const infoRef = useRef(null);
  const emailRef = useRef(null);
  const linkedinRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);

  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =====================================================
      // DESKTOP
      // =====================================================

      mm.add("(min-width: 768px)", () => {
        gsap.set(
          [
            eyebrowRef.current,
            titleRef.current,
            subtitleRef.current,
            infoRef.current,
            emailRef.current,
            linkedinRef.current,
            phoneRef.current,
            addressRef.current,
            footerRef.current,
          ],
          {
            autoAlpha: 0,
          }
        );

        gsap.set(titleRef.current, {
          y: 90,
          filter: "blur(14px)",
        });

        gsap.set(subtitleRef.current, {
          y: 35,
        });

        gsap.set(infoRef.current, {
          y: 50,
        });

        gsap.set(
          [
            emailRef.current,
            linkedinRef.current,
            phoneRef.current,
            addressRef.current,
          ],
          {
            y: 25,
          }
        );

        gsap.set(lineLeftRef.current, {
          scaleX: 0,
          transformOrigin: "right center",
        });

        gsap.set(lineRightRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(nodeRef.current, {
          scale: 0,
          opacity: 0,
        });

        gsap.set(footerRef.current, {
          y: 20,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            end: "bottom 82%",
            scrub: 1.2,
          },
        });

        // ===================================================
        // EYEBROW
        // ===================================================

        tl.to(eyebrowRef.current, {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        // ===================================================
        // CONNECTION LINES
        // ===================================================

        tl.to(
          lineLeftRef.current,
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.25"
        );

        tl.to(
          lineRightRef.current,
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
          },
          "<"
        );

        // ===================================================
        // CENTRAL NODE
        // ===================================================

        tl.to(
          nodeRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
          },
          "-=0.5"
        );

        // ===================================================
        // TITLE
        // ===================================================

        tl.to(
          titleRef.current,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.25"
        );

        tl.to(
          subtitleRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        );

        // ===================================================
        // CONTACT AREA
        // ===================================================

        tl.to(
          infoRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.15"
        );

        tl.to(
          [
            emailRef.current,
            linkedinRef.current,
            phoneRef.current,
            addressRef.current,
          ],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35"
        );

        // ===================================================
        // FOOTER
        // ===================================================

        tl.to(
          footerRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );

        // ===================================================
        // AMBIENT NODE
        // ===================================================

        gsap.to(nodeRef.current, {
          boxShadow:
            "0 0 12px rgba(251,191,36,.9), 0 0 35px rgba(245,158,11,.35)",
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "sine.inOut",
        });
      });

      // =====================================================
      // MOBILE
      // =====================================================

      mm.add("(max-width: 767px)", () => {
        gsap.set(
          [
            eyebrowRef.current,
            titleRef.current,
            subtitleRef.current,
            infoRef.current,
            emailRef.current,
            linkedinRef.current,
            phoneRef.current,
            addressRef.current,
            footerRef.current,
          ],
          {
            autoAlpha: 0,
            y: 25,
          }
        );

        gsap.set(nodeRef.current, {
          scale: 0,
          opacity: 0,
        });

        gsap.set(
          [
            lineLeftRef.current,
            lineRightRef.current,
          ],
          {
            scaleX: 0,
          }
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });

        tl.to(
          [lineLeftRef.current, lineRightRef.current],
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          }
        );

        tl.to(
          nodeRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
          },
          "-=0.35"
        );

        tl.to(
          [
            eyebrowRef.current,
            titleRef.current,
            subtitleRef.current,
          ],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.15"
        );

        tl.to(
          [
            infoRef.current,
            emailRef.current,
            linkedinRef.current,
            phoneRef.current,
            addressRef.current,
            footerRef.current,
          ],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.25"
        );
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#090908]
        text-white
        scroll-mt-24
        mt-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main ambient glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-amber-500/[0.025]
            blur-[170px]
          "
        />

        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Side lines */}

        <div
          className="
            absolute
            bottom-0
            left-[7%]
            top-0
            w-px
            bg-white/[0.035]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[7%]
            top-0
            w-px
            bg-white/[0.035]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#090908_88%)]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          justify-between
          px-6
          py-10
          sm:px-10
          lg:px-16
          lg:py-12
          xl:px-24
        "
      >
        {/* ===================================================
            TOP
        ==================================================== */}

        <div
          ref={eyebrowRef}
          className="
            flex
            items-center
            justify-between
            font-mono
            text-[8px]
            uppercase
            tracking-[0.4em]
            text-white/20
          "
        >
          <span>06 / Contact</span>

          <span>Final Connection</span>
        </div>

        {/* ===================================================
            CONNECTION GRAPHIC
        ==================================================== */}

        <div className="relative mt-10 flex items-center justify-center">
          {/* Left line */}

          <div
            ref={lineLeftRef}
            className="
              absolute
              right-1/2
              top-1/2
              h-px
              w-[35vw]
              max-w-[500px]
              origin-right
              bg-gradient-to-l
              from-amber-400/70
              to-transparent
            "
          />

          {/* Right line */}

          <div
            ref={lineRightRef}
            className="
              absolute
              left-1/2
              top-1/2
              h-px
              w-[35vw]
              max-w-[500px]
              origin-left
              bg-gradient-to-r
              from-amber-400/70
              to-transparent
            "
          />

          {/* Central node */}

          <div
            ref={nodeRef}
            className="
              relative
              z-10
              h-3
              w-3
              rounded-full
              bg-amber-300
              shadow-[0_0_18px_rgba(251,191,36,.9)]
            "
          >
            <div
              className="
                absolute
                -inset-3
                rounded-full
                border
                border-amber-400/20
              "
            />

            <div
              className="
                absolute
                -inset-6
                rounded-full
                border
                border-amber-400/10
              "
            />
          </div>
        </div>

        {/* ===================================================
            HERO
        ==================================================== */}

        <div className="mx-auto mt-12 w-full max-w-6xl text-center">
          <div
            ref={titleRef}
            className="
              text-[clamp(4rem,11vw,10rem)]
              font-light
              uppercase
              leading-[0.8]
              tracking-[-0.075em]
            "
          >
            Let's
            <br />

            <span className="text-white/20">
              Connect.
            </span>
          </div>

          <div
            ref={subtitleRef}
            className="
              mx-auto
              mt-8
              max-w-xl
              text-sm
              leading-7
              text-white/30
              sm:text-base
              sm:leading-8
            "
          >
            Have a solar project, engineering challenge,
            or an idea worth building?
            <br className="hidden sm:block" />
            Let's turn it into something real.
          </div>
        </div>

        {/* ===================================================
            CONTACT INFORMATION
        ==================================================== */}

        <div
          ref={infoRef}
          className="
            mx-auto
            mt-16
            w-full
            max-w-6xl
          "
        >
          <div
            className="
              grid
              border-y
              border-white/5
              lg:grid-cols-3
            "
          >
            {/* EMAIL */}

         <a
  ref={emailRef}
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ebrahimmohmohamed@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    border-b
    border-white/5
    px-5
    py-7
    transition-colors
    duration-500
    hover:bg-amber-400
    lg:border-b-0
    lg:border-r
  "
>
  <div
    className="
      font-mono
      text-[7px]
      uppercase
      tracking-[0.35em]
      text-white/20
      transition-colors
      duration-500
      group-hover:text-black/50
    "
  >
    01 / Email
  </div>

  <div
    className="
      mt-4
      break-all
      text-sm
      text-white/70
      transition-colors
      duration-500
      group-hover:text-black
      sm:text-base
    "
  >
    ebrahimmohmohamed@gmail.com
  </div>

  <div
    className="
      absolute
      right-5
      top-7
      text-lg
      text-white/20
      transition-all
      duration-500
      group-hover:translate-x-1
      group-hover:text-black
    "
  >
    ↗
  </div>
</a>

            {/* LINKEDIN */}

            <a
              ref={linkedinRef}
              href="https://www.linkedin.com/in/ibrahim-mohamed-14b544264/"
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                border-b
                border-white/5
                px-5
                py-7
                transition-colors
                duration-500
                hover:bg-amber-400
                lg:border-b-0
                lg:border-r
              "
            >
              <div
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.35em]
                  text-white/20
                  transition-colors
                  duration-500
                  group-hover:text-black/50
                "
              >
                02 / LinkedIn
              </div>

              <div
                className="
                  mt-4
                  text-sm
                  text-white/70
                  transition-colors
                  duration-500
                  group-hover:text-black
                  sm:text-base
                "
              >
                linkedin.com/in/ibrahim-mohamed
              </div>

              <div
                className="
                  absolute
                  right-5
                  top-7
                  text-lg
                  text-white/20
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:text-black
                "
              >
                ↗
              </div>
            </a>

            {/* PHONE */}

            <a
              ref={phoneRef}
              href="tel:01024501468"
              className="
                group
                relative
                px-5
                py-7
                transition-colors
                duration-500
                hover:bg-amber-400
              "
            >
              <div
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.35em]
                  text-white/20
                  transition-colors
                  duration-500
                  group-hover:text-black/50
                "
              >
                03 / Phone
              </div>

              <div
                className="
                  mt-4
                  text-sm
                  tracking-[0.08em]
                  text-white/70
                  transition-colors
                  duration-500
                  group-hover:text-black
                  sm:text-base
                "
              >
                01024501468
              </div>

              <div
                className="
                  absolute
                  right-5
                  top-7
                  text-lg
                  text-white/20
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:text-black
                "
              >
                ↗
              </div>
            </a>
          </div>

          {/* =================================================
              ADDRESS
          ================================================== */}

          <div
            ref={addressRef}
            className="
              mt-6
              flex
              flex-col
              gap-2
              font-mono
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-white/15
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span>
              04 / Location
            </span>

            <span>
              10 Hamdy Emam St., New Nozha,
              El Nozha, Cairo
            </span>
          </div>
        </div>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div
          ref={footerRef}
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-white/5
            pt-7
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
        </div>
      </div>
    </section>
  );
}