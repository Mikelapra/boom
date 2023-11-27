const userInput = document.getElementById("userInput");
const restart = document.getElementById("restart");
let numeroSeleccionado;
let resultado

let cuentaAtras = 6;

setInterval(() => {
    if (cuentaAtras == 0) {
        clearInterval();
        
    } else {
        cuentaAtras = cuentaAtras - 1;
        document.getElementById('countdown').innerHTML = `<p>¡Rápido! ¡Selecciona un número! Solo te quedan ${cuentaAtras}</p>`;
    }
}, 1000)

const nombrePromesa1 = new Promise((resolve) => {
    setTimeout(() => {
        let numeroOrdenador = Math.floor(Math.random()*(3 - 1) + 1);
        resolve(numeroOrdenador);
    },6000);
})

nombrePromesa1.then ((numero) => {
    if (numeroSeleccionado == numero) {
        resultado = `<p>¡Has salvado el mundo!</p><p>Tu número ${numeroSeleccionado} es el mismo que el eligido por la bomba, ${numero}</p>`
    } else {
        resultado = `<p>¡La bomba ha estallado!</p><p>Tu número ${numeroSeleccionado} no es el mismo que el eligido por la bomba, ${numero}</p>`
    }
    result.innerHTML=  resultado
})


userInput.addEventListener("input", function(e) {
    numeroSeleccionado = e.target.value;
});

restart.addEventListener("click", () => {
    location.reload()
} )








