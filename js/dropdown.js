

function dropdownFunction(){
    const display = document.getElementById("dropdown").style.display;
    if(display == "none") {
        document.getElementById("dropdown").style.display = 'flex';
    }
    else
    {
        document.getElementById("dropdown").style.display = "none";
    }
}