let destinos = ["Mongolia", "Australia", "Argentina", "Brasil", "Africa", "italia", "Filipinas", "Cordoba, Argentina", "Salta, Argentina", "San juan, Argentina", "Marruecos, Africa", "Jujuy, Argentina"]


function dondeir(){
    alert ("¿No sabes donde ir? Bienvenido al sistema de ayuda para encontrar un destino")
    let num = prompt("ingresa un destino del 0 al 12 y nosotros te recomendamos un destino al azar. Despues podes chequearlo en nuestra seccion: ''Galeria'' ")
    alert("Podria interesarte viajar a....")
    alert ( "¡" + destinos [num] + "!")

}


function reservar(){
    alert("Bienvenido al sistema de reservas online de Myjourney.com")
    let destiny = prompt("Especifique su destino de preferencia")
    let tickets =  parseInt( prompt("Cantidad de pasajes deseados:") ) 
    let adults = parseInt (prompt("Cantidad de pasajeros adultos:"))
    let minors = parseInt (prompt ("Cantidad de pasajeros menores de edad:"))

    let miviaje= new reserva (destiny, tickets, adults, minors);
    miviaje.reservad();
}

class reserva{
    constructor( destino, pasajes, adultos, menores){
        this.destino= destino
        this.pasajes = pasajes
        this.adultos = adultos
        this. menores = menores
    }
    
    reservad(){
        alert ("Se han reservado " + this.pasajes + " pasaje/s con destino a " + this.destino + ", " + this.adultos + " adultos y " + this.menores + " menores. ¡Disfrute su viaje!" )
    }
}

let comentarios = document.getElementById("seccioncomentarios")

function comentar(){
    let Nombre = prompt("Escriba su nombre completo")
    let comentario = prompt("Cuentenos su experiencia con la empresa")
    
    let parrafo = document.createElement("p")
    parrafo.innerHTML = Nombre + " dice: " + comentario ;

    document.body.appendChild(parrafo);


}