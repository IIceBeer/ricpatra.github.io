import Link from "next/link";

import { BrandTitle } from "@/components/brand-title";
import { HandleCard } from "@/components/handle-card";
import { PageFrame } from "@/components/page-frame";
import { handleCards } from "@/lib/site-data";

export default function HandlesPage() {
  return (
    <PageFrame>
      <Link className="back-link" href="/">
        ← Back to home
      </Link>

      <section className="page-hero">
        <p className="eyebrow">Handles</p>
        <BrandTitle page />
        <p className="page-hero__tagline">One identity across the main platforms.</p>
      </section>

      <section className="handle-grid">
        {handleCards.map((card) => (
          <HandleCard card={card} key={`${card.network}-${card.name}`} />
        ))}
      </section>
    </PageFrame>
  );
}
