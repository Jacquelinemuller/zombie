/*let circulo = document.getElementById("circulo")
let boby= document.querySelector("boby")

let margenIzquierdo = 0
let velocidad = 50

boby.addEventListener("keydown",function(evento){
    console.log(evento);

})*/

let personaje = document.getElementById('personaje');
let body = document.querySelector('body');
let playerd = document.getElementById("playerd")
let playeriz = document.getElementById("playeriz")
let players = document.querySelector('img')
let margenIzquierdo = 0;
let velocidad = 50;
let salto = 0;
let potencia = 3;
let piso = 350;
let alto = 125;
let distancia = 5;
let comienzo = document.getElementById("comienzo")

//                                call back
body.addEventListener ("click", opacidad)
function opacidad() {
 comienzo.style.opacity = 0    
} 
//comienzo.style.opacity = 0  
body.addEventListener('keydown', function(evento){
    console.log(evento);
    if(evento.key === "ArrowRight"){
        derecha()
    }
    
    
})

function derecha(){
    playerd.style.opacity = 100  
    playeriz.style.opacity = 0
    margenIzquierdo = margenIzquierdo + velocidad;
    console.log(margenIzquierdo);
    personaje.style.marginLeft = margenIzquierdo+"px"
}

body.addEventListener('keydown', function(evento){
    console.log(evento);
    if(evento.key === "ArrowLeft"){
        izq()
    }
})

function izq(){
    playerd.style.opacity = 0
    playeriz.style.opacity = 100
    margenIzquierdo = margenIzquierdo - velocidad;
    console.log(margenIzquierdo);
    personaje.style.marginLeft = margenIzquierdo+"px"
   }

body.addEventListener('keydown', function(evento){
    console.log(evento);
    if(evento.key === " "){
        jump()
        
    }
})

function jump(){
    personaje.classList.add("playerjump")
    }    

addEventListener("animationend", function (evento) {
    personaje.classList.remove("playerjump")
    
})

body.addEventListener('keydown', function(evento){
    console.log(evento);
    if(evento.key === "ArrowUp"){
        arriba()
    }
})
body.addEventListener('keydown', function(evento){
    console.log(evento);
    if(evento.key === "ArrowDown"){
        abajo()
    }
})


function arriba(){
    if (piso <= 400 ) {
        piso = piso + velocidad;
        alto = alto - distancia
        console.log(piso);
        personaje.style.bottom = piso+"px" 
        //players.style.width = alto+"px" 
    }
    
    }
function abajo(){
    if (piso >= 353 ) {
   piso = piso - velocidad;
    console.log(piso);
    personaje.style.bottom = piso+"px"
    }
}






      



   
