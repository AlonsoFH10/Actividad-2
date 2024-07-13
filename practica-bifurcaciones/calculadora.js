let num_1 = 12;
let num_2 = 6;
let n = '//';
let r;

switch (n) {
    case '+':
        r = num1 + num2;
        break;
    case '-':
        r = num1 - num2;
        break;
    case '*':
        r = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            r = num1 / num2;
        } else {
            res = 'Error: División por cero';
        }
        break;
    default:
        r = 'Syntax error';
        break;
}

console.log(r);
