import type { Metadata } from "next";
import { Poppins, EB_Garamond, Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PageTransitionProvider } from "@/components/providers/page-transition-provider";

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
  title: "Upright Systems Inc. | IT Solutions & System Integration",
  description: "Leading Philippine IT solutions provider specializing in system integration, software development, and professional services across multiple industries.",
  keywords: ["IT solutions", "system integration", "software development", "Philippines", "IT consultancy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} ${poppins.variable} ${ebGaramond.variable} ${merriweather.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
