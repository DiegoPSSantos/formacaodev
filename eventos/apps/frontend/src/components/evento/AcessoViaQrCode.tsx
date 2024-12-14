import { CONSTANTES, Evento } from "@/core";
import QRCode from "react-qr-code";

export interface AcessoViaQrCodeProps {
    evento: Evento;
}

export default function AcessoViaQrCode({ evento }: AcessoViaQrCodeProps) {
    return (
        <div className="flex flex-col items-center gap-4 justify-center border border-zinc-800 px-10">
            <span className="text-sm font-light text-zinc-400">{CONSTANTES.ACESSO_MOBILE}</span>
            <QRCode value={JSON.stringify({id: evento.id, senha: evento.senha})} className="w-32 h-32"/>
        </div>
    )
}