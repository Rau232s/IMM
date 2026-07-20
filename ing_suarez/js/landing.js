/*======================================================
LANDING
Portafolio - Nino Raúl Suárez Loras
Versión 1.0
======================================================*/

const title = document.getElementById("title");

const portfolio = document.getElementById("portfolio");

const enterButton = document.getElementById("enterButton");



const NAME = [

    "Nino Raul",

    "Suarez Loras"

];



const PORTFOLIO = "PORTAFOLIO";



const BUTTON = "Haz clic para continuar";



/*======================================================
UTILIDADES
======================================================*/

function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}



/*======================================================
FUENTES
======================================================*/

async function waitFonts(){

    if(document.fonts){

        await document.fonts.ready;

    }

}



/*======================================================
ESCRIBIR TEXTO
======================================================*/

async function typeText(element,text,speed=70){

    element.innerHTML="";



    for(let letter of text){

        element.innerHTML+=letter;

        await wait(speed);

    }

}



/*======================================================
CREAR UNA LÍNEA
======================================================*/

function createLine(text){

    const line=document.createElement("div");

    line.className="title-line";

    for(const character of text){

        const span=document.createElement("span");

        span.className="letter";

        span.textContent=character===" " ? "\u00A0" : character;

        line.appendChild(span);

    }

    return line;

}

/*======================================================
MOSTRAR TÍTULO
======================================================*/

async function showTitle(){

    title.innerHTML="";

    const line1=createLine(NAME[0]);

    const line2=createLine(NAME[1]);

    title.appendChild(line1);

const space=document.createElement("div");
space.style.width="18px";

title.appendChild(space);

title.appendChild(line2);

    const letters=[

        ...line1.querySelectorAll(".letter"),

        ...line2.querySelectorAll(".letter")

    ];

    for(const letter of letters){

        await wait(55);

        letter.classList.add("show");

    }

}



/*======================================================
PORTAFOLIO
======================================================*/

async function showPortfolio(){

    portfolio.style.opacity=0;

    portfolio.innerHTML=PORTFOLIO;

    portfolio.style.transition="opacity .8s";



    await wait(80);



    portfolio.style.opacity=1;

}



/*======================================================
BOTÓN
======================================================*/

async function showButton(){

    enterButton.style.opacity=0;

    enterButton.innerHTML=BUTTON;

    enterButton.style.transition="opacity .8s";



    await wait(80);



    enterButton.style.opacity=1;

}



/*======================================================
RESPIRACIÓN
======================================================*/

function breatheButton(){

    setTimeout(()=>{

        enterButton.animate(

            [

                {

                    opacity:1,

                    transform:"translateY(0px)"

                },

                {

                    opacity:.45,

                    transform:"translateY(2px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0px)"

                }

            ],

            {

                duration:2200,

                iterations:Infinity,

                easing:"ease-in-out"

            }

        );



    },CONFIG.landing.enterDelay);

}



/*======================================================
INICIO
======================================================*/

async function initLanding(){

    await waitFonts();



    await wait(300);



    await showTitle();



    await wait(250);



    await showPortfolio();



    await wait(350);



    await showButton();



    breatheButton();

}



initLanding();



/*======================================================
ENTER PORTFOLIO
======================================================*/


enterButton.addEventListener(
"click",
()=>{

    enterButton.style.pointerEvents="none";


    window.location.href="perfil.html";


});