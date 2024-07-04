document.addEventListener("DOMContentLoaded",()=>{
    const formEditarTortas = document.querySelector("#form-editar-tortas")
    const parametrosURL = new URLSearchParams(window.location.search)
    const idPostre = parametrosURL.get("id")
    const fetchPostre = async(idPostre) =>{
        try {
            const respuesta = await axios.get(`http://localhost:3030/postres/${idPostre}`)
            const postres = respuesta.data
            document.querySelector("#editarNombre").value = postres.nombre
            document.querySelector("#editarDescripcion").value = postres.contenido
            document.querySelector("#editarPrecio").value = postres.precio
            document.querySelector("#editarFoto").value = postres.foto

        } catch (error) {
            console.log({message:error.message});
        }
    }
    if(idPostre){
        fetchPostre(idPostre)
    }
    formEditarTortas.addEventListener("submit", async (e)=>{
        e.preventDefault()
        const postreActualizado = {
            nombre:document.querySelector("#editarNombre").value,
            contenido:document.querySelector("#editarDescripcion").value,
            precio:document.querySelector("#editarPrecio").value,
            foto:document.querySelector("#editarFoto").value
        }
        try {
            await axios.put(`http://localhost:3030/postres/${id}`,postreActualizado)
            alert("postre actualizado correctamnete");
            //?REDIRIGIMOS A LA PAGINA PRINCIPAL DESPUES DE ACTUALIZAR
            window.location.href = "index.html"
        } catch (error) {
            console.log({message:error.message})
        }
    })
})