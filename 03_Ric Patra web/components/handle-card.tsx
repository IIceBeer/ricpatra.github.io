import type { HandleCard as HandleCardType } from "@/lib/site-data";

export function HandleCard({ card }: { card: HandleCardType }) {
  const content = (
    <>
      <span className="handle-card__badge">{card.badge}</span>
      <div className="handle-card__top">
        <span className={`social-icon social-icon--${card.variant}`} aria-hidden="true" />
        <span className="handle-card__network">{card.network}</span>
      </div>
      <p className="handle-card__name">{card.name}</p>
      <p className="handle-card__copy">{card.copy}</p>
    </>
  );

  if (card.href) {
    return (
      <a className="handle-card" href={card.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <article className="handle-card handle-card--discord">{content}</article>;
}
