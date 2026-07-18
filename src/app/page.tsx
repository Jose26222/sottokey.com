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
              Fix grammar or change tone in the app you are already using.
              SottoKey shows every change and waits for your approval.
            </p>
            <div className="button-row">
              <Link href="/demo" className="button button--light">
                See how it works <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/download" className="button button--ghost">
                Google Play status
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
          <span>Why SottoKey</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <div id="proof">
        <ProofRail />
      </div>

      <section className="demo-section section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE CORE INTERACTION</p>
            <h2>Edit without breaking your flow.</h2>
          </div>
          <p>
            Follow one measured correction from the original text to the final
            review.
          </p>
        </div>
        <GuidedDemo />
      </section>

      <section className="privacy-cinema section section--dark">
        <PrivacyPath />
        <div className="privacy-cinema__copy">
          <div>
            <p className="eyebrow">PRIVACY BY CONSTRUCTION</p>
            <h2>Your sentence stays on your phone.</h2>
          </div>
          <div>
            <p>
              The Android production build requests no INTERNET permission.
              The model, review, and final edit all happen inside the device.
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
            <h2>A full Android keyboard, with rewriting built in.</h2>
          </div>
          <p>
            Type, revise, and review without moving your text into another app.
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
          Explore every keyboard tool <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="product-film-section section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CAPTURED ON ANDROID</p>
            <h2>The working product, one surface at a time.</h2>
          </div>
          <p>
            Pause anywhere to inspect typing, rewriting, review, editing,
            clipboard tools, and emoji.
          </p>
        </div>
        <ProductFilm />
      </section>

      <section className="evidence section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">MEASURED ON REAL HARDWARE</p>
            <h2>Measured on the phone, not projected.</h2>
          </div>
          <p>
            Results from the installed model on one Snapdragon 855 test device,
            not a promise for every Android phone.
          </p>
        </div>
        <div className="release-status-band">
          <div>
            <span>APP UI</span>
            <strong>v{productStatus.app.version}</strong>
            <small>{productStatus.app.state}</small>
          </div>
          <div>
            <span>MEASURED MODEL</span>
            <strong>{productStatus.installedModel.name}</strong>
            <small>
              {productStatus.installedModel.quant} · measured{" "}
              {productStatus.installedModel.measuredAt}
            </small>
          </div>
          <div>
            <span>GOOGLE PLAY</span>
            <strong>{productStatus.availability}</strong>
            <small>{productStatus.releaseStage}</small>
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
          See the measurements and limits <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <ClosingCta />
    </>
  );
}
