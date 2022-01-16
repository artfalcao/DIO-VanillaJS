const numPrimos = [2, 3, 5, 7, 11, 13, 17, 19];

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

console.log(mapSemThis(numPrimos));