const games = [
    {
        img: "01.webp",
        nome: "spiderman",
        descrizione: "gioco 1",
    },
    {
        img: "02.webp",
        nome: "rachet",
        descrizione: "gioco 2",
    },     
    {
        img: "03.webp",
        nome: "fortnite",
        descrizione: "gioco 3",
    }, 
    {
        img: "04.webp",
        nome: "stray",
        descrizione: "gioco 4",
    },
    {
        img: "05.webp",
        nome: "avengers",
        descrizione: "gioco 5",
    } 
]
let itemsContent = "";
let activeItems = 0

function nextImage (){
    if(activeItems < games.length -1){
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
}
function previousImage (){
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

next.addEventListener('click', function(){
    nextImage()    
})
setInterval(nextImage,4000)

prev.addEventListener('click', function(){
    previousImage ()   
})