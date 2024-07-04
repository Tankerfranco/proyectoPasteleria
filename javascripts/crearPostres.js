document.addEventListener("DOMContentLoaded",()=>{
    const formCrearTortas = document.querySelector("#form-crear-tortas")
    formCrearTortas.addEventListener("submit",async function(e){
        e.preventDefault()
        const nuevoPostre = {
            nombre:document.querySelector("#nuevoNombre").value,
            contenido:document.querySelector("#nuevaDescripcion").value,
            precio:document.querySelector("#nuevoPrecio").value,
            foto:document.querySelector("#nuevaFoto").value
        }
        try {
            await axios.post(`http://localhost:3030/postres`,nuevoPostre)
            formCrearTortas.reset()
        } catch (error) {
            console.log({message:error.message});
        }
    })
})