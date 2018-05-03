function sumar() {
	var numero1= document.getElementById('cajaNumero1').value;
	var numero2= document.getElementById('cajaNumero2').value;
	var resultado = 0;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado= parseInt(resultado);
	resultado= numero1 + numero2;

	resultado = document.getElementById('cajaResultado').value= resultado;
	return false;
}

function restar() {
	var numero1= document.getElementById('cajaNumero1').value;
	var numero2= document.getElementById('cajaNumero2').value;
	var resultado = 0;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado= parseInt(resultado);
	resultado= numero1 - numero2;

	resultado = document.getElementById('cajaResultado').value= resultado;
	return false;
}

function multiplicar() {
	var numero1= document.getElementById('cajaNumero1').value;
	var numero2= document.getElementById('cajaNumero2').value;
	var resultado = 0;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado= parseInt(resultado);
	resultado= numero1 * numero2;

	resultado = document.getElementById('cajaResultado').value= resultado;
	return false;
}

function dividir() {
	var numero1= document.getElementById('cajaNumero1').value;
	var numero2= document.getElementById('cajaNumero2').value;
	var resultado = 0;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	resultado= parseInt(resultado);
	resultado= numero1 / numero2;

	resultado = document.getElementById('cajaResultado').value= resultado;
	return false;
}