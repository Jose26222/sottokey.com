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
      <p className="eyebrow">READY WHEN YOUR SENTENCE ISN&apos;T</p>
      <h2>
        Write where you already write.
        <br />
        Keep the final word.
      </h2>
      <p>
        Fix grammar, adjust tone, review the change, and move on.
      </p>
      <div className="button-row">
        <Link href="/download" className="button button--light">
          Follow the release <ArrowRight aria-hidden="true" />
        </Link>
        <Link href="/proof" className="button button--ghost">
          <ShieldCheck aria-hidden="true" /> Inspect the proof
        </Link>
      </div>
    </section>
  );
}
