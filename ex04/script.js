let vetorOriginal = new Array(10);

for(let i = 0; i < 10; i++) {
    vetorOriginal[i] = parseInt(prompt("Digite o " + (i + 1) + "º numero inteiro"));
} 

    let vetorSemDuplicar = new Array();
    let tamnhosUnidos = 0;

for (let i = 0; i < 10; i++) {
    let numeroAtual = vetorOriginal[i];
    let jaExiste = false;

for (let j = 0; j < tamnhosUnidos; j++) {
    if (vetorSemDuplicar[j] === numeroAtual) {
        jaExiste = true;
        }
    }
if (jaExiste === false) {
    vetorSemDuplicar[tamnhosUnidos] = numeroAtual;
    tamnhosUnidos = tamnhosUnidos + 1
    }
}
alert("Vetor Original: " + vetorOriginal + "\n\nVetor sem duplicar: " + vetorSemDuplicar);