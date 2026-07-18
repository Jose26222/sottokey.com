import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BotOff,
  Check,
  Clipboard,
  Languages,
  Palette,
  ScanText,
  ShieldCheck,
} from "lucide-react";
import { ClosingCta } from "@/components/ClosingCta";
import { DeviceFrame } from "@/components/DeviceFrame";
import { PageHero } from "@/components/PageHero";
import { featureGroups, productSurfaces } from "@/data/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore SottoKey's on-device rewriting, diff preview, private clipboard, bilingual typing, themes, and complete Android keyboard tools.",
};

const detailCards = [
  {
    icon: ScanText,
    title: "Paragraph-aware rewriting",
    copy:
      "SottoKey rewrites your exact selection or the current paragraph. Long paragraphs use an explicit sentence window within the 2,000-character model budget.",
  },
  {
    icon: Languages,
    title: "English + Spanish typing",
    copy:
      "Both dictionaries remain active for corrections while the selected language leads the layout and ranking.",
  },
  {
    icon: Clipboard,
    title: "Private clipboard",
    copy:
      "Recent clips stay in memory and expire. Only snippets you explicitly save persist in app-private storage.",
  },
  {
    icon: Palette,
    title: "Light, dark, OLED",
    copy:
      "Graphite, paper, pure-black OLED, and dynamic color treatments share the same precision keyboard geometry.",
  },
  {
    icon: ShieldCheck,
    title: "Sensitive-field shutdown",
    copy:
      "Password-class fields disable suggestions, learning, rewrite, and clipboard capture at the keyboard boundary.",
  },
  {
    icon: BotOff,
    title: "No AI decoration",
    copy:
      "The interface uses proofreader marks and direct controls—not chatbot bubbles, sparkles, or confidence theatre.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="THE COMPLETE KEYBOARD"
        title={
          <>
            Built to type.
            <br />
            Designed to revise.
          </>
        }
        body="The model is only one layer. SottoKey also has to be the keyboard you trust for every normal sentence, correction, emoji, cursor movement, and clipboard action."
      />

      <section className="feature-chapters section section--paper">
        {featureGroups.map((group, index) => (
          <article key={group.eyebrow}>
            <div className="feature-chapters__copy">
              <p className="eyebrow">{group.eyebrow}</p>
              <h2>{group.title}</h2>
              <p>{group.body}</p>
              <ul>
                {group.points.map((point) => (
                  <li key={point}>
                    <Check aria-hidden="true" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="feature-chapters__visual">
              <DeviceFrame
                src={productSurfaces[index].src}
                alt={productSurfaces[index].alt}
              />
              <span>0{index + 1}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="feature-detail section section--dark">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BUILT INTO THE EDGES</p>
            <h2>The details that make privacy usable.</h2>
          </div>
          <p>
            Privacy is not just a missing network permission. It changes what
            the keyboard remembers, captures, renders, and disables.
          </p>
        </div>
        <div className="feature-detail__grid">
          {detailCards.map((item, index) => {
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

      <section className="design-language section section--dark">
        <div className="design-language__image">
          <Image
            src="/studio/keycap-macro.webp"
            alt="Graphite SottoKey keycap product render"
            fill
            sizes="100vw"
          />
        </div>
        <div className="design-language__copy">
          <p className="eyebrow">THE GALLEY SYSTEM</p>
          <h2>A typesetter&apos;s instrument, not a chat toy.</h2>
          <p>
            Graphite surfaces, one deep ink accent, red strike marks, green
            insertions, mechanical motion, and immediate key response create a
            visual language grounded in proofreading.
          </p>
          <Link href="/demo">
            See it in motion <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
