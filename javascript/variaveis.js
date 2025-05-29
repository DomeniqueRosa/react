
// tipos primitivos
// guardo o valor
const numero = 5;
const real = 5.24;
const texto = "ola mundo"
console.log("primitivo: "+texto)
// tipos por referencia
// guarda o endereco
const array = [5,25,"texto1"]
console.log("referencia: "+array)

const array2 = array //copia a referencia
console.log(array2)

array2[0] = 233
console.log("array: "+array)
console.log("array2: "+array2)