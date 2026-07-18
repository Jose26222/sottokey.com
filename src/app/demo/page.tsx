import type { Metadata } from "next";
import Image from "next/image";
import { Film, ShieldCheck } from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";
import { GuidedDemo } from "@/components/GuidedDemo";
import { PageHero } from "@/components/PageHero";
import { ProductFilm } from "@/components/ProductFilm";
import { productStatus, productSurfaces } from "@/data/site";

export const metadata: Metadata = {
  title: "Product Demo",
  description:
    "See a verified SottoKey rewrite and real Android app screens without sending text to a server.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="CAPTURED PRODUCT DEMO"
        title={
          <>
            Watch SottoKey work.
            <br />
            Then inspect the result.
          </>
        }
        body={`Every screen in this sequence comes from SottoKey ${productStatus.app.version} running on a physical Android phone. The correction was produced by the installed ${productStatus.installedModel.name} ${productStatus.installedModel.quant} model, not a web service.`}
        aside={
          <div className="hero-proof-note">
            <ShieldCheck aria-hidden="true" />
            <span>Verified example · No visitor text requested</span>
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
            <h2>A product demo, not a web rewrite box.</h2>
          </div>
          <p>
            The screens and result come from one device session. App captures
            and model evidence are versioned separately, so this example always
            stays tied to the build that produced it.
          </p>
        </div>
        <div className="demo-method__steps">
          {[
            ["01", "Record", "Capture the current app on the test phone."],
            ["02", "Run", "Make one Fix request with the installed model."],
            ["03", "Review", "Check the visible diff and accepted text."],
            ["04", "Document", "Attach the app, model, device, date, and hashes."],
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
            <p className="eyebrow">THE PRODUCT TOUR</p>
            <h2>Six current screens. One working keyboard.</h2>
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
            <h2>Look as closely as you like.</h2>
          </div>
          <p>
            Captures from app {productStatus.app.version} on Android, shown
            without reconstructed interface elements or generated screen text.
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
