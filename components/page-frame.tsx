import type { ReactNode } from "react";

import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteBackground />
      <main className="page-shell reveal is-visible">{children}</main>
      <SiteFooter />
    </>
  );
}
