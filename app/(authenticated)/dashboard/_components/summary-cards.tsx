import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summar-card";

interface SummaryCardsProps {
  month: string;
  balance: number;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  investmentsTotal,
  depositsTotal,
  expensesTotal,
}: SummaryCardsProps) => {
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
