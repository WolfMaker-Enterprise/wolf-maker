import React from "react";
import Text from "./ui/HighText";

export default function OurWork() {
  const stats = [
    { value: "+97", label: "projetos" },
    { value: "24", label: "experts" },
    { value: "+100K", label: "valor gerenciado" },
    { value: "3", label: "países" },
  ];

  return (
    <section className="bg-[#140517] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <Text text="Nossos Trabalhos" />
        </div>

        <h2 className="text-[58px] font-bold pt-[13px]">
          Resultados da{" "}
          <span className="text-white font-extrabold">alcateia</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center pt-[30px]">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center relative"
            >
              {idx !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 border-l border-gray-700"></div>
              )}

              <h3 className="text-[70px] font-extrabold">
                {item.value.startsWith("+") ? (
                  <>
                    <span className="text-pink-500">+</span>
                    <span className="text-white">{item.value.slice(1)}</span>
                  </>
                ) : (
                  <span className="text-white">{item.value}</span>
                )}
              </h3>
              <p className="text-sm text-gray-300 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
