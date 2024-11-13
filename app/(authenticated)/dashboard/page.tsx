import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import GetDashboard from "@/app/_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import { ScrollArea } from "@/app/_components/ui/scroll-area";

interface HomeProps {
  searchParams: {
    month?: string;
  };
}

const Home = async ({ searchParams: { month = "1" } }: HomeProps) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const monthNumber = Number(month);
  const isValidMonth = monthNumber >= 1 && monthNumber <= 12;

  if (!isValidMonth) {
    redirect("/dashboard?month=1");
  }

  const dashboard = await GetDashboard(monthNumber);

  return (
    <div className="flex h-[calc(100vh-72px)] flex-col gap-6 p-6">
      <div className="grid h-full grid-cols-[2fr,1fr] gap-6">
        <ScrollArea className="h-full pr-6">
          <div className="space-y-6 overflow-hidden">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <TimeSelect defaultValue={month} />
            </div>

            <SummaryCards month={monthNumber.toString()} {...dashboard} />

            <div className="grid grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
        </ScrollArea>

        <LastTransactions lastTransactions={dashboard.lastTransactions} />
      </div>
    </div>
  );
};

export default Home;
