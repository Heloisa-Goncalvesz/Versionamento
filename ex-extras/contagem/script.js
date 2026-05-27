// Lendo as entradas do usuário e convertendo para números inteiros
let inicial = parseInt(prompt("Digite o primeiro valor:"));
let final = parseInt(prompt("Digite o último valor:"));
let incremento = parseInt(prompt("Digite o valor do incremento:"));

// Criando a variáves contagem para acumular os valores
let contagem = "Contagem ";

// O laço começa no valor inicial, vai até o valor final e pula de acordo com o incremento
for (let i = inicial; i <= final; i = i + incremento) {
    contagem = contagem + i + " ";
}

// Ao inserir `$ funciona como um "espaço reservado"
alert(`${contagem} Acabou!!`);


