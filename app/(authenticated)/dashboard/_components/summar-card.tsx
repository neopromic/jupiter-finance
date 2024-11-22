import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { cn } from "@/app/_lib/utils";
import formatCurrency from "@/app/_utils/currency";

interface SummaryCardProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
  size?: "sm" | "lg";
}

const SummaryCard = ({
  title,
  amount,
  icon,
  size = "sm",
}: SummaryCardProps) => {
  return (
    <Card
      className={cn(
        size === "lg" ? "bg-white bg-opacity-10" : "",
        "p-2 sm:p-4",
      )}
    >
      <CardHeader className="flex-row items-center gap-2 p-2 sm:p-4">
        <div className="rounded-lg bg-white bg-opacity-[3%] p-2">{icon}</div>
        <p
          className={cn(
            size === "sm" ? "text-muted-foreground" : "text-white opacity-70",
            "text-sm sm:text-base",
          )}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col justify-between space-y-2 p-2 sm:flex-row sm:space-y-0 sm:p-4">
        <p
          className={cn(
            "font-bold",
            size === "sm" ? "text-xl sm:text-2xl" : "text-2xl sm:text-4xl",
          )}
        >
          {formatCurrency(Number(amount))}
        </p>
        {size === "lg" && (
          <div className="">
            <AddTransactionButton />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
