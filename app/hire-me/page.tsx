import Link from "next/link";

import { BrandTitle } from "@/components/brand-title";
import { ContactForm } from "@/components/contact-form";
import { PageFrame } from "@/components/page-frame";
import { hirePageItems } from "@/lib/site-data";

export default function HireMePage() {
  return (
    <PageFrame>
      <Link className="back-link" href="/">
        ← Back to home
      </Link>

      <section className="page-hero page-hero--feature">
        <div className="page-hero__content">
          <p className="eyebrow">Hire Me</p>
          <BrandTitle page />
          <p className="page-hero__tagline">Open for collaborations, creator work, and brand conversations.</p>
        </div>

        <div className="page-hero__aside">
          <div className="live-card">
            <p className="live-card__label">Quick Contact</p>
            <p className="live-card__value">hi.ricpatra@gmail.com</p>
          </div>
          <div className="live-card">
            <p className="live-card__label">Response Window</p>
            <p className="live-card__value">Best for serious brand work, creator campaigns, and story-led collaborations.</p>
          </div>
          <div className="page-hero__signal">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="hire-layout">
        <div className="hire-card hire-card--large">
          <p className="hire-card__label">Offer</p>
          <h2>What we can build</h2>
          <p className="hire-card__note">
            Built for modern creator work with a young voice, clean identity, and high-energy storytelling across video and social.
          </p>
          <ul className="hire-list">
            {hirePageItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hire-chip-grid">
            <span className="hire-chip">YouTube-first campaigns</span>
            <span className="hire-chip">Youth-focused branding</span>
            <span className="hire-chip">Cross-platform launch support</span>
            <span className="hire-chip">Early-stage creator collaborations</span>
          </div>

          <div className="hire-stat-row">
            <div className="hire-stat">
              <span className="hire-stat__value">01</span>
              <span className="hire-stat__label">Clear vision</span>
            </div>
            <div className="hire-stat">
              <span className="hire-stat__value">Fast</span>
              <span className="hire-stat__label">Conversation flow</span>
            </div>
            <div className="hire-stat">
              <span className="hire-stat__value">Fresh</span>
              <span className="hire-stat__label">Creator energy</span>
            </div>
          </div>
        </div>

        <div className="hire-card hire-card--contact">
          <p className="hire-card__label">Contact</p>
          <a className="contact-link" href="mailto:hi.ricpatra@gmail.com">
            hi.ricpatra@gmail.com
          </a>
          <p className="hire-card__note">Send your idea, campaign, or collaboration brief here.</p>
          <div className="hire-contact-stack">
            <div className="hire-contact-item">
              <span className="hire-contact-item__label">Best For</span>
              <span className="hire-contact-item__value">Campaigns, creator features, and social launches</span>
            </div>
            <div className="hire-contact-item">
              <span className="hire-contact-item__label">Reply Style</span>
              <span className="hire-contact-item__value">Direct, simple, and collaboration-ready</span>
            </div>
            <div className="hire-contact-item">
              <span className="hire-contact-item__label">Status</span>
              <span className="hire-contact-item__value">Open for serious opportunities</span>
            </div>
          </div>
          <a className="button button--solid button--full" href="mailto:hi.ricpatra@gmail.com">
            Email Ric Patra
          </a>
        </div>
      </section>

      <section className="hire-form-section">
        <div className="hire-form-layout">
          <div className="hire-card hire-form-copy">
            <p className="hire-card__label">How To Reach Out</p>
            <h2>Bring the right details</h2>
            <p className="hire-card__note">
              Keep it sharp. Share your name, number, email, and address first, then add the main idea in your follow-up email if needed.
            </p>
            <div className="hire-process">
              <div className="hire-process__item">
                <span className="hire-process__step">01</span>
                <p>Send the basic details through the form.</p>
              </div>
              <div className="hire-process__item">
                <span className="hire-process__step">02</span>
                <p>Share campaign goals, timing, or collaboration needs.</p>
              </div>
              <div className="hire-process__item">
                <span className="hire-process__step">03</span>
                <p>Move into a direct conversation if the fit is right.</p>
              </div>
            </div>
          </div>

          <div className="hire-card hire-card--large">
            <p className="hire-card__label">Hire Me Form</p>
            <h2>Share your details</h2>
            <p className="hire-card__note">
              If you want to work with Ric Patra, send your details below and then email the collaboration brief directly.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
