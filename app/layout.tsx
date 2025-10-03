import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono, Pangolin  } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

const pangolin = Pangolin({
  subsets: ["latin"],
  variable: "--font-pangolin",
  display: "swap",
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flow State - Visual AI Workflow Builder",
  description:
    "Build powerful AI workflows with an intuitive node-based interface. Create, connect, and automate AI tasks without coding. Use any AI model with your own API keys. Runs entirely in your browser - your data never leaves your device. Perfect for email automation, content creation, data analysis, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pangolin.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
