import Text from "./ui/HighText";
import React from "react";

const teamMembers = [
  {
    name: "Lorenzo",
    role: "CEO",
    image: "/images/lorenzo.png",
  },
  {
    name: "Maicon Bitencourt",
    role: "Sócio e Chefe de Marketing",
    image: "/images/maicon.png",
  },
  {
    name: "Larissa Ignez",
    role: "Social Media",
    image: "/images/larissa.png",
  },
  {
    name: "Davi",
    role: "Head de Marketing",
    image: "/images/davi.png",
  },
  {
    name: "Elisa Steinmetz",
    role: "Gestora de tráfego pago",
    image: "/images/elisa.png",
  },
  {
    name: "Diana Claro",
    role: "UX/UI Designer",
    image: "/images/diana.png",
  },
  {
    name: "Robson Queiroz",
    role: "Desenvolvedor Full Stack",
    image: "/images/robson.png",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#140517] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <div className="mb-4">
          <Text text="A EQUIPE" />
        </div>
        <h2 className="text-4xl font-bold">Nosso time Wolf</h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex w-max animate-scroll whitespace-nowrap gap-8"
          style={{
            animation: "scrollRight 280s linear infinite",
          }}
        >
          {teamMembers.concat(teamMembers).map((member, index) => (
            <div key={index} className="flex-shrink-0 w-60 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scrollRight {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}
