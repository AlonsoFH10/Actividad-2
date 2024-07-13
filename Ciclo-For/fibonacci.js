function fibonacci(n) {
    let t1 = 0;
    let t2 = 1;
    let resultado = "";

    for (let i = 1; i <= n; i++) {
    resultado += (t1 + " ");
    let sum = t1 + t2;
    t1 = t2;
    t2 = sum;
    }
    return resultado;
}

console.log(fibonacci(5));

