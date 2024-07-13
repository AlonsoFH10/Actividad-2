let inicio = 2
let fin =8
for (let i = inicio; i <= fin; i++) {
    let esPrimo = true;
switch (i) {
    case 0:
        esPrimo = false;
        break;
case 1:
    esPrimo = false;
}
for (let j = 2; j <= i / 2; j++) {
    if (i % j === 0) {
        esPrimo = false;
        break;
    }
    }

    if (esPrimo) {
        console.log(i);
    }
}
