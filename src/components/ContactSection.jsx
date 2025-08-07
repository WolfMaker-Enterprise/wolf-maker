import React from "react";
import Button from "./ui/Button";

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="relative bg-cover bg-center text-white py-28 px-6 flex items-center justify-start min-h-[400px]"
      style={{
        backgroundImage: `url("images/bg_wolf.png")`,
      }}
    >
      <div className="max-w-6xl w-full z-10  transform translate-x-[240px]">
        <span className="text-xs text-pink-500 tracking-wider bg-purple-950 px-3 py-1 rounded-full uppercase font-semibold mb-4 inline-block">
          Entre para a alcateia
        </span>

        <h2 className="text-white font-[Inter] text-[56px] font-medium leading-[124%] tracking-[-1.12px] max-w-3xl">
          Comece a transformar <br />
          seu negócio <span className="font-bold">hoje!</span>
        </h2>

        <div className="pt-8">
          <Button
            word="FALE CONOSCO"
            href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Wolf%20Maker."
          />
        </div>
      </div>
    </section>
  );
}
