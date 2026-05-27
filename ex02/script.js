let numeros = new Array(7);
let semente = 3;
for (let i = 0; i < 7; i++) {
    semente = (semente * 7 + 5) % 100;
    numeros[i] = semente + 1;
} 
alert("Os 7 números gerados foram:\n" + numeros);