// Este arquivo facilita a importação de todos os modelos de eventos 
// não causando dependência circular em outros arquivos que precisam importar 
// os modelos que agora ao invés de importar como @/core/evento/Evento ou @/core/evento/Convidado
// simplismente importamos como @/core/evento
// isso facilita o desacoplamento e a manutenção do código

// Modelos
import Evento from "./model/Evento";
import Convidado from "./model/Convidado";
import criarEventoVazio from "./functions/criarEventoVazio";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import complementarConvidado from "./functions/complementarConvidado";
import complementarEvento from "./functions/complementarEvento";

export type { Evento, Convidado };
export {
    complementarConvidado,
    complementarEvento,
    criarConvidadoVazio,
    criarEventoVazio,
}