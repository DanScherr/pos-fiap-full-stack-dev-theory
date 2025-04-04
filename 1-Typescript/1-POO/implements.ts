interface Quimico {
    nome: string;
    calcularMassaMolar: (formula: string) => number;
}

class Bioquimico implements Quimico {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    calcularMassaMolar(formula: string): number {
        const massasAtomicas: { [elemento: string]: number } = {
            'H': 1,
            'C': 12,
            'O': 16,
            'N': 14,
        };

        let massaMolar = 0;
        const regex = /([A-Z][a-z]*)(\d*)/g;
        let match;

        while ((match = regex.exec(formula)) !== null) {
            const elemento = match[1];
            const quantidade = parseInt(match[2] || '1');
            if (massasAtomicas[elemento]) {
                massaMolar += massasAtomicas[elemento] * quantidade;
            } else {
                throw new Error(`Elemento desconhecido: ${elemento}`)
            }
        }
        return massaMolar;
    }
}

let bioquimico = new Bioquimico("Vander");
console.log(bioquimico.calcularMassaMolar('H2O'));