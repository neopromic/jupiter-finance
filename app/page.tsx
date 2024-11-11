// Landing page pública
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b px-6">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">Finance AI</h1>
          <nav className="flex items-center gap-4">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Funcionalidades
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Preços
            </a>
          </nav>
        </div>
        <a href="/login" className="text-sm font-medium hover:underline">
          Entrar
        </a>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Gerencie suas finanças com IA
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Organize suas despesas, investimentos e ganhos de forma inteligente.
        </p>
        <a
          href="/login"
          className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Começar agora
        </a>
      </main>
    </div>
  );
}
