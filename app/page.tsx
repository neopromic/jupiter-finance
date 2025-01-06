import Header from "./_components/Header";
import HappyNewYearHeader from "./_components/HappyNewYearHeader";
import GetStartdButton from "./_components/Landing/get-started-button";

export default function LandingPage() {
  return (
    <>
      <HappyNewYearHeader />
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Gerencie suas finanças,
          <br />
          Escale sua empresa
        </h1>
        <p className="my-6 text-lg text-muted-foreground">
          Organize suas despesas, clientes, investimentos e ganhos de forma
          inteligente.
        </p>
        <GetStartdButton />
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
