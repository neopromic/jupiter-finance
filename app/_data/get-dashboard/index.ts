import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";
import type { TransactionPercentagesPerType } from "./types";

const getDashboard = async (month: number) => {
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
        where,
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

  return {
    depositsTotal: Number(depositsTotal),
    investmentsTotal: Number(investmentsTotal),
    expensesTotal: Number(expensesTotal),
    balance: Number(balance),
    typesPercentages,
  };
};

export default getDashboard;
