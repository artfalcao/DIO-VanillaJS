const numsPrimos = [2, 3, 5, 7, 11, 13, 17, 19];

function numsPares (arr) {
    return arr.filter(function (item) {
        return item % 2 ===0; //condição do Filtro
    });
}

console.log(numsPares(numsPrimos));