import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { CONSTANTES } from "@/core/shared/Constants";

const fonte = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: CONSTANTES.NOME_APP,
  description: CONSTANTES.DESCRICAO_APP,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={fonte.className}
      >
        {children}
      </body>
    </html>
  );
}
