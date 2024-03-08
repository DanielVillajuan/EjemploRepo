
const usuario = document.querySelector("#usuario")
const constraseña = document.querySelector("#contraseña")
const iniciarSesion = document.querySelector("#iniciar-sesion")

// Simula bases de datos
const BBDD = [{
    usuario: "daniel",
    contraseña: "123"
}]

const usuarioALoaguear = {
    usuario: "",
    contraseña: ""
}

usuario.addEventListener("input",(event)=>{
    usuarioALoaguear.usuario = event.target.value
})

constraseña.addEventListener("input",(event)=>{
    usuarioALoaguear.contraseña = event.target.value
})


iniciarSesion.addEventListener("click", () => {
    const finded = BBDD.find(user => {
        return user.usuario === usuarioALoaguear.usuario && user.contraseña === usuarioALoaguear.contraseña
    })

    if(finded !== undefined){
        localStorage.setItem("isLog",true)
        window.location.replace("http://127.0.0.1:5500/index.html")
    }
})