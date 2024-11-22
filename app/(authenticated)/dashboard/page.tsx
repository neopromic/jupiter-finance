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
    redirect(`/dashboard?month=${new Date().getMonth() + 1}`);
  }

  const dashboard = await GetDashboard(monthNumber);

  return (
    <div className="flex h-[calc(100vh-72px)] flex-col gap-6 p-6">
      <ScrollArea className="h-full pb-12 lg:py-0">
        <div className="grid h-full gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="pr-0 lg:pr-6">
            <div className="space-y-6 overflow-hidden">
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <TimeSelect defaultValue={month} />
              </div>

              <SummaryCards month={monthNumber.toString()} {...dashboard} />

              <div className="grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
                <TransactionsPieChart {...dashboard} />
                <ExpensesPerCategory
                  expensesPerCategory={dashboard.totalExpensePerCategory}
                />
              </div>
            </div>
          </div>

          <div className="lg:h-full">
            <LastTransactions lastTransactions={dashboard.lastTransactions} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Home;
