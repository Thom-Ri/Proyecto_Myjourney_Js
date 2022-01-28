let destinos = ["Mongolia", "Australia", "Argentina", "Brasil", "Africa", "italia", "Filipinas", "Cordoba, Argentina", "Salta, Argentina", "San juan, Argentina", "Marruecos, Africa", "Jujuy, Argentina"]

$(".discoverbtn").on("click", function(){
    let num = $("#minum").val() 
    alert("Podria interesarte viajar a....")
    alert ( "¡" + destinos [num] + "!")
});

//PLANNING//
let textoindex = document.getElementById("NotificacionIndexTexto")

$(".btnConocerMas").on("click", function(){
    $("#PlanningDivNacional").css("display", "flex")
})
function SentPlan(){
    textoindex.innerHTML = "¡Muchas gracias por su consulta! Se enviará toda la informacion disponible al mail proporcionado."
    document.getElementById("notificacionindex").style.display = "block"
}




let destiny;
let tickets; 
let adults;
let minors;
let miviaje;

let textonacional= document.getElementById("NotificationNacionalTexto")
let textointer= document.getElementById("Notificationinter")
// RESERVAR

function reservarnacional(){
    class reservanacional{
        constructor( destino, pasajes, adultos, menores){
            this.destino= destino
            this.pasajes = pasajes
            this.adultos = adultos
            this. menores = menores
        }
        
        reservadnacional(){
            textonacional.innerHTML = "Se han reservado " + this.pasajes + " pasaje/s con destino a " + this.destino + ": " + this.adultos + " adulto/s y " + this.menores + " menor/es. ¡Disfrute su viaje!"
            document.getElementById("notificacionnacional").style.display = "block";
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
            textointer.innerHTML = "Se han reservado " + this.pasajes + " pasaje/s con destino a " + this.destino + ": " + this.adultos + " adulto/s y " + this.menores + " menor/es. ¡Disfrute su viaje!"
            document.getElementById("notificacioninter").style.display = "block";
        }
    }
    
    let destiny = document.getElementById("recipient-Internacional-destiny").value
    let tickets = document.getElementById("recipient-International-pasangers").value
    let adults = document.getElementById("recipient-International-adults").value
    let minors = document.getElementById("recipient-International-children").value
    let miviaje= new reservainter (destiny, tickets, adults, minors);
    miviaje.reservadinter();                 
}
function cerrar(){
    document.getElementById("notificacionindex").style.display = "none"; 
}
function cerrarinter(){
    document.getElementById("notificacioninter").style.display = "none";
}
function cerrarnacional(){
    document.getElementById("notificacionnacional").style.display = "none";
}


// Enviar formulario
let urlpost = "https://jsonplaceholder.typicode.com/posts"
let ContactRequest = {
    name : $("#unom").val(),
    phone: $("#unum").val(),
    email: $("#exampleInputEmail1").val(),
    subscription: $("#exampleCheck1").val(), 
    coment : $("#ucon").val(),
}
$("#Postbtn").click(function(e){
    e.preventDefault(); 
    $.post(urlpost,ContactRequest,(respuesta,estado) =>{
        if(estado === "success"){
            $("#NotificationContacto").html("Tu consulta ha sido enviada exitosamente")
            $("#contacttoast").toast("show")  
        }  

    })
})
// COMENTAR
let comentarios = document.getElementById("seccioncomentarios")
$("#btnsendmsg").click(function(){
    let Nombre = $("#recipient-name").val()
    let comentario = $("#message-text").val()
    $("#seccioncomentarios").append(`
                                    <div class="card commentcard">
                                        <div class="card-header">`+ Nombre + `</div>
                                        <div class="card-body">
                                            <p class="card-text">`+ comentario +`</p>
                                        </div>
                                    </div>
    `)
})
