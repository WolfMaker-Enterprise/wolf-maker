import { ArrowUpRight } from "phosphor-react";

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="relative bg-cover bg-center text-white py-28 px-6 flex items-center justify-start min-h-[400px]"
      style={{
        backgroundImage: `url("images/bg_wolf.png")`,
      }}
    >
      <div className="max-w-6xl w-full z-10 transform translate-x-[240px]">
        <span className="text-xs text-pink-500 tracking-wider bg-purple-950 px-3 py-1 rounded-full uppercase font-semibold mb-4 inline-block">
          Entre para a alcateia
        </span>

        <h2 className="text-white font-[Inter] text-[56px] font-medium leading-[124%] tracking-[-1.12px] max-w-3xl">
          Comece a transformar <br />
          seu negócio <span className="font-bold">hoje!</span>
        </h2>

        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <span className="bg-white text-pink-600 rounded-full p-[5px] flex items-center gap-2 hover:bg-pink-100 transition">
            FALE CONOSCO
            <ArrowUpRight weight="bold" size={16} />
          </span>
        </a>
      </div>
    </section>
  );
}
