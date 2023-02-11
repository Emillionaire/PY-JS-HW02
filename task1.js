function primeNumber (quantityNumber) {
    // True boolean massive creator
    let booleanMassive = [];
    for (let i = 0; i < quantityNumber; i++) {
        booleanMassive.push(true);
    }
    
    // Algorithm "Sieve of Eratosthenes"
    for (let i = 2; i**2 <= quantityNumber; i++) {
        if (booleanMassive[i] == true) {
            for (k = 0, j = i**2 + k*i; j <= quantityNumber; k++, j = i**2 + k*i) {
                booleanMassive[j] = false;
            }
        }
    }

    // Prime number massive creator
    let simpleMassive = [];
    for (let i = 2; i < booleanMassive.length; i++) {
        if (booleanMassive[i] == true) {
            simpleMassive.push(i);
        }
    }

    return simpleMassive;
};

console.log(primeNumber (process.argv[2]))
