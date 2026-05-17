// ==========================================
// PROYECTO TRIÁNGULO DE LAS BERMUDAS
// Archivo JavaScript Principal
// ==========================================

// MENSAJE DE BIENVENIDA
window.addEventListener("load", () => {
    console.log("Página cargada correctamente");

    alert("Bienvenido al sitio del Triángulo de las Bermudas");
});

// ==========================================
// EFECTO MENU AL HACER SCROLL
// ==========================================

const menu = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        menu.style.background = "#000";
        menu.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.5)";
    } else {
        menu.style.background = "#111";
        menu.style.boxShadow = "none";
    }

});

// ==========================================
// ANIMACION DE TITULOS
// ==========================================

const titulos = document.querySelectorAll("h1, h2");

for (let titulo of titulos) {

    titulo.addEventListener("mouseover", () => {
        titulo.style.color = "cyan";
        titulo.style.transition = "0.3s";
    });

    titulo.addEventListener("mouseout", () => {
        titulo.style.color = "white";
    });
}

// ==========================================
// BOTON VOLVER ARRIBA
// ==========================================

const botonArriba = document.createElement("button");

botonArriba.innerText = "↑";

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "20px";
botonArriba.style.right = "20px";
botonArriba.style.padding = "15px";
botonArriba.style.fontSize = "20px";
botonArriba.style.border = "none";
botonArriba.style.borderRadius = "50%";
botonArriba.style.background = "cyan";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";

// AGREGAR BOTON AL BODY

document.body.appendChild(botonArriba);

// MOSTRAR BOTON AL BAJAR

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }

});

// FUNCION VOLVER ARRIBA

botonArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
console.log("JavaScript funcionando correctamente");