const Perfume = {
    preco: 140,
    volume: 0.1 
};

const Refrigerante = {
    preco: 5.7,
    volume: 1
};

function mapComthis(arr, thisArg) {
    return arr.map(function (item) {
        return this.preco/(item * this.volume);
    }, thisArg);
}

const Euro_Dolar = [6.4, 5.6];

console.log('Valor convertido p/ Euros e Dólares: (Euros/L de Perfume , Dólares/L de Perfume)', mapComthis(Euro_Dolar, Perfume));
console.log('Valor convertido p/ Euros e Dólares: (Euros/L de Refrigerante , Dólares/L de Refrigerante)', mapComthis(Euro_Dolar, Refrigerante));