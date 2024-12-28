import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ClientProviders } from "./_lib/providers";
import { Suspense } from "react";
import { LoadingState } from "./_components/ui/loading-state";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Jupiter Finance",
  description:
    "Uma plataforma de gerenciamento de finanças pessoais e para pequenas empresas.",
  keywords: ["finance", "controle financeiro", "gerenciamento financeiro"],
  applicationName: "Jupiter Finance",
  authors: {
    name: "Wesley Souza",
    url: "https://dev-wesleysouza.vercel.app/",
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Suspense>
        <ClientProviders>
          <ClerkProvider appearance={{ baseTheme: dark }}>
            <body
              className={`${mulish.className} dark flex h-full flex-col overflow-hidden antialiased`}
            >
              <LoadingState />
              {children}
            </body>
          </ClerkProvider>
        </ClientProviders>
      </Suspense>
    </html>
  );
}
