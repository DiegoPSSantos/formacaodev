import { v4 as uuid, validate } from 'uuid';

export default class Id {
    static novo(): string {
        return uuid();
    }

    static valido(id: string): boolean {
        return validate(id);
    }
}

for (let i = 0; i < 100; i++) {
    console.log(Id.novo());
}