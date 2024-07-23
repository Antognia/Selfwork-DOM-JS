// query
let createArticle = document.querySelector('#creaArticolo');
let titolo = document.querySelector('#titolo');
let articolo = document.querySelector('#paragrafo');
let contenitore = document.querySelector('.articoloETesto');
let date = new Date();
let formatDate = date.toLocaleDateString();
// let immagine  = document.querySelector('#immagine');
// Bottone Crea Articolo

createArticle.addEventListener('click', ()=> {
    let title = document.createElement('h1');
  title.innerHTML = titolo.value;
  let article = document.createElement('p');
  article.innerHTML = articolo.value;
let data = document.createElement('p');
data.innerHTML = formatDate;

// let img = document.createElement('img');
// img.src = immagine.value;

contenitore.appendChild(title);  
contenitore.appendChild(article); 
contenitore.appendChild(data); 
// contenitore.appendChild(img); 


// Pulizia
title.value = '';
article.value = '';
// img.value = '';
formatDate.value = '';

});

createArticle.addEventListener('click', () => {
     if (createArticle === empty){
        alert('');
     }
});