import {
  CheckCheck,
  Keyboard,
  ServerOff,
} from "lucide-react";

const items = [
  {
    icon: ServerOff,
    title: "No internet permission",
    copy: "Not a promise—an absent permission. The app cannot open a network connection, and you can check that yourself in thirty seconds.",
  },
  {
    icon: CheckCheck,
    title: "You keep the final word",
    copy: "Every rewrite waits in a visible diff. Nothing changes until you say so.",
  },
  {
    icon: Keyboard,
    title: "No account behind it",
    copy: "No sign-in. No analytics SDK. No cloud model. No remote logs. Nothing to opt out of.",
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
