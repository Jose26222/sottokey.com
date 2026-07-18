import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  KeyRound,
  PackageCheck,
  Settings2,
  Smartphone,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { productStatus, releaseFacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "SottoKey availability, Android requirements, storage details, setup sequence, and release status.",
};

const steps = [
  {
    icon: Download,
    title: "Install",
    copy: "Install the verified Play build when the public listing opens.",
  },
  {
    icon: KeyRound,
    title: "Enable",
    copy: "Android displays its standard third-party keyboard warning.",
  },
  {
    icon: Settings2,
    title: "Select",
    copy: "Choose SottoKey as the current keyboard from the guided setup.",
  },
  {
    icon: PackageCheck,
    title: "Verify",
    copy: "The model package is imported, hashed, and activated atomically.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="ANDROID RELEASE"
        title={
          <>
            Built for Android.
            <br />
            Preparing for Play.
          </>
        }
        body="SottoKey 0.4.0 is running on physical Android hardware. The installed v3 Q8 model remains the measured evidence package while its replacement is evaluated; public Play availability still follows release packaging and closed-track review."
        aside={
          <div className="availability-pill">
            <span />
            {productStatus.releaseStage} · v{releaseFacts.appVersion}
          </div>
        }
      />

      <section className="download-card section section--dark">
        <div className="download-card__product">
          <div className="download-card__icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div>
            <p className="eyebrow">SOTTOKEY FOR ANDROID</p>
            <h2>The quiet keyboard.</h2>
            <p>On-device rewriting · No internet permission · No account</p>
          </div>
        </div>
        <div className="download-card__status">
          <span>PUBLIC PLAY RELEASE</span>
          <strong>Coming after closed-track validation</strong>
          <Link href="/changelog">
            Follow release progress <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="requirements section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">REQUIREMENTS</p>
            <h2>What the phone needs.</h2>
          </div>
          <p>
            Final Play compatibility will be published with the signed release.
            These are the current engineering targets.
          </p>
        </div>
        <div className="requirements__grid">
          <article>
            <Smartphone aria-hidden="true" />
            <span>PLATFORM</span>
            <strong>Android · arm64</strong>
            <p>Modern 64-bit Android phones are the current release target.</p>
          </article>
          <article>
            <PackageCheck aria-hidden="true" />
            <span>MODEL</span>
            <strong>{releaseFacts.modelPayload}</strong>
            <p>{releaseFacts.model}</p>
          </article>
          <article>
            <KeyRound aria-hidden="true" />
            <span>PERMISSIONS</span>
            <strong>No INTERNET</strong>
            <p>Optional features may request narrowly scoped local access.</p>
          </article>
        </div>
      </section>

      <section className="setup-steps section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">FOUR-STEP SETUP</p>
            <h2>Android makes keyboard choice explicit.</h2>
          </div>
          <p>
            The app guides each system step and explains the generic Android
            warning before it appears.
          </p>
        </div>
        <div className="setup-steps__grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="download-explainer section section--dark">
        <div>
          <p className="eyebrow">WHY THE DOWNLOAD IS LARGER</p>
          <h2>The model comes with the keyboard because the cloud does not.</h2>
        </div>
        <div>
          <p>
            A typical cloud writing app keeps its model somewhere else. SottoKey
            packages a compact model for the device. That costs storage, but it
            removes a network dependency from every rewrite.
          </p>
          <ul>
            <li>
              <Check aria-hidden="true" /> Works without connectivity
            </li>
            <li>
              <Check aria-hidden="true" /> No usage meter or account
            </li>
            <li>
              <Check aria-hidden="true" /> Versioned, hash-verified package
            </li>
          </ul>
          <Link href="/proof">
            Inspect the model package <ChevronRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="release-follow section section--dark">
        <p className="eyebrow">FOLLOW THE RELEASE</p>
        <h2>See exactly what is done—and what is not.</h2>
        <p>
          The changelog tracks product, model, performance, and release-readiness
          changes without pretending the public store launch is already open.
        </p>
        <div className="button-row">
          <Link href="/changelog" className="button button--light">
            Open changelog <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/demo" className="button button--ghost">
            Try the verified demo
          </Link>
        </div>
      </section>
    </>
  );
}
