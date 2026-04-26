import type { Metadata } from "next";
import "./globals.css";

/**
 * IPFC Gafsa - Root Layout 2026 
 * Optimized for SEO & Professional Branding
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://ipfc.tn'), 
  title: {
    default: "IPFC GAFSA | Elite International Training Center",
    template: "%s | IPFC GAFSA"
  },
  description: "Master German, English, and French in Gafsa. Your gateway to Ausbildung and international careers. Accredited certifications (ÖSD, IELTS, TOEIC).",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png", // لظهور الأيقونة بوضوح على هواتف iPhone
  },
  openGraph: {
    title: "IPFC GAFSA | Elite International Training Center",
    description: "Join the elite language center in Gafsa. Official partner for your international future.",
    url: "https://ipfc.tn",
    siteName: "IPFC GAFSA",
    images: [
      {
        url: "/logo.png", // هذه الصورة التي ستظهر عند مشاركة الرابط في واتساب/فيسبوك
        width: 800,
        height: 600,
        alt: "IPFC GAFSA Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}