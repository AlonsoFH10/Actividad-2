//  programa de muestre las tabalas de multiplicar del 1 al 10
let i = 1;

do {
  console.log(`Tabla del ${i}:`);
  let j = 1;
  do {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  } while (j <= 10);
  console.log(''); // Línea en blanco para separar las tablas
  i++;
} while (i <= 10);
