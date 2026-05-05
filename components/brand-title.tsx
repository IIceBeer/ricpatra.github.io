import type { ElementType } from "react";

type BrandTitleProps = {
  as?: ElementType;
  className?: string;
  page?: boolean;
};

export function BrandTitle({ as: Tag = "h1", className = "", page = false }: BrandTitleProps) {
  const classes = ["brand-title", page ? "brand-title--page" : "", className].filter(Boolean).join(" ");

  return (
    <Tag className={classes}>
      <span className="brand-title__text">Ric Patra</span>
      <sup className="brand-title__tm">TM</sup>
    </Tag>
  );
}
