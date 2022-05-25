/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


var carrito=0;
var carrito2=0;
var total_carro = "Confirma la compra de ";

var carro = [];
var contador = 0;



document.getElementById("carrito").innerHTML=carrito;
document.getElementById("1").innerHTML=carro[0];
document.getElementById("resumen").innerHTML=carro.forEach(element => document.write(element));

function resumenC() {
	for (let i = 0; i < carro.length ; i++) {
    total_carro = total_carro + ', ' +carro[i];
}
console.log(total_carro);
	alert(total_carro);
}

function sumar_producto(x){
	carro.push(x);
	adicionar_carrito(x);
}

// adiconar al carrito
function adicionar_carrito(x){
	carrito2 = carrito2+1;
	document.getElementById("carrito").innerHTML=carrito+carrito2;
	alert(x);
}