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
  metadataBase: new URL('https://www.dariokolic.com/'),
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
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

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
      <script>
        {`
          <!-- Google Tag Manager -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WQFZXHG3');
          <!-- End Google Tag Manager -->
        `}
      </script>

      <body className={`${sourceCodePro.className}`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQFZXHG3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
