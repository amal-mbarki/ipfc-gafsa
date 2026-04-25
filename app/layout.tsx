import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// هنا بدلنا معلومات الموقع باش تظهر في Google وفي التليفون بشكل احترافي
export const metadata: Metadata = {
  title: "IPFC GAFSA | مركز التكوين في اللغات",
  description: "أفضل مركز في قفصة لتعلم الألمانية (B1/B2)، الإنجليزية، والفرنسية. مرافقة كاملة لمشاريع الـ Ausbildung والعمل بالخارج.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar" // بدلناها للعربية خاطر الموقع أغلبو بالعربي
      dir="rtl" // تفعيل الكتابة من اليمين لليسار في كامل الموقع آلياً
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
