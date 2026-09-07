import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

  // =========================================================
  // REFS
  // =========================================================

  const navbarRef = useRef(null);
  const logoNameRef = useRef(null);
  const logoIconRef = useRef(null);
  const logoSubtitleRef = useRef(null);
  const navLinksRef = useRef(null);
  const cvRef = useRef(null);
  const introOverlayRef = useRef(null);

  // =========================================================
  // PAGE
  // =========================================================

  const isHome = location.pathname === '/';

  // =========================================================
  // NAVIGATION LINKS
  // =========================================================

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Process', path: '/#process' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
  ];

  // =========================================================
  // SCROLL DETECTION
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // =========================================================
  // SCROLL TO SECTION
  // =========================================================

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(
        `Section with id="${id}" was not found.`
      );
      return;
    }

    const navbarHeight = 80;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });

    setActiveSection(id);
  };

  // =========================================================
  // ACTIVE SECTION DETECTION
  // =========================================================

  useEffect(() => {
    // Only detect sections on Home
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const sectionIds = [
      'about',
      'projects',
      'engineering-process',
      'experience',
      'skills',
      'contact',
    ];

    let ticking = false;

    const handleSectionDetection = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        // ===================================================
        // TOP OF HOME
        // ===================================================

        if (window.scrollY < 100) {
          setActiveSection('home');
          ticking = false;
          return;
        }

        // ===================================================
        // DETECTION LINE
        // ===================================================

        const detectionLine = 140;

        let currentSection = 'home';

        // ===================================================
        // FIND ACTIVE SECTION
        // ===================================================

        for (const id of sectionIds) {
          const section =
            document.getElementById(id);

          if (!section) continue;

          const rect =
            section.getBoundingClientRect();

          if (
            rect.top <= detectionLine &&
            rect.bottom > detectionLine
          ) {
            currentSection = id;
            break;
          }
        }

        // ===================================================
        // BOTTOM OF PAGE
        // ===================================================

        const pageBottom =
          window.innerHeight +
            window.scrollY >=
          document.documentElement.scrollHeight - 50;

        if (pageBottom) {
          currentSection = 'contact';
        }

        setActiveSection(currentSection);

        ticking = false;
      });
    };

    handleSectionDetection();

    window.addEventListener(
      'scroll',
      handleSectionDetection,
      {
        passive: true,
      }
    );

    window.addEventListener(
      'resize',
      handleSectionDetection
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleSectionDetection
      );

      window.removeEventListener(
        'resize',
        handleSectionDetection
      );
    };
  }, [isHome]);

  // =========================================================
  // HANDLE HASH AFTER NAVIGATION
  // =========================================================

  useEffect(() => {
    if (!isHome) return;

    const hash =
      window.location.hash.replace('#', '');

    if (!hash) return;

    // Wait until Home sections are mounted
    const timer = setTimeout(() => {
      scrollToSection(hash);
    }, 150);

    return () => clearTimeout(timer);
  }, [isHome, location.hash]);

  // =========================================================
  // NAVBAR BACKGROUND
  // =========================================================

  const hasBackground =
    !isHome || scrolled;

  // =========================================================
  // NAVIGATION
  // =========================================================

  const handleNavClick = (e, path) => {
    // =======================================================
    // HOME
    // =======================================================

    if (path === '/') {
      e.preventDefault();

      setIsOpen(false);
      setActiveSection('home');

      if (isHome) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        navigate('/');
      }

      return;
    }

    // =======================================================
    // HASH LINKS
    // =======================================================

    const hash = path.split('#')[1];

    if (!hash) {
      setIsOpen(false);
      return;
    }

    // =======================================================
    // ALREADY ON HOME
    // =======================================================

    if (isHome) {
      e.preventDefault();

      setIsOpen(false);

      // Update URL without jumping instantly
      window.history.replaceState(
        null,
        '',
        `/#${hash}`
      );

      scrollToSection(hash);

      return;
    }

    // =======================================================
    // OTHER PAGE
    // =======================================================

    // Let React Router navigate to Home
    // The useEffect above will then scroll to the section.
    setIsOpen(false);

    navigate(`/#${hash}`);
  };

  // =========================================================
  // GSAP INTRO
  // =========================================================

  useLayoutEffect(() => {
    // -------------------------------------------------------
    // Don't run intro on other pages
    // -------------------------------------------------------

    if (!isHome) {
      setIntroFinished(true);
      return;
    }

    const logo =
      logoNameRef.current;

    const overlay =
      introOverlayRef.current;

    if (!logo || !overlay) return;

    const ctx = gsap.context(() => {
      // -----------------------------------------------------
      // Current logo position
      // -----------------------------------------------------

      const rect =
        logo.getBoundingClientRect();

      const logoCenterX =
        rect.left +
        rect.width / 2;

      const logoCenterY =
        rect.top +
        rect.height / 2;

      // -----------------------------------------------------
      // Screen center
      // -----------------------------------------------------

      const viewportCenterX =
        window.innerWidth / 2;

      const viewportCenterY =
        window.innerHeight / 2;

      // -----------------------------------------------------
      // Distance
      // -----------------------------------------------------

      const moveX =
        viewportCenterX -
        logoCenterX;

      const moveY =
        viewportCenterY -
        logoCenterY;

      // -----------------------------------------------------
      // Target scale
      // -----------------------------------------------------

      const targetScale =
        Math.min(
          (window.innerWidth * 0.48) /
            rect.width,
          6
        );

      // -----------------------------------------------------
      // Initial logo
      // -----------------------------------------------------

      gsap.set(logo, {
        x: moveX,
        y: moveY + 180,
        scale: targetScale * 0.88,
        opacity: 0,
        transformOrigin:
          'center center',
      });

      // -----------------------------------------------------
      // Hide navbar elements
      // -----------------------------------------------------

      gsap.set(
        [
          logoIconRef.current,
          logoSubtitleRef.current,
          navLinksRef.current,
          cvRef.current,
        ],
        {
          opacity: 0,
        }
      );

      // -----------------------------------------------------
      // Blur background
      // -----------------------------------------------------

      gsap.set(overlay, {
        opacity: 1,
        backdropFilter:
          'blur(14px)',
        WebkitBackdropFilter:
          'blur(14px)',
      });

      // -----------------------------------------------------
      // Timeline
      // -----------------------------------------------------

      const tl =
        gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },

          onComplete: () => {
            setIntroFinished(true);

            window.dispatchEvent(
              new CustomEvent(
                'navbarIntroComplete'
              )
            );
          },
        });

      // =====================================================
      // 1. LOGO RISES
      // =====================================================

      tl.to(logo, {
        y: moveY,
        opacity: 1,
        scale: targetScale,
        duration: 1.15,
        ease: 'power4.out',
      });

      // =====================================================
      // 2. HOLD
      // =====================================================

      tl.to(
        {},
        {
          duration: 0.9,
        }
      );

      // =====================================================
      // 3. RETURN TO NAVBAR
      // =====================================================

      tl.to(logo, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power4.inOut',
      });

      // =====================================================
      // 4. REMOVE BLUR
      // =====================================================

      tl.to(
        overlay,
        {
          opacity: 0,
          backdropFilter:
            'blur(0px)',
          WebkitBackdropFilter:
            'blur(0px)',
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.85'
      );

      // =====================================================
      // 5. REVEAL NAVBAR
      // =====================================================

      tl.to(
        [
          logoIconRef.current,
          logoSubtitleRef.current,
          navLinksRef.current,
          cvRef.current,
        ],
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power3.out',
        },
        '-=0.35'
      );
    }, navbarRef);

    return () => ctx.revert();
  }, [isHome]);

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <>
      {/* =====================================================
          INTRO OVERLAY
      ===================================================== */}

      {isHome &&
        !introFinished && (
          <div
            ref={introOverlayRef}
            className="
              fixed
              inset-0
              z-[45]
              pointer-events-none
              bg-black/35
            "
            style={{
              backdropFilter:
                'blur(14px)',
              WebkitBackdropFilter:
                'blur(14px)',
            }}
          />
        )}

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        ref={navbarRef}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50

          transition-all
          duration-500
          ease-in-out

          ${
            hasBackground &&
            introFinished
              ? `
                bg-[#0B0B09]/90
                backdrop-blur-2xl
                border-b
                border-white/10
                shadow-[0_8px_40px_rgba(0,0,0,0.25)]
              `
              : `
                bg-transparent
                border-b
                border-transparent
              `
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-10
            lg:px-12
          "
        >
          {/* =================================================
              NAVBAR ROW
          ================================================= */}

          <div
            className="
              h-20
              flex
              items-center
              justify-between
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <NavLink
              to="/"
              onClick={(e) =>
                handleNavClick(
                  e,
                  '/'
                )
              }
              className="
                group
                flex
                items-center
                gap-3
              "
            >
              {/* Solar Icon */}

              <div
                ref={logoIconRef}
                className="
                  relative
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  overflow-hidden

                  bg-white/5
                  backdrop-blur-md
                  border
                  border-white/10

                  transition-all
                  duration-500

                  group-hover:border-amber-400/40
                  group-hover:shadow-lg
                  group-hover:shadow-amber-400/20
                "
              >
                <div
                  className="
                    relative
                    w-4
                    h-4
                    rounded-full
                    bg-amber-400
                    shadow-[0_0_12px_rgba(251,191,36,0.6)]
                  "
                >
                  <span
                    className="
                      absolute
                      -top-2
                      left-1/2
                      -translate-x-1/2
                      w-0.5
                      h-1.5
                      bg-amber-400
                      rounded-full
                    "
                  />

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-1/2
                      -translate-x-1/2
                      w-0.5
                      h-1.5
                      bg-amber-400
                      rounded-full
                    "
                  />

                  <span
                    className="
                      absolute
                      -left-2
                      top-1/2
                      -translate-y-1/2
                      w-1.5
                      h-0.5
                      bg-amber-400
                      rounded-full
                    "
                  />

                  <span
                    className="
                      absolute
                      -right-2
                      top-1/2
                      -translate-y-1/2
                      w-1.5
                      h-0.5
                      bg-amber-400
                      rounded-full
                    "
                  />
                </div>
              </div>

              {/* Name */}

              <div className="leading-none">
                <span
                  ref={logoNameRef}
                  className="
                    block
                    text-[28px]
                    leading-none
                    tracking-wide
                    whitespace-nowrap
                    text-white
                  "
                  style={{
                    fontFamily:
                      'Pesttiva, cursive',
                  }}
                >
                  Ibrahim
                  <span className="text-amber-400">
                    .
                  </span>
                </span>

                <span
                  ref={logoSubtitleRef}
                  className="
                    block
                    mt-1
                    text-[8px]
                    font-medium
                    tracking-[0.22em]
                    text-white/50
                  "
                >
                  SOLAR ENGINEER
                </span>
              </div>
            </NavLink>

            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <div
              ref={navLinksRef}
              className="
                hidden
                lg:flex
                items-center
              "
            >
              <ul
                className="
                  flex
                  items-center
                  gap-8
                "
              >
                {links.map((link) => {
                  const sectionId =
                    link.path === '/'
                      ? 'home'
                      : link.path.includes('#')
                      ? link.path.split('#')[1]
                      : '';

                  const isActive =
                    activeSection ===
                    sectionId;

                  return (
                    <li
                      key={link.name}
                    >
                      <NavLink
                        to={link.path}
                        onClick={(e) =>
                          handleNavClick(
                            e,
                            link.path
                          )
                        }
                        className={`
                          group
                          relative
                          py-2
                          text-sm
                          font-medium

                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? 'text-amber-400'
                              : `
                                text-white/70
                                hover:text-white
                              `
                          }
                        `}
                      >
                        {link.name}

                        {/* Active underline */}

                        <span
                          className={`
                            absolute
                            left-0
                            -bottom-1
                            h-[2px]
                            bg-amber-400
                            rounded-full

                            transition-all
                            duration-300

                            ${
                              isActive
                                ? 'w-full'
                                : 'w-0 group-hover:w-full'
                            }
                          `}
                        />
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* =================================================
                CV
            ================================================= */}

            <div
              ref={cvRef}
              className="
                hidden
                lg:flex
                items-center
              "
            >
              <a
                href="/Ahmed_Mohamed_CV (4).pdf"
                download
                className="
                  group

                  flex
                  items-center
                  gap-2

                  px-5
                  py-2.5

                  rounded-xl

                  bg-white
                  text-[#11110F]

                  text-sm
                  font-semibold

                  transition-all
                  duration-300

                  hover:bg-amber-400
                  hover:text-black

                  hover:shadow-lg
                  hover:shadow-amber-400/20
                "
              >
                Download CV

                <span
                  className="
                    text-amber-500
                    group-hover:text-black
                    transition-colors
                    duration-300
                  "
                >
                  ↓
                </span>
              </a>
            </div>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="
                lg:hidden

                relative
                w-10
                h-10

                flex
                flex-col
                items-center
                justify-center

                gap-1.5

                rounded-lg

                transition-all
                duration-300

                hover:bg-white/10
              "
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              <span
                className={`
                  w-6
                  h-[2px]
                  rounded-full
                  bg-white
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? 'rotate-45 translate-y-[4px]'
                      : ''
                  }
                `}
              />

              <span
                className={`
                  w-6
                  h-[2px]
                  rounded-full
                  bg-white
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? 'opacity-0'
                      : 'opacity-100'
                  }
                `}
              />

              <span
                className={`
                  w-6
                  h-[2px]
                  rounded-full
                  bg-white
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? '-rotate-45 -translate-y-[4px]'
                      : ''
                  }
                `}
              />
            </button>
          </div>

          {/* ===================================================
              MOBILE MENU
          =================================================== */}

          <div
            className={`
              lg:hidden

              overflow-hidden

              transition-all
              duration-500
              ease-in-out

              ${
                isOpen
                  ? 'max-h-[700px] opacity-100 pb-6'
                  : 'max-h-0 opacity-0'
              }
            `}
          >
            <div
              className="
                pt-4
                border-t
                border-white/10
              "
            >
              <ul className="space-y-1">
                {links.map((link) => {
                  const sectionId =
                    link.path === '/'
                      ? 'home'
                      : link.path.includes('#')
                      ? link.path.split('#')[1]
                      : '';

                  const isActive =
                    activeSection ===
                    sectionId;

                  return (
                    <li
                      key={link.name}
                    >
                      <NavLink
                        to={link.path}
                        onClick={(e) =>
                          handleNavClick(
                            e,
                            link.path
                          )
                        }
                        className={`
                          flex
                          items-center

                          px-4
                          py-3

                          rounded-xl

                          font-medium

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? `
                                bg-amber-400/10
                                text-amber-400
                                border
                                border-amber-400/10
                              `
                              : `
                                text-white/70
                                hover:bg-white/5
                                hover:text-white
                              `
                          }
                        `}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile CV */}

              <a
                href="/Ahmed_Mohamed_CV (4).pdf"
                download
                className="
                  mt-4

                  flex
                  items-center
                  justify-center
                  gap-2

                  w-full

                  px-5
                  py-3

                  rounded-xl

                  bg-white
                  text-[#11110F]

                  font-semibold

                  hover:bg-amber-400
                  hover:text-black

                  transition-all
                  duration-300
                "
              >
                Download CV

                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;