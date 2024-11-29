import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mynimalistic",
  description: "Building digital future together with cutting-edge technology",
  keywords: "Mynimalistic, web development, mobile development, devops, software development, digital transformation",
  icons: {
    icon: [
      { url: '/Mynimalistic.png' },
    ],
    shortcut: '/Mynimalistic.png',
  },
  openGraph: {
    title: "Mynimalistic",
    description: "Building digital future together with cutting-edge technology",
    type: "website",
    url: "https://mynimalistic.vercel.app",
    siteName: "Mynimalistic",
    images: [
      {
        url: '/Mynimalistic.png',
        width: 192,
        height: 192,
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Mynimalistic",
    description: "Building digital future together with cutting-edge technology",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Mynimalistic.png" type="image/svg+xml" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mynimalistic",
              "url": "mynimalistic.vercel.app",
              "logo": "/Mynimalistic.png",
              "description": "Building digital future together with cutting-edge technology",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "Worldwide"
              },
              "sameAs": [
                "https://twitter.com/your-handle",
                "https://linkedin.com/company/your-company",
              ]
            })
          }}
        />
      </head>
      <body className={cn(
        inter.className,
        "bg-white dark:bg-black text-gray-900 dark:text-gray-100"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
