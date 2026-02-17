import type { Metadata } from "next";
import { Montserrat, Inter, Covered_By_Your_Grace } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-calligraphy",
});

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: "Dr. Maya Reynolds, PsyD offers therapy for anxiety, trauma, and burnout in Santa Monica, CA. Evidence-based treatment including CBT, EMDR, and mindfulness. In-person & telehealth available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} ${coveredByYourGrace.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
