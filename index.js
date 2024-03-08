
const isLog = Boolean(localStorage.getItem("isLog"));
if(!isLog){
    // redirijo
    window.location.href = 'pages/login.html';
}




// el resto del codigo de index js






const botonCajita = document.querySelector("#boton-cajita")
const cajita = document.querySelector("#cajita");

botonCajita.addEventListener("click", () => {
    cajita.classList.add("crearCajita");

    const span = document.createElement("span")
    span.innerText = 'Holi :)';
    span.style.color = "white";
    span.style.fontSize = "24px";

    cajita.appendChild(span)

})