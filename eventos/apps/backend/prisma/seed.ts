import { eventos } from "@eventos/core";
import { PrismaClient } from "@prisma/client";
import { create } from "domain";

async function seed() {
    const prisma = new PrismaClient();

    const transacoes  = eventos.map(async (evento) => { 
        await prisma.evento.create({
            data: {
                id: evento.id,
                alias: evento.alias,
                nome: evento.nome,
                senha: evento.senha,
                data: evento.data,
                local: evento.local,
                descricao: evento.descricao,
                imagem: evento.imagem,
                imagemBackground: evento.imagemBackground,
                publicoEsperado: evento.publicoEsperado,
                convidados: {
                    create: evento.convidados.map((convidado) => ({
                        id: convidado.id,
                        nome: convidado.nome,
                        email: convidado.email,
                        confirmado: convidado.confirmado,
                        possuiAcompanhantes: convidado.possuiAcompanhantes,
                        qtdeAcompanhantes: convidado.qtdeAcompanhantes,
                    }))
                },
            },
        });
    });

    await Promise.all(transacoes);
}

seed();
