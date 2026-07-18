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
      <p className="eyebrow">KEEP THE CLOUD OUT OF THE CONVERSATION</p>
      <h2>
        Your keyboard sees enough.
        <br />
        It doesn&apos;t need a network.
      </h2>
      <p>
        Write, revise, and decide on your phone.
      </p>
      <div className="button-row">
        <Link href="/demo" className="button button--light">
          See SottoKey work <ArrowRight aria-hidden="true" />
        </Link>
        <Link href="/download" className="button button--ghost">
          <ShieldCheck aria-hidden="true" /> Google Play status
        </Link>
      </div>
    </section>
  );
}
