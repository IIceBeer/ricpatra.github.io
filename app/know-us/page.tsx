import Link from "next/link";

import { BrandTitle } from "@/components/brand-title";
import { PageFrame } from "@/components/page-frame";

export default function KnowUsPage() {
  return (
    <PageFrame>
      <Link className="back-link" href="/">
        ← Back to home
      </Link>

      <section className="page-hero">
        <p className="eyebrow">Know Us</p>
        <BrandTitle page />
        <p className="page-hero__tagline">A young creator at the beginning, choosing to build in public.</p>
      </section>

      <section className="page-grid">
        <article className="story-card">
          <p className="story-card__number">18</p>
          <h2>Young and moving</h2>
          <p>
            The identity of Ric Patra is about being early, honest, and hungry to grow. The journey matters as much as the final destination.
          </p>
        </article>
        <article className="story-card">
          <p className="story-card__number">Start</p>
          <h2>Nothing hidden</h2>
          <p>
            This brand does not try to act finished. It celebrates the start, the experiments, the mistakes, and the constant push to improve.
          </p>
        </article>
        <article className="story-card">
          <p className="story-card__number">Vision</p>
          <h2>Built for momentum</h2>
          <p>
            YouTube is the main stage, while Instagram and X carry the everyday energy. Discord is part of the future community plan.
          </p>
        </article>
      </section>
    </PageFrame>
  );
}
