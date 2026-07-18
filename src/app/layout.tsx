import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { productMedia, productStatus } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://sottokey.com"),
  title: {
    default: "SottoKey — Private AI Keyboard for Android",
    template: "%s — SottoKey",
  },
  description:
    "Rewrite on Android with a language model that runs on your phone. No internet permission, no account, and a visible diff before every edit.",
  keywords: [
    "private Android keyboard",
    "offline AI keyboard",
    "on-device writing assistant",
    "Android grammar keyboard",
    "private rewrite keyboard",
  ],
  authors: [{ name: "SottoKey" }],
  creator: "SottoKey",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SottoKey",
    title: "SottoKey — Rewrite your words. Keep them yours.",
    description:
      "A private Android keyboard with on-device rewriting and no internet permission.",
    images: [
      {
        url: productMedia.rewriteDiff.src,
        width: 1080,
        height: 2340,
        alt: "SottoKey private Android keyboard product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SottoKey — Private AI Keyboard",
    description:
      "On-device rewriting. Visible diffs. No internet permission.",
    images: [productMedia.rewriteDiff.src],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090c",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const applicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SottoKey",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Android",
    description:
      "A private Android keyboard with on-device rewriting, visible diffs, and no internet permission.",
    url: "https://sottokey.com",
    softwareVersion: productStatus.app.version,
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(applicationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
