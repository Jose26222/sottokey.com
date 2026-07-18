import type { Metadata } from "next";
import { WifiOff } from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";
import { GuidedDemo } from "@/components/GuidedDemo";
import { PageHero } from "@/components/PageHero";
import { ProductFilm } from "@/components/ProductFilm";
import { ProofRail } from "@/components/ProofRail";

export const metadata: Metadata = {
  title: "On-Device Rewrite Demo",
  description:
    "See SottoKey fix grammar and change tone on your Android phone, with a visible diff before every edit.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="ON-DEVICE REWRITING"
        title={
          <>
            Make the change.
            <br />
            See the change.
          </>
        }
        body="Fix grammar or shift the tone in the app you are already using. SottoKey runs the rewrite on your phone, shows every insertion and deletion, and waits for you."
        aside={
          <div className="hero-proof-note">
            <WifiOff aria-hidden="true" />
            <span>No cloud rewrite · No account</span>
          </div>
        }
      />

      <ProofRail />

      <section className="section section--dark demo-page-stage">
        <GuidedDemo />
      </section>

      <section className="section section--dark demo-film">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE REST OF THE KEYBOARD MATTERS</p>
            <h2>Private rewriting belongs in a keyboard worth using.</h2>
          </div>
          <p>
            Autocorrect, text editing, clips, undo, emoji, and bilingual typing
            are part of the same everyday keyboard.
          </p>
        </div>
        <ProductFilm />
      </section>

      <ClosingCta />
    </>
  );
}
