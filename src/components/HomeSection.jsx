import Button from "./ui/Button";
import Text from "./ui/HighText";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen md:w-auto bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url("/images/bg_jumbotron.png")` }}
    >
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="w-full max-w-md mb-[300px] space-y-4">
          <Text text="wolf Maker" />
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
          <div className="items-start ml-[-40px]">
            {" "}
            {/* Move o botão mais para a esquerda */}
            <Button word="TRANSFORME AGORA" href="#contato" />
          </div>
        </div>
      </div>
    </section>
  );
}
