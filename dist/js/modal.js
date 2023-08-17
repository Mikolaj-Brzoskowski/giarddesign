// Grabs all the Elements by their IDs which we had given them
let modal = document.getElementById("my-modal");

let btn1 = document.getElementById("open-btn1");
let btn2 = document.getElementById("open-btn2");
let btn3 = document.getElementById("open-btn3");

let button = document.getElementById("ok-btn");

let header = document.getElementById('modalHeader');
let text = document.getElementById('modalText');

btn1.onclick = function() {
modal.style.display = "block";
header.innerHTML = ''
text.innerHTML = ''
header.innerHTML += 'Projekty!';
text.innerHTML += 'Poznaj nasze projekty! Same najlepsze!'
}

btn2.onclick = function() {
modal.style.display = "block";
header.innerHTML = ''
text.innerHTML = ''
header.innerHTML += 'Wizualizacje!';
text.innerHTML += 'Oto nasze wizualizacje! Czy nie są przepiękne?'
}

btn3.onclick = function() {
modal.style.display = "block";
header.innerHTML = ''
text.innerHTML = ''
header.innerHTML += 'Realizacje!';
text.innerHTML += 'Realizujemy zadania od najłatwiejszych po niemożliwe!'
}


button.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }