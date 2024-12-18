import { Evento, eventos, Data, Id, Convidado } from '@eventos/core';
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';

@Controller('eventos')
export class EventosController {


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

    @Post('acessar')
    async acessarEvento(@Body() dados:{ id: string, senha: string }) {
        const evento = eventos.find(evento => evento.id === dados.id && evento.senha === dados.senha);
        
        if(!evento) {
            throw new Error('A senha não corresponde ao evento');
        }

        return this.serializar(evento);
    }

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

    @Get('validar/:alias/:id')
    async validarAlias(@Param('alias') alias:string, @Param('id') id:string) {
        const evento = eventos.find(e => e.alias === alias);
        // Caso não exista o evento ele é válido ou o id do evento é igual ao id passado como parâmetro
        return { valido: !evento || evento.id === id };
    }

    @Post(':alias/convidado')
    async salvarConvidado(@Param('alias') alias: string, @Body() convidado: Convidado) {
        const evento = eventos.find(e => e.alias === alias);
        if(!evento) {
            throw new Error('Evento não encontrado');
        }
        evento.convidados.push(convidado);
        return this.serializar(evento);
    }
}
