let resultado = "";
//criou-se uma variavel i que começará no 30; O programa rodará enquanto i for maior ou igual a 1, quando chegar em 0 ele parará automaticamente; i-- fará a contagem ir diminuído de 1 em 1//
for (let i = 30; i >= 1; --i){
    // % = Ele descobre o resto da divisão. Se você dividir 28 por 4, a divisão é exata e o resto é 0. Se você dividir 29 por 4, sobra 1//
    // i % 4 === 0: Pergunta se o resto da divisão do número atual por 4 é igual a zero. Se for verdadeiro (true), o número é múltiplo de 4//
    if (i % 4 === 0) {
        //O programa pega o que já estava no "resultado" e soma com o número atual entre colchetes e um espaço: [28]//
        resultado = resultado + "[" + i + "] ";
    }
    else {
        resultado = resultado + i + " ";

    }
}

alert(resultado);

