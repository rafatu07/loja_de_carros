import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CompareProvider } from '@/components/CompareContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja de Carros",
  description: "Encontre o carro dos seus sonhos",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <CompareProvider>
          <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            
            {/* Botão flutuante do WhatsApp */}
            <WhatsAppButton />
          </div>
        </CompareProvider>
      </body>
    </html>
  );
}
