import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Login = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <section className="grid grid-cols-2">
      {/* "ESQUERDA" */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="mx-auto max-w-[550px] items-start">
          <Image
            src={"/logo.svg"}
            alt="finance ai"
            width={173}
            height={39}
            className=""
          />
          <h1 className="mt-8 text-4xl font-bold">Bem-vindo</h1>
          <p className="mt-2 text-base text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
          <SignInButton>
            <Button className="mt-8 w-full" variant="outline">
              <LogInIcon className="ml-2 h-4 w-4" />
              Entrar com Google
            </Button>
          </SignInButton>
        </div>
      </div>
      {/* "DIREITA" */}
      <Image
        src="/login.png"
        alt="Login"
        width={1000}
        height={1000}
        className="pointer-events-none max-h-[100dvh] w-full object-cover"
      />
    </section>
  );
};

export default Login;
