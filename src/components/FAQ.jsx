import React from "react";
import { useState } from "react";
import { ArrowUpRight } from "phosphor-react";

export default function FAQ() {
  const questions = [
    {
      title:
        "Quais tipo de negócios podem se beneficiar das soluções digitais?",
      answer:
        "Nossas soluções digitais são projetadas para atender empresas de todos os portes e setores. Trabalhamos com startups, pequenas e médias empresas, e grandes organizações que buscam aumentar sua presença digital, melhorar o desempenho de suas campanhas de marketing e obter insights estratégicos a partir de dados.",
    },
    {
      title: "Como funciona o processo de gestão de tráfego pago?",
      answer:
        "O processo de gestão de tráfego pago na Wolf Maker envolve várias etapas. Primeiro, realizamos uma análise detalhada do seu negócio e do seu público-alvo. Em seguida, desenvolvemos uma estratégia personalizada que inclui a criação de anúncios, segmentação de público e definição de orçamentos. Monitoramos continuamente o desempenho das campanhas, otimizando-as para garantir o melhor retorno sobre o investimento.",
    },
    {
      title:
        "É possível contratar um serviço específico ou é necessário contratar um pacote completo?",
      answer:
        "Na Wolf Maker, oferecemos flexibilidade na contratação de nossos serviços. Você pode optar por contratar um serviço específico, como gestão de tráfego pago ou desenvolvimento de páginas, ou escolher um pacote completo que inclua várias soluções. Nossa equipe está pronta para entender suas necessidades e oferecer a melhor opção para o seu negócio.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#140517] text-white md:h-[618px] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Lado Esquerdo */}
        <div>
          <span className="text-xs text-pink-500 tracking-wider bg-purple-950 px-3 py-1 rounded-full uppercase font-semibold">
            FAQ
          </span>
          <h2 className="text-4xl font-bold leading-snug mt-4">
            Desbloqueie sua empresa <br />
            para a <span className="text-white font-extrabold">tecnologia</span>
          </h2>
          <p className="text-gray-300 text-sm mt-6 leading-relaxed">
            Na Wolf Maker, entendemos que ao buscar soluções digitais para seu
            negócio, é natural ter dúvidas sobre o processo, os serviços e como
            podemos ajudar você a alcançar seus objetivos. Para tornar sua
            experiência mais tranquila, reunimos as perguntas mais comuns que
            recebemos de nossos clientes. Explore as respostas abaixo para
            esclarecer suas dúvidas e entender melhor como podemos impulsionar
            seu crescimento. <br />
            <br />
            Se ainda restar alguma pergunta ou se você deseja uma resposta
            personalizada, nossa equipe está pronta para ajudar! Entre em
            contato e teremos prazer em oferecer as informações que você
            precisa.
          </p>
        </div>

        {/* Lado Direito - Perguntas */}
        <div className="space-y-4">
          {questions.map((q, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className={`rounded-xl p-5 transition-all duration-300 ${
                  isOpen
                    ? "bg-gradient-to-br from-pink-500 to-purple-500 text-white"
                    : "bg-black/10 text-white border border-white/10"
                }`}
                onClick={() => setOpenIndex(index)}
              >
                <div className="flex justify-between items-start cursor-pointer">
                  <h4 className="font-semibold text-sm md:text-base">
                    {q.title}
                  </h4>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 ml-4 mt-1">
                    <ArrowUpRight size={16} className="text-pink-600" />
                  </div>
                </div>
                {isOpen && q.answer && (
                  <p className="text-sm mt-3">{q.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
