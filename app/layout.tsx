import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * IPFC Gafsa - Root Layout 2026 
 */

// إعدادات الـ Viewport لضمان تجربة مستخدم مثالية على التلفون
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#580303", // لون المركز الرسمي يظهر في متصفحات الجوال
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ipfc.tn'), 
  title: {
    default: "IPFC GAFSA | Elite International Training Center",
    template: "%s | IPFC GAFSA"
  },
  description: "Master German and English in Gafsa. Your gateway to Ausbildung and international careers. Accredited certifications (ÖSD, IELTS).",
  keywords: ["IPFC Gafsa", "German courses Gafsa", "Ausbildung Germany", "Language center Gafsa", "English courses Gafsa"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      {/* استعملنا الـ Variable Fonts والـ Antialiasing لضمان فخامة الخطوط */}
      <body className="antialiased font-sans bg-[#FCFAF7] text-slate-900 selection:bg-[#580303] selection:text-white overflow-x-hidden">
        
        {/* Header ثابت لضمان سهولة التنقل */}
        <Header />

        {/* الـ main يأخذ الـ padding-top المناسب من ملف الـ CSS */}
        <main className="min-h-screen relative z-10">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}