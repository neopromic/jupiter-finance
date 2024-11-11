import { Button } from "@/app/_components/ui/button";
import { Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-2 gap-4 p-4 opacity-5 md:grid-cols-4">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="aspect-square rounded-lg bg-foreground" />
        ))}
      </div>

      <div className="relative w-full max-w-2xl space-y-8">
        <div className="flex w-full justify-center">
          <div className="relative">
            <div className="absolute -inset-1 animate-pulse rounded-full bg-primary/20 blur-xl" />
            <Image
              src="/undraw_server_down.svg"
              alt="404 Illustration"
              width={400}
              height={400}
              priority
              className="relative drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="flex items-center justify-center gap-2 text-4xl font-bold tracking-tighter">
              <Search className="h-8 w-8 text-primary" />
              Página não encontrada
            </h1>
            <p className="text-lg text-muted-foreground">
              Desculpe, não conseguimos encontrar a página que você está
              procurando.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Button asChild size="lg">
              <Link href="/" className="gap-2">
                <Home className="h-4 w-4" />
                Voltar ao início
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
