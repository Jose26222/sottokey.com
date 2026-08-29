import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Licenses",
  description:
    "Licensing summary for SottoKey, its on-device model, llama.cpp runtime, website fonts, icons, and media.",
};

export default function LicensesPage() {
  return (
    <>
      <PageHero
        eyebrow="LICENSES & ATTRIBUTION"
        title={
          <>
            Built with open work.
            <br />
            Attributed in the open.
          </>
        }
        body="This page summarizes important website and Android components. The signed application includes its complete notices and exact license texts in-app."
        tone="paper"
      />
      <section className="licenses section section--paper">
        <article>
          <span>01</span>
          <div>
            <h2>LFM2.5 model family</h2>
            <p>
              The current SottoKey release candidate is based on Liquid AI&apos;s
              LFM2.5-350M family and a SottoKey task adaptation. Redistribution
              is governed by the model license packaged with the app, including
              modification notices and applicable commercial terms.
            </p>
          </div>
        </article>
        <article>
          <span>02</span>
          <div>
            <h2>llama.cpp</h2>
            <p>
              Local inference uses llama.cpp and ggml components under their
              open-source terms. Exact commits and notices are versioned with
              the Android release.
            </p>
          </div>
        </article>
        <article>
          <span>03</span>
          <div>
            <h2>FrequencyWords lexicon content</h2>
            <p>
              The bundled English and Spanish lexicons are filtered derivatives
              of hermitdave/FrequencyWords generated content pinned at commit{" "}
              <code>525f9b560de45753a5ea01069454e72e9aa541c6</code>. Generated
              content is CC BY-SA 4.0; repository code is MIT. SottoKey filters
              entries, adds a documented everyday-word set, log-scales counts,
              sorts output, and marks terms that must never be suggested.
            </p>
            <p>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                Creative Commons Attribution-ShareAlike 4.0
              </a>
            </p>
          </div>
        </article>
        <article>
          <span>04</span>
          <div>
            <h2>Website typography</h2>
            <p>
              Manrope and IBM Plex Mono are self-hosted by this website under
              their respective open font licenses. No font request is sent to a
              third-party CDN.
            </p>
          </div>
        </article>
        <article>
          <span>05</span>
          <div>
            <h2>Interface icons</h2>
            <p>
              Website interface icons use Lucide under the ISC license. The
              SottoKey three-dot mark and product-specific visual system are
              original brand assets.
            </p>
          </div>
        </article>
        <article>
          <span>06</span>
          <div>
            <h2>Studio media</h2>
            <p>
              Campaign renders were generated and art-directed for this
              project. Every readable product screen is a capture of the
              working SottoKey Android app.
            </p>
          </div>
        </article>
        <Link href="/proof" className="editorial-link">
          See versioned runtime evidence <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
