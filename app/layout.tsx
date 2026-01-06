import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit as secondary premium font
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";

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
          "min-h-screen bg-[#030712] font-sans antialiased text-white",
          inter.variable,
          outfit.variable
        )}
      >
        <SmoothScroll>
          {children}
          <NoiseOverlay />
        </SmoothScroll>
      </body>
    </html>
  );
}
