import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SkipToContent from "@/components/ui/SkipToContent";
import { ToastProvider } from "@/components/ui/Toast";
import LazyFloatingParticles from "@/components/ui/LazyFloatingParticles";


// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getnextai.tech'),
  title: {
    default: "GetNextAI | AI-Powered Business Solutions",
    template: "%s | GetNextAI"
  },
  description: "Transform your business with custom websites, AI voice agents, and WhatsApp automation. Premium AI solutions for the post-labor economy.",
  keywords: ["AI solutions", "custom websites", "AI voice agents", "WhatsApp automation", "business automation", "AI development"],
  authors: [{ name: "GetNextAI" }],
  creator: "GetNextAI",
  publisher: "GetNextAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.getnextai.tech",
    title: "GetNextAI | AI-Powered Business Solutions",
    description: "Premium AI solutions for modern businesses. Custom websites, voice agents, and automation.",
    siteName: "GetNextAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetNextAI | AI-Powered Business Solutions",
    description: "Premium AI solutions for modern businesses",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Mobile Viewport & Safe Areas */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5" />
        <meta name="theme-color" content="#030712" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-[#030712] font-sans antialiased text-white",
          inter.variable
        )}
      >
        <SkipToContent />
        <ToastProvider>
          <ScrollProgress />
          <LazyFloatingParticles />
          <ScrollToTop />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
