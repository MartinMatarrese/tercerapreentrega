cabeza.appendChild(navegar);
navegar.appendChild(nav);
nav.appendChild(ul);
navegar.className = 'navbar';
for(const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLocaleLowerCase()}.html" >${link}</a>`
    ul.appendChild(li);
}
footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = `<h3>${fecha}</h3>`;
footer[0].appendChild(div1);

div1.innerHTML = '<a href="https://www.facebook.com/?locale=es_LA" target= "_blank"><img src= "image/facebook.png" alt= "Facebook"></a>';
div1.classList.add("facebook");
footer[0].appendChild(div2);

div2.innerHTML = '<a href="https://www.instagram.com/" target= "_blank"><img src= "image/instagram.png" alt= "Instagram"></a>';
div2.classList.add("instagram");

redes.appendChild(div1);
redes.appendChild(div2);