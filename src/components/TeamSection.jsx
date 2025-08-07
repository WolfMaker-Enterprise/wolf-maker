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
    <section className="bg-[#0e061d] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-purple-400 font-semibold mb-2">A EQUIPE</h3>
        <h2 className="text-4xl font-bold mb-12">Nosso time Wolf</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index}>
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
    </section>
  );
}
