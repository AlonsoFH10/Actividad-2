function factorial (val){
var resp=1; 
for(let i=1; i<=val; i++){
    resp *=i
}
return resp;
}
var n=5;//aqui cambie el numero
console.log(factorial(n))