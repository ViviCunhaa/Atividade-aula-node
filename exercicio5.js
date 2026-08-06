const estoque = [200, 450, 100, 900, 300];
let maior = estoque[0];

for (let i = 1; i < estoque.length; i++) {
    if (estoque[i] > maior) {
        maior = estoque[i];
    }
}

console.log('Maior valor de estoque: ', maior);
