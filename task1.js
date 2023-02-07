function simpleNumber (quantityNumber) {
    let arr = [];
    for (let i = 0; i < quantityNumber; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            arr.push(i);
        }
    }
    return arr;
};

console.log(simpleNumber (process.argv[2]));