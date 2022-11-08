

//PRIMER EJERCICIO.

function convertirGradosCentigradosAGradosFahrenheint(gradosCelsius){ 


    var result = document.getElementById("resultado")
    var fahrenheint=0
       
fahrenheint = (gradosCelsius * 9/5) + 32 
//fahrenheint = fahrenheint+32 // con esto tambien funciona  jajaj

if (fahrenheint>=212){result.innerHTML = "<p1>Punto de ebullicion del agua:" + fahrenheint + "</p>"}
   
if (fahrenheint>=98.6 && fahrenheint<212){result.innerHTML = "<p1>Temperatura del cuerpo humano:" + fahrenheint + "</p>"}
   
if (fahrenheint>=77 && fahrenheint<98.6){result.innerHTML = "<p1>Temperatura ambiente:" + fahrenheint + "</p>"}
   
if (fahrenheint>=32 && fahrenheint<77){result.innerHTML = "<p1>Punto de congelación del agua:" + fahrenheint + "</p>"}
   
if (fahrenheint>= -459.58 && fahrenheint<32){result.innerHTML = "<p1>Cero absoluto:" + fahrenheint + "</p>"}

}



//EJERCICIO 2




function calcularPorcentajes(Numero){      

    var result = document.getElementById("porcentaje")
var numF= 0

if (Numero<500) {numF=Numero+Numero/2 
result.innerHTML = "<p1> El numero ingresado es " + Numero + " el incremento es " + numF + "</p1>"} else
if (Numero>=500){numF= Numero-Numero*7/100
 result.innerHTML = "<p1> El numero ingresado es " + Numero + " la disminución es " + numF + "</p1>"}
}
 










//EJERCICIO 3.

function generarTablaHTML()
{
var f, c;
var filas = document.getElementById("filas").value;
var columnas = document.getElementById("columnas").value;
var res = filas * columnas;

document.write("<table border>");

for (f = 0; f < filas; f++){
    document.write("<tr>");
        for (c = 0; c < columnas; c++){
            document.write("<td>");
            document.write(res);
            res --;
            document.write("</td>");
        }
        document.write("</tr>");
}
document.write("</table>");
}







