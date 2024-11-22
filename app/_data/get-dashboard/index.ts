import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";
import type {
  TotalExpensePerCategory,
  TransactionPercentagesPerType,
} from "./types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const getDashboard = async (month: number) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };
  const deposits = await db.transactions.aggregate({
    where: {
      type: "DEPOSIT",
      ...where,
      userId,
    },
    _sum: {
      amount: true,
    },
  });
  const depositsTotal = deposits._sum.amount ?? 0;

  const investments = await db.transactions.aggregate({
    where: {
      type: "INVESTMENT",
      ...where,
      userId,
    },
    _sum: {
      amount: true,
    },
  });
  const investmentsTotal = investments._sum.amount ?? 0;

  const expenses = await db.transactions.aggregate({
    where: {
      type: "EXPENSE",
      ...where,
      userId,
    },
    _sum: {
      amount: true,
    },
  });
  const expensesTotal = expenses._sum.amount ?? 0;

  const balance =
    Number(depositsTotal) - Number(investmentsTotal) - Number(expensesTotal);

  const transactionsTotal = Number(
    (
      await db.transactions.aggregate({
        where: {
          ...where,
          userId,
        },
        _sum: {
          amount: true,
        },
      })
    )._sum.amount,
  );

  const typesPercentages: TransactionPercentagesPerType = {
    [TransactionType.DEPOSIT]: Math.round(
      (Number(depositsTotal) / Number(transactionsTotal)) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      (Number(expensesTotal) / Number(transactionsTotal)) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      (Number(investmentsTotal) / Number(transactionsTotal)) * 100,
    ),
  };

  const totalExpensePerCategory: TotalExpensePerCategory[] = (
    await db.transactions.groupBy({
      by: ["category"],
      where: {
        ...where,
        type: TransactionType.EXPENSE,
        userId,
      },
      _sum: {
        amount: true,
      },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category._sum.amount),
    percentageOfTotal: Math.round(
      (Number(category._sum.amount) / Number(expensesTotal)) * 100,
    ),
  }));

  const lastTransactions = await db.transactions.findMany({
    where: {
      ...where,
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  revalidatePath("/dashboard");
  revalidatePath("/transactions");

  return {
    depositsTotal: Number(depositsTotal),
    investmentsTotal: Number(investmentsTotal),
    expensesTotal: Number(expensesTotal),
    balance: Number(balance),
    typesPercentages,
    totalExpensePerCategory,
    lastTransactions,
  };
};

export default getDashboard;
