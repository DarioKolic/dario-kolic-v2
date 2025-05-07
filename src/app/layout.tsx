import type { Metadata, Viewport } from "next";
import { Source_Code_Pro } from "next/font/google";
import { AppLayout } from "@/components/AppLayout/AppLayout";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/lib/theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Cursor } from "@/components/Cursor/Cursor";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";

import "./globals.scss";

const sourceCodePro = Source_Code_Pro({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});
export const metadata: Metadata = {
  title: {
    default: "Dario Kolic | Full-Stack & AI App Development Services",
    template: "%s | Dario Kolic",
  },
  description:
    "Hire Dario Kolic for expert full-stack web and innovative AI app development services. Specializing in MongoDB, Express, React, Node.js, AI Chatbots, and more. Get a quote today!",
  applicationName: "Dario Kolic Portfolio",
  creator: "Dario Kolic",
  authors: [
    {
      name: "Dario Kolic",
      url: "https://www.dariokolic.com",
    },
  ],
  keywords: [
    "AI App Development Services",
    "AI Chatbot Development",
    "Full-Stack Web Development",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Freelance Web Developer",
    "Hire Developer",
    "Web Application Development",
    "Custom Software Development",
    "SaaS Development",
    "Web3 Development",
    "ChatGPT Integration",
    "Dario Kolic",
    "Reliable Web Development",
    "Affordable Web Development",
    "Web Development Portfolio",
    "Problem Solving",
    "Software Architect",
  ],
  openGraph: {
    title: "Dario Kolic | Full-Stack & AI App Development Services",
    description:
      "Expert full-stack web and innovative AI app development by Dario Kolic. Specializing in MERN stack, AI Chatbots, and more. View portfolio and contact now!",
    url: "https://www.dariokolic.com",
    siteName: "Dario Kolic Portfolio",
    images: [
      {
        url: "https://www.dariokolic.com/og_image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Dario Kolic - Full-Stack & AI App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  // Optional:
  // themeColor: "#ffffff", // Add your website's theme color
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
  // viewport: 'width=device-width, initial-scale=1',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className}`}>
        <Cursor />

        <AppRouterCacheProvider>
          <BackgroundAnimation />
          {/* <Background /> */}

          <ThemeProvider theme={theme}>
            <AppLayout>
              {children}

            </AppLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
