const carrusel = document.querySelector(".carrusel-items");


let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth; //esta resta no da el scrol maximo que tiene 
let intervalo = null;
let step = 1;
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrollLeft) {
            step = step  * -1
        } else if (carrusel.scrollLeft === 0){
        step = step * -1;
        }
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
};

carrusel.addEventListener('mouseover', () =>{
    stop();
});

carrusel.addEventListener('mouseout', () =>{
    start();
});

start();