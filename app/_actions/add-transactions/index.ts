"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import type {
  TransactionType,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface AddTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: AddTransactionParams) => {
  try {
    const validatedData = upsertTransactionSchema.parse({
      ...params,
      date: new Date(params.date),
      amount: Number(params.amount),
    });

    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    await db.transactions.create({
      data: { ...validatedData, userId },
    });

    revalidatePath("/transactions");
    return { success: true };
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};
