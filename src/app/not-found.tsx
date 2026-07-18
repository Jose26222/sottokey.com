import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__key" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <p className="eyebrow">404 / NO CHANGE SUGGESTED</p>
      <h1>This page stayed original.</h1>
      <p>The route does not exist, and SottoKey kept the text unchanged.</p>
      <Link href="/" className="button button--light">
        <ArrowLeft aria-hidden="true" /> Return home
      </Link>
    </section>
  );
}
