document.addEventListener("DOMContentLoaded",()=>{
    const tablaPostres = document.querySelector("#tabla-postres")
    const fetchPostres = async ()=>{
        try {
            const respuesta = await axios.get(`http://localhost:3030/postres`)
            console.log(respuesta.data)
            const postres = respuesta.data
            tablaPostres.innerHTML = ""
            postres.forEach(postre =>{
                const fila = document.createElement("tr")
                const celdaID = document.createElement("td")
                const celdaNombre = document.createElement("td")
                const celdaFoto = document.createElement("td")
                const celdaAcciones = document.createElement("td")
                
                celdaID.textContent = postre.id
                celdaNombre.textContent = postre.nombre
                celdaFoto.textContent = postre.foto
                
                //?BTN BORRAR
                const botonEliminar = document.createElement("button")
                botonEliminar.textContent = "❌"
                botonEliminar.addEventListener("click", ()=>{
                    borrarPostre(postre.id)
                })
                //?BTN EDITAR
                const botonEditar = document.createElement("button")
                botonEditar.textContent = "🔃"

                botonEditar.addEventListener("click", ()=>{
                    window.location.href = `editarPostres.html?id=${postre.id}`
                })

                celdaAcciones.appendChild(botonEliminar)
                celdaAcciones.appendChild(botonEditar)

                fila.appendChild(celdaID)
                fila.appendChild(celdaNombre)
                fila.appendChild(celdaFoto)
                fila.appendChild(celdaAcciones)

                tablaPostres.appendChild(fila)
        

            })
        } catch (error) {
            console.log({message:error.message})
        }
        
    }

    const borrarPostre = async(id)=>{
        try {
            await axios.delete(`http://localhost:3030/postres/${id}`)
            fetchPostres()
        } catch (error) {
            console.log({message:error.message});
        }
    }
   


    fetchPostres()
})