import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MagneticCursor from "@/components/ui/MagneticCursor";
import FloatingParticles from "@/components/ui/FloatingParticles";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "GetNextAI | The Future",
  description: "Rebuilding the future with Agentic AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-[#030712] font-sans antialiased text-white cursor-none",
          inter.variable,
          outfit.variable
        )}
      >
        <ThemeProvider>
          <ScrollProgress />
          <MagneticCursor />
          <FloatingParticles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
