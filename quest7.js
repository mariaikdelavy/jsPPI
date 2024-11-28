let texto="Hello World!";
let numero=33;
let booleano=true;
let array=[1, 2, 3, 4, 5];
let objeto={nome:"Maria", idade:19};

function verificadorTipoDeDado(variavel){
    return typeof variavel;
}

console.log(verificadorTipoDeDado(texto));
console.log(verificadorTipoDeDado(numero));
console.log(verificadorTipoDeDado(booleano));
console.log(verificadorTipoDeDado(array));
console.log(verificadorTipodeDado(objeto));