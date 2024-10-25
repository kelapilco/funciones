/*funciones: bloque de codigo indpendiente que se la puede usar 
en cualquier parte de mi programa
para que sirve las finciones?
 para facilitar el codigo 
 reutilizar el codigo 
 sintaxis basica
 function nombre_funcion(){
 bloque del codigo nomenclatura tipo de camello
 no utiliza palabras reservadas
 }*/

 function saludo(nombre){
document.write("Hola "+ nombre)
 }
//llamamos a la funcion 
saludo("Kerly"+ "<br>")
//function suma(numero1, numero2){
    //inicializamis las variables a utilizar
    //var numero1=numero1
    //var numero2=numero2
    //document.write("<br>"+ numero1+numero2)
    //var resultado=numero1+numero2
    //document.write(resultado)
    //return numero1+numero2
//}
//document.write(suma(10,3))

function maximo(valor1,valor2){
    if(valor1>valor2){
        return valor1
    }else{
        return valor2
    }
}
maximo(50,25)//genera los datos funcion maximo carga los datos pero tiene un doc

document.write("<br>" + "el numero mayor es " + maximo(50,2))
var suma = function(numero1,numero2){
    var numero1=parseInt(document.getElementById("numero1").value);
    var numero2=parseInt(document.getElementById("numero2").value);
    var resultado = numero1+numero2
    return resultado
}
//document.write(suma(10,2))
