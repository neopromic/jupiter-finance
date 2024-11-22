import React from "react";
import Header from "../_components/Header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { PostHogProvider } from "../_lib/providers";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <PostHogProvider>
      <Header isEnabled />
      <div className="flex flex-col overflow-hidden">{children}</div>
    </PostHogProvider>
  );
}
