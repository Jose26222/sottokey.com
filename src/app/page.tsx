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
            <p className="eyebrow">A KEYBOARD HAS NO BUSINESS BEING ONLINE</p>
            <h1>
              If you&apos;re not paying,
              <br />
              you&apos;re the product.
              <span>
                We&apos;d rather take a few bucks once than your privacy forever.
              </span>
            </h1>
            <p className="home-hero__lede">
              No ads. No account. No analytics. No internet permission at
              all—so there is nothing to opt out of and nothing to take on
              trust. SottoKey fixes grammar and tone on your phone, in airplane
              mode.
            </p>
            <div className="button-row">
              <Link href="/proof" className="button button--light">
                Check the permission <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/demo" className="button button--ghost">
                See SottoKey work
              </Link>
            </div>
          </div>

          <div className="home-hero__stage">
            <div className="home-hero__capture-badge">
              <span />
              SottoKey for Android
            </div>
            <DeviceFrame
              src={productMedia.keyboard.src}
              alt={productMedia.keyboard.alt}
              className="home-hero__device"
              priority
            />
            <div className="home-hero__capture-meta">
              <strong>Rewrite on your phone</strong>
              <span>Review before replacing</span>
            </div>
          </div>
        </div>
        <a href="#proof" className="home-hero__scroll">
          <span>The privacy difference</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <div id="proof">
        <ProofRail />
      </div>

      <section className="demo-section section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WRITE. REVISE. DECIDE.</p>
            <h2>Make the sentence fit the moment.</h2>
          </div>
          <p>
            Fix the typo. Sharpen the tone. Send the email you meant to
            send—without your draft ever leaving the phone.
          </p>
        </div>
        <GuidedDemo />
      </section>

      <section className="privacy-cinema section section--dark">
        <PrivacyPath />
        <div className="privacy-cinema__copy">
          <div>
            <p className="eyebrow">THE KEYBOARD IS ALREADY IN THE CONVERSATION</p>
            <h2>It should have nowhere else to go.</h2>
          </div>
          <div>
            <p>
              Every keyboard you&apos;ve used collects something—their own Data
              safety sections say so. SottoKey&apos;s answer is not a promise or
              a settings page. It is a missing permission: the production
              manifest requests no INTERNET, so your text still goes where you
              put it—the app you are typing in—not to a SottoKey server.
            </p>
            <div className="text-links">
              <Link href="/proof">
                See what the permission removes{" "}
                <ChevronRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-editorial section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">PRIVACY WITHOUT A LESSER KEYBOARD</p>
            <h2>Everything you expect. One thing you don&apos;t.</h2>
          </div>
          <p>
            Privacy is no excuse for a worse keyboard. Correction, editing,
            clips, and emoji carry the everyday work; rewriting carries the
            rest.
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
            <p className="eyebrow">YOUR EVERYDAY KEYBOARD</p>
            <h2>Built for more than the careful sentences.</h2>
          </div>
          <p>
            Autocorrect, editing, clips, undo, emoji, and bilingual typing stay
            close at hand.
          </p>
        </div>
        <ProductFilm />
      </section>

      <section className="evidence section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">LOCAL DOESN&apos;T HAVE TO FEEL SLOW</p>
            <h2>The median rewrite took {releaseFacts.p50}.</h2>
          </div>
          <p>
            Measured with the installed model on one Snapdragon 855 device.
            Numbers vary by phone. What never varies: no rewrite waits on a
            network, because there isn&apos;t one.
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
