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
    "React Developer for hire",
    "Hire React Developer",
    "React Expert",
    "Freelance React Developer",
    "Hire Web Developer",
    "Freelance Web Developer",
    "Full-Stack Web Development",
    "MERN Stack Developer",
    "Javascript Developer for hire",
    "Front-end Developer for hire",
    "Web Application Development",
    "ReactJS Development Services",
    "React.js Development Services",
    "Single Page Application Development (React)",
    "UI Development (React)",
    "UX Development (React)",
    "Component-Based Development (React)",
    "React Hooks Developer",
    "Web Development Services",
    "Software Development Company",
    "Outsource Web Development",
    "Remote Web Developer",
    "Technical Lead (React)",
    "Senior React Developer",
    "Dario Kolic (if you are Dario Kolic and want to be found by name)",
    "Web Development Portfolio",
    "Reliable Web Development",
    "Problem Solving (as a skill)",
    "Agile Development",
    "Scrum",
    "Lodash expert for hire",
    "JavaScript developer with Lodash experience (freelance)",
    "Hire Lodash specialist",
    "Freelance JavaScript utility library expert",
    "Freelance Lodash developer"
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
      <body className={`${sourceCodePro.className}`}>
        {process.env.NODE_ENV === "production" && (
          <>
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

            <noscript>
              <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-WQFZXHG3"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        <Cursor />

        <AppRouterCacheProvider>
          <BackgroundAnimation />

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
