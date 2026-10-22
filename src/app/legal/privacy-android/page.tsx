import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { policyText } from "./policy-text";

export const metadata: Metadata = {
  title: "SottoKey Privacy Policy",
  alternates: { canonical: "/legal/privacy-android/" },
};

type PolicyBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] };

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < text.length) {
    const start = text.indexOf("**", index);
    if (start === -1) {
      nodes.push(text.slice(index));
      break;
    }

    if (start > index) {
      nodes.push(text.slice(index, start));
    }

    const end = text.indexOf("**", start + 2);
    if (end === -1) {
      nodes.push(text.slice(start));
      break;
    }

    nodes.push(<strong key={start}>{text.slice(start + 2, end)}</strong>);
    index = end + 2;
  }

  return nodes;
}

function parseBlocks(markdown: string): PolicyBlock[] {
  const blocks: PolicyBlock[] = [];
  let paragraphs: string[] = [];
  let items: string[] = [];

  function flushParagraphs() {
    if (paragraphs.length > 0) {
      blocks.push({ kind: "paragraph", text: paragraphs.join(" ") });
      paragraphs = [];
    }
  }

  function flushList() {
    if (items.length > 0) {
      blocks.push({ kind: "list", items });
      items = [];
    }
  }

  for (const line of markdown.split("\n")) {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushParagraphs();
      flushList();
    } else if (trimmed.startsWith("- ")) {
      flushParagraphs();
      items.push(trimmed.slice(2));
    } else {
      flushList();
      paragraphs.push(trimmed);
    }
  }

  flushParagraphs();
  flushList();

  return blocks;
}

export default function AndroidPrivacyPolicyPage() {
  const lines = policyText.split("\n");
  const title = (lines[0] ?? "").replace(/\*\*/g, "");
  const effective = lines[2] ?? "";
  const blocks = parseBlocks(lines.slice(4).join("\n"));
  const sections: { heading: string; blocks: PolicyBlock[] }[] = [];
  for (const block of blocks) {
    const heading = block.kind === "paragraph"
      ? /^\*\*([^*]+)\*\*(.*)$/.exec(block.text)
      : null;
    if (heading) {
      sections.push({ heading: heading[1], blocks: [] });
      if (heading[2].trim()) {
        sections[sections.length - 1].blocks.push({ kind: "paragraph", text: heading[2].trim() });
      }
    } else {
      sections[sections.length - 1].blocks.push(block);
    }
  }


  return (
    <div data-policy-body>
      <PageHero
        eyebrow=""
        title={title}
        body={effective}
        tone="paper"
      />
      <section className="legal-copy section section--paper">
        {sections.map((section) => (
          <article key={section.heading}>
            <h2>{section.heading}</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {section.blocks.map((block, blockIndex) =>
                block.kind === "list" ? (
                  <ul key={blockIndex} style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.85 }}>
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{renderInline(item)}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={blockIndex}>{renderInline(block.text)}</p>
                ),
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
