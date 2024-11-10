"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  const { id, ...transactionData } = params;
  upsertTransactionSchema.parse(transactionData);

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Se não tiver ID, é uma criação
  if (!id) {
    await db.transactions.create({
      data: { ...transactionData, userId },
    });
  } else {
    // Se tiver ID, é uma atualização
    await db.transactions.update({
      where: { id },
      data: { ...transactionData, userId },
    });
  }

  revalidatePath("/transactions");
};
