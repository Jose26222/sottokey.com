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
import { GooglePlayCta } from "@/components/GooglePlayCta";
import { PageHero } from "@/components/PageHero";
import { productStatus, releaseFacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Google Play Release",
  description:
    "Check SottoKey's Google Play status, Android requirements, storage details, setup sequence, and current release stage.",
};

const steps = [
  {
    icon: Download,
    title: "Install",
    copy: "Install the verified build when the Google Play listing opens.",
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
        eyebrow="GOOGLE PLAY RELEASE"
        title={
          <>
            Running on Android.
            <br />
            Not on Play yet.
          </>
        }
        body={`SottoKey ${productStatus.app.version} is a working private device beta. Before the Google Play listing opens, the signed release still needs final packaging, closed-track validation, and store review.`}
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
          <span>GOOGLE PLAY</span>
          <strong>{productStatus.availability}</strong>
          <p>
            The final listing URL has not been supplied. This destination stays
            disabled until the verified Google Play URL is added.
          </p>
          <GooglePlayCta />
          <Link href="/changelog" className="download-card__secondary-link">
            Follow release progress <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="requirements section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">REQUIREMENTS</p>
            <h2>What SottoKey needs from your phone.</h2>
          </div>
          <p>
            These are the current build requirements. The final supported
            device list will come with the signed Google Play release.
          </p>
        </div>
        <div className="requirements__grid">
          <article>
            <Smartphone aria-hidden="true" />
            <span>PLATFORM</span>
            <strong>{productStatus.requirements.android}</strong>
            <p>{productStatus.requirements.architecture} is required.</p>
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
            <p>The production manifest does not request network access.</p>
          </article>
        </div>
      </section>

      <section className="setup-steps section section--paper">
        <div className="section-heading section-heading--paper">
          <div>
            <p className="eyebrow">FOUR-STEP SETUP</p>
            <h2>Four clear steps, all on the phone.</h2>
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
          <p className="eyebrow">WHY THE MODEL LIVES IN THE APP</p>
          <h2>The storage cost of keeping every rewrite local.</h2>
        </div>
        <div>
          <p>
            Cloud writing tools keep their models on a server. SottoKey packages
            its model for your phone. That uses more storage, but every rewrite
            works without a network connection or account.
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
        <h2>Release work, in plain view.</h2>
        <p>
          The changelog separates finished product work from open device tests
          and Google Play preparation.
        </p>
        <div className="button-row">
          <Link href="/changelog" className="button button--light">
            Open changelog <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/demo" className="button button--ghost">
            See the device demo
          </Link>
        </div>
      </section>
    </>
  );
}
