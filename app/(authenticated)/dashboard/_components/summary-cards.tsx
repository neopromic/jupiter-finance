import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summar-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCardsProps {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCardsProps) => {
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

  return (
    <div className="space-y-6">
      <SummaryCard
        title="Saldo"
        amount={balance.toString()}
        icon={<WalletIcon size={16} />}
        size="lg"
      />
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          title="Investido"
          amount={investmentsTotal.toString()}
          icon={<PiggyBankIcon size={16} />}
        />
        <SummaryCard
          title="Receita"
          amount={depositsTotal.toString()}
          icon={<TrendingUpIcon size={16} className="text-primary" />}
        />
        <SummaryCard
          title="Despesas"
          amount={expensesTotal.toString()}
          icon={<TrendingDownIcon size={16} className="text-danger" />}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
