"use client";

import { ConfettiEffect } from "@/app/_lib/functions/confetti";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const GetStartdButton = () => {
  const handleClick = () => {
    ConfettiEffect();
  };

  return (
    <Link
      href="/login"
      onClick={handleClick}
      className={buttonVariants({ variant: "default" })}
    >
      Começar agora
    </Link>
  );
};

export default GetStartdButton;
