import { db } from "@/app/_lib/prisma";
import React from "react";
import { DataTable } from "@/app/_components/ui/data-table";
import { transactionsColumns } from "./_columns";
import AddTransactionButton from "@/app/_components/add-transaction-button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "@/app/_components/ui/scroll-area";

const TransactionsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transactions.findMany({
    where: {
      userId,
    },
    orderBy: [
      {
        date: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
  });

  return (
    <div className="h-full space-y-6 overflow-hidden p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <ScrollArea className="h-full pb-12">
        <DataTable columns={transactionsColumns} data={transactions} />
      </ScrollArea>
    </div>
  );
};

export default TransactionsPage;
