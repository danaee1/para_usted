// ABRIR Y CERRAR LA CARTA

const botonCarta = document.getElementById("abrirCarta");
const mensaje = document.getElementById("mensaje");

botonCarta.addEventListener("click", function () {

    mensaje.classList.toggle("oculto");

    if (mensaje.classList.contains("oculto")) {
        botonCarta.textContent = "Abrir mi carta ♡";
    } else {
        botonCarta.textContent = "Cerrar mi carta ♡";

        mensaje.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

});


// CORAZONES FLOTANTES

const contenedorCorazones = document.getElementById("corazones");

function crearCorazon() {

    const corazon = document.createElement("span");

    corazon.classList.add("corazon-flotante");
    corazon.textContent = Math.random() > 0.5 ? "♡" : "♥";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (12 + Math.random() * 18) + "px";
    corazon.style.animationDuration = (5 + Math.random() * 5) + "s";

    contenedorCorazones.appendChild(corazon);

    setTimeout(function () {
        corazon.remove();
    }, 10000);

}

// Aparece un corazón cada cierto tiempo.
setInterval(crearCorazon, 700);