"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { BrandMark } from "./BrandMark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link
          href="/"
          className="site-header__brand"
          aria-label="SottoKey home"
          onClick={() => setOpen(false)}
        >
          <BrandMark inverse />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <Link href="/download" className="button button--small button--light">
            Android status
          </Link>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link
            href="/download"
            className="mobile-nav__cta"
            onClick={() => setOpen(false)}
          >
            Android status
          </Link>
        </nav>
      </div>
    </header>
  );
}
