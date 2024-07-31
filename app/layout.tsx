import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App | Test your AI skills | LLMs, Prompting",
  description:
    "Test your prompt engineering skills with this AI Quiz! Try the Prompt Engineering Test Quiz app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WP6GLPWHWT"
        ></Script>
        <Script id="google-analytics">
          {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WP6GLPWHWT');
  `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
