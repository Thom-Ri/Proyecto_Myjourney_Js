// ¿DONDE IR?
let destinos = ["Mongolia", "Australia", "Argentina", "Brasil", "Africa", "italia", "Filipinas", "Cordoba, Argentina", "Salta, Argentina", "San juan, Argentina", "Marruecos, Africa", "Jujuy, Argentina"]
function dondeir(){
    let num = document.getElementById("minum").value
    alert("Podria interesarte viajar a....")
    alert ( "¡" + destinos [num] + "!")

}
let destiny;
let tickets; 
let adults;
let minors;
let miviaje;
let notificacionindex = document.getElementById("Notificationindex")
let notificacionnacional= document.getElementById("Notificationnacional")
let notificacioninter= document.getElementById("Notificationinter")
// RESERVAR
function reservar(){
    class reserva{
        constructor( destino, pasajes, adultos, menores){
            this.destino= destino
            this.pasajes = pasajes
            this.adultos = adultos
            this. menores = menores
        }
        
        reservad(){
            Notificationindex.innerHTML = "Se han reservado " + this.pasajes + " pasaje/s con destino a " + this.destino + ", " + this.adultos + " adultos y " + this.menores + " menores. ¡Disfrute su viaje!"
        }
    }
    let destiny = document.getElementById("recipient-destiny").value
    let tickets = document.getElementById("recipient-pasangers").value
    let adults = document.getElementById("recipient-adults").value
    let minors = document.getElementById("recipient-children").value
    let miviaje= new reserva (destiny, tickets, adults, minors);
    miviaje.reservad();
}
function reservarnacional(){
    class reservanacional{
        constructor( destino, pasajes, adultos, menores){
            this.destino= destino
            this.pasajes = pasajes
            this.adultos = adultos
            this. menores = menores
        }
        
        reservadnacional(){
            Notificationnacional.innerHTML = "Se han reservado " + this.pasajes + " pasaje/s con destino a " + this.destino + ", " + this.adultos + " adultos y " + this.menores + " menores. ¡Disfrute su viaje!"
        }
    }
    let destiny = document.getElementById("recipient-nacional-destiny").value
    let tickets = document.getElementById("recipient-nacional-pasangers").value
    let adults = document.getElementById("recipient-nacional-adults").value
    let minors = document.getElementById("recipient-nacional-children").value
    let miviaje= new reservanacional (destiny, tickets, adults, minors);
    miviaje.reservadnacional();
    
}
function reservarinter(){
    class reservainter{
        constructor( destino, pasajes, adultos, menores){
            this.destino= destino
            this.pasajes = pasajes
            this.adultos = adultos
            this. menores = menores
        }
        
        reservadinter(){
            notificacioninter.innerHTML = "Se han reservado " + this.pasajes + " pasaje/s con destino a " + this.destino + ", " + this.adultos + " adultos y " + this.menores + " menores. ¡Disfrute su viaje!"
        }
    }
    
    let destiny = document.getElementById("recipient-International-pasangers").value
    let tickets = document.getElementById("recipient-International-pasangers").value
    let adults = document.getElementById("recipient-International-adults").value
    let minors = document.getElementById("recipient-International-children").value
    let miviaje= new reservainter (destiny, tickets, adults, minors);
    miviaje.reservadinter();                 
}





// COMENTAR
let comentarios = document.getElementById("seccioncomentarios")
function comentar(){
    let Nombre = document.getElementById("recipient-name").value
    let comentario = document.getElementById("message-text").value
    let parrafo = document.createElement("p")
    parrafo.innerHTML = Nombre + " dice: " + comentario ;
    document.body.appendChild(parrafo);
}


// EMPEZAR VIAJE

let divmiviaje = document.getElementById("miviajenacional")



function empezarviaje(){
    let partidanacional = document.getElementById("Fida").value;
    let regresonacional = document.getElementById("Fre").value;
    let numpasajeros = document.getElementById("npasa").value;
    Crear()
}



function Crear(){
    let inputpartida = document.createElement("input").setAttribute("id", "partida").setAttribute("value", partidanacional)
    let inputregreso = document.createElement("input").setAttribute("id", "regreso").setAttribute("value", regresonacional)
    let inputpasajeros = document.createElement("input").setAttribute("id", "pasajeros").setAttribute("value", numpasajeros)
    document.divmiviaje.appendChild(inputpartida)
    document.divmiviaje.appendChild(inputregreso)

}

// function calcular(){
//     document.getElementById("partidanacional").value = document.getElementById("fida").value 
//     document.getElementById("regresonacional").value = document.getElementById("fre").value 
// }
