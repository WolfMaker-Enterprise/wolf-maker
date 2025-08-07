import React from "react";
import { ArrowUpRight } from "phosphor-react";

export default function Soluctions() {
  return (
    <section className="relative bg-[#140517] text-white py-24 px-6 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl w-full space-y-16 relative z-10">
        <div className="text-center">
          <span className="text-xs text-pink-500 tracking-wider bg-purple-950 px-3 py-1 rounded-full uppercase font-semibold mb-3 inline-block">
            Contatos
          </span>
          <h2 className="text-5xl font-extrabold leading-tight">
            Nossas <span className="text-white">soluções & contatos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <img
              src="images/grade.png"
              alt="Fundo decorativo"
              className="absolute left-0 top-0 h-full w-full max-w-[700px] object-cover opacity-40 pointer-events-none select-none"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.1))",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.1))",
                filter: "brightness(1.2) contrast(1.3)",
                zIndex: 0,
              }}
            />
            <img
              src="images/wolf.png"
              alt="Lobo uivando"
              className="relative z-10 w-[700px] sm:w-[600px] h-[682px] object-contain"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs text-pink-500 tracking-wider bg-purple-950 px-3 py-1 rounded-full uppercase font-semibold">
                Expertise
              </span>
              <h3 className="text-3xl font-light mt-2 mb-2">
                Excelência em tecnologia!
              </h3>
              <p className="text-gray-300 text-base max-w-md">
                Pronto para transformar seu negócio? Entre em contato conosco e
                descubra como podemos ajudar você a alcançar novos patamares!
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Conheça nossas soluções",
                  text: "Pretium eget egestas sociis mauris et ultrices ultricies accumsan vitae ac hac et purus nulla ut pellentesque ac nunc in.",
                },
                {
                  title: "Contatos",
                  text: "Pretium eget egestas sociis mauris et ultrices ultricies accumsan vitae ac hac et purus nulla ut pellentesque ac nunc in.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between border-l-[3px] border-purple-500/80 rounded-lg px-6 py-5 bg-black/10 backdrop-blur-md"
                >
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{card.title}</h4>
                    <p className="text-sm text-gray-300">{card.text}</p>
                  </div>
                  <div className="bg-white p-1 rounded-full">
                    <ArrowUpRight size={20} className="text-pink-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
