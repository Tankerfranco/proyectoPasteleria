document.getElementById('jcFormularioContactenos').addEventListener('submit', function(event){
    let form = event.target;
    let jcNombre = form.jcNombre.value.trim();

    let jcApellido = form.jcApellido.value.trim();
    let jcCorreo = form.jcCorreo.value.trim();
    let jcSeleccion = form.jcSeleccion.value;
    let jcObservaciones = form.jcObservaciones.value.trim();

    let vbSalio=true;
    
    if (!jcNombre && vbSalio==true){
        vbSalio=false;
        alert("El campo NOMBRE no puede estar vacio")
        form.jcNombre.focus();
    }
    
    if (!jcApellido && vbSalio==true){
        vbSalio=false;
        alert("El campo APELLIDO no puede estar vacio")
        form.jcApellido.focus()
    }

    if (!jcCorreo && vbSalio==true){
        vbSalio=false;
        alert("El campo CORREO no puede estar vacio")
        form.jcCorreo.focus()
    }

    if (!jcSeleccion && vbSalio==true){
        vbSalio=false;
        alert("El campo ASUNTO no puede estar vacio")
        form.jcSeleccion.focus()
    }

    if (!jcObservaciones && vbSalio==true){
        vbSalio=false;
        alert("El campo MENSAJE no puede estar vacio")
        form.jcObservaciones.focus()
    }





    if (jcNombre.length>60 && vbSalio==true){
        vbSalio=false;
        alert("El campo NOMBRE no puede exceder los 60 caracteres")
        form.jcNombre.focus()
    }
    
    if (!jcApellido>60 && vbSalio==true){
        vbSalio=false;
        alert("El campo APELLIDO no puede exceder los 60 caracteres")
        form.jcApellido.focus()
    }

    if (!jcCorreo>255 && vbSalio==true){
        vbSalio=false;
        alert("El campo CORREO no puede exceder los 255 caracteres")
        form.jcCorreo.focus()
    }





    if (!(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ ]{1,60}$/).test(jcNombre) && vbSalio==true){
        vbSalio=false;
        alert("El campo NOMBRE posee un caracter no permitido");
        form.jcNombre.focus();   
    }

    if (!(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ ]{1,60}$/).test(jcApellido) && vbSalio==true){
        vbSalio=false;
        alert("El campo APELLIDO posee un caracter no permitido");
        form.jcApellido.focus();   
    }

    if (!(/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/).test(jcCorreo) && vbSalio==true){
        vbSalio=false;
        alert("El campo CORREO posee un mail no valido");
        form.jcCorreo.focus();   
    }

    if (!(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ@.,:;-_/\?¿¡!+*~()=[]{}<> ]$/).test(jcObservaciones) && vbSalio==true){
        vbSalio=false;
        alert("El campo MENSAJE posee un caracter no permitido");
        form.jcObservaciones.focus();   
    }

    if (vbSalio==false){
        event.preventDefault();
    }

});

document.getElementById('jcFormularioSuscribirse').addEventListener('submit', function(event){
    let form = event.target;
    let jcCorreo = form.jcCorreo.value.trim();
    let vbSalio=true;

    if (!jcCorreo && vbSalio==true){
        vbSalio=false;
        alert("El campo CORREO no puede estar vacio")
        form.jcCorreo.focus()
    }

    if (!jcCorreo>255 && vbSalio==true){
        vbSalio=false;
        alert("El campo CORREO no puede exceder los 255 caracteres")
        form.jcCorreo.focus()
    }

    if (!(/^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/).test(jcCorreo) && vbSalio==true){
        vbSalio=false;
        alert("El campo CORREO posee un mail no valido");
        form.jcCorreo.focus();   
    }   

    if (vbSalio==false){
        event.preventDefault();
    }

})