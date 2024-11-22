import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { PostHogProvider } from "./_lib/providers";
import { Suspense } from "react";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Finance AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Suspense>
        <PostHogProvider>
          <ClerkProvider appearance={{ baseTheme: dark }}>
            <body
              className={`${mulish.className} dark flex h-full flex-col overflow-hidden antialiased`}
            >
              {children}
            </body>
          </ClerkProvider>
        </PostHogProvider>
      </Suspense>
    </html>
  );
}
