import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPFC GAFSA | Elite International Training Center",
  description: "Master German, English, and French in Gafsa. Your gateway to Ausbildung and international careers. Accredited certifications (ÖSD, IELTS, TOEIC).",
  
  openGraph: {
    title: "IPFC GAFSA | Language Mastery A1 to B2",
    description: "Inscrivez-vous pour les niveaux A1, A2, B1 et B2 à Gafsa. Excellence et Prestige.",
    url: "https://ipfc.tn", // الرابط الرسمي اللي حكينا عليه
    siteName: "IPFC GAFSA",
    images: [
      {
        url: "/logo.png", // استعملنا اسم اللوغو الموجود فعلياً عندك
        width: 800,
        height: 800,
        alt: "IPFC Gafsa Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  
  icons: {
    icon: "/logo.png", // الأيقونة اللي تظهر في التبويب فوق
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900 font-sans selection:bg-[#8B0000] selection:text-white">
        {children}
      </body>
    </html>
  );
}
