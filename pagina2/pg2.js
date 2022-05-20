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