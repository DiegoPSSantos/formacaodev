import { Evento, eventos, Data } from '@eventos/core';
import { Controller, Get } from '@nestjs/common';

@Controller('eventos')
export class EventosController {

    @Get()
    async getEventos() {
        return eventos.map(this.serializar);
    }

    private serializar(evento:Evento) {
        return {
            ...evento,
            data: Data.formatar(evento.data)
        }
    }

    private deserializar(evento:any) {
        return {
            ...evento,
            data: Data.desformatar(evento.data)
        }
    }
}
