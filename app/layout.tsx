import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrivatsasingh.github.io"),
  title: "Shrivatsasingh Rathore | Software Engineer · AI/ML · Data Science",
  description:
    "Portfolio of Shrivatsasingh Rathore, a software engineer and AI/data builder focused on backend systems, machine learning, and product execution.",
  openGraph: {
    title: "Shrivatsasingh Rathore | Software Engineer · AI/ML · Data Science",
    description:
      "Backend engineering, AI systems, data infrastructure, and product-focused software projects.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrivatsasingh Rathore",
    description: "Software Engineer · AI Builder · Data-Driven Problem Solver"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem("theme");
                  var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  var theme = stored === "light" || stored === "dark"
                    ? stored
                    : systemDark ? "dark" : "light";
                  document.documentElement.classList.toggle("dark", theme === "dark");
                } catch (e) {}
              })();
            `
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-base font-sans text-primary antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
