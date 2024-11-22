import Link from "next/link";
import Header from "./_components/Header";
import { buttonVariants } from "./_components/ui/button";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Gerencie suas finanças com IA
        </h1>
        <p className="my-6 text-lg text-muted-foreground">
          Organize suas despesas, investimentos e ganhos de forma inteligente.
        </p>
        <Link href="/login" className={buttonVariants({ variant: "default" })}>
          Começar agora
        </Link>
      </main>
      <footer className="flex flex-col items-center justify-center p-6 text-center">
        <p className="text-xs text-muted-foreground">
          Feito com 💚 por Wesley Souza
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Jupiter Finance. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
