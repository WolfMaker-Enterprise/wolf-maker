import React from 'react';
import Text from './ui/HighText';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

const services = [
	{ title: 'Business Intelligence', image: '/images/bi.png' },
	{ title: 'Desenvolvimento de Páginas', image: '/images/lps.png' },
	{ title: 'Tráfego', image: '/images/tr.png' },
	{ title: 'Identidade Visual', image: '/images/iv.png' },
	{ title: 'Lançamento de Infoprodutos', image: '/images/li.png' },
];

export default function ServicesSection() {
	const [sliderRef, instanceRef] = useKeenSlider({
		loop: true,
		slides: {
			perView: 1,
			spacing: 0,
			origin: 'center',
		},
		breakpoints: {
			'(min-width: 768px)': {
				slides: {
					perView: 1,
					spacing: 0,
					origin: 'center',
				},
			},
			'(min-width: 1024px)': {
				slides: {
					perView: 1,
					spacing: 0,
					origin: 'center',
				},
			},
		},
		slideChanged(s) {
			setCurrentSlide(s.track.details.rel);
		},
	});
	const [currentSlide, setCurrentSlide] = useState(0);

	return (
		<section
			id="services"
			className="w-full px-4 py-20 bg-[#140517] text-white flex flex-col items-center"
		>
			<div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
				<div className="md:w-[1355px] md:h-[190px] grid grid-cols-2 gap-50">
					<div className="md:w-[573px] md:h-[190px]">
						<div className="mb-4">
							<Text text="Serviços" />
						</div>
						<h2
							className="mb-4 text-4xl md:text-5xl lg:text-6xl"
							style={{
								color: '#FFF',
								fontFamily: 'Inter',
								fontWeight: 500,
								lineHeight: '124%',
								letterSpacing: '-1.12px',
							}}
						>
							Transforme desafios <br />
							em <span>resultados!</span>
						</h2>
					</div>

					<div className="md:w-[520px] md:h-[176px] items-end">
						<hr className="border-t border-purple-700 w-[160px] mb-4" />
						<p
							className="text-base manrope md:text-lg lg:text-xl"
							style={{
								lineHeight: '159%',
								letterSpacing: '-1%',
							}}
						>
							Na Wolf Maker, oferecemos soluções digitais para empresas que
							buscam crescer de maneira inteligente e assertiva. Seja você uma
							startup, pequeno empresário ou um grande player do mercado, temos
							a expertise para ajudar seu negócio a alcançar novas alturas.
						</p>
					</div>
				</div>
			</div>

			<div className="relative w-full max-w-[1400px] px-0 md:px-4">
				<div ref={sliderRef} className="keen-slider relative z-0">
					{services.map((s, index) => (
						<div
							key={index}
							className="keen-slider__slide flex flex-col items-center justify-center min-h-[400px]"
						>
							<svg
								viewBox="0 0 1289 690"
								fill="none"
								className="max-w-[900px] w-full h-auto mx-auto"
								style={{ background: 'transparent', display: 'block' }}
								preserveAspectRatio="xMidYMid meet"
							>
								<defs>
									<pattern
										id={`pattern${index}_17_47`}
										patternUnits="userSpaceOnUse"
										width={1289}
										height={690}
									>
										<image
											href={s.image}
											x="0"
											y="0"
											width={1289}
											height={690}
											preserveAspectRatio="xMidYMid slice"
											style={{ imageRendering: 'auto' }}
										/>
									</pattern>
								</defs>
								<path
									d="M546.148 0C556.79 0 566.565 3.70577 574.254 9.89719C591.304 23.6263 608.59 44.2627 630.481 44.2627H1239C1266.61 44.2627 1289 66.6485 1289 94.2627V597.371C1289 624.985 1266.61 647.371 1239 647.371H1207.04C1185.71 647.371 1168.75 666.963 1152.07 680.253C1144.41 686.354 1134.7 690 1124.15 690H814.852C804.297 690 794.594 686.354 786.933 680.253C770.245 666.963 753.294 647.371 731.960 647.371H50C22.3858 647.371 0 624.985 0 597.371V94.2627C0 66.6485 22.3858 44.2627 50 44.2627H152.519C174.410 44.2627 191.696 23.6263 208.746 9.89718C216.436 3.70577 226.210 0 236.852 0H546.148Z"
									fill={`url(#pattern${index}_17_47)`}
								/>
							</svg>

							<div
								className="absolute text-[13px] text-white bg-purple-700/30 px-4 py-1 rounded-full z-20"
								style={{
									top: 'calc(690px * 0.02)',
									left: 'calc(1289px * 0.36)',
								}}
							>
								Serviços
							</div>
							<div
								className="absolute text-white text-lg font-medium z-20 px-6 py-2 rounded-lg"
								style={{
									bottom: 'calc(690px * 0.08)',
									left: 'calc(1289px * 0.23)',
									background: 'rgba(20, 5, 23, 0.55)',
									backdropFilter: 'blur(8px)',
									WebkitBackdropFilter: 'blur(8px)',
								}}
							>
								{s.title}
							</div>
						</div>
					))}
				</div>

				<div className="absolute top-4 right-[300px] flex gap-1 z-30">
					{services.map((_, idx) => (
						<button
							key={idx}
							onClick={() => instanceRef.current?.moveToIdx(idx)}
							className={`w-2.5 h-2.5 rounded-full transition-opacity duration-300 ${
								currentSlide === idx
									? 'bg-purple-500 opacity-100'
									: 'bg-purple-500 opacity-40'
							}`}
						></button>
					))}
				</div>
			</div>
		</section>
	);
}
