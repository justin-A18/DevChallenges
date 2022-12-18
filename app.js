document.getElementById("burger").addEventListener("click", menuBurger);

function menuBurger() {

    document.getElementById("link-container").style.right = "0px"; 

}

document.getElementById("cerrar").addEventListener("click",cerrarMenu);

function cerrarMenu() {
    document.getElementById("link-container").style.right = "-250px"; 
}