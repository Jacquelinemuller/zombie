let titulo = document.getElementById("titulo");
let body = document.querySelector ("body")
//comprobar console log 

titulo.addEventListener("mouseover",function name(params) {
    body.style.backgroundColor = "tomato"
    
})

titulo.addEventListener("mouseout",function(){
    titulo.innerHTML="sacastes el mouse"
    titulo.classList.toggle("destacado")
})


titulo.addEventListener('click', saludar);


//Función declarada
function saludar(){
    alert('Nos tomamos unos cinco minutos !!!');
}