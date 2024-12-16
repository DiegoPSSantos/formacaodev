import { CONSTANTES } from "@eventos/core";
import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function LogoGrande() {
  return (
    <Link href="/" className={`flex flex-col items-center gap-2 ${fonte.className}`}>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <h1 className="text-5xl">
          {CONSTANTES.TITULO_PART1.substring(0, 6)}<span className="text-blue-500">3</span> {CONSTANTES.TITULO_PART2}
        </h1>
    </Link>
  )
}