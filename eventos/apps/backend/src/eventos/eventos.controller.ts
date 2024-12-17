import { Evento, eventos, Data, Id } from '@eventos/core';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('eventos')
export class EventosController {

    @Get()
    async getEventos() {
        return eventos.map(this.serializar);
    }

    @Get(':idOuAlias')
    async getEvento(@Param('idOuAlias') idOuAlias:string) {
        if(Id.valido(idOuAlias)) {
            return this.serializar(eventos.find(e => e.id === idOuAlias));
        } else {
            return this.serializar(eventos.find(e => e.alias === idOuAlias));
        }
    }

    private serializar(evento:Evento) {
        if (!evento) return null;
        return {
            ...evento,
            data: Data.formatar(evento.data)
        }
    }

    private deserializar(evento:any) {
        if (!evento) return null;
        return {
            ...evento,
            data: Data.desformatar(evento.data)
        }
    }
}
