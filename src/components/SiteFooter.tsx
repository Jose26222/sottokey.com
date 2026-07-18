import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "./BrandMark";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/demo", label: "Demo" },
      { href: "/features", label: "Features" },
      { href: "/download", label: "Download" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/proof", label: "Technical proof" },
      { href: "/legal/licenses", label: "Licenses" },
      { href: "/legal/terms", label: "Terms" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/support", label: "Support" },
      { href: "/press", label: "Press kit" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__statement">
          <BrandMark inverse />
          <p>
            The quiet keyboard.
            <br />
            Your words stay yours.
          </p>
        </div>
        <div className="site-footer__links">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>© 2026 SottoKey. Android, quietly rewritten.</p>
        <Link href="/proof">
          Inspect the proof <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}
