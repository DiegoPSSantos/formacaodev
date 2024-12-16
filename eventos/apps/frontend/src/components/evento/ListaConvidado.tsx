import { Convidado } from "@eventos/core";
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadoProps {
    convidados: Convidado[];
}

export default function ListaConvidado({ convidados }: ListaConvidadoProps) {
    return (
        <div>
            <ul className="flex flex-col gap-3">
                {convidados.map((convidado) => (
                    <ConvidadoItem key={convidado.id} convidado={convidado} />
                ))}
            </ul>
        </div>
    )
}