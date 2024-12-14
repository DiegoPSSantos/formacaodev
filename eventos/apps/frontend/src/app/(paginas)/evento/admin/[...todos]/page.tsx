"use client"

import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import { Convidado, Evento, eventos } from "@/core";
import { use, useEffect, useState } from "react";

export default function PaginaAdminEvento(props: any) {

    // Atualização no Next.js 15
    const params: any = use(props.params);

    const id = params.todos[0];
    const [evento, setEvento] = useState<Evento | null>(null);
    const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null);

    const presentes = evento?.convidados.filter(conv => conv.confirmado) ?? [];
    const ausentes = evento?.convidados.filter(conv => !conv.confirmado) ?? [];

    const totalGeral = presentes?.reduce((total: number, conv: Convidado) => total + conv.qtdeAcompanhantes + 1, 0) ?? 0;

    function carregarEvento() {
        const evento = eventos.find(evt => evt.id === id && evt.senha === senha);
        setEvento(evento ?? null);
    }

    useEffect(() => {
        carregarEvento();
    }, [id]);

    return (
        <div className="flex flex-col items-center">
            {evento ? (<DashboardEvento 
                        evento={evento} 
                        presentes={presentes} 
                        ausentes={ausentes} 
                        totalGeral={totalGeral} />) : (<FormSenhaEvento />)}
        </div>
    );
}