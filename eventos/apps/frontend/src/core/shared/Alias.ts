export default class Alias {
    static formatar(valor: string): string {
        // Remove espaços em branco e substitui por '-'
        return valor.replace(/ /g, '-').toLowerCase();
    }
}