
function mostrarMensaje() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var mensaje = "El usuario ingresado es " + nombre + " el cual tiene " + edad + " años de edad y es un/a " + genero + ".";
    document.getElementById("mensaje").innerHTML = mensaje;
}
