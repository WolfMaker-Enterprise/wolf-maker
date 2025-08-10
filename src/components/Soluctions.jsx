import React from 'react';
import Text from './ui/HighText';
import { ArrowUpRight } from 'phosphor-react';

export default function Soluctions() {
	return (
		<section
			id="solucoes"
			className="relative bg-[#140517] text-white py-24 px-6 overflow-hidden flex items-center justify-center"
		>
			<div className="max-w-7xl w-full relative z-10">
				<div className="text-center">
					<div className="mb-4">
						<Text text="Contatos" />
					</div>
					<h2 className="text-5xl font-extrabold leading-tight">
						Nossas <span className="text-white">soluções & contatos</span>
					</h2>
				</div>

				<div className="grid md:grid-cols-2 sm:gap-12 items-center">
					<div className="relative flex justify-center items-center">
						<img
							src="images/wolf.png"
							alt="Lobo uivando"
							className="relative z-10 w-[700px] sm:w-[600px] h-[682px] object-contain"
						/>
					</div>

					<div className="space-y-6">
						<div>
							<div className="mb-4">
								<Text text="Expertise" />
							</div>
							<h3 className="text-3xl font-light mt-2 mb-2">
								Excelência em tecnologia!
							</h3>
							<p className="text-gray-300 text-base max-w-md">
								Pronto para transformar seu negócio? Entre em contato conosco e
								descubra como podemos ajudar você a alcançar novos patamares!
							</p>
						</div>

						<div className="space-y-4">
							<a
								href="#services"
								className="flex items-start justify-between border-l-[3px] border-purple-500/80 rounded-lg px-6 py-5 bg-black/10 backdrop-blur-md"
							>
								<div>
									<h4 className="font-semibold text-lg mb-1">
										Conheça nossas soluções
									</h4>
									<p className="text-sm text-gray-300">
										impulsionamos empresas a crescer mais rápido, atraindo
										clientes certos e multiplicando vendas com estratégias
										inteligentes que geram resultados reais.
									</p>
								</div>
								<div className="bg-white p-1 rounded-full">
									<ArrowUpRight size={20} className="text-pink-500" />
								</div>
							</a>
							<a
								href="https://wa.me/554788500777"
								className="flex items-start justify-between border-l-[3px] border-purple-500/80 rounded-lg px-6 py-5 bg-black/10 backdrop-blur-md"
							>
								<div>
									<h4 className="font-semibold text-lg mb-1">Fale conosco</h4>
									<p className="text-sm text-gray-300">
										Entre em contato conosco para saber mais sobre nossos
										serviços por whatsapp agora mesmo!
									</p>
								</div>
								<div className="bg-white p-1 rounded-full">
									<ArrowUpRight size={20} className="text-pink-500" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
