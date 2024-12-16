import { Convidado, Evento } from "@eventos/core";
import InformacoesEvento from "./InformacoesEvento";
import AcessoViaQrCode from "./AcessoViaQrCode";
import Estatistica from "../shared/Estatistica";
import { CONSTANTES } from "@eventos/core";
import ListaConvidado from "./ListaConvidado";

export interface DashboardEventoProps {
    evento: Evento;
    presentes: Convidado[];
    ausentes: Convidado[];
    totalGeral: number;
}

export default function DashboardEvento({ evento, presentes, ausentes, totalGeral }: DashboardEventoProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 self-stretch">
                <InformacoesEvento evento={evento} className="flex-1"/>
                <AcessoViaQrCode evento={evento} />
            </div>
            <div className="grid grid-cols-3 mt-4 gap-6">
                <Estatistica 
                    texto={CONSTANTES.EXPEC_CONV} 
                    valor={evento.publicoEsperado} 
                    imagem={"/icones/convidados.svg"} />
                <Estatistica 
                    texto={CONSTANTES.CONF_CONV} 
                    valor={presentes.length} 
                    imagem={"/icones/confirmados.svg"} />
                <Estatistica 
                    texto={CONSTANTES.TOTAL_GERAL} 
                    valor={totalGeral} 
                    imagem={"/icones/acompanhantes.svg"} />
            </div>

            <button className="botao azul self-end mt-12">
                <span>{CONSTANTES.ATUALIZAR_LIST_CONV}</span>
            </button>
            
            <span className="flex py-2 text-xl font-bold text-white/80">{CONSTANTES.CONFIRMADOS_CONV}</span>
            <ListaConvidado convidados={presentes} />
            <span className="flex py-2 text-xl font-bold text-white/80">{CONSTANTES.AUSENTES_CONV}</span>
            <ListaConvidado convidados={ausentes} />
        </div>
    )
}