const boton = document.querySelector('.miBoton');
boton.addEventListener('click', () => {
  const mensaje = '¡Tus frutitas estan de camino!';
  const titulo = 'Tropicocoa tu disposicion';

  alert(mensaje + '\n\n' + titulo);

  // Para agregar un icono al mensaje de alerta
  // alert(mensaje + '\n\n' + titulo, icono);
});




