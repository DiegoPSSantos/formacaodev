import { CONSTANTES } from "@eventos/core";
import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <Link href="/" className={`flex items-center gap-2 ${fonte.className}`}>
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        <h1 className="flex flex-col items-center text-lg leading-5">
            <div>
                {CONSTANTES.TITULO_PART1.substring(0, 6)}<span className="text-blue-500">3</span>
            </div>
            <div>{CONSTANTES.TITULO_PART2}</div>
        </h1>
    </Link>
  )
}