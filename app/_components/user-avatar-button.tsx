/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { redirect } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const UserAvatarButton = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut();
    if (!user) {
      redirect("/login");
    }
  };

  if (!user) {
    return null;
  }

  const router = useRouter();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Avatar>
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Configurações</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/dashboard?month=${new Date().getMonth() + 1}`)
            }
          >
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/subscriptions")}>
            Planos
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/transactions")}>
            Transações
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserAvatarButton;
