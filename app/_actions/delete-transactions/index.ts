"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface IDeleteTransactions {
  transactionId: string;
}

export const deleteTransaction = async ({
  transactionId,
}: IDeleteTransactions) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("", {
      cause: "You need log-in account to delete transactions.",
    });
  }

  await db.transactions.delete({
    where: {
      id: transactionId,
      userId,
    },
  });
  revalidatePath("/transactions");
};
