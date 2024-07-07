
     document.addEventListener("DOMContentLoaded", ()=>{
        //? OBTENER EL FORMULARIO DE EDICION
        const formulario = document.querySelector("#form-editar-tortas")
        //? OBTENER LOS PARAMETROS DE LA URL
        const parametrosURL = new URLSearchParams(window.location.search)
        //? OBTENER EL ID DEL POST A EDITAR
        const idPostre = parametrosURL.get("id")
        //? FUNCION PARA OBTENER LOS DATOS DEL POSTEO POR SU ID
        const fecthPosteo = async (idPostre) =>{
            
            try {
                const respuesta = await axios.get(`http://localhost:3030/postres/${idPostre}`)
                const postre = respuesta.data
                //? ASIGNAR LOS VALORES OBTENIDOS A LOS CAMPOS
                document.querySelector("#editarNombre").value = postre.nombre
                document.querySelector("#editarDescripcion").value = postre.contenido
                document.querySelector("#editarPrecio").value = postre.precio
            } catch (error) {
                console.error("Error al editar posteos: ",error);
            }
            
        }
        //? LLAMAS A LA FUNCION PARA OBTENER EL POSTEO
        if(idPostre){
            fecthPosteo(idPostre)
        }
        //?Funcion para actualizar el posteo
        formulario.addEventListener("submit", async(event)=>{
            event.preventDefault()
            const postreActualizado = {
                nombre:document.querySelector("#editarNombre").value,
                contenido:document.querySelector("#editarDescripcion").value,
                precio:document.querySelector("#editarPrecio").value
            }
            try {
                await axios.put(`http://localhost:3030/postres/${idPostre}`,postreActualizado)
                alert("posteo actualizado correctamnete");
                //?REDIRIGIMOS A LA PAGINA PRINCIPAL DESPUES DE ACTUALIZAR
                window.location.href = "listaPostres.html"
            } catch (error) {
                console.error("Error al editar posteos: ",error);
            }
        })
    })

        