import { ExternalLink } from "lucide-react";
import { productStatus } from "@/data/site";

type GooglePlayCtaProps = {
  className?: string;
};

export function GooglePlayCta({ className = "" }: GooglePlayCtaProps) {
  const { googlePlay } = productStatus;
  const classes = `button button--play ${className}`.trim();

  if (googlePlay.href) {
    return (
      <a
        href={googlePlay.href}
        className={classes}
        data-play-store-cta
        rel="noreferrer"
      >
        {googlePlay.liveLabel} <ExternalLink aria-hidden="true" />
      </a>
    );
  }

  return (
    <span
      className={`${classes} button--disabled`}
      data-play-store-cta
      aria-disabled="true"
    >
      {googlePlay.pendingLabel}
    </span>
  );
}
