import { CONSTANTES, Convidado } from "@eventos/core";

export interface ConvidadoItemProps {
    convidado: Convidado;
}

export default function ConvidadoItem({ convidado }: ConvidadoItemProps) {
    return (
        <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
            <div className="flex flex-col">
                <span className="text-xl font-bold">{convidado.nome}</span>
                <span className="text-sm text-zinc-400">{convidado.email}</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-sm text-zinc-400">{CONSTANTES.ACOMP_CONV}</span>
                <span className="text-xl font-bold">{convidado.qtdeAcompanhantes}</span>
            </div>
        </li>
    )
}