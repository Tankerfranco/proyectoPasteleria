document.addEventListener("DOMContentLoaded", () => {
    const formCrearPostre = document.querySelector("#form-crear-tortas");

    formCrearPostre.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("nombre", document.querySelector("#nuevoNombre").value);
        formData.append("descripcion", document.querySelector("#nuevaDescripcion").value);
        formData.append("precio", document.querySelector("#nuevoPrecio").value);
        formData.append("foto", document.querySelector("#nuevaFoto").files[0]);

        try {
            const response = await fetch('http://localhost:3030/postres', {
                method: 'POST',
                body: formData
            });

            alert('Postre guardado correctamente');
            /* formCrearPostre.reset(); */
        } catch (error) {
            console.error('Error al guardar el postre:', error);
        
        }
    });
});