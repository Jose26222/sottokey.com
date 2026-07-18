import {
  CheckCheck,
  Keyboard,
  ServerOff,
} from "lucide-react";

const items = [
  {
    icon: ServerOff,
    title: "No internet permission",
    copy: "The Android production build cannot send your typing to a server.",
  },
  {
    icon: CheckCheck,
    title: "Every edit stays visible",
    copy: "Insertions and deletions appear before SottoKey replaces any text.",
  },
  {
    icon: Keyboard,
    title: "A complete keyboard",
    copy: "Typing, emoji, clipboard, text editing, and rewrite share one surface.",
  },
];

export function ProofRail() {
  return (
    <section className="proof-rail" aria-label="SottoKey privacy guarantees">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <article key={item.title}>
            <div className="proof-rail__top">
              <span>0{index + 1}</span>
              <Icon aria-hidden="true" />
            </div>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        );
      })}
    </section>
  );
}
