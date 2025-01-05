"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ConfettiEffect } from "../_lib/functions/confetti";

const HappyNewYearHeader = () => {
  const redirect = useRouter();

  const handleClick = () => {
    ConfettiEffect();
    redirect.push("/login");
  };

  return (
    <motion.section
      initial={{ y: -20, opacity: 0, display: "none" }}
      animate={{ y: 0, opacity: 1, display: "block" }}
      className="bg-primary px-6 py-2 text-primary-foreground"
    >
      <section className="flex items-center justify-between">
        <p className="pointer-events-none">Happy new Year!</p>

        <Button
          onClick={handleClick}
          className="bg-background hover:bg-background/90"
        >
          Conhecer nossa plataforma!
        </Button>
      </section>
    </motion.section>
  );
};

export default HappyNewYearHeader;
