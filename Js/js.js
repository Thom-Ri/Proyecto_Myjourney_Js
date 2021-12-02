
let comentarios = document.getElementById("seccioncomentarios")
function comentar(){
    let Nombre = prompt("Escriba su nombre completo")
    let comentario = prompt("Cuentenos su experiencia con la empresa")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = Nombre + " dice: " + comentario ;

    document.body.appendChild(parrafo);


}