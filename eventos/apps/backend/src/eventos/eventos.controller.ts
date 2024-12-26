import { Evento, eventos, Data, Id, Convidado, complementarEvento, complementarConvidado } from '@eventos/core';
import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {

    constructor(private readonly repository: EventoPrisma) {}


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
        const evento = await this.repository.buscarPorId(dados.id);

        if (!evento) {
            throw new HttpException('Evento não encontrado', HttpStatus.BAD_REQUEST);
        }
        
        if(evento.senha !== dados.senha) {
            throw new HttpException('A senha não corresponde ao evento', HttpStatus.BAD_REQUEST);
        }

        return this.serializar(evento);
    }

    @Get()
    async getEventos() {
        const eventos = await this.repository.buscarTodos();
        return eventos.map(this.serializar);
    }

    @Get(':idOuAlias')
    async getEvento(@Param('idOuAlias') idOuAlias:string) {
        let evento:Evento;
        if(Id.valido(idOuAlias)) {
            evento = await this.repository.buscarPorId(idOuAlias, true);
        } else {
            evento = await this.repository.buscarPorAlias(idOuAlias, true);
        }
        return this.serializar(evento);
    }

    @Get('validar/:alias/:id')
    async validarAlias(@Param('alias') alias:string, @Param('id') id:string) {
        const evento = await this.repository.buscarPorAlias(alias, true);
        // Caso não exista o evento ele é válido ou o id do evento é igual ao id passado como parâmetro
        return { valido: !evento || evento.id === id };
    }

    @Post()
    async salvarEvento(@Body() evento: Evento) {
        const eventoCadastrado = await this.repository.buscarPorAlias(evento.alias);
        
        if (eventoCadastrado && eventoCadastrado.id !== evento.id) {
            throw new HttpException('Já existe um evento com este alias', HttpStatus.BAD_REQUEST);
        }

        const eventoCompleto = complementarEvento(this.deserializar(evento));
        await this.repository.salvar(eventoCompleto);
    }

    @Post(':alias/convidado')
    async salvarConvidado(@Param('alias') alias: string, @Body() convidado: Convidado) {
        const evento = await this.repository.buscarPorAlias(alias);

        if(!evento) {
            throw new HttpException('Evento não encontrado', HttpStatus.BAD_REQUEST);
        }
        
        const convidadoCompleto = complementarConvidado(convidado); 
        await this.repository.salvarConvidado(evento, convidadoCompleto);
    }
}
