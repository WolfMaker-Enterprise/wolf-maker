import React from "react";
import Button from "./ui/Button";
import Text from "./ui/HighText";

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="relative z-20 bg-cover bg-center text-white py-20 px-4 sm:py-28 sm:px-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start min-h-[400px]"
      style={{
        backgroundImage: `url("images/bg_wolf.png")`,
      }}
    >
      <div className="max-w-6xl w-full z-10 text-center sm:text-left transform sm:translate-x-[240px]">
        <div className="mb-4">
          <Text text="Entre para a alcateia" />
        </div>

        <h2 className="text-white font-[Inter] text-[36px] sm:text-[56px] font-medium leading-[140%] sm:leading-[124%] tracking-[-0.8px] sm:tracking-[-1.12px] max-w-3xl">
          Comece a transformar <br />
          seu negócio <span className="font-bold">hoje!</span>
        </h2>

        <p className="text-white pt-[18px] sm:text-[18px] leading-[140%] sm:leading-[124%] tracking-[-0.8px] sm:tracking-[-1.12px] max-w-3xl">
          Conectamos sua empresa aos clientes certos e aceleramos seu
          faturamento com estratégias que funcionam de verdade.
        </p>

        <div className="pt-6 sm:pt-8">
          <Button word="FALE CONOSCO" href="https://wa.me/554788500777" />
        </div>
      </div>
    </section>
  );
}
