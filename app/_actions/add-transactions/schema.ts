import { z } from "zod";
import {
  TransactionCategory,
  TransactionType,
  TransactionPaymentMethod,
} from "@prisma/client";

export const upsertTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().min(0),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
});
