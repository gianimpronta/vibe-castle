class Dado {
    valor!: number;
    cor!: string;
}


const d1 = new Dado();
d1.valor = 5;
d1.cor = "vermelho";

console.log(`Dado d1 = cor: $d1.cor; valor: $d1.valor`)