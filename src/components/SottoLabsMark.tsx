type SottoLabsMarkProps = {
  inverse?: boolean;
};

export function SottoLabsMark({ inverse = false }: SottoLabsMarkProps) {
  return (
    <span className={`master-brand ${inverse ? "master-brand--inverse" : ""}`}>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M38 9H17C10 9 7 13 7 18s3 9 10 9h14c7 0 10 4 10 9s-3 9-10 9H10" />
      </svg>
      <span>
        Sotto <b>Labs</b>
      </span>
    </span>
  );
}
