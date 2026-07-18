"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { productSurfaces } from "@/data/site";
import { DeviceFrame } from "./DeviceFrame";

export function ProductFilm() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) {
      return;
    }
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % productSurfaces.length),
      2600,
    );
    return () => window.clearInterval(timer);
  }, [playing]);

  const active = productSurfaces[index];

  return (
    <section className="product-film">
      <div className="product-film__stage">
        <div className="product-film__halo" aria-hidden="true" />
        <DeviceFrame src={active.src} alt={active.alt} />
        <div className="product-film__caption" aria-live="polite">
          <span>0{index + 1} / 0{productSurfaces.length}</span>
          <h2>{active.label}</h2>
          <p>{active.detail}</p>
        </div>
        <button
          type="button"
          onClick={() => setPlaying((value) => !value)}
          className="product-film__toggle"
          aria-label={playing ? "Pause keyboard tour" : "Play keyboard tour"}
        >
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
      </div>
      <div
        className="product-film__timeline"
        role="tablist"
        aria-label="Keyboard tools"
      >
        {productSurfaces.map((item, itemIndex) => (
          <button
            type="button"
            role="tab"
            aria-selected={itemIndex === index}
            key={item.label}
            className={itemIndex === index ? "is-active" : ""}
            onClick={() => {
              setIndex(itemIndex);
              setPlaying(false);
            }}
          >
            <span />
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
}
