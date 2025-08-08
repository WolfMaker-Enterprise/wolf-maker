import { InstagramLogo, WhatsappLogo } from 'phosphor-react';

export default function Footer() {
	return (
		<footer className="bg-[#140517] text-white flex flex-col items-center gap-20 px-4 md:px-20 py-20">
			<div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="flex items-center gap-3">
					<img src="images/image 3.png" alt="Logo Wolf Maker" />
				</div>
				<ul className="flex gap-6 text-sm font-light">
					<li>
						<a href="#inicio" className="hover:opacity-80">
							Home
						</a>
					</li>
					<li>
						<a href="#sobre" className="hover:opacity-80">
							Sobre
						</a>
					</li>
					<li>
						<a href="#solucoes" className="hover:opacity-80">
							Soluções
						</a>
					</li>
					<li>
						<a href="#contato" className="hover:opacity-80">
							Contato
						</a>
					</li>
				</ul>

				<div className="flex gap-4">
					<a
						href="#"
						className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full"
					>
						<InstagramLogo weight="fill" size={20} />
					</a>
					<a
						href="https://wa.me/554788500777"
						className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full"
					>
						<WhatsappLogo weight="fill" size={20} />
					</a>
				</div>
			</div>

			<hr className="border-t border-white/10 w-full" />

			<div className="text-center text-xs opacity-60">
				Desenvolvido por WolfMaker
			</div>
		</footer>
	);
}
