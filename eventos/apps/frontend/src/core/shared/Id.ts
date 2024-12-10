export default class Id {
    
    static novo(): string {
        return `${this.hash()}-${this.hash()}-${this.hash()}`;
    }

    private static hash(): string {
        // Esse 36 significa o range de caracteres que serão usados será de todas as letras do alfabeto e os números 0 a 9
        // substring(2, 15) significa que a string começará com os caracteres da posição 2 até a posição 15, já que os número gerados são de 0,0...
        return Math.random().toString(36).substring(2, 15);
    }
}

console.log(Id.novo());
