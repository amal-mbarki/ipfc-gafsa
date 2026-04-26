import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPFC GAFSA | Language Mastery A1 to B2",
  description: "Maîtrisez l'allemand avec IPFC Gafsa. Votre passerelle vers l'Ausbildung et les carrières internationales. Inscrivez-vous dès maintenant !",
  // هذه الإضافة تخلي التصويرة تظهر في الفيسبوك وواتساب
  openGraph: {
    title: "IPFC GAFSA | Formation Langue Allemande",
    description: "Inscrivez-vous pour les niveaux A1, A2, B1 et B2 à Gafsa.",
    url: "https://ipfc-gafsa.vercel.app", // حطي رابط الفيرسيل متاعك هنا
    siteName: "IPFC GAFSA",
    images: [
      {
        url: "/logo-new.png", // تأكدي أن اللوغو موجود في مجلد public بهذا الاسم
        width: 1200,
        height: 630,
        alt: "IPFC Gafsa Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/logo-new.png", // باش يظهر اللوغو الفوق في التاب متاع Navigator
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
