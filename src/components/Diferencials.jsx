import React from 'react';
import Text from './ui/HighText';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function Diferencials() {
	const cards = [
		{
			title: 'Experiência',
			description:
				'Experiência em diversos nichos de mercado, aplicando soluções digitais em pequenas e grandes empresas.',
		},
		{
			title: 'Melhoria',
			description:
				'Nossos profissionais são certificados e sempre buscam novidades para melhor atender nossos clientes.',
		},
		{
			title: 'Resultados',
			description:
				'Nosso time foca no resultado do nosso cliente, executando ações e estratégias que leve para isso.',
		},
	];

	return (
		<section
			id="sobre"
			className="relative bg-[#100511] text-white py-20 px-4 overflow-hidden"
		>
			<img
				src="/images/wolf_maker.png"
				alt="Wolf Maker Background"
				className="absolute inset-0 mx-auto my-auto h-full w-full object-contain opacity-50 pointer-events-none select-none"
				style={{ filter: 'brightness(1.4) contrast(1.2)' }}
			/>

			<div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
				<div className="mb-4">
					<Text text="diferenciais" />
				</div>
				<h2 className="text-[32px] sm:text-[56px] font-light">
					Por que escolher a <span className="font-bold">Wolf Maker</span>
				</h2>
				<p className="text-[16px] sm:text-[20px] text-gray-300 max-w-2xl mx-auto">
					Trazer resultado para nossos clientes, esse é nosso objetivo
					principal.
				</p>

				<div className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
					{cards.map((item, index) => (
						<div
							key={index}
							className="relative p-4 sm:p-6 text-left bg-black/20 backdrop-blur-md rounded-3xl overflow-hidden group"
						>
							<span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-pink-500 to-purple-600 rounded-full transition-all duration-700 group-hover:h-full" />

							<div className="bg-[#e35de9] w-10 h-10 flex items-center justify-center rounded-full mb-4 shadow-[0_0_12px_#e35de9]">
								<AiOutlineCheckCircle size={20} className="text-white" />
							</div>

							<h3 className="text-[18px] sm:text-[24px] font-semibold mb-2">
								{item.title}
							</h3>
							<p className="text-[14px] sm:text-[16px] text-gray-300">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
