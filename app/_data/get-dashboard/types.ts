import type { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagesPerType = {
  [key in TransactionType]: number;
};

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
