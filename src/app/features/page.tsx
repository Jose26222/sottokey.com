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
    "Explore SottoKey's on-device rewriting, visible edit review, bilingual typing, local clipboard tools, themes, and Android keyboard controls.",
};

const detailCards = [
  {
    icon: ScanText,
    title: "Rewrite the right passage",
    copy:
      "Select the exact text you want, or let SottoKey use the paragraph around your cursor. For long paragraphs, it clearly marks the smaller sentence window being revised.",
  },
  {
    icon: Languages,
    title: "English and Spanish typing",
    copy:
      "Both dictionaries contribute corrections while your selected language leads the layout and ranking. The rewrite model remains English-focused.",
  },
  {
    icon: Clipboard,
    title: "A local clipboard",
    copy:
      "Recent clips stay in memory and expire. Only snippets you deliberately save remain in app-private storage.",
  },
  {
    icon: Palette,
    title: "Light, dark, and OLED",
    copy:
      "Graphite, paper, pure-black OLED, and dynamic color themes keep the same keyboard geometry.",
  },
  {
    icon: ShieldCheck,
    title: "Private fields stay private",
    copy:
      "Password-class fields disable suggestions, learning, rewriting, and clipboard capture at the keyboard boundary.",
  },
  {
    icon: BotOff,
    title: "No edit without review",
    copy:
      "SottoKey marks insertions and deletions, keeps your original text in place, and waits for a clear decision.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="THE FULL KEYBOARD"
        title={
          <>
            Built to type.
            <br />
            Designed to revise.
          </>
        }
        body="Rewriting is one part of SottoKey. The rest is the keyboard you use for ordinary typing: corrections, emoji, cursor movement, clipboard work, and the small adjustments that make it feel like yours."
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
            <p className="eyebrow">BUILT INTO THE DETAILS</p>
            <h2>Privacy that holds up during daily use.</h2>
          </div>
          <p>
            Privacy changes what the keyboard remembers, what it keeps only in
            memory, and what it turns off in sensitive fields.
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
          <h2>A proofreader&apos;s interface.</h2>
          <p>
            Graphite surfaces, a deep ink accent, red strike marks, green
            insertions, and responsive key movement keep the visual language
            grounded in editing rather than conversation.
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
