import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPFC GAFSA | Language Mastery from A1 to B2",
  description: "Join IPFC Gafsa for expert language training from A1 to B2 levels. Your gateway to Ausbildung and international careers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
