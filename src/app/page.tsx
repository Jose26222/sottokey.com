import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Eye,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";
import { FaqList } from "@/components/FaqList";
import { GuidedDemo } from "@/components/GuidedDemo";
import { ProductFilm } from "@/components/ProductFilm";
import { ProofRail } from "@/components/ProofRail";
import { featureGroups, releaseFacts } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          src="/studio/hero-instrument.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="home-hero__image"
        />
        <div className="home-hero__veil" />
        <div className="home-hero__grain" />
        <div className="home-hero__content">
          <p className="eyebrow">PRIVATE AI KEYBOARD FOR ANDROID</p>
          <h1>
            Rewrite your words.
            <br />
            <span>Keep them yours.</span>
          </h1>
          <p className="home-hero__lede">
            SottoKey fixes grammar and changes tone with a small language model
            that runs on your phone. No internet permission. No account. You
            approve every edit.
          </p>
          <div className="button-row">
            <Link href="/download" className="button button--light">
              Get SottoKey <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/demo" className="button button--ghost">
              Watch a real rewrite
            </Link>
          </div>
          <div className="home-hero__proof">
            <span>
              <WifiOff aria-hidden="true" /> No internet permission
            </span>
            <span>
              <Eye aria-hidden="true" /> Visible diff
            </span>
            <span>
              <ShieldCheck aria-hidden="true" /> On-device model
            </span>
          </div>
        </div>
        <div className="home-hero__signal" aria-hidden="true">
          <span className="home-hero__signal-label">ON-DEVICE</span>
          <div>
            <del>b4</del>
            <ins>before</ins>
          </div>
          <span>+1 −1 · preview before applying</span>
        </div>
        <a href="#proof" className="home-hero__scroll">
          <span>Discover SottoKey</span>
          <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <div id="proof">
        <ProofRail />
      </div>

      <section className="manifesto section section--paper">
        <p className="eyebrow">THE QUIET INSTRUMENT</p>
        <h2>
          Most AI keyboards ask you to trust a privacy policy.
          <br />
          <span>SottoKey removes the permission.</span>
        </h2>
        <div className="manifesto__body">
          <p>
            A keyboard sits underneath every message, search, note, and form.
            SottoKey is designed around that responsibility: local inference,
            bounded context, no network path, and an explicit human decision
            before text changes.
          </p>
          <Link href="/privacy">
            Read the privacy architecture <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="demo-section section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A REAL REWRITE</p>
            <h2>Not a chatbot. A proofreader inside the keyboard.</h2>
          </div>
          <p>
            Choose a verified example. Watch the release model revise it,
            inspect the exact diff, then accept or keep the original.
          </p>
        </div>
        <GuidedDemo />
      </section>

      <section className="privacy-cinema section section--dark">
        <div className="privacy-cinema__image">
          <Image
            src="/studio/privacy-cutaway.webp"
            alt="Exploded view of text, keyboard, local model, phone, and disconnected network"
            fill
            sizes="100vw"
          />
          <div className="privacy-cinema__labels" aria-hidden="true">
            <span>YOUR SENTENCE</span>
            <span>KEYBOARD</span>
            <span>LOCAL MODEL</span>
            <span>YOUR PHONE</span>
            <span>NO PATH</span>
          </div>
        </div>
        <div className="privacy-cinema__copy">
          <div>
            <p className="eyebrow">PRIVACY, MADE PHYSICAL</p>
            <h2>The network is not part of the architecture.</h2>
          </div>
          <div>
            <p>
              The release app has no Android INTERNET permission. The model,
              sentence boundary, validator, diff, and final edit all stay
              inside the device.
            </p>
            <div className="text-links">
              <Link href="/proof">
                Inspect the Android proof <ChevronRight aria-hidden="true" />
              </Link>
              <Link href="/privacy">
                Read the privacy notice <ChevronRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-editorial section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">THE COMPLETE PRODUCT</p>
            <h2>AI is one tool. The keyboard still has to be excellent.</h2>
          </div>
          <p>
            SottoKey is built as an everyday Android keyboard, not a rewrite
            overlay with keys attached.
          </p>
        </div>
        <div className="feature-editorial__grid">
          {featureGroups.map((group) => (
            <article key={group.eyebrow}>
              <p className="eyebrow">{group.eyebrow}</p>
              <h3>{group.title}</h3>
              <p>{group.body}</p>
              <ul>
                {group.points.map((point) => (
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
            <h2>A keyboard with depth, not decoration.</h2>
          </div>
          <p>
            Real app surfaces from the current build. Pause, inspect, and move
            through the product at your own pace.
          </p>
        </div>
        <ProductFilm />
      </section>

      <section className="materials-section section section--dark">
        <div className="materials-section__image">
          <Image
            src="/studio/keycap-macro.webp"
            alt="Macro product render of the SottoKey three-dot keycap"
            fill
            sizes="100vw"
          />
        </div>
        <div className="materials-section__copy">
          <p className="eyebrow">DESIGNED LIKE AN INSTRUMENT</p>
          <h2>Quiet surfaces. Fast reactions. No AI theatre.</h2>
          <p>
            Graphite keys, one ink accent, proofreader marks, and zero
            sparkles. Every interaction is designed to respond immediately and
            settle without getting between your finger and the text.
          </p>
          <Link href="/features">
            See the design system <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="evidence section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">MEASURED, NOT ESTIMATED</p>
            <h2>Small enough for the phone. Fast enough for the sentence.</h2>
          </div>
          <p>
            These numbers come from the production session path on real
            hardware, with the model identity verified before the run.
          </p>
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
            <small>single-sentence rewrite</small>
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

      <section className="faq-section section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">THE IMPORTANT QUESTIONS</p>
            <h2>Privacy claims should survive inspection.</h2>
          </div>
          <p>
            Clear answers about the model, Android&apos;s warning, battery,
            storage, password fields, and known limitations.
          </p>
        </div>
        <FaqList limit={5} />
        <Link href="/support" className="editorial-link">
          Read all questions <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <ClosingCta />
    </>
  );
}
