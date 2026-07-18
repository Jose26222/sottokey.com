import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";
import { DeviceFrame } from "@/components/DeviceFrame";
import { GuidedDemo } from "@/components/GuidedDemo";
import { PrivacyPath } from "@/components/PrivacyPath";
import { ProductFilm } from "@/components/ProductFilm";
import { ProofRail } from "@/components/ProofRail";
import {
  featureGroups,
  productMedia,
  productStatus,
  releaseFacts,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__grain" />
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <p className="eyebrow">PRIVATE ANDROID KEYBOARD · DEVICE BETA</p>
            <h1>
              Rewrite your words.
              <br />
              <span>Keep them yours.</span>
            </h1>
            <p className="home-hero__lede">
              Fix grammar and change tone directly where you type. Review the
              difference before anything replaces your text.
            </p>
            <div className="button-row">
              <Link href="/download" className="button button--light">
                Release status <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/demo" className="button button--ghost">
                Watch the live capture
              </Link>
            </div>
          </div>

          <div className="home-hero__stage">
            <div className="home-hero__capture-badge">
              <span />
              Real Android screen · app {productStatus.app.version}
            </div>
            <DeviceFrame
              src={productMedia.keyboard.src}
              alt={productMedia.keyboard.alt}
              className="home-hero__device"
              priority
            />
            <div className="home-hero__capture-meta">
              <strong>{productStatus.app.state}</strong>
              <span>Captured {productStatus.app.capturedAt}</span>
            </div>
          </div>
        </div>
        <a href="#proof" className="home-hero__scroll">
          <span>Discover SottoKey</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <div id="proof">
        <ProofRail />
      </div>

      <section className="demo-section section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TRY THE CORE INTERACTION</p>
            <h2>Fix a sentence without leaving the app.</h2>
          </div>
          <p>
            Choose a real model result, inspect the changes, and accept only
            when it reads right.
          </p>
        </div>
        <GuidedDemo />
      </section>

      <section className="privacy-cinema section section--dark">
        <PrivacyPath />
        <div className="privacy-cinema__copy">
          <div>
            <p className="eyebrow">PRIVACY, MADE PHYSICAL</p>
            <h2>Your sentence stays on your phone.</h2>
          </div>
          <div>
            <p>
              Android gives the release app no INTERNET permission. The model,
              review, and final edit all happen inside the device.
            </p>
            <div className="text-links">
              <Link href="/proof">
                Inspect the Android proof <ChevronRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-editorial section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">MORE THAN A REWRITE BUTTON</p>
            <h2>A complete keyboard with one focused AI tool.</h2>
          </div>
          <p>
            Type, revise, and review without changing apps or surrendering
            control.
          </p>
        </div>
        <div className="feature-editorial__grid">
          {featureGroups.slice(0, 3).map((group) => (
            <article key={group.eyebrow}>
              <p className="eyebrow">{group.eyebrow}</p>
              <h3>{group.title}</h3>
              <ul>
                {group.points.slice(0, 3).map((point) => (
                  <li key={point}>
                    <Check aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link href="/features" className="editorial-link">
          Explore the complete keyboard <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="product-film-section section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CAPTURED ON ANDROID</p>
            <h2>The real product, one surface at a time.</h2>
          </div>
          <p>
            Pause the film and inspect typing, rewriting, review, editing,
            tools, and emoji.
          </p>
        </div>
        <ProductFilm />
      </section>

      <section className="evidence section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">MEASURED ON REAL HARDWARE</p>
            <h2>Fast enough to stay in the flow.</h2>
          </div>
          <p>
            Installed-model measurements, not estimates for every Android phone.
          </p>
        </div>
        <div className="release-status-band">
          <div>
            <span>APP UI</span>
            <strong>v{productStatus.app.version}</strong>
            <small>{productStatus.app.state}</small>
          </div>
          <div>
            <span>INSTALLED MODEL</span>
            <strong>{productStatus.installedModel.name}</strong>
            <small>{productStatus.installedModel.qualityGate}</small>
          </div>
          <div>
            <span>NEXT MODEL</span>
            <strong>{productStatus.nextModel.state}</strong>
            <small>Not represented until packaged and measured</small>
          </div>
        </div>
        <div className="evidence__grid">
          <div className="evidence__device">
            <span>DEVICE</span>
            <strong>{releaseFacts.device}</strong>
            <small>{releaseFacts.measuredAt}</small>
          </div>
          <div>
            <span>P50 TOTAL</span>
            <strong>{releaseFacts.p50}</strong>
            <small>installed-model rewrite corpus</small>
          </div>
          <div>
            <span>TIME TO FIRST TOKEN</span>
            <strong>{releaseFacts.ttft}</strong>
            <small>p50 measured</small>
          </div>
          <div>
            <span>GENERATION</span>
            <strong>{releaseFacts.speed}</strong>
            <small>mean throughput</small>
          </div>
          <div>
            <span>MODEL PAYLOAD</span>
            <strong>{releaseFacts.modelPayload}</strong>
            <small>{releaseFacts.model}</small>
          </div>
        </div>
        <Link href="/proof" className="editorial-link">
          Read the complete evidence <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <ClosingCta />
    </>
  );
}
