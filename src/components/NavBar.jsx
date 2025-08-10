import React, { useState } from 'react';

function NavBarListItem({ text, href }) {
	return (
		<li>
			<a
				href={href}
				className="hover:text-purple-400 transition duration-200 ease-in-out"
			>
				{text}
			</a>
		</li>
	);
}

export default function NavBar() {
	const [open, setOpen] = useState(false);
	return (
		<header className="w-full h-20 px-4 md:px-10 absolute top-0 z-50 bg-blur text-white">
			<div className="max-w-7xl mx-auto h-full flex items-center justify-between">
				<div className="flex items-center gap-3">
					<img
						src="/images/image.png"
						alt="Logo Wolf Maker"
						className="h-22 w-auto"
						style={{ filter: 'grayscale(1) invert(1)' }}
					/>
				</div>

				{/* Menu hamburguer para mobile */}
				<button
					className="sm:hidden flex items-center justify-center p-2 rounded focus:outline-none"
					onClick={() => setOpen(!open)}
					aria-label="Abrir menu"
				>
					<svg width="28" height="28" fill="none" viewBox="0 0 24 24">
						<rect y="5" width="24" height="2" rx="1" fill="currentColor" />
						<rect y="11" width="24" height="2" rx="1" fill="currentColor" />
						<rect y="17" width="24" height="2" rx="1" fill="currentColor" />
					</svg>
				</button>

				<nav>
					<ul className="hidden sm:flex gap-6 text-sm">
						<NavBarListItem text="Home" href="#home" />
						<NavBarListItem text="Sobre" href="#sobre" />
						<NavBarListItem text="Soluções" href="#solucoes" />
						<NavBarListItem text="Contato" href="#contato" />
					</ul>
				</nav>
			</div>

			{/* Overlay escurecido */}
			{open && (
				<>
					<div
						className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ease-in-out"
						onClick={() => setOpen(false)}
					/>
					<nav
						className="sm:hidden fixed top-20 left-0 w-full bg-[#140517] bg-opacity-95 shadow-lg z-50 transition-all duration-300 ease-in-out"
						style={{
							transform: open ? 'translateY(0)' : 'translateY(-20px)',
							opacity: open ? 1 : 0,
						}}
					>
						<ul className="flex flex-col justify-center items-center gap-6 py-8 text-lg w-full text-center">
							<NavBarListItem text="Home" href="#home" />
							<NavBarListItem text="Sobre" href="#sobre" />
							<NavBarListItem text="Soluções" href="#solucoes" />
							<NavBarListItem text="Contato" href="#contato" />
						</ul>
					</nav>
				</>
			)}
		</header>
	);
}
