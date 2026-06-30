import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio profesional memadukan rekayasa perangkat lunak dan manajemen organisasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {/* Membungkus seluruh aplikasi dengan Provider Bahasa */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}