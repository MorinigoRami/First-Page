const hamburguer = document.querySelector('.hamburguer');
const menu       = document.querySelector('.menu-navegacion');
const hamburguer1 = document.querySelector('.hamburguer');



// console.log(menu);
// console.log(hamburguer);


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
});

window.addEventListener('click', e =>{

    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer  ){
        
            menu.classList.toggle("spread")

    }

});