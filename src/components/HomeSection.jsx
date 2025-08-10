import Button from './ui/Button';
import Text from './ui/HighText';

export default function HomeSection() {
	return (
		<section
			id="home"
			className="relative h-screen w-full bg-cover bg-center bg-no-repeat text-white"
			style={{ backgroundImage: `url("/images/bg_jumbotron.png")` }}
		>
			<div className="relative z-10 mx-auto flex flex-col md:flex-row h-full max-w-7xl items-center md:items-center justify-center md:justify-between px-4 sm:px-6">
				{/* Mobile: tudo dentro de um único fundo blur */}
				<div className="w-full block sm:hidden">
					<div className="bg-black/40 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center gap-6">
						<Text text="wolf Maker" />
						<h1 className="text-3xl font-semibold leading-tight text-center">
							O <span className="font-bold">destravar</span>
							<br />
							do seu negócio
						</h1>
						<h2 className="text-2xl font-medium leading-tight text-center">
							está a um
							<br />
							<span className="font-bold">clique</span>
						</h2>
						<p className="text-sm leading-tight text-gray-300 text-center">
							Construímos soluções personalizadas
							<br />
							para o seu negócio!
						</p>
						<div className="flex items-center justify-center mt-2">
							<Button word="TRANSFORME AGORA" href="#contato" />
						</div>
					</div>
				</div>

				{/* Desktop: mantém blocos separados */}
				<div className="w-full max-w-md mb-10 md:mb-[300px] space-y-4 text-center md:text-left hidden sm:block">
					<div className="p-0">
						<Text text="wolf Maker" />
						<h1 className="text-6xl font-semibold leading-tight">
							O <span className="font-bold">destravar</span>
							<br />
							do seu negócio
						</h1>
					</div>
				</div>

				<div className="w-full max-w-md sm:flex flex-col items-center md:items-end space-y-4 md:space-y-6 text-center md:text-left mt-0 md:mt-[240px] hidden">
					<div className="p-0">
						<h2 className="text-6xl font-medium leading-tight">
							está a um
							<br />
							<span className="font-bold">clique</span>
						</h2>
						<p className="text-base leading-tight text-gray-300 mt-2">
							Construímos soluções personalizadas
							<br />
							para o seu negócio!
						</p>
						<div className="flex items-center md:items-start justify-center md:justify-start mt-4">
							<Button word="TRANSFORME AGORA" href="#contato" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
