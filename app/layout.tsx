import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * IPFC Gafsa - Root Layout 2026 
 * تم تحسين الإعدادات لضمان الفخامة وسرعة الأرشفة في محركات البحث
 */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#580303", // اللون الملكي لشريط المتصفح
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ipfc.tn'), 
  title: {
    default: "IPFC GAFSA | Elite International Training Center",
    template: "%s | IPFC GAFSA"
  },
  description: "Master German and English in Gafsa. Your gateway to Ausbildung and international careers. Accredited certifications (ÖSD, IELTS, TOEIC).",
  keywords: [
    "IPFC Gafsa", 
    "German courses Gafsa", 
    "Ausbildung Germany", 
    "Language center Gafsa", 
    "English courses Gafsa",
    "مركز لغات قفصة",
    "دراسة الألمانية في قفصة"
  ],
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/logo.png", 
  },
  openGraph: {
    title: "IPFC GAFSA | Elite International Training Center",
    description: "Join the elite language center in Gafsa. Official partner for your international future.",
    url: "https://ipfc.tn",
    siteName: "IPFC GAFSA",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "IPFC GAFSA - Elite Training Center",
      },
    ],
    locale: "en_US", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPFC GAFSA | Elite International Training Center",
    description: "Your gateway to Ausbildung and international careers in Gafsa.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        {/* إضافة خطوط بريميوم إضافية إذا لزم الأمر */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans bg-[#FCFAF7] text-slate-900 selection:bg-[#580303]/10 selection:text-[#580303] overflow-x-hidden">
        
        {/* الـ Header ثابت ويدعم الـ Glassmorphism */}
        <Header />

        {/* الحاوية الرئيسية مع خلفية ناعمة جداً */}
        <main className="min-h-screen relative z-10 flex flex-col">
          <div className="flex-grow">
            {children}
          </div>
        </main>

        {/* Footer المركز الرسمي الذي يعطي انطباع الاستمرارية */}
        <Footer />

      </body>
    </html>
  );
}