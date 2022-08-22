const $nav = document.querySelector('.menu--fechado');
const $btn = document.querySelector(".btn")
$btn.addEventListener('click', abrir, false)

function abrir(){
    if($nav.classList.contains("menu--fechado") && $btn.classList.contains("btn")){
        $nav.classList.remove("menu--fechado");
        $nav.classList.add("menu")

        $btn.classList.remove("btn");
        $btn.classList.add("btn-cruz")


    }else{
        $nav.classList.add("menu--fechado");
        $nav.classList.remove("menu")

        $btn.classList.add("btn");
        $btn.classList.remove("btn-cruz")

    }
   
}



    



