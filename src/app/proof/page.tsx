import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Binary,
  Box,
  Check,
  FileCheck2,
  Gauge,
  ShieldCheck,
  TriangleAlert,
  WifiOff,
} from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";
import { PageHero } from "@/components/PageHero";
import { productStatus, releaseFacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Technical Proof",
  description:
    "Verify SottoKey's Android permission model, local runtime architecture, model package identity, measured performance, and known limitations.",
};

const permissionOutput = `package: com.sottokey.keyboard

release manifest:
  requested app permissions: none

service protection:
  android.permission.BIND_INPUT_METHOD

network check:
  android.permission.INTERNET — ABSENT`;

export default function ProofPage() {
  return (
    <>
      <PageHero
        eyebrow="TECHNICAL PROOF"
        title={
          <>
            Don&apos;t trust the copy.
            <br />
            Inspect the construction.
          </>
        }
        body="The strongest privacy claim is not a sentence on this site. It is the missing Android permission in the release package, combined with a local runtime and a model that never needs a network path."
        aside={
          <div className="hero-proof-note">
            <WifiOff aria-hidden="true" />
            <span>INTERNET permission absent from release</span>
          </div>
        }
      />

      <section className="permission-proof section section--dark">
        <div className="permission-proof__copy">
          <p className="eyebrow">PROOF 01 / ANDROID PERMISSIONS</p>
          <h2>The keyboard cannot open an internet socket.</h2>
          <p>
            Android applications must request the INTERNET permission before
            opening network connections. SottoKey&apos;s release manifest does
            not request it.
          </p>
          <div className="proof-command">
            <span>REPRODUCE</span>
            <code>aapt dump permissions SottoKey-release.apk</code>
          </div>
        </div>
        <pre>
          <code>{permissionOutput}</code>
        </pre>
      </section>

      <section className="architecture-proof section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">PROOF 02 / REQUEST PATH</p>
            <h2>Every step stays inside the application process.</h2>
          </div>
          <p>
            The keyboard captures your exact selection or a bounded paragraph
            window, asks the local model, validates the response, renders a
            diff, and waits for a human action.
          </p>
        </div>
        <div className="architecture-flow">
          {[
            ["01", "InputConnection", "Exact selection or paragraph window"],
            ["02", "Protected spans", "URLs, numbers, email, negation checks"],
            ["03", "Local model", "llama.cpp CPU runtime + verified GGUF"],
            ["04", "Validator", "Reject unsafe or malformed changes"],
            ["05", "Visible diff", "Insertions and deletions, no silent replace"],
            ["06", "Human gate", "Keep original or Accept edit"],
          ].map(([number, title, copy], index) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
              {index < 5 && <ArrowRight aria-hidden="true" />}
            </article>
          ))}
        </div>
      </section>

      <section className="release-proof section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROOF 03 / CURRENT EVIDENCE</p>
            <h2>A versioned model, package, and measurement.</h2>
          </div>
          <p>
            The app UI, installed model, and next model are tracked separately.
            Metrics remain attached to the exact package and device that
            produced them.
          </p>
        </div>
        <div className="release-proof__grid">
          {[
            [
              Box,
              "APP UI",
              releaseFacts.appVersion,
              `${productStatus.app.state} · captured ${productStatus.app.capturedAt}`,
            ],
            [
              Binary,
              "INSTALLED MODEL",
              releaseFacts.model,
              `${releaseFacts.modelPayload} · ${productStatus.installedModel.qualityGate}`,
            ],
            [Gauge, "P50 TOTAL", releaseFacts.p50, releaseFacts.device],
            [FileCheck2, "TTFT", releaseFacts.ttft, releaseFacts.measuredAt],
          ].map(([IconValue, label, value, detail]) => {
            const Icon = IconValue as typeof Box;
            return (
              <article key={String(label)}>
                <Icon aria-hidden="true" />
                <span>{String(label)}</span>
                <strong>{String(value)}</strong>
                <small>{String(detail)}</small>
              </article>
            );
          })}
        </div>
      </section>

      <section className="quality-proof section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">PROOF 04 / QUALITY BOUNDARIES</p>
            <h2>Honest enough to show the failure modes.</h2>
          </div>
          <p>
            The preview is required because the model can still drift. The
            installed v3 model passed six of eight hard gates under a documented
            exception; the product does not hide that behind a confidence
            animation.
          </p>
        </div>
        <div className="quality-proof__columns">
          <article className="quality-proof__positive">
            <ShieldCheck aria-hidden="true" />
            <h3>What is enforced</h3>
            <ul>
              <li>
                <Check aria-hidden="true" /> URLs and protected spans are checked.
              </li>
              <li>
                <Check aria-hidden="true" /> Number and negation changes are
                validated.
              </li>
              <li>
                <Check aria-hidden="true" /> Invalid output keeps the original.
              </li>
              <li>
                <Check aria-hidden="true" /> The user accepts every edit.
              </li>
              <li>
                <Check aria-hidden="true" /> Undo is armed immediately after
                acceptance.
              </li>
            </ul>
          </article>
          <article className="quality-proof__warning">
            <TriangleAlert aria-hidden="true" />
            <h3>What remains imperfect</h3>
            <ul>
              <li>Meaning corruption missed the installed model&apos;s gate.</li>
              <li>Spanish identity behavior also missed its release gate.</li>
              <li>Mixed-language Professional rewriting is a known weak area.</li>
              <li>Short ambiguous sentences are difficult for a 350M model.</li>
              <li>Battery-per-rewrite and sustained thermal tests remain open.</li>
              <li>The replacement model is still in evaluation.</li>
            </ul>
          </article>
        </div>
        <Link href="/changelog" className="editorial-link">
          Follow current limitations and fixes <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <ClosingCta />
    </>
  );
}
