import Convidado from "../model/Convidado";
import criarConvidadoVazio from "./criarConvidadoVazio";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidado);

    if (erros.length > 0) {
        throw new Error(erros.join("\n"));
    }

    const qtdeAcompanhantes = +(convidado.qtdeAcompanhantes ?? 0);
    const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes;
    const convidadoAtualizado = {
        ...convidado,
        qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
        possuiAcompanhantes: !!temAcompanhantes
    } as Convidado;

    return convidadoAtualizado;
}