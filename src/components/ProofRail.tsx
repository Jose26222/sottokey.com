import {
  CheckCheck,
  Keyboard,
  ServerOff,
} from "lucide-react";

const items = [
  {
    icon: ServerOff,
    title: "No internet permission",
    copy: "Android gives the release app no route to the network.",
  },
  {
    icon: CheckCheck,
    title: "You approve every edit",
    copy: "A visible diff appears before anything replaces your sentence.",
  },
  {
    icon: Keyboard,
    title: "A keyboard first",
    copy: "Typing, emoji, clipboard, editing, and rewrite in one surface.",
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
