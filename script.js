
function mostrarMensaje() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var mensaje = "El usuario es " + nombre + " con una edad de " + edad + " y un género de " + genero + ".";
    document.getElementById("mensaje").innerHTML = mensaje;
}
