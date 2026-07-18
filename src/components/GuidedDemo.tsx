"use client";

import { Check, RotateCcw, ShieldCheck, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { demoCases } from "@/data/site";

const keyboardRows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌫"],
];

export function GuidedDemo({ compact = false }: { compact?: boolean }) {
  const [activeId, setActiveId] = useState(demoCases[0].id);
  const [working, setWorking] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const timerRef = useRef<number | null>(null);
  const active = useMemo(
    () => demoCases.find((item) => item.id === activeId) ?? demoCases[0],
    [activeId],
  );

  useEffect(
    () => () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    },
    [],
  );

  const selectCase = (id: string) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    setAccepted(false);
    setWorking(true);
    setActiveId(id);
    timerRef.current = window.setTimeout(() => {
      setWorking(false);
      timerRef.current = null;
    }, 520);
  };

  return (
    <div className={`guided-demo ${compact ? "guided-demo--compact" : ""}`}>
      <div className="guided-demo__controls">
        <div>
          <p className="eyebrow">VERIFIED RELEASE-MODEL OUTPUTS</p>
          <h2>Choose how to revise.</h2>
          <p className="guided-demo__lede">
            No server call. Every example below was generated with SottoKey&apos;s
            current v3-final Q8 model.
          </p>
        </div>
        <div className="demo-case-list" role="group" aria-label="Rewrite examples">
          {demoCases.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={item.id === active.id ? "is-active" : ""}
              onClick={() => selectCase(item.id)}
              aria-pressed={item.id === active.id}
            >
              <span>0{index + 1}</span>
              <strong>{item.mode}</strong>
              <small>{item.kicker}</small>
            </button>
          ))}
        </div>
        <div className="demo-provenance">
          <ShieldCheck aria-hidden="true" />
          <div>
            <strong>Local model · v3 final</strong>
            <span>LFM2.5 350M · Q8_0 · deterministic decoding</span>
          </div>
        </div>
      </div>

      <div className="demo-device-wrap">
        <div className="demo-device" aria-live="polite">
          <div className="demo-device__status">
            <span>7:43</span>
            <span>● ◒ ▰</span>
          </div>
          <div className="demo-composer">
            <span className="demo-composer__label">Message</span>
            <p>{accepted ? active.output : active.input}</p>
            <span className="demo-composer__cursor" />
          </div>
          <div className="demo-toolbar">
            <button type="button" aria-label="Rewrite">
              Aa/
            </button>
            <span>I</span>
            <span>▣</span>
            <span>•••</span>
          </div>
          <div className="rewrite-card">
            <div className="rewrite-card__modes">
              {demoCases.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectCase(item.id)}
                  className={item.id === active.id ? "is-active" : ""}
                >
                  {item.mode === "Professional" ? "Pro" : item.mode}
                </button>
              ))}
              <span>ON-DEVICE</span>
              <X aria-hidden="true" />
            </div>
            <div className={`rewrite-card__body ${working ? "is-working" : ""}`}>
              <span className="rewrite-card__gutter" aria-hidden="true" />
              {working ? (
                <div className="rewrite-card__working">
                  <span />
                  <p>Revising on this device…</p>
                </div>
              ) : accepted ? (
                <div className="rewrite-card__accepted">
                  <Check aria-hidden="true" />
                  <p>Edit accepted.</p>
                  <button type="button" onClick={() => setAccepted(false)}>
                    <RotateCcw aria-hidden="true" /> Undo edit
                  </button>
                </div>
              ) : (
                <>
                  <div className="rewrite-card__diff">
                    {active.diff.map((token, index) =>
                      token.kind === "delete" ? (
                        <del key={`${token.text}-${index}`}>{token.text}</del>
                      ) : token.kind === "insert" ? (
                        <ins key={`${token.text}-${index}`}>{token.text}</ins>
                      ) : (
                        <span key={`${token.text}-${index}`}>{token.text}</span>
                      ),
                    )}
                  </div>
                  <div className="rewrite-card__actions">
                    <span>+{active.diff.filter((item) => item.kind === "insert").length}</span>
                    <span>−{active.diff.filter((item) => item.kind === "delete").length}</span>
                    <button type="button" onClick={() => setAccepted(false)}>
                      Keep original
                    </button>
                    <button type="button" onClick={() => setAccepted(true)}>
                      Accept edit
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="demo-keyboard" aria-hidden="true">
            {keyboardRows.map((row, rowIndex) => (
              <div key={rowIndex}>
                {row.map((key) => (
                  <span key={key}>{key}</span>
                ))}
              </div>
            ))}
            <div className="demo-keyboard__bottom">
              <span>?123</span>
              <span>◉</span>
              <span>,</span>
              <span className="space">SOTTOKEY</span>
              <span>.</span>
              <span>↵</span>
            </div>
          </div>
          <div className="demo-device__nav" aria-hidden="true">
            <span>▼</span>
            <span>●</span>
            <span>■</span>
          </div>
        </div>
        <div className="demo-device-wrap__meta">
          <span>REAL MODEL OUTPUT</span>
          <span>{active.totalMs} MS MEASURED CASE</span>
        </div>
      </div>
    </div>
  );
}
