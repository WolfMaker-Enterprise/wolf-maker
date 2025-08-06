export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen md:w-auto bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url("/images/bg_jumbotron.png")` }}
    >
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="w-full max-w-md mb-[300px] space-y-4">
          <span className="text-xs text-pink-500 bg-purple-950 font-semibold px-3 py-1 rounded-full tracking-widest uppercase">
            wolf Maker
          </span>
          <h1 className="text-6xl font-semibold leading-tight">
            O <span className="font-bold">destravar</span>
            <br />
            do seu negócio
          </h1>
        </div>

        <div className="flex w-full max-w-md flex-col items-end space-y-6 text-left">
          <h2 className="text-6xl mt-[240px] font-medium leading-tight">
            está a um
            <br />
            <span className="font-bold">clique</span>
          </h2>

          <p className="text-base text-gray-300">
            Construímos soluções personalizadas
            <br />
            para o seu negócio!
          </p>
          <a
            href="#contato"
            className="inline-flex items-left gap-2 rounded-full bg-[#9b26e3]/90 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(155,38,227,0.6)] transition hover:brightness-110"
          >
            TRANSFORME AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
