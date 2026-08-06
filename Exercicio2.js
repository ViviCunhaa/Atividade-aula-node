let numeros = [12, 67, 34, 89, 21];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log('Maior =', maior);
