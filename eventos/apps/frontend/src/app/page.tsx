import LogoGrande from "@/components/templates/LogoGrande";
import { CONSTANTES, Evento } from "@eventos/core";
import Link from "next/link";

export default function Home() {
  const e: Partial<Evento> = {};

  return (
    <div className="
      h-screen flex flex-col justify-center items-center gap-10
      bg-[url('/background-elementos.svg')] bg-cover
    ">
      <div className="flex flex-col items-center gap-4">
        <LogoGrande />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center">
          {CONSTANTES.DESCRICAO_APP_INICIO}
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase">
        Crie o seu Evento
      </Link>
    </div>
  );
}
