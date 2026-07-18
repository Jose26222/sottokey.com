import {
  CheckCheck,
  Keyboard,
  ServerOff,
} from "lucide-react";

const items = [
  {
    icon: ServerOff,
    title: "No internet permission",
    copy: "The production app has no permission to open a network socket.",
  },
  {
    icon: CheckCheck,
    title: "You keep the final word",
    copy: "Every proposed rewrite waits in a visible diff for your approval.",
  },
  {
    icon: Keyboard,
    title: "No account behind it",
    copy: "No sign-in, analytics SDK, cloud model, or remote logs.",
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
