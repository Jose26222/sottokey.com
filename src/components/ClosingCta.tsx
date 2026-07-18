import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function ClosingCta() {
  return (
    <section className="closing-cta">
      <div className="closing-cta__mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <p className="eyebrow">PRIVATE BY CONSTRUCTION</p>
      <h2>
        Your keyboard sees everything.
        <br />
        This one cannot send it anywhere.
      </h2>
      <p>
        A complete Android keyboard with on-device rewriting, visible diffs,
        and no internet permission.
      </p>
      <div className="button-row">
        <Link href="/download" className="button button--light">
          Get SottoKey <ArrowRight aria-hidden="true" />
        </Link>
        <Link href="/proof" className="button button--ghost">
          <ShieldCheck aria-hidden="true" /> Inspect the proof
        </Link>
      </div>
    </section>
  );
}
