import { CONSTANTES } from "./Constants";

export default class Senha {
    static gerar(tamanho: number = 8): string {
        const maiusculas = CONSTANTES.ALFABETO_MINUSCULO.toUpperCase();
        const gurpos = [CONSTANTES.ALFABETO_MINUSCULO, maiusculas, CONSTANTES.ALGARISMOS, CONSTANTES.ESPECIAIS];
        const senha = [];

        for (let i = 0; i < tamanho; i++) {
            const grupo = gurpos[Math.floor(Math.random() * gurpos.length)];
            senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
        }
        return senha.join('');
    }

}