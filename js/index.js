let dropdown = document.getElementById("dropdown");
let gallery = document.getElementById("gallery");
let popup = document.getElementById("popup");
let button = document.getElementById("menu-button")
let button2 = document.getElementById("menu-button2")

window.onclick = function(event) {
    if (event.target != button && event.target != dropdown && event.target != button2) {
        dropdown.style.display = "none";
    }
    if (event.target == popup) {
        popup.style.display = "none";
    }
    if (event.target == gallery) {
        gallery.style.display = "none";
        document.body.style.overflow = "auto"
    }
}