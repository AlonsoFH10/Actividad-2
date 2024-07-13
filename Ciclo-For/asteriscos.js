function piramide(filas){
    let numasteriscos=1;
    for(let i=1; i<=2; i++){
        let=fila='';
for(let j=0; j<numasteriscos; j++){
    fila +='*';
}
console.log(fila);
numasteriscos++;
    }
    for(let i=3; i<= filas; i++){
        let fila='';   
        for(let j=0; j<numasteriscos; j++){
            fila +='*';
        }
        console.log(fila);
        numasteriscos +=2;
     }
}
piramide(6);