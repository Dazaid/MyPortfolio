var imagenes = [                                                   //placeholder
    '/img/Gallery/0125-0250-ezgif.com-video-to-gif-converter.gif',
    '/img/Gallery/Remake1.webp',
    '/img/Gallery/SampleV2.webp',
    '/img/Gallery/1.gif',
    '/img/Gallery/cubeeee.webp',
    '/img/Gallery/2.gif',
    '/img/Gallery/3.webp',
    '/img/Gallery/LastedI.webp',
    '/img/bkg.webp',
    '/img/Gallery/ins3.webp',
    '/img/Gallery/ins2.webp',
    '/img/Gallery/Ae7.gif',
    '/img/Gallery/Ae6.gif',
    '/img/Gallery/Ae3.gif',
    '/img/Gallery/Ae2.gif',
    '/img/Gallery/Ae0.gif',
    '/img/Gallery/E1.webp',
    '/img/Gallery/E2.webp',
    '/img/Gallery/E6.webp',
    '/img/Gallery/E7.webp',
    '/img/Gallery/E8.webp',
    '/img/Gallery/E9.webp',
    '/img/Gallery/E10.webp',
    '/img/Gallerwebpy/I26.webp',
    '/img/Gallery/I24.webp',
    '/img/Gallery/I22.webp',
    '/img/Gallery/I21.webp',
    '/img/Gallery/I17.webp',
    '/img/Gallery/I15.webp',
    '/img/Gallery/I13.2.webp',
    '/img/Gallery/I12.webp',
    '/img/Gallery/P5.webp',
    '/img/Gallery/P4.webp',
    '/img/Gallery/P3.webp',
    '/img/Gallery/P1.webp',
    '/img/Gallery/I7.webp',
    '/img/Gallery/I6.webp',
    '/img/Gallery/I5.webp',
    '/img/Gallery/I3.webp',
    '/img/Gallery/I2.1.webp',
];

const redButton = document.querySelector("#red-button");

redButton.addEventListener("click", onoff);

const rbutton = document.querySelector("#rbutton");
const lbutton = document.querySelector("#lbutton");

rbutton.addEventListener("click", siguiente);
lbutton.addEventListener("click", anterior);

var indiceActual = 0;
var imagenElement = document.getElementById('Gallery-change');
var imagenContainer = document.getElementById('Gallery-back');
var oc = document.getElementById('Gallery-oc');
var remote = document.getElementById('remote-div');
var oldgallerymov = document.getElementById('old-gallery');
var ch = indiceActual + 1;
var chtext = document.getElementById("text-ch");
function mostrarImagen() {
    imagenElement.src = imagenes[indiceActual];
}

function siguiente() {
    indiceActual++;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
        ch = 0;
    }
    ch++;
    imagenElement.style.display = "none";
    
    setTimeout(function() {
        imagenElement.style.display = "block";
        chtext.style.display = "block";
        chtext.innerHTML = "CH " + ch;
        mostrarImagen();
    }, 100);
    if(chtext.style.display === "block"){
        setTimeout(function() {
            chtext.style.display = "none";
        }, 1000);} 
}

function anterior() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
        ch = imagenes.length + 1;
    }
    ch--;
    imagenElement.style.display = "none";
    chtext.style.display = "block";
    chtext.innerHTML = "CH " + ch;
    setTimeout(function() {
        imagenElement.style.display = "block";
        mostrarImagen();
    }, 100);
    if(chtext.style.display === "block"){
    setTimeout(function() {
        chtext.style.display = "none";
    }, 1000);} 
}

function onoff(){
    //console.log("on");
    if (imagenContainer.style.display == "none") {
        imagenContainer.style.display = "block";
        imagenElement.setAttribute("src", "https://i.makeagif.com/media/2-27-2016/hB9gYm.gif"); //placeholder
        setTimeout(function() {
            mostrarImagen();
        }, 300);
    } else {
        imagenElement.setAttribute("src", "https://i.makeagif.com/media/2-27-2016/hB9gYm.gif"); //placeholder
        setTimeout(function() {
            imagenContainer.style.display = "none";
            mostrarImagen();
        }, 300);
    }
    
}
mostrarImagen();

//------------------------------------Scroll gallery adjust--------------------------------

var scrollPosition = 0;

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    

    // Verificar si la posición del scroll es mayor que 3789
    if (scrollPosition > 3789) {
        oc.setAttribute("class","mini-oc");
        imagenContainer.style.display = "none";
        remote.setAttribute("class","b-left Opacity-animation");
        oldgallerymov.setAttribute("class","old-gallery-mov-up");
    }
    else {
        oc.setAttribute("class","");
        remote.setAttribute("class","b-left");
        oldgallerymov.setAttribute("class","old-gallery-mov-down");
    }
});

//test nav change scroll
var navbar = document.getElementById("nav-bar");
var navlogo = document.getElementById("logo-placeholder");





window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    if (scrollPosition > 1163) {
        navbar.setAttribute("class","nav-bar-bkg");
        navlogo.setAttribute("class","logo-mov");
        
    }
    else {
        navbar.setAttribute("class","");
        navlogo.setAttribute("class","logo-chill");
        
    }
});












// git init
// git remote add origin https://github.com/Dazaid/Portfolio.git
// git add .
// git commit -m "comentario"

        // git pull --origin master    NO FURULA

// git push origin master





// entrar al portal de finanzas
// abrir actividades
// abrir como CAE --> programador informatico
// opcion de adiantamento
// 5 dias para hacer el recibo/declararlo despues de recibir el dinero y acabar la pagina



// comenzar como freelance, buscar freelance de front-end
// Regras do negocio / como cobrar
// Cantidad de paginas
// projecto --- persona que tiene algo definido "scope"
// hora --  30$ minimo


// cobrar por mes para mantener el dominio
// revisiones


// webflow  --- da codigo limpio, es solo arrastrar cajas --- para projectos sin js
// 

//arreglar linkendindon. buscar contastos y agg  <----------------------- poner mi fotosh
// ads para la pagina wes
// pagar publi con reel
// poner mini feed de insta dentro de la pag

//pagina web a la waifu con sus videos reproduciendo, dibujos y demas, tabla de comisiones, comic, demas cosas

//preguntar al profe como hacer mejor los comentarios al hacer comit de una update