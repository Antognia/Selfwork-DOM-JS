// querySelector
let paragrafi = document.querySelectorAll('p');
let changeColor = document.querySelector('#changeColor');
let boldText = document.querySelector('#boldText');
let addAndRemove = document.querySelector('#addAndRemove');


// Bottone Cambio Colore
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


changeColor.addEventListener('click', ()=> {
paragrafi.forEach((p) =>{
p.style.color = getRandomColor();

});

});

// Bottone Grassetto

boldText.addEventListener('click', () => {

paragrafi.forEach((p) => {
   p.style.fontWeight = 'bold';
});

}); 

// Bottone Apparire-Scomparire

addAndRemove.addEventListener('click', ()=>{

paragrafi.forEach((p) => {
  p.classList.toggle('display');

});

});








// Chiama Funzioni
getRandomColor();


