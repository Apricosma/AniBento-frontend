import type { Metadata } from "next";
import { Geist, Geist_Mono, Coiny, Sour_Gummy } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./features/auth/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import QueryProvider from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const coiny = Coiny({
  variable: "--font-coiny",
  subsets: ["latin"],
  weight: "400"
})

export const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
  weight: "700"
})

export const metadata: Metadata = {
  title: "AniBento",
  description: "A BentoBox for your anime collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${coiny.variable} ${sourGummy.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            <QueryProvider>
              <div className="flex flex-col h-screen bg-background">
                {children}
              </div>
            </QueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
