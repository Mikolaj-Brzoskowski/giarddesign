let dropdown = document.getElementById("dropdown");
let button = document.getElementById("menu-button");

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
    if (event.target != button && event.target != dropdown) {
        dropdown.style.display = "none";
    }
}