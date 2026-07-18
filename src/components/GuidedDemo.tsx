"use client";

import { WifiOff } from "lucide-react";
import { useMemo, useState } from "react";
import { liveDemo } from "@/data/site";
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
          <p className="eyebrow">ROUGH IN. READY OUT.</p>
          <h2>Fix the line. Keep the decision.</h2>
          <p className="guided-demo__lede">
            Write as you normally would. Choose Fix, Professional, or Casual.
            SottoKey marks the difference and leaves your original in place
            until you accept.
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
          <span>BEFORE / AFTER</span>
          <p>
            <del>teh</del>
            <ins>The</ins> meeting got moved to 3pm<ins>.</ins>
          </p>
        </div>

        <div className="demo-provenance">
          <WifiOff aria-hidden="true" />
          <div>
            <strong>Rewritten on your phone</strong>
            <span>No cloud request. No account.</span>
            <small>
              Results vary. Your original stays in place until you accept the
              edit.
            </small>
          </div>
        </div>
      </div>

      <div className="demo-live-stage">
        <div className="demo-live-stage__light" aria-hidden="true" />
        <div className="demo-live-stage__badge">
          <span />
          Fix · On device
        </div>
        <DeviceFrame
          src={active.src}
          alt={active.alt}
          className="demo-live-phone"
          priority
        />
        <div className="demo-live-stage__meta">
          <span>{active.label}</span>
          <span>Your choice</span>
        </div>
      </div>
    </div>
  );
}
