/* Reduce sem valor Inicial Setado (Current Index)

const nums = [1, 2, 3, 4];

function somaNums (arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

console.log(somaNums(nums));
*/

//Reduce COM valor inicial

const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));