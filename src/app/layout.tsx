import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster"
import { PHProvider } from './providers'
const PostHogPageView = dynamic(() => import('@/app/post-hog-page-view'), { ssr: false })

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import dynamic from "next/dynamic";
import { TooltipPortal } from "./tooltip-portal";
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Guijarro",
  description: "Portfolio of Mike Guijarro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={inter.className}>
          <PostHogPageView />
          <TooltipPortal>
            {children}
          </TooltipPortal>
          <Toaster />
        </body>
      </PHProvider>
    </html >
  );
}
