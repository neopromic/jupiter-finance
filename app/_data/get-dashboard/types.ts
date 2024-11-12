import type { TransactionType } from "@prisma/client";

export type TransactionPercentagesPerType = {
  [key in TransactionType]: number;
};
