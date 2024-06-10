//Creare un carosello che scorra le immagini caricate

const imgCarousel = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]

// seleziono il container dal DOM

const imgContainer = document.querySelector(".container");

//inserire su JS le immagini che voglio far scorrere

for (let i = 0; i < imgCarousel.length; i++) { // estrapolare le immagini del mio array
    let itemCarousel = imgCarousel[i];

    // creare il div di inserimento delle immagini
    let carouselContent = `        
            <div class="item">
                <img src="${itemCarousel}" >
            </div>`;
    console.log(carouselContent);
    // inserire le immagini nel mio div

    imgContainer.innerHTML += carouselContent;
}

// inserire la classe active del CSS al primo elemento della lista 

const items= document.getElementsByClassName("item");
items[0].classList.add("active")
// creare e gestire l'evento click
// seleziona le frecce
const upArrow = document.querySelector(".fa-circle-chevron-up");
const downArrow = document.querySelector(".fa-circle-chevron-down");
console.log(upArrow, downArrow);

// far spostare la classe active in modo crescente

// creare e gestire l'evento secondo click

// far spostare la classe active in modo decrescente

// stampare in console

// stampa in pagina