import { Cpu, Keyboard, WifiOff } from "lucide-react";
import { DeviceFrame } from "./DeviceFrame";

export function PrivacyPath() {
  return (
    <div className="privacy-path">
      <div className="privacy-path__flow">
        <article className="privacy-path__node privacy-path__sentence">
          <span>01 / SENTENCE</span>
          <p>The meeting got moved to 3pm.</p>
        </article>

        <span className="privacy-path__link" aria-hidden="true" />

        <article className="privacy-path__node">
          <Keyboard aria-hidden="true" />
          <span>02 / KEYBOARD</span>
          <strong>SottoKey</strong>
          <small>Bounded text only</small>
        </article>

        <span className="privacy-path__link" aria-hidden="true" />

        <article className="privacy-path__node privacy-path__model">
          <Cpu aria-hidden="true" />
          <span>03 / LOCAL MODEL</span>
          <strong>Runs here</strong>
          <small>Inside the app process</small>
        </article>

        <span className="privacy-path__link" aria-hidden="true" />

        <div className="privacy-path__phone">
          <DeviceFrame
            src="/product/live-rewrite-diff.webp"
            alt="Current SottoKey screen reviewing a local correction"
          />
          <span>04 / YOUR PHONE</span>
        </div>

        <div className="privacy-path__blocked">
          <span>NO NETWORK PATH</span>
          <WifiOff aria-hidden="true" />
          <strong>Disconnected by Android</strong>
          <small>INTERNET permission absent</small>
        </div>
      </div>
    </div>
  );
}
