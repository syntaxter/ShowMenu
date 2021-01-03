var cursor = document.querySelector(".cursor");
var nav = document.querySelector(".nav");
var test = document.querySelector("h1")
var effectoMenu = document.querySelector(".contenedorText");
var salir = document.querySelector(".salir")




//escuchadores de eventos
window.addEventListener("mousemove",(e) => {
    x = e.clientX;
    y = e.clientY;
    cursor.style.top= y + "px";
    cursor.style.left= x + "px"
    navPos= nav.offsetLeft;
    moveMouse(x,navPos)

})

cursor.addEventListener("click",clics);
salir.addEventListener("click",clicSalir)


//funciones
    //funcion de cursor move


    function moveMouse() {
        if(x > navPos) {
               cursor.style.background="white";
               cursor.style.animation= "zoomInt 1s infinite linear";
               nav.style.width="30px"
               
        }
        else { 
            cursor.style.animation= "none";
            cursor.style.background= "white";

        }
    }

    function clics() {
        effectoMenu.style.width="100%";
        effectoMenu.style.display="flex";
        cursor.style.animation= "none";
        nav.style.width="0px";
        cursor.style.background="white";
        setTimeout(leftAnimation, 3000)

    }

    function clicSalir() {
        effectoMenu.style.width="0";
        effectoMenu.style.display="flex";
        cursor.style.animation= "none";
        nav.style.width="10px";
        cursor.style.background="white";
        salir.dataset.mostrar= "false";
        setTimeout(displayNone, 3000)

    }


    //interacciones
    function leftAnimation() {
        salir.dataset.mostrar= "true";
    }

        function displayNone() {
        effectoMenu.style.display="none";
    }