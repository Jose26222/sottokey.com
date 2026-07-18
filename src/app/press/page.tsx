import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  FileText,
  ImageIcon,
  Quote,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { PageHero } from "@/components/PageHero";
import {
  productStatus,
  productSurfaces,
  releaseFacts,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "SottoKey product facts, approved descriptions, brand assets, real Android screenshots, and media guidance.",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="PRESS KIT"
        title={
          <>
            The facts, frames,
            <br />
            and product story.
          </>
        }
        body="Approved descriptions, versioned app and model facts, and current Android captures for accurate editorial coverage."
        aside={
          <div className="hero-proof-note">
            <FileText aria-hidden="true" />
            <span>Facts last reviewed · {productStatus.lastReviewed}</span>
          </div>
        }
      />

      <section className="press-summary section section--paper">
        <article>
          <Quote aria-hidden="true" />
          <p className="eyebrow">SHORT DESCRIPTION</p>
          <blockquote>
            SottoKey is a private Android keyboard that fixes grammar and
            changes tone with a compact language model running entirely on the
            phone. The app has no internet permission, no account, and shows a
            diff before every edit.
          </blockquote>
        </article>
        <article>
          <p className="eyebrow">FACT SHEET</p>
          <dl>
            <div>
              <dt>Platform</dt>
              <dd>Android</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>Tools / Keyboard</dd>
            </div>
            <div>
              <dt>Current device UI</dt>
              <dd>v{releaseFacts.appVersion}</dd>
            </div>
            <div>
              <dt>Model</dt>
              <dd>{releaseFacts.model}</dd>
            </div>
            <div>
              <dt>Next model</dt>
              <dd>{productStatus.nextModel.state}</dd>
            </div>
            <div>
              <dt>Network permission</dt>
              <dd>None</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>{productStatus.availability}</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="brand-assets section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BRAND</p>
            <h2>A keycap. Three fading dots. Quiet typing.</h2>
          </div>
          <p>
            Give the mark room to breathe. Keep the insertion and deletion
            colors intact, and do not place the wordmark inside another shape.
          </p>
        </div>
        <div className="brand-assets__grid">
          <div className="brand-asset brand-asset--dark">
            <BrandMark inverse />
          </div>
          <div className="brand-asset brand-asset--light">
            <BrandMark />
          </div>
          <a href="/icon.svg" download className="asset-download">
            <ImageIcon aria-hidden="true" />
            <div>
              <strong>App mark · SVG</strong>
              <span>Vector master</span>
            </div>
            <ArrowDownToLine aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="press-screens section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">REAL PRODUCT SCREENS</p>
            <h2>Captured from the working Android app.</h2>
          </div>
          <p>
            Every screen reflects the {productStatus.app.version} device UI.
            The rewrite frame belongs to the installed v3 evidence model, not
            the replacement model still in evaluation.
          </p>
        </div>
        <div className="press-screens__grid">
          {productSurfaces.map((item) => (
            <figure key={item.label}>
              <Image
                src={item.src}
                alt={item.alt}
                width={1080}
                height={2340}
                sizes="(max-width: 700px) 42vw, 15vw"
              />
              <figcaption>
                <strong>{item.label}</strong>
                <a href={item.src} download aria-label={`Download ${item.label}`}>
                  <ArrowDownToLine aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link href="/proof" className="editorial-link">
          Verify current product claims <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
