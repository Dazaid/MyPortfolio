const url = "https://ALatinWebDeveloper.github.io/Dazai/data/gallery.json";
const blenderGallery = document.querySelectorAll(".Gallery-container")[0];
const drawsGallery = document.querySelectorAll(".Gallery-container")[1];

async function getGallery() {

    let response = await fetch(url);
    let data = await response.json();

    display3dGallery(data.gallery);
    display2dGallery(data.gallery);
}

const display3dGallery = (data) => {

    let i = 0;
    
    data.blender.forEach(imageData => {

        //Creating the elements to assemble the gallery

        let div = document.createElement("div");
        let img = document.createElement("img");

        //Populating the elements of the gallery

        div.classList.add("img-container");
        div.addEventListener('click', function() {

            abrirPopup(imageData);
        });
        

        img.classList.add("img-fit");
        img.src = imageData;
        img.alt = `Gallery image ${i}`;
        img.loading = `lazy`;

        //Assembling the 3D gallery

        blenderGallery.appendChild(div);
        div.appendChild(img);

        //index counter
        i++;
    });
}

function display2dGallery(data) {

    let i = 0;
    
    data.draws.forEach(imageData => {

        //Creating the elements to assemble the gallery

        let div = document.createElement("div");
        let img = document.createElement("img");

        //Populating the elements of the gallery

        div.classList.add("img-container");
        div.addEventListener('click', function() {

            abrirPopup(imageData);
        });

        img.classList.add("img-fit");
        img.src = imageData;
        img.alt = `Gallery image ${i}`;

        //Assembling the 3D gallery

        drawsGallery.appendChild(div);
        div.appendChild(img);

        //index counter
        i++;
    });
}

var indicePopup = 0;

/*cerrar popup*/
const cerrarDiv = document.querySelector("#cerrar-popup");
const spanCerrar = document.querySelector(".cerrar");

cerrarDiv.addEventListener("click", function cerrarPopup () {

    document.querySelector("#popup").style.display = "none";
});

spanCerrar.addEventListener("click", function cerrarPopup () {

    document.querySelector("#popup").style.display = "none";
});

/* Slideshow buttons */

const leftButton = document.querySelector(".l-b-popup");
const rightButton = document.querySelector(".r-b-popup");

rightButton.addEventListener("click", goRight);
leftButton.addEventListener("click", goLeft);



/**/

function abrirPopup (imageData) {

    document.querySelector("#popup").style.display = "block";
    document.querySelector(".popup-img").src = imageData;
}

/**/


async function goRight() {
    
    let response = await fetch(url);
    let data = await response.json();
    
    let dataBlender = data.gallery.blender;
    let dataDraws = data.gallery.draws;
    let imgSrc = document.querySelector(".popup-img").getAttribute("src");
    
    let indexBlender = dataBlender.indexOf(imgSrc);
    let indexDraws = dataDraws.indexOf(imgSrc);
    
    if (indexBlender != -1) {

        indexBlender += 1;

        if (indexBlender <= 0) {
            indexBlender = dataBlender.length + 1;
        } else if (indexBlender >= dataBlender.length) {
            indexBlender = 0;
        }

        //console.log(`Blender index at the END ${indexBlender}`);
        document.querySelector(".popup-img").src = dataBlender[indexBlender];
        
    } else if (indexDraws != -1) {

        indexDraws += 1;
        console.log(`BEFORE the change ${indexDraws}`);

        if (indexDraws <= 0) {
            indexDraws = dataDraws.length + 1;
        } else if (indexDraws >= dataDraws.length) {
            indexDraws = 0;
        }
        
        //console.log(`Draws index at the END ${indexDraws}`);
        document.querySelector(".popup-img").src = dataDraws[indexDraws];
    }
    
}

async function goLeft() {

    let response = await fetch(url);
    let data = await response.json();
    
    let dataBlender = data.gallery.blender;
    let dataDraws = data.gallery.draws;
    let imgSrc = document.querySelector(".popup-img").getAttribute("src");
    
    let indexBlender = dataBlender.indexOf(imgSrc);
    let indexDraws = dataDraws.indexOf(imgSrc);
    
    if (indexBlender != -1) {
        indexBlender -= 1;

        if (indexBlender < 0) {
            indexBlender = dataBlender.length - 1;
        } else if (indexBlender >= dataBlender.length) {
            indexBlender = 0;
        }

        //console.log(`Blender index at the END ${indexBlender}`);
        document.querySelector(".popup-img").src = dataBlender[indexBlender];

    } else if (indexDraws != -1) {

        indexDraws -= 1;
        if (indexDraws < 0) {
            indexDraws = dataDraws.length - 1;
        } else if (indexDraws >= dataDraws.length) {
            indexDraws = 0;
        }
        //console.log(`Draws index at the END ${indexDraws}`);
        document.querySelector(".popup-img").src = dataDraws[indexDraws];
    }
}


getGallery();