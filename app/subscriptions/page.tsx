import { Check, SparklesIcon, X } from "lucide-react";
import Header from "../_components/Header";
import { Badge } from "../_components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../_components/ui/card";
import { cn } from "../_lib/utils";
import { typography } from "../_styles/typography";
import { Button } from "../_components/ui/button";
import { ScrollArea } from "../_components/ui/scroll-area";

const Subscriptions = () => {
  return (
    <section className="h-[100vh] overflow-hidden">
      <Header />
      <ScrollArea>
        <section className="h-screen space-y-6 overflow-hidden p-6 lg:pb-0">
          <h1 className={cn(typography.h1)}>Assinaturas</h1>
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-center">
            <Card className="h-96 w-80">
              <CardHeader className="relative flex h-44 flex-col items-center justify-center gap-2 border-b">
                <div className="space-y-4">
                  <h2 className={cn(typography.h1, "text-2xl font-medium")}>
                    Plano PRO
                  </h2>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl">R$</p>
                    <p className={cn(typography.h1, "text-4xl")}>19</p>
                    <p className="text-2xl text-muted-foreground">/ mês</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex min-h-32 flex-grow flex-col items-start justify-start gap-2 p-6">
                <div className="flex items-center gap-2">
                  <Check className="text-primary" />
                  <p>Transações ilimitadas.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" />
                  <p>Relatórios de IA ilimitados. </p>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">
                  <SparklesIcon className="text-primary-foreground" />
                  Assinar agora!
                </Button>
              </CardFooter>
            </Card>
            <Card className="h-96 w-80">
              <CardHeader className="relative flex h-44 flex-col items-center justify-center gap-2 border-b">
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
              <CardContent className="flex min-h-32 flex-1 flex-col items-start justify-start gap-2 p-6">
                <div className="flex items-center gap-2">
                  <Check className="text-primary" />
                  <p>
                    Apenas 10 transações por dia{" "}
                    <span className="font-bold text-primary">0</span>/10
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <X className="text-muted-foreground" />
                  <p>Relatórios de IA limitados. </p>
                </div>
              </CardContent>
              <CardFooter className="">
                <Button
                  variant={"outline"}
                  className="w-full border-primary text-primary"
                >
                  Faça o upgrade
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </ScrollArea>
    </section>
  );
};

export default Subscriptions;
