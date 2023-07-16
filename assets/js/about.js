let review1 = document.getElementById('review1');
let review2 = document.getElementById('review2');

let cargarImagen = (entradas, observador)=>{
    entradas.forEach((entrada)=> {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
};

let observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.4
});


observador.observe(review1);
observador.observe(review2);