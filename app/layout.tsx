import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {Analytics} from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sherard's Portfolio",
  description: "Portfolio of Sherard Dalaguit, a software engineer building full-stack and AI-powered products using TypeScript, React, Next.js, Node.js, and Python. Showcasing projects, systems design, and production-ready applications.",
  icons: {
    icon: "/selfie.jpg",
  }
};

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
