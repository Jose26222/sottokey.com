import {
  CheckCheck,
  Eye,
  ServerOff,
  UserRoundX,
} from "lucide-react";

const items = [
  {
    icon: ServerOff,
    title: "No internet permission",
    copy: "The release APK has no Android permission to open the network.",
  },
  {
    icon: Eye,
    title: "On-device model",
    copy: "Rewrites are generated inside the keyboard runtime on your phone.",
  },
  {
    icon: CheckCheck,
    title: "Preview every change",
    copy: "Nothing replaces your sentence until you accept the visible diff.",
  },
  {
    icon: UserRoundX,
    title: "No account or telemetry",
    copy: "No identity, ads, analytics SDK, cloud log, or remote model call.",
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
