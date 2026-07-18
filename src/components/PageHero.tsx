import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  body: string;
  aside?: ReactNode;
  tone?: "dark" | "paper";
};

export function PageHero({
  eyebrow,
  title,
  body,
  aside,
  tone = "dark",
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="page-hero__grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero__copy">
          <p>{body}</p>
          {aside}
        </div>
      </div>
    </section>
  );
}
