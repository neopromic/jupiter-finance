import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";

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

  // Validação do mês
  const monthNumber = Number(month);
  const isValidMonth = monthNumber >= 1 && monthNumber <= 12;

  if (!isValidMonth) {
    redirect("/dashboard?month=1");
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <TimeSelect defaultValue={month} />
      </div>
      <SummaryCards month={month} />
    </div>
  );
};

export default Home;
