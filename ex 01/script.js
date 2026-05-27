let numero = new Array(10);
let somaPares = 0;

for(let i = 0; i < 10; i++) {
    numero[i] = parseInt(prompt("Digite o" + (i + 1) + "º número inteiro:"));
}
for(let i = 0; i < 10; i++) {
    if (numero[i] % 2 === 0) {
        somaPares = somaPares + numero[i];
    }
}
alert("Os números digitados foram: " + numero);
alert("A soma dos números pares é: " + somaPares);