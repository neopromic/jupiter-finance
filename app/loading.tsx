"use client";

import { useEffect, useState } from "react";
import Spinner from "./_components/ui/spinner";

export default function Loading() {
  const [isLongLoading, setIsLongLoading] = useState(false);

  useEffect(() => {
    // Se o loading demorar mais que 3 segundos, mostramos uma mensagem
    const timeout = setTimeout(() => {
      setIsLongLoading(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex h-full flex-col items-center justify-center gap-4">
      <Spinner />
      {isLongLoading && (
        <p className="animate-fade-in text-sm text-muted-foreground">
          Carregando dados...
        </p>
      )}
    </section>
  );
}
