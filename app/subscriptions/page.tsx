import { auth, clerkClient } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_components/acquire-plan-button";
import { Badge } from "../_components/ui/badge";
import { getCurrentMonthTransactions } from "../_data/get-current-month-transactions";
import Header from "../_components/Header";
import { ScrollArea } from "../_components/ui/scroll-area";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const user = await (await clerkClient()).users.getUser(userId);
  const currentMonthTransactions = await getCurrentMonthTransactions();
  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";

  const infiniteTransactionsOnFeatureSection = () => {
    if (!hasPremiumPlan) {
      return "10";
    }
    // return "∞";
    return <span className="text-primary">∞</span>;
  };

  return (
    <>
      <Header />
      <ScrollArea>
        <div className="space-y-6 p-6">
          <h1 className="text-2xl font-bold">Assinatura</h1>

          <div className="flex flex-col gap-6 lg:flex-row">
            <Card className="w-md lg:w-[450px]">
              <CardHeader className="flex flex-col items-center justify-center border-b border-solid py-8 lg:relative">
                {hasPremiumPlan && (
                  <Badge className="w-fit bg-primary/10 text-primary lg:absolute lg:left-4 lg:top-12">
                    Ativo
                  </Badge>
                )}
                <h2 className="text-center text-2xl font-semibold">
                  Plano Premium
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl">R$</span>
                  <span className="text-6xl font-semibold">19</span>
                  <div className="text-2xl text-muted-foreground">/mês</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 py-8">
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>
                    Transações ilimitadas ({currentMonthTransactions}/
                    {infiniteTransactionsOnFeatureSection()})
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>Relatórios de IA</p>
                </div>
                <AcquirePlanButton />
              </CardContent>
            </Card>
            <Card className="w-md lg:w-[450px]">
              <CardHeader className="border-b border-solid py-8">
                <h2 className="text-center text-2xl font-semibold">
                  Plano Básico
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl">R$</span>
                  <span className="text-6xl font-semibold">0</span>
                  <div className="text-2xl text-muted-foreground">/mês</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 py-8">
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>
                    Apenas 10 transações por mês ({currentMonthTransactions}/10)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <XIcon />
                  <p>Relatórios de IA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default SubscriptionPage;
