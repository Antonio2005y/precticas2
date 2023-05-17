const e1=()=>{
    Swal.fire('Cualquier persona puede usar una computadora la cuestion es que quiera aprender como usarla')
}

const e2=()=>{
    Swal.fire(
        '¿Y el Internet?',
        '¿Quien está ahi?',
        '¿Pregunta?'
      )
}

const e3=()=>{
    Swal.fire({
        icon: 'ERROR',
        title: 'o nO...',
        text: '¡Haber haber que paso!',
        footer: '<a href="">¿Por qué tengo este problema?</a>'
      })
}
const e4=()=>{ 
    Swal.fire({
        title: '<strong> Esto es un de <u> ejemplo de HTML </u></strong>',
        icon: 'info',
        html:
          'Se pueden usar enlaces de texto en <b> negrita </b>, ' +
          '<a href="//sweetalert2.github.io">Enlace</a> ' +
          'ademas de otras etiquetas HTML',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> ¡Excelente!',
        confirmButtonAriaLabel: 'Ta bien',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Ta MAl'
      })
    }

const e5=()=>{
    Swal.fire({
        title: '¿Quieres guardar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Bien Guardado', '', 'Guardado')
        } else if (result.isDenied) {
          Swal.fire('No se guardan los cambios', '', 'mas detalles')
        }
      })
}