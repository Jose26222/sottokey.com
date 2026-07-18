import type { Metadata } from "next";
import Image from "next/image";
import { Film, ShieldCheck } from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";
import { GuidedDemo } from "@/components/GuidedDemo";
import { PageHero } from "@/components/PageHero";
import { ProductFilm } from "@/components/ProductFilm";
import { productSurfaces } from "@/data/site";

export const metadata: Metadata = {
  title: "Real Product Demo",
  description:
    "See verified SottoKey model outputs and real Android app surfaces without sending any text to a server.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="REAL PRODUCT DEMO"
        title={
          <>
            Watch the app.
            <br />
            Inspect the output.
          </>
        }
        body="No live server, generated phone, or reconstructed keyboard. This sequence was captured directly from SottoKey 0.4.0 on the connected Android device using its installed v3 Q8 evidence model."
        aside={
          <div className="hero-proof-note">
            <ShieldCheck aria-hidden="true" />
            <span>Verified examples · No visitor text collected</span>
          </div>
        }
      />

      <section className="section section--dark demo-page-stage">
        <GuidedDemo />
      </section>

      <section className="section section--paper demo-method">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">HOW THIS DEMO WORKS</p>
            <h2>Interaction without pretending there is a server.</h2>
          </div>
          <p>
            The phone sequence and its result come from one live device session.
            App UI and installed-model evidence are versioned separately so a
            future model cannot silently inherit these claims.
          </p>
        </div>
        <div className="demo-method__steps">
          {[
            ["01", "Capture", "Record the current app on the connected phone."],
            ["02", "Rewrite", "Run one explicit request on the installed model."],
            ["03", "Verify", "Check the visible diff and accepted text."],
            ["04", "Publish", "Attach app, model, device, date, and checksums."],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark demo-film">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PRODUCT FILM</p>
            <h2>Six current surfaces. One real keyboard.</h2>
          </div>
          <div className="film-badge">
            <Film aria-hidden="true" />
            <span>Captured on Android</span>
          </div>
        </div>
        <ProductFilm />
      </section>

      <section className="section section--paper contact-sheet">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">CONTACT SHEET</p>
            <h2>Pause on the details.</h2>
          </div>
          <p>
            Current app 0.4.0 captures from Android. No reconstructed marketing
            interface or AI-generated screen text.
          </p>
        </div>
        <div className="contact-sheet__grid">
          {productSurfaces.map((item, index) => (
            <figure key={item.label}>
              <div>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1080}
                  height={2340}
                  sizes="(max-width: 700px) 80vw, 26vw"
                />
              </div>
              <figcaption>
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
