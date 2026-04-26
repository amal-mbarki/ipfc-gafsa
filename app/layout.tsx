import type { Metadata } from "next";
import { Inter } from "next/font/google"; // زدت سطر الخط هنا
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // تعريف الخط

export const metadata: Metadata = {
  metadataBase: new URL('https://ipfc.tn'), 
  title: "IPFC GAFSA | Elite International Training Center",
  description: "Master German, English, and French in Gafsa. Your gateway to Ausbildung and international careers. Accredited certifications (ÖSD, IELTS, TOEIC).",
  
  openGraph: {
    title: "IPFC GAFSA | Language Mastery A1 to B2",
    description: "Inscrivez-vous pour les niveaux A1, A2, B1 et B2 à Gafsa. Excellence et Prestige.",
    url: "https://ipfc.tn",
    siteName: "IPFC GAFSA",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "IPFC Gafsa Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  
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
    <html lang="fr" dir="ltr" className="scroll-smooth">
      {/* دمجت خط Inter مع التنسيقات اللي عملتيهم */}
      <body className={`${inter.className} antialiased bg-white text-slate-900 selection:bg-[#8B0000] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
