## Map, Filter e Reduce

Nesta atividade aprendi um pouco sobre os métodos de manipulação de arrays:

- **map**() [invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado];

- **filter**() [cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida];

-**reduce**() [executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno];

A função reducer recebe quatro parâmetros:

1. Acumulador (acc)
2. Valor Atual (cur)
3. Index Atual (idx)
4. Array original (src)

O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.
Para mais info: [reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
