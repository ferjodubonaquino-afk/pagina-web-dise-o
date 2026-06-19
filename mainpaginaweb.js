window.onscroll = function(){

    let boton = document.getElementById("btnArriba");

    if(document.documentElement.scrollTop > 300){
        boton.style.display = "block";
    }else{
        boton.style.display = "none";
    }

}

document.addEventListener("DOMContentLoaded", function(){

    let boton = document.getElementById("btnArriba");

    if(boton){

        boton.addEventListener("click", function(){

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        });

    }

})
function abrir_cerrar_menu(){
    document.getElementById("menu").classList.toggle("abrir_menu");
}
