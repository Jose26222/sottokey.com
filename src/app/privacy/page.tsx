import type { Metadata } from "next";
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
import { PrivacyPath } from "@/components/PrivacyPath";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "SottoKey's privacy architecture: no Android internet permission, no account, no telemetry, local model inference, and explicit controls for stored data.",
};

const guarantees = [
  {
    icon: Network,
    title: "No direct app network permission",
    copy:
      "The Android production manifest does not request INTERNET. The keyboard contains no analytics, advertising, remote-logging, or cloud-model client. Google Play Billing uses the Play Store service rather than direct app sockets.",
  },
  {
    icon: EyeOff,
    title: "Temporary text stays temporary",
    copy:
      "The composing buffer and bounded next-word context live in memory for the active suggestion. A rewrite target lives for one request. SottoKey does not automatically write typed sentences to disk.",
  },
  {
    icon: KeyRound,
    title: "Sensitive fields switch off extras",
    copy:
      "Password-class inputs disable suggestions, learning, rewriting, and clipboard capture. Incognito flags disable personalized learning automatically.",
  },
  {
    icon: Database,
    title: "Local data has controls",
    copy:
      "Preferences, learned words and word pairs, touch offsets, local latency metrics, Billing ownership cache, and explicitly saved content live in app-private storage and have deletion controls.",
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
        body="SottoKey has no direct app network permission for what you type. Like every keyboard, it exchanges text with the app you are typing in; its local models do not send that text to a SottoKey server. This page explains what the keyboard processes, stores locally, and disables."
        aside={
          <div className="hero-proof-note">
            <ShieldCheck aria-hidden="true" />
            <span>Android app: INTERNET permission absent</span>
          </div>
        }
      />

      <section className="privacy-visual section section--dark">
        <PrivacyPath />
      </section>

      <section className="privacy-guarantees section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">THE GUARANTEES</p>
            <h2>What stays local, and what stays off.</h2>
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
          <h2>The selected text, or the paragraph around your cursor.</h2>
          <p>
            An explicit selection is rewritten exactly when it fits the
            2,000-character model budget. Without a selection, SottoKey captures
            the current paragraph. Longer paragraphs use a visible
            sentence-boundary window around the cursor; the remaining sentences
            stay untouched.
          </p>
          <p>
            The model processes that text in memory. SottoKey checks the result,
            marks the changes, and waits for you to choose Keep original or
            Accept edit.
          </p>
          <p>
            For automatic next-word suggestions, SottoKey reads at most the
            last 1,024 characters before the cursor plus the current composing
            prefix. That bounded context is processed only by the selected
            on-device English or Spanish prediction model and is not persisted,
            added to training data, or supplied to Google Play Billing.
          </p>
        </article>

        <article>
          <p className="eyebrow">WHAT MAY BE STORED LOCALLY</p>
          <h2>Only the pieces that make a keyboard yours.</h2>
          <ul className="policy-list">
            <li>Theme, size, language, and behavior preferences.</li>
            <li>Encrypted personal dictionary words and learned word pairs.</li>
            <li>Per-key touch offset averages, without text.</li>
            <li>Latency, backend, model version, and outcome codes—never text.</li>
            <li>Encrypted clipboard snippets and email addresses you explicitly save.</li>
            <li>Encrypted email templates you explicitly create or save.</li>
            <li>
              Verified Play product IDs and the last ownership-query time in a
              tamper-evident local Billing cache.
            </li>
          </ul>
          <p>
            Temporary clipboard history stays in memory, is capped, expires,
            skips sensitive clips, and can be disabled.
          </p>
          <p>
            Google Play handles purchase and product data through the Play
            Store service. SottoKey supplies no typed content to Billing.
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
            Settings provides controls for learned words, temporary clipboard
            history, saved snippets, saved email addresses, email templates,
            and adaptive touch learning. Uninstalling SottoKey removes its
            app-private data because no account exists elsewhere.
          </p>
          <p>
            Screen capture follows Android defaults. Screenshots are allowed
            for reporting visual issues, so avoid capturing private text you
            do not intend to retain or share.
          </p>
          <Link href="/support">
            See deletion instructions <ArrowRight aria-hidden="true" />
          </Link>
        </article>
      </section>

      <section className="privacy-contact section section--dark">
        <p className="eyebrow">QUESTIONS OR CONCERNS</p>
        <h2>Privacy questions should have a direct answer.</h2>
        <p>
          The permanent privacy contact channel will be published before the
          public Google Play release. Until then, the technical proof and
          current limitations remain available on this site.
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
