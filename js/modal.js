let popup = document.getElementById("popup");

let btn1 = document.getElementById("projekty");
let btn2 = document.getElementById("wizualizacje");
let btn3 = document.getElementById("realizacje");

let close = document.getElementById("close-popup");

let header = document.getElementById('modalHeader');
let text = document.getElementById('modalText');

btn1.onclick = function() {
    popup.style.display = "block";
header.innerHTML = ''
text.innerHTML = ''
header.innerHTML += 'Projekty!';
text.innerHTML += 'Poznaj nasze projekty! Same najlepsze!'
}

btn2.onclick = function() {
popup.style.display = "block";
header.innerHTML = ''
text.innerHTML = ''
header.innerHTML += 'Wizualizacje!';
text.innerHTML += 'Oto nasze wizualizacje! Czy nie są przepiękne?'
}

btn3.onclick= function() {
    location.href='#realizacje-section'
}

close.onclick = function() {
    popup.style.display = "none";
}