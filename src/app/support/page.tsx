import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  KeyRound,
  LifeBuoy,
  PackageCheck,
  ShieldQuestion,
  SlidersHorizontal,
} from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Setup, privacy, model installation, rewrite, storage, battery, and troubleshooting guidance for SottoKey.",
};

const categories = [
  {
    icon: KeyRound,
    title: "Setup & selection",
    copy: "Enable SottoKey, choose it as the active keyboard, and understand Android's warning.",
    links: ["Install and enable", "Select the keyboard", "First rewrite"],
  },
  {
    icon: PackageCheck,
    title: "Model & performance",
    copy: "Verify the local model, understand storage, and diagnose slow or failed rewrites.",
    links: ["Verify model package", "Storage requirements", "Performance"],
  },
  {
    icon: SlidersHorizontal,
    title: "Typing & tools",
    copy: "Themes, height, language, clipboard, emoji, text editing, and one-handed layouts.",
    links: ["Typing settings", "Clipboard controls", "Themes and layout"],
  },
  {
    icon: ShieldQuestion,
    title: "Privacy & local data",
    copy: "Sensitive fields, incognito behavior, learned words, saved snippets, and deletion.",
    links: ["Private fields", "Clear local data", "Privacy proof"],
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="SUPPORT"
        title={
          <>
            Clear answers.
            <br />
            No support maze.
          </>
        }
        body="SottoKey is still preparing for public release, but the product behavior and privacy architecture are documented now. Start with setup, model verification, or the questions users should ask any keyboard."
        aside={
          <div className="hero-proof-note">
            <LifeBuoy aria-hidden="true" />
            <span>Documentation · Troubleshooting · Privacy</span>
          </div>
        }
      />

      <section className="support-categories section section--paper">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <article key={category.title}>
              <div>
                <span>0{index + 1}</span>
                <Icon aria-hidden="true" />
              </div>
              <h2>{category.title}</h2>
              <p>{category.copy}</p>
              <ul>
                {category.links.map((link) => (
                  <li key={link}>
                    <BookOpen aria-hidden="true" />
                    {link}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      <section className="support-quickstart section section--dark">
        <div>
          <p className="eyebrow">QUICK START</p>
          <h2>From install to first private rewrite.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <strong>Open SottoKey</strong>
              <p>The setup screen checks keyboard, selection, and model state.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Enable the keyboard</strong>
              <p>Android shows its generic warning for every third-party IME.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Select SottoKey</strong>
              <p>Return to the app and choose SottoKey from the system picker.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <strong>Try a sentence</strong>
              <p>Open rewrite, choose a mode, inspect the diff, and accept.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="support-faq section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">FREQUENTLY ASKED</p>
            <h2>The questions that matter before installation.</h2>
          </div>
          <p>
            About network access, Android&apos;s warning, model mistakes,
            sensitive fields, storage, battery, and website behavior.
          </p>
        </div>
        <FaqList />
      </section>

      <section className="support-contact section section--dark">
        <p className="eyebrow">CONTACT</p>
        <h2>The permanent support inbox opens with the public beta.</h2>
        <p>
          Until then, release status and known limitations are maintained
          publicly here so early testers do not have to guess.
        </p>
        <div className="button-row">
          <Link href="/changelog" className="button button--light">
            Read the changelog <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/proof" className="button button--ghost">
            Inspect current limitations
          </Link>
        </div>
      </section>
    </>
  );
}
