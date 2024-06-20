const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const email = document.getElementById('email');
const contacto = document.getElementById('contacto');
const formularioDiv = document.createElement('div');
const formularioTexto = document.createElement('h4');
contacto.appendChild(formularioDiv);
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    formularioDiv.appendChild(formularioTexto);
    formularioTexto.innerHTML = `Formulario Enviado`;
})
footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = `<h3>${fecha}</h3>`