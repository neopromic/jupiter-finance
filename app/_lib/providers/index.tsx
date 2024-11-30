"use client";

import PostHogProvider from "./PostHogProvider";

export const ClientProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <PostHogProvider>{children}</PostHogProvider>
    </>
  );
};
