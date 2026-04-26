import type { Metadata } from "next";
import "./globals.css";

/**
 * IPFC Gafsa - Root Layout 2026
 * Using System Fonts to ensure stable builds
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://ipfc.tn'), 
  title: "IPFC GAFSA | Elite International Training Center",
  description: "Master German, English, and French in Gafsa. Your gateway to Ausbildung and international careers. Accredited certifications (ÖSD, IELTS, TOEIC).",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* استعملنا font-sans اللي تعتمد على خطوط النظام (System Fonts) وتجي سريعة وياسر برستيج */}
      <body className="antialiased font-sans bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
