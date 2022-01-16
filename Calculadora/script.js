//Criando Calculadora usando JS
function calculadora() {
    const operação = prompt('Escolha uma operação:\n 1-Soma\n 2-Subtração\n 3-Multiplicação\n 4-Divisão\n 5-Potenciação');
    //Testando escolha de operações válidas
    if (!operação || operação > 5) {
        alert(`Erro - Operação Inválida!`);
        calculadora();
    } else {
        //Criando as variáveis n1, n2 e resultado
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;
        //Testando n1 e n2 válidos
        if (!n1 || !n2) {
            alert(`Parâmetros Inválidos`);
            calculadora();
        }else {
                //Criando as operações
                function soma() {
                    resultado = n1 + n2;
                    alert(`${n1} + ${n2} = ${resultado}`);
                    novaOperação();
                }
                function subtração() {
                    resultado = n1 - n2;
                    alert(`${n1} - ${n2} = ${resultado}`);
                    novaOperação();
                }
                function multiplicação() {
                    resultado = n1*n2;
                    alert(`${n1} * ${n2} = ${resultado}`);
                    novaOperação();
                }
                function divisão() {
                    resultado = n1 / n2;
                    alert(`${n1} / ${n2} = ${resultado}`);
                    novaOperação();
                }
                function potenciação() {
                    resultado = n1**n2;
                    alert(`${n1} ^ ${n2} = ${resultado}`);
                    novaOperação();
                }
                //Criando uma nova operação
                function novaOperação() {
                    const opção = prompt('Deseja fazer outra operação? \n 1-Sim\n 2-Não')
            
                    if (opção == 1) {
                        calculadora();
                    } else if (opção == 2) {
                        alert(`Até mais!`);
                    } else {
                        alert(`Digite uma opção válida.`);
                        calculadora();
                    }
                }
            }
        if (operação == 1) {
            soma();
        }else if (operação == 2) {
            subtração();
        }else if (operação == 3) {
            multiplicação();
        }else if (operação == 4) {
            divisão();
        }else if (operação == 5) {
            potenciação();
        }
       /* switch(operação) {
            case 1:
                soma();
                break;
            case 2:
                subtração();
                break;
            case 3:
                multiplicação();
                break;
            case 4:
                divisão();
                break;
            case 5:
                potenciação();
                break;
        }*/
        }
}
calculadora()