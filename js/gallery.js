let modal = document.getElementById("my-modal");

let button = document.getElementById("ok-btn");

let body = document.body;

function openGallery(number) {
    document.getElementById(number).click();
    modal.style.display = "block";
    body.style.overflow = "hidden"
}

button.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto"
}