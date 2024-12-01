import Header from "../_components/Header";
import { Badge } from "../_components/ui/badge";
import { Card, CardHeader } from "../_components/ui/card";
import { cn } from "../_lib/utils";
import { typography } from "../_styles/typography";

const Subscriptions = () => {
  return (
    <>
      <Header />
      <section className="p-6">
        <h1 className={cn(typography.h1)}>Assinaturas</h1>
        <div className="flex w-full gap-6 lg:flex-row">
          <Card className="w-80">
            <CardHeader>
              <div className="">
                <h2>Plano Pro</h2>
              </div>
            </CardHeader>
          </Card>
          <Card className="w-80">
            <CardHeader className="relative flex flex-row items-center gap-2">
              <div className="">
                <Badge className="pointer-events-none select-none bg-primary/10 text-primary hover:bg-primary/10">
                  Atual
                </Badge>
              </div>
              <div className="space-y-4">
                <h2 className={cn(typography.h1, "text-2xl font-medium")}>
                  Plano Básico
                </h2>
                <div className="flex items-center gap-2">
                  <p className="text-2xl">R$</p>
                  <p className={cn(typography.h1, "text-4xl")}>0</p>
                  <p className="text-2xl text-muted-foreground">/ mês</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Subscriptions;
