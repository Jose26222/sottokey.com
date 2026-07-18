import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Terms governing use of the SottoKey product website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="WEBSITE TERMS · 18 JULY 2026"
        title={
          <>
            Clear terms for
            <br />
            an early product site.
          </>
        }
        body="These terms cover this website and its guided product demonstration. Separate store terms and end-user notices will accompany the public Android release."
        tone="paper"
      />
      <section className="legal-copy section section--paper">
        <article>
          <h2>1. Informational status</h2>
          <p>
            This website describes SottoKey during release preparation.
            Availability, compatibility, feature status, model choice, package
            size, and performance may change before the signed public release.
            The changelog identifies the current evidence.
          </p>
        </article>
        <article>
          <h2>2. Guided demonstration</h2>
          <p>
            The website demo uses fixed, verified examples and does not accept
            arbitrary visitor text. It illustrates the Android workflow but is
            not an online version of the keyboard and does not guarantee the
            same result for every sentence.
          </p>
        </article>
        <article>
          <h2>3. No professional advice</h2>
          <p>
            SottoKey edits wording. It does not provide legal, medical,
            financial, safety, or other professional advice. Users remain
            responsible for reviewing any suggested edit.
          </p>
        </article>
        <article>
          <h2>4. Intellectual property</h2>
          <p>
            SottoKey brand assets, original website design, and product
            documentation are protected by applicable law. Third-party software,
            model, and data components remain subject to their own licenses,
            listed on the licenses page.
          </p>
        </article>
        <article>
          <h2>5. Availability and warranties</h2>
          <p>
            The website is provided on an as-available basis. Early product
            information may contain errors. Nothing here creates a warranty
            beyond rights that cannot legally be excluded.
          </p>
        </article>
        <article>
          <h2>6. Privacy</h2>
          <p>
            Website and Android-app privacy practices are described separately
            in the <Link href="/privacy">privacy notice</Link>.
          </p>
        </article>
      </section>
    </>
  );
}
