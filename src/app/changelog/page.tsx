import type { Metadata } from "next";
import {
  Activity,
  Check,
  CircleDot,
  Keyboard,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Versioned SottoKey product, model, keyboard, privacy, and release-readiness updates.",
};

const releases = [
  {
    version: "0.4.0",
    date: "July 2026",
    status: "CURRENT SOURCE",
    summary:
      "A major keyboard-completeness and bilingual typing pass ahead of public store preparation.",
    groups: [
      {
        icon: Keyboard,
        title: "Added",
        items: [
          "English and Spanish layouts, lexicons, and corrections",
          "Glide typing with a local decoder and visible trail",
          "Expanded emoji, clipboard, and text-editing surfaces",
          "One-handed controls and adaptive keyboard refinements",
        ],
      },
      {
        icon: Wrench,
        title: "Improved",
        items: [
          "Galley rewrite panel with clearer insert/delete marks",
          "Light, dark, OLED, and dynamic color behavior",
          "Autocorrect edge cases and standalone i capitalization",
          "Saved snippets and local clipboard classification",
        ],
      },
      {
        icon: Activity,
        title: "Still validating",
        items: [
          "Physical-device glide accuracy and thresholds",
          "TalkBack acceptance across expanded tool panels",
          "Battery per rewrite and sustained thermal behavior",
          "Public Play signing, asset delivery, and closed-track review",
        ],
      },
    ],
  },
  {
    version: "0.3.2",
    date: "14 July 2026",
    status: "DEVICE-CLOSED",
    summary:
      "Finalized the v3 bilingual model package and selected Q8_0 as the device deployment default.",
    groups: [
      {
        icon: Check,
        title: "Verified",
        items: [
          "Q8_0 at 28.3 tokens per second on Snapdragon 855",
          "490 ms p50 total and 207 ms p50 time to first token",
          "Model-package hash verification and atomic activation",
          "Bundled release install on a factory-fresh device",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Privacy",
        items: [
          "No INTERNET permission in the release app",
          "No backup or device-transfer extraction",
          "Metrics remain text-free",
          "Sensitive-field rewrite and clipboard shutdown",
        ],
      },
    ],
  },
  {
    version: "0.3.1",
    date: "11 July 2026",
    status: "HISTORICAL",
    summary:
      "Established the complete local runtime, rewrite contract, model package, and Galley design direction.",
    groups: [
      {
        icon: CircleDot,
        title: "Foundation",
        items: [
          "Fix, Standard, Professional, and Casual modes",
          "Diff preview, Keep original, Accept edit, and Undo edit",
          "llama.cpp CPU runtime and on-demand model session policy",
          "Local dictionaries, adaptive hitboxes, and privacy controls",
        ],
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="CHANGELOG"
        title={
          <>
            What changed.
            <br />
            What still needs proof.
          </>
        }
        body="SottoKey's changelog includes the product surfaces, model package, device evidence, privacy guarantees, and release blockers—not just visible interface changes."
      />

      <section className="changelog section section--paper">
        {releases.map((release, releaseIndex) => (
          <article key={release.version} className="release">
            <div className="release__meta">
              <span>0{releaseIndex + 1}</span>
              <div>
                <p>{release.status}</p>
                <strong>v{release.version}</strong>
                <small>{release.date}</small>
              </div>
            </div>
            <div className="release__content">
              <h2>{release.summary}</h2>
              <div className="release__groups">
                {release.groups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <section key={group.title}>
                      <h3>
                        <Icon aria-hidden="true" /> {group.title}
                      </h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
