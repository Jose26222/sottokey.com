"use client";

import { ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { liveDemo, productStatus } from "@/data/site";
import { DeviceFrame } from "./DeviceFrame";

export function GuidedDemo({ compact = false }: { compact?: boolean }) {
  const [activeId, setActiveId] = useState<string>(liveDemo.frames[0].id);
  const active = useMemo(
    () =>
      liveDemo.frames.find((frame) => frame.id === activeId) ??
      liveDemo.frames[0],
    [activeId],
  );

  return (
    <div className={`guided-demo ${compact ? "guided-demo--compact" : ""}`}>
      <div className="guided-demo__controls">
        <div>
          <p className="eyebrow">CAPTURED LIVE ON ANDROID</p>
          <h2>One correction. Three real states.</h2>
          <p className="guided-demo__lede">
            No reconstructed keyboard and no generated screen. Choose a step to
            inspect the current app exactly as it appeared on the connected
            phone.
          </p>
        </div>

        <div
          className="demo-sequence-list"
          role="group"
          aria-label="Correction sequence"
        >
          {liveDemo.frames.map((frame, index) => (
            <button
              key={frame.id}
              type="button"
              className={frame.id === active.id ? "is-active" : ""}
              onClick={() => setActiveId(frame.id)}
              aria-pressed={frame.id === active.id}
            >
              <span>0{index + 1}</span>
              <div>
                <strong>{frame.label}</strong>
                <small>{frame.kicker}</small>
              </div>
            </button>
          ))}
        </div>

        <div className="demo-transcript">
          <span>MEASURED EXAMPLE</span>
          <p>
            <del>teh</del>
            <ins>The</ins> meeting got moved to 3pm<ins>.</ins>
          </p>
        </div>

        <div className="demo-provenance">
          <ShieldCheck aria-hidden="true" />
          <div>
            <strong>{productStatus.installedModel.state}</strong>
            <span>{liveDemo.model}</span>
            <small>
              Captured {liveDemo.capturedAt}. A replacement model is still in
              evaluation.
            </small>
          </div>
        </div>
      </div>

      <div className="demo-live-stage">
        <div className="demo-live-stage__light" aria-hidden="true" />
        <div className="demo-live-stage__badge">
          <span />
          Live device capture · app {productStatus.app.version}
        </div>
        <DeviceFrame
          src={active.src}
          alt={active.alt}
          className="demo-live-phone"
          priority
        />
        <div className="demo-live-stage__meta">
          <span>{active.label}</span>
          <span>{productStatus.app.captureDevice}</span>
        </div>
      </div>
    </div>
  );
}
