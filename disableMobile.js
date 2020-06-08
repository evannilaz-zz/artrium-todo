const html = document.querySelector("html");

function clearScreen() {
    const body = document.querySelector("body");
    const nbody = document.createElement("nbody");
    const text = document.createElement("div");
    text.innerText = "Not For Mobile.";
    text.style.fontSize = "2.5rem";
    text.style.fontFamily = "Times New Roman";
    html.removeChild(body);
    nbody.appendChild(text);
    html.appendChild(nbody);
}

function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("[Alert] Tintious is not for Mobile, but PC. Thank you.");
        clearScreen();
    }
}


function init() {
    checkMobile();
}

init();