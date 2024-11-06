import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const Login = () => {
  return ( 
    <section className="grid grid-cols-2">
      {/* "ESQUERDA" */}
      <div className="flex flex-col items-center justify-center p-8 ">
        <div className="mx-auto items-start max-w-[550px]">

        <Image src={"/logo.svg"} alt="Logo" width={150} height={150} className="" />
        <h1 className="text-4xl font-bold mt-8">Bem-vindo</h1>
        <p className="text-muted-foreground mt-2 text-base">A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.</p>
        <Button className="w-full mt-8" variant="outline">Entrar com Google <LogInIcon className="w-4 h-4 ml-2" /></Button>
        </div>
      </div>
      {/* "DIREITA" */}
      <Image src="/login.png" alt="Login"  width={1000} height={1000} className="max-h-[100dvh] w-full object-cover pointer-events-none" />
    </section>
  );
}

export default Login;