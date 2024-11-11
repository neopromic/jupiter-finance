"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "./_components/ui/button";
import { RefreshCcw, Home, AlertCircle, ChevronRight } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
    });
  }, [error]);

  return (
    <html lang="pt-BR">
      <body className="bg-background antialiased">
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4">
          {/* Background Pattern */}
          <div className="pointer-events-none absolute inset-0 grid grid-cols-2 gap-4 p-4 opacity-5 md:grid-cols-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-foreground" />
            ))}
          </div>

          <div className="relative w-full max-w-2xl space-y-8">
            {/* Ilustração */}
            <div className="flex w-full justify-center">
              <div className="relative">
                <div className="absolute -inset-1 animate-pulse rounded-full bg-destructive/20 blur-xl" />
                <Image
                  src="/undraw_server_down.svg"
                  alt="Error Illustration"
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
                  <AlertCircle className="h-8 w-8 text-destructive" />
                  Oops! Algo deu errado
                </h1>
                <p className="text-lg text-muted-foreground">
                  Estamos trabalhando para resolver o problema.
                </p>
              </div>

              {/* Detalhes do Erro (apenas em desenvolvimento) */}
              {process.env.NODE_ENV === "development" && (
                <div className="overflow-hidden rounded-lg border bg-muted/50 shadow-sm">
                  <div className="border-b bg-muted/50 px-4 py-3">
                    <p className="font-medium">Detalhes do Erro (Dev Only)</p>
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="space-y-1 font-mono text-xs text-muted-foreground">
                      <p>Mensagem: {error.message}</p>
                      {error.digest && <p>Digest: {error.digest}</p>}
                      <details className="cursor-pointer">
                        <summary className="flex items-center text-xs text-muted-foreground hover:text-foreground">
                          <ChevronRight className="h-4 w-4" />
                          Stack Trace
                        </summary>
                        <pre className="mt-2 max-h-[200px] overflow-auto whitespace-pre-wrap rounded bg-muted p-2 text-[10px] text-destructive/70">
                          {error.stack}
                        </pre>
                      </details>
                    </div>
                  </div>
                </div>
              )}

              {/* Ações */}
              <div className="flex items-center justify-center gap-4">
                <Button variant="outline" onClick={reset} className="gap-2">
                  <RefreshCcw className="h-4 w-4" />
                  Tentar novamente
                </Button>
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="gap-2"
                >
                  <Home className="h-4 w-4" />
                  Voltar ao início
                </Button>
              </div>
            </div>

            {/* Footer com Digest em produção */}
            {process.env.NODE_ENV === "production" && error.digest && (
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Código do erro: {error.digest}
                </p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
