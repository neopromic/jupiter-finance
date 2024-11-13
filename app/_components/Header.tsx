"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ isEnabled = true }: { isEnabled?: boolean }) => {
  const pathname = usePathname();

  const navigation = [
    {
      label: "Dashboard",
      href: `/dashboard?month=${new Date().getMonth() + 1}`,
    },
    {
      label: "Transações",
      href: "/transactions",
    },
    {
      label: "Assinaturas",
      href: "/subscriptions",
    },
  ];

  if (!isEnabled) return null;

  return (
    <header className="sticky left-0 top-0 z-50 flex h-[72px] min-h-[72px] items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-8">
        <Link href="/dashboard">
          <Image src="/logo.svg" alt="logo" width={173} height={32} />
        </Link>

        <nav className="flex items-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? "font-medium text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <UserButton showName />
    </header>
  );
};

export default Header;
