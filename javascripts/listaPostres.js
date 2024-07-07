document.addEventListener("DOMContentLoaded", () => {
  const cardTortas = document.querySelector(".list-container");
  const fetchPostres = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/postres`);
      console.log(respuesta.data);
      const postres = respuesta.data;
      cardTortas.innerHTML = "";
      postres.forEach((postre) => {
        let nuevoProducto = document.createElement("article");
        nuevoProducto.dataset.id = postre.id;
        nuevoProducto.innerHTML = `<figure>
                                      <img src="${postre.ruta_foto}" alt="">
                                   </figure>
                                   <h1>${postre.nombre}</h1>
                                   <h3>${postre.contenido}</h3>
                                   <p>${postre.precio}</p>`;
        
        // BTN BORRAR
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Borrar";
        botonEliminar.addEventListener("click", () => {
            borrarPostre(postre.id);
        });
        nuevoProducto.appendChild(botonEliminar);
    
        // BTN EDITAR
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", () => {
            window.location.href = `editarPostres.html?id=${postre.id}`;
        });
        nuevoProducto.appendChild(botonEditar);
    
        cardTortas.appendChild(nuevoProducto);
    });
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  const borrarPostre = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/postres/${id}`);
      fetchPostres();
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  fetchPostres();
});
