import Header from "./_components/Header";
import HappyNewYearHeader from "./_components/HappyNewYearHeader";
import HeroLandingPage from "./_components/Landing/Hero";

export default function LandingPage() {
  return (
    <>
      <HappyNewYearHeader />
      <Header />
      <HeroLandingPage />
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
