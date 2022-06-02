function myFunction() {

    var btn = document.getElementById("myButton");

    if (btn.value == "COMPRAR") {
        btn.value = "COMPRADO";
        btn.innerHTML = "COMPRADO";
    }
    else {
        btn.value = "COMPRAR";
        btn.innerHTML = "COMPRAR";
    }

}

/* var loader;

function loadNow(opacity){
    if (opacity <= 0){
        displayContent();
    } else{
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
}); */
