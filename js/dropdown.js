let dropdown = document.getElementById("dropdown");
let button = document.getElementById("menu-button");
let button2 = document.getElementById("menu-button2");

function dropdownFunction(){
    if(dropdown.style.display == "none") {
        dropdown.style.display= 'flex';
    }
    else
    {
        dropdown.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target != button && event.target != dropdown && event.target != button2) {
        dropdown.style.display = "none";
    }
}