import type { Metadata } from "next";
import {
  Poppins,
  EB_Garamond,
  Merriweather,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PageTransitionProvider } from "@/components/providers/page-transition-provider";
import Preloader from "@/components/preloader";

// Playfair Display for hero display text (elegant alternative to Recoleta)
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Poppins for UI elements, buttons, navigation
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// EB Garamond for section headings
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Merriweather for body text
const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title:
    "Upright Solutions and Systems Consultancy corp. | IT Solutions & System Integration",
  description:
    "Leading Philippine IT solutions provider specializing in system integration, software development, and professional services across multiple industries.",
  keywords: [
    "IT solutions",
    "system integration",
    "software development",
    "Philippines",
    "IT consultancy",
  ],
  icons: {
    icon: [
      {
        url: "/images/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/images/favicons/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/images/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/images/favicons/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/images/favicons/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/images/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} ${ebGaramond.variable} ${merriweather.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader>{children}</Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}
