function resultado(){
	var a=Number(document.getElementById('caja1').value);
	var b=Number(document.getElementById('caja2').value);
	var c=Number(document.getElementById('caja3').value);
	
	d=((b*b)-4*a*c);
	if (d<0){
		 alert("No existen soluciones reales")
    }else{
        x1=(-b+Math.sqrt(d))/(2*a);
        x2=(-b-Math.sqrt(d))/(2*a);
	
	
        Number(document.getElementById('x1').value=x1);
        Number(document.getElementById('x2').value=x2);
	

}
}

