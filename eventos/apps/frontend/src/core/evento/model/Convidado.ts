export default interface Convidado {
    id: string; // uuid
    nome: string;
    email: string;
    confirmado: boolean;
    possuiAcompanhantes: boolean;
    qtdeAcompanhantes: number;
}
