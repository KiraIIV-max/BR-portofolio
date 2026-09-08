import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaLocationDot,
} from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (pathname !== '/') {
      gsap.set('.footer-reveal', { opacity: 1, y: 0 });
      return undefined;
    }
    if (reduceMotion) {
      gsap.set('.footer-reveal', { opacity: 1, y: 0, clearProps: 'transform' });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-reveal',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      ScrollTrigger.refresh();
    }, footerRef);

    return () => ctx.revert();
  }, [pathname]);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      ref={footerRef}
      className="
        relative
        overflow-hidden
        bg-[#0B0B09]
        text-white
        border-t
        border-white/[0.07]
      "
    >
      {/* Subtle ambient glow */}
      <div
        className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          rounded-full
          bg-amber-400/[0.035]
          blur-[100px]
          pointer-events-none
        "
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          lg:px-12
          pt-16
          md:pt-20
          pb-8
        "
      >
        {/* ================================================
            MAIN FOOTER
        ================================================= */}

        <div
          className="
            footer-reveal
            grid
            grid-cols-1
            lg:grid-cols-[1.3fr_1fr]
            gap-12
            lg:gap-20
            items-end
          "
        >
          {/* Identity */}

          <div>
            <p
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-amber-400/70
              "
            >
              Renewable Energy Engineer
            </p>

            <button
              onClick={handleTop}
              className="
                group
                text-left
              "
            >
              <h2
                className="
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-light
                  tracking-[-0.04em]
                  leading-none
                "
              >
                Ibrahim
                <span
                  className="
                    text-amber-400
                    transition-opacity
                    duration-300
                    group-hover:opacity-60
                  "
                >
                  .
                </span>
              </h2>
            </button>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                md:text-base
                leading-relaxed
                text-white/40
              "
            >
              Designing efficient solar PV systems
              that turn clean energy into measurable
              performance.
            </p>
          </div>

          {/* Contact / Social */}

          <div
            className="
              grid
              grid-cols-3
              gap-3
            "
          >
            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/ibrahim-mohamed-14b544264/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                flex-col
                justify-between
                min-h-[130px]
                p-5
                border
                border-white/[0.08]
                bg-white/[0.015]
                hover:border-amber-400/30
                hover:bg-amber-400/[0.04]
                transition-all
                duration-500
              "
            >
              <FaLinkedinIn
                className="
                  text-lg
                  text-white/40
                  group-hover:text-amber-400
                  transition-colors
                  duration-300
                "
              />

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-white/35
                    group-hover:text-white/70
                    transition-colors
                  "
                >
                  LinkedIn
                </p>

                <span
                  className="
                    block
                    mt-2
                    text-[9px]
                    text-white/20
                  "
                >
                  Connect
                </span>
              </div>
            </a>

            {/* Email */}

{/* Email */}

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ebrahimmohmohamed@gmail.co"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    flex
    flex-col
    justify-between
    min-h-[130px]
    p-5
    border
    border-white/[0.08]
    bg-white/[0.015]
    hover:border-amber-400/30
    hover:bg-amber-400/[0.04]
    transition-all
    duration-500
  "
>
  <FaEnvelope
    className="
      text-lg
      text-white/40
      group-hover:text-amber-400
      transition-colors
      duration-300
    "
  />

  <div>
    <p
      className="
        text-[10px]
        uppercase
        tracking-[0.15em]
        text-white/35
        group-hover:text-white/70
        transition-colors
      "
    >
      Email
    </p>

    <span
      className="
        block
        mt-2
        text-[9px]
        text-white/20
      "
    >
      Say Hello
    </span>
  </div>
</a>
            {/* Phone */}

            <a
              href="tel:01024501468"
              className="
                group
                flex
                flex-col
                justify-between
                min-h-[130px]
                p-5
                border
                border-white/[0.08]
                bg-white/[0.015]
                hover:border-amber-400/30
                hover:bg-amber-400/[0.04]
                transition-all
                duration-500
              "
            >
              <FaPhone
                className="
                  text-lg
                  text-white/40
                  group-hover:text-amber-400
                  transition-colors
                  duration-300
                "
              />

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-white/35
                    group-hover:text-white/70
                    transition-colors
                  "
                >
                  Phone
                </p>

                <span
                  className="
                    block
                    mt-2
                    text-[9px]
                    text-white/20
                  "
                >
                  Contact
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* ================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            footer-reveal
            my-12
            md:my-16
            h-px
            bg-white/[0.07]
          "
        />

        {/* ================================================
            BOTTOM INFORMATION
        ================================================= */}

        <div
          className="
            footer-reveal
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
          "
        >
          {/* Location */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <FaLocationDot
              className="
                text-xs
                text-amber-400/60
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              Cairo, Egypt
            </span>
          </div>

          {/* Copyright */}

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/20
            "
          >
            © {new Date().getFullYear()} Ibrahim Mohamed Ibrahim
          </p>

          {/* Back to top */}

          <button
            onClick={handleTop}
            className="
              group
              flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-white/30
              hover:text-amber-400
              transition-colors
              duration-300
            "
          >
            Back to top

            <span
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                border
                border-white/[0.08]
                group-hover:border-amber-400/40
                transition-all
                duration-300
              "
            >
              <FaArrowUp
                className="
                  text-[10px]
                  group-hover:-translate-y-0.5
                  transition-transform
                  duration-300
                "
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;