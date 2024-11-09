import { z } from "zod";
import { TransactionCategory, TransactionType } from "@prisma/client";
import { TransactionPaymentMethod } from "@prisma/client";

export const addTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.string().trim().min(1),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
});
