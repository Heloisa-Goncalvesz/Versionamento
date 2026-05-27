let numero = new Array(10);

for(let i = 0; i < 10; i++) {
    numero[i] = parseInt(prompt("Digite o" + (i + 1) + "º número inteiro:"));
}
let numeroPesquisado = parseInt(prompt("Digite um número a fim de verificar quantas vezes ele aparece"));
let contador = 0;

for (let i = 0; i < 10; i++) {
    if (numero[i] === numeroPesquisado) {
        contador = contador + 1;
    }
}
if (contador === 0) {
    alert("Os números digitados foram: " + numero + "\n\nO número " + numeroPesquisado + " não aparece nenhuma vez no vetor.");
} else {
    alert("Os números digitados foram: " + numero + "\n\nO número " + numeroPesquisado + " aparece " + contador + " vez(es) no vetor.");
}