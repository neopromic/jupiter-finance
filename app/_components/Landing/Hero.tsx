"use client";

import GetStartdButton from "./get-started-button";
import { motion } from "framer-motion";

const HeroLandingPage = () => {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0, scale: 2 }}
      animate={{ y: 0, opacity: 100, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-1 flex-col items-center justify-center p-6 text-center"
    >
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
    </motion.main>
  );
};

export default HeroLandingPage;
