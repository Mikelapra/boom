const userInput = document.getElementById("userInput");


let comparar = function (numeroUsuario) {

    let numeroOrdenador = Math.floor(Math.random() * 3)
    
    console.log(numeroOrdenador)
    
    if (numeroUsuario == numeroOrdenador) {
        resultado = "¡Has salvado el mundo!"
    } else {
        resultado = "La bomba ha estallado";
    }
    
    }

let cuentaAtras = 6;
setInterval(() => { 
    if(cuentaAtras==0){
        clearInterval();
        result.innerHTML= resultado
     }else
       {
        cuentaAtras=cuentaAtras-1; 
        document.getElementById('countdown').innerHTML=cuentaAtras; 
       }
    }, 1000);

userInput.addEventListener("click", function() {
    const numeroSeleccionado = document.getElementById('userInput').value;
    comparar(numeroSeleccionado);
});













