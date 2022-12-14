const games = [
    {
        img: "01.webp",
        nome: "spiderman",
        descrizione: "gioco 1",
    },
    {
        img: "02.webp",
        nome: "spiderman",
        descrizione: "gioco 2",
    },     
    {
        img: "03.webp",
        nome: "spiderman",
        descrizione: "gioco 3",
    }, 
    {
        img: "04.webp",
        nome: "spiderman",
        descrizione: "gioco 4",
    },
    {
        img: "05.webp",
        nome: "spiderman",
        descrizione: "gioco 5",
    } 
]
let itemsContent = "";
let activeItems = 0

function nextImage (){
   
    next.addEventListener('click', function(){
        if(activeItems < 3){
            console.log(activeItems)
        
        items[activeItems].classList.remove('active');
        activeItems++;
        items[activeItems].classList.add('active');
        }
        else{
            items[activeItems].classList.remove('active');
            activeItems = 0;
            items[activeItems].classList.add('active');
           }
    })
}
function previousImage (){
    prev.addEventListener('click', function(){
        if(activeItems > 0){
            items[activeItems].classList.remove('active');
            activeItems--;
            items[activeItems].classList.add('active');
        }
        else{
            items[activeItems].classList.remove('active');
            activeItems = games.length -1;
            items[activeItems].classList.add('active');
            }
    })
}

games.forEach((elem) => {
    itemsContent += `<div class="item">
    <img src="./img/${elem.img}">
    <div class="info-games">
    <h2>${elem.nome}</h2>
    <p>${elem.descrizione}</p>
    </div>
    </div>
    `
});
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const items = document.getElementsByClassName( 'item')  

items[activeItems].classList.add('active');

nextImage()
previousImage ()