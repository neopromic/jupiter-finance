import Image from "next/image";
import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect(`/dashboard?month=${new Date().getMonth() + 1}`);
  }

  return (
    <section className="grid h-[100vh] grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-2">
      {/* "ESQUERDA" */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="mx-auto max-w-[550px] items-start">
          <Image
            src={"/logo.svg"}
            alt="jupiter finance"
            width={173}
            height={39}
            className=""
          />
          <h1 className="mt-8 text-4xl font-bold">Bem-vindo</h1>
          <p className="mt-2 text-base text-muted-foreground">
            A Jupiter Finance é uma plataforma de gestão financeira que utiliza
            IA para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
        </div>
      </div>
      {/* "DIREITA" */}
      <div className="flex flex-col items-center justify-center">
        <SignUp
          routing="hash"
          appearance={{
            layout: {
              shimmer: true,
              unsafe_disableDevelopmentModeWarnings: true,
              logoImageUrl: "/logo.svg",
            },
          }}
          signInUrl="/login"
        />
        {/* <Image
        src="/login.png"
        alt="Login"
        width={1000}
        height={1000}
        className="w-full max-h-[100dvh] pointer-events-none object-cover"
      /> */}
      </div>
    </section>
  );
};

export default SignUpPage;
