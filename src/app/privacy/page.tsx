import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CloudOff,
  Database,
  EyeOff,
  HardDrive,
  KeyRound,
  Network,
  ShieldCheck,
} from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "SottoKey's privacy architecture: no Android internet permission, no account, no telemetry, local model inference, and explicit controls for stored data.",
};

const guarantees = [
  {
    icon: Network,
    title: "No network permission",
    copy:
      "The Android release manifest does not request INTERNET. There is no server component, analytics SDK, advertising SDK, remote logging, or update phone-home inside the keyboard.",
  },
  {
    icon: EyeOff,
    title: "Typed text is ephemeral",
    copy:
      "The composing buffer lives in memory for the current word. A rewrite target lives for one request. SottoKey does not automatically write typed sentences to disk.",
  },
  {
    icon: KeyRound,
    title: "Sensitive fields go dark",
    copy:
      "Password-class inputs disable suggestions, learning, rewriting, and clipboard capture. Incognito flags disable personalized learning automatically.",
  },
  {
    icon: Database,
    title: "Local data is visible",
    copy:
      "Preferences, learned words, touch offsets, local latency metrics, and explicitly saved snippets live in app-private storage and can be removed from settings.",
  },
  {
    icon: CloudOff,
    title: "Cloud backup disabled",
    copy:
      "Android backup and device-to-device extraction are disabled, so the personal dictionary and saved keyboard data do not migrate through Google backup.",
  },
  {
    icon: HardDrive,
    title: "Verified model packages",
    copy:
      "Model packages are SHA-256 verified before activation and switch atomically. A damaged or incomplete package cannot half-activate.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="PRIVACY NOTICE · EFFECTIVE 18 JULY 2026"
        title={
          <>
            Privacy is structural.
            <br />
            Not a promise in small type.
          </>
        }
        body="SottoKey is built so the Android app cannot transmit what you type. This page explains what the keyboard processes, what it stores locally, what it disables, and the narrow limits of those guarantees."
        aside={
          <div className="hero-proof-note">
            <ShieldCheck aria-hidden="true" />
            <span>Android app: no data collected or shared</span>
          </div>
        }
      />

      <section className="privacy-visual section section--dark">
        <Image
          src="/studio/privacy-cutaway.webp"
          alt="Text and keyboard processing remain inside an Android phone, separate from a disconnected network"
          fill
          priority
          sizes="100vw"
        />
        <div className="privacy-visual__legend">
          <span>Sentence</span>
          <span>Keyboard</span>
          <span>Local model</span>
          <span>Phone</span>
          <span>Disconnected</span>
        </div>
      </section>

      <section className="privacy-guarantees section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">THE GUARANTEES</p>
            <h2>What the keyboard can—and cannot—do.</h2>
          </div>
          <p>
            These statements describe the Android application. Website
            operation is disclosed separately below.
          </p>
        </div>
        <div className="privacy-guarantees__grid">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <div>
                  <span>0{index + 1}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="policy-copy section section--paper">
        <article>
          <p className="eyebrow">WHAT IS PROCESSED</p>
          <h2>One sentence, or the selection you chose.</h2>
          <p>
            A rewrite request contains only the current sentence or your
            explicit selection, capped at 2,000 characters. It does not contain
            the entire field, other app content, previous conversations, or
            text you did not act on.
          </p>
          <p>
            The model processes that text in memory. The editor validates the
            result, computes a diff, and waits for you to choose Keep original
            or Accept edit.
          </p>
        </article>

        <article>
          <p className="eyebrow">WHAT MAY BE STORED LOCALLY</p>
          <h2>Only the pieces that make a keyboard yours.</h2>
          <ul className="policy-list">
            <li>Theme, size, language, and behavior preferences.</li>
            <li>Personal dictionary entries and learned word frequencies.</li>
            <li>Per-key touch offset averages, without text.</li>
            <li>Latency, backend, model version, and outcome codes—never text.</li>
            <li>Clipboard snippets that you explicitly save.</li>
          </ul>
          <p>
            Temporary clipboard history stays in memory, is capped, expires,
            skips sensitive clips, and can be disabled.
          </p>
        </article>

        <article>
          <p className="eyebrow">IMPORTANT LIMIT</p>
          <h2>The host app must identify a sensitive field.</h2>
          <p>
            SottoKey disables intelligence when Android identifies a
            password-class field. If another app fails to mark a payment or
            sensitive field correctly, no keyboard can reliably infer that
            missing classification. Incognito mode remains available as an
            explicit local override.
          </p>
        </article>

        <article>
          <p className="eyebrow">WEBSITE DATA</p>
          <h2>This website does not receive your keyboard text.</h2>
          <p>
            The guided demo is deterministic and does not accept arbitrary
            input. The launch website uses no advertising cookies, session
            replay, fingerprinting, or third-party font/script CDN. Standard
            infrastructure logs may temporarily contain request metadata such
            as time, path, and network address for security and operation.
          </p>
          <p>
            If a beta or support contact method is added, its form will disclose
            the exact information and processor before submission.
          </p>
        </article>

        <article>
          <p className="eyebrow">DELETE YOUR DATA</p>
          <h2>Clear it locally, or uninstall completely.</h2>
          <p>
            Settings provides controls for learned words, saved snippets,
            clipboard history, and local keyboard data. Uninstalling SottoKey
            removes its app-private data because no account exists elsewhere.
          </p>
          <Link href="/support">
            See deletion instructions <ArrowRight aria-hidden="true" />
          </Link>
        </article>
      </section>

      <section className="privacy-contact section section--dark">
        <p className="eyebrow">QUESTIONS OR CONCERNS</p>
        <h2>Privacy questions deserve a direct answer.</h2>
        <p>
          The permanent privacy contact channel will be published before public
          Play release. Until then, the technical proof and current limitations
          remain available on this site.
        </p>
        <div className="button-row">
          <Link href="/proof" className="button button--light">
            Inspect technical proof <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/support" className="button button--ghost">
            Open support
          </Link>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
