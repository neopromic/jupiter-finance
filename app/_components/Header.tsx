import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = ({ isEnabled = true }: { isEnabled?: boolean }) => {
  return (
    <header
      className={`flex h-[72px] items-center justify-between p-4 ${isEnabled ? "block" : "hidden"}`}
    >
      <Image src="/logo.svg" alt="logo" width={173} height={32} />
      <UserButton showName />
    </header>
  );
};

export default Header;
