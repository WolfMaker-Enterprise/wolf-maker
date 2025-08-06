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
  return (
    <header className="w-full h-20 px-4 md:px-10 fixed top-0 z-50 bg-blur text-white">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/image.png"
            alt="Logo Wolf Maker"
            className="h-22 w-auto"
            style={{ filter: "grayscale(1) invert(1)" }}
          />
        </div>

        <nav>
          <ul className="flex gap-6 text-sm">
            <NavBarListItem text="Home" href="#home" />
            <NavBarListItem text="Sobre" href="#sobre" />
            <NavBarListItem text="Soluções" href="#solucoes" />
            <NavBarListItem text="Contato" href="#contato" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
