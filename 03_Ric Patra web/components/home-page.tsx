"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { BrandTitle } from "@/components/brand-title";
import { HandleCard } from "@/components/handle-card";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { collaborationItems, handleCards, storyCards } from "@/lib/site-data";

const sectionIds = ["know-us", "handles", "hire-me"] as const;

type SectionId = (typeof sectionIds)[number];

export default function HomePage() {
  const [introHidden, setIntroHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionId>("know-us");

  const tickerItems = useMemo(
    () => [
      "Ric Patra",
      "Begin the Journey",
      "YouTube",
      "Instagram",
      "X",
      "Discord Soon",
      "Ric Patra",
      "Begin the Journey",
      "YouTube",
      "Instagram",
      "X",
      "Discord Soon"
    ],
    []
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIntroHidden(true);
    }, 2200);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const updatePageState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrolled)));

      const position = window.scrollY + window.innerHeight * 0.35;
      let currentId: SectionId = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && position >= element.offsetTop) {
          currentId = id;
        }
      });

      setActiveSection(currentId);
    };

    updatePageState();
    window.addEventListener("scroll", updatePageState);
    window.addEventListener("resize", updatePageState);

    return () => {
      window.removeEventListener("scroll", updatePageState);
      window.removeEventListener("resize", updatePageState);
    };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => {
      if (!item.classList.contains("is-visible")) {
        observer.observe(item);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={introHidden ? "intro-screen is-hidden" : "intro-screen"} aria-hidden="true" onClick={() => setIntroHidden(true)}>
        <div className="intro-screen__brand">
          <span className="intro-screen__word">Ric</span>
          <span className="intro-screen__word">Patra</span>
          <span className="intro-screen__tm">TM</span>
        </div>
        <div className="intro-screen__track">
          <span className="intro-screen__pulse" />
        </div>
      </div>

      <SiteBackground />
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-drawer" onClick={() => setMenuOpen((value) => !value)}>
        <span>Sections</span>
        <span className="mobile-menu-toggle__icon" />
      </button>

      <div className="mobile-drawer-backdrop" onClick={closeMenu} />
      <nav className="mobile-drawer" id="mobile-drawer" aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <Link href="/" className="mobile-drawer__home" onClick={closeMenu}>
          Ric Patra
        </Link>
        <a href="#know-us" onClick={closeMenu}>
          ✨ Know Us
        </a>
        <a href="#handles" onClick={closeMenu}>
          🚀 Handles
        </a>
        <a href="#hire-me" onClick={closeMenu}>
          📩 Hire Me
        </a>
        <Link href="/know-us" onClick={closeMenu}>
          📖 Know Us Page
        </Link>
        <Link href="/handles" onClick={closeMenu}>
          🎬 Handles Page
        </Link>
        <Link href="/hire-me" onClick={closeMenu}>
          🤝 Hire Me Page
        </Link>
      </nav>

      <nav className="nav-rail" aria-label="Desktop navigation">
        <a href="#know-us" className={`nav-pill ${activeSection === "know-us" ? "is-active" : ""}`}>
          <span className="nav-pill__emoji">✨</span>
          <span className="nav-pill__label">Know Us</span>
        </a>
        <a href="#handles" className={`nav-pill ${activeSection === "handles" ? "is-active" : ""}`}>
          <span className="nav-pill__emoji">🚀</span>
          <span className="nav-pill__label">Handles</span>
        </a>
        <a href="#hire-me" className={`nav-pill ${activeSection === "hire-me" ? "is-active" : ""}`}>
          <span className="nav-pill__emoji">📩</span>
          <span className="nav-pill__label">Hire Me</span>
        </a>
      </nav>

      <main className="site-shell">
        <section className="hero section section--hero reveal" id="top">
          <div className="hero__copy">
            <div className="hero__meta">
              <span className="hero__meta-pill">Official creator hub</span>
              <span className="hero__meta-pill">YouTube-led identity</span>
            </div>
            <p className="eyebrow">Begin the Journey</p>
            <BrandTitle />
            <p className="hero__tagline">I&apos;m 18 and I&apos;m starting</p>
            <p className="hero__summary">
              A creator-first portfolio built around the start of something real. This is the home of the journey, the platforms, and the people who want to build with me from day one.
            </p>
            <div className="hero__actions">
              <a className="button button--solid" href="#handles">
                See the Handles
              </a>
              <Link className="button button--ghost" href="/hire-me">
                Open Hire Me
              </Link>
            </div>
            <div className="hero__highlights">
              <div className="hero__highlight">
                <span className="hero__highlight-value">01</span>
                <span className="hero__highlight-label">Beginning with intent</span>
              </div>
              <div className="hero__highlight">
                <span className="hero__highlight-value">Live</span>
                <span className="hero__highlight-label">Social handles aligned</span>
              </div>
              <div className="hero__highlight">
                <span className="hero__highlight-value">Next</span>
                <span className="hero__highlight-label">Community and partnerships</span>
              </div>
            </div>
          </div>

          <div className="hero__panel">
            <div className="hero__panel-glow" aria-hidden="true" />
            <div className="live-card">
              <p className="live-card__label">Live Focus</p>
              <p className="live-card__value">YouTube first. Social everywhere.</p>
            </div>
            <div className="live-card">
              <p className="live-card__label">Now Building</p>
              <p className="live-card__value">Video identity, audience, and momentum.</p>
            </div>
            <div className="live-card">
              <p className="live-card__label">Premium Direction</p>
              <p className="live-card__value">Clean identity, warm motion, and high-energy creative growth.</p>
            </div>
            <div className="hero__signal">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Channel ticker">
          <div className="marquee__track">
            {tickerItems.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section reveal" id="know-us">
          <div className="section-heading">
            <p className="eyebrow">Know Us</p>
            <h2>Early days, full energy</h2>
            <p className="section-heading__copy">
              This is not a finished story pretending to be polished. It is a premium home for the first chapter, built to show ambition, momentum, and clarity from day one.
            </p>
          </div>

          <div className="story-grid">
            {storyCards.map((card) => (
              <article className="story-card" key={card.title}>
                <p className="story-card__number">{card.number}</p>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>

          <div className="journey-banner">
            <div>
              <p className="journey-banner__label">Current message</p>
              <p className="journey-banner__text">No fake finish line. Just a real beginning with motion, personality, and room to grow.</p>
            </div>
            <Link className="button button--ghost" href="/know-us">
              Read More
            </Link>
          </div>
        </section>

        <section className="section reveal" id="handles">
          <div className="section-heading">
            <p className="eyebrow">Handles</p>
            <h2>Find the signal everywhere</h2>
          </div>

          <div className="handle-grid">
            {handleCards.map((card) => (
              <HandleCard card={card} key={`${card.network}-${card.name}`} />
            ))}
          </div>

          <div className="journey-banner">
            <div>
              <p className="journey-banner__label">Direct links</p>
              <p className="journey-banner__text">Every main handle is aligned around the Ric Patra name for a clean and memorable online identity.</p>
            </div>
            <Link className="button button--ghost" href="/handles">
              Open Handles Page
            </Link>
          </div>
        </section>

        <section className="section reveal" id="hire-me">
          <div className="section-heading">
            <p className="eyebrow">Hire Me</p>
            <h2>Open for creative conversation</h2>
          </div>

          <div className="hire-layout">
            <div className="hire-card hire-card--large">
              <h3>Let&apos;s build something worth watching</h3>
              <p>
                If you want to collaborate on videos, creator campaigns, social storytelling, or youth-focused creative work, this is the place to reach out.
              </p>
              <ul className="hire-list">
                {collaborationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hire-card">
              <p className="hire-card__label">Contact</p>
              <a className="contact-link" href="mailto:hi.ricpatra@gmail.com">
                hi.ricpatra@gmail.com
              </a>
              <p className="hire-card__note">Best for partnerships, project talk, and serious collaboration requests.</p>
              <Link className="button button--solid button--full" href="/hire-me">
                Go to Hire Me Page
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
