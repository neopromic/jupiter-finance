import type React from "react";
import { Suspense } from "react";
import Header from "../_components/Header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ClientProviders } from "../_lib/providers";
import DashboardSkeleton from "./dashboard/_components/SkeletonFallback";

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
    <Suspense fallback={<DashboardSkeleton />}>
      <ClientProviders>
        <Header isEnabled />
        <div className="flex flex-col overflow-hidden">{children}</div>
      </ClientProviders>
    </Suspense>
  );
}
