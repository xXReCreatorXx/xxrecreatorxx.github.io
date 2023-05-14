function menuOpenFunction() {
    document.getElementById("menuActiv").style.left = "0";
    document.body.classList.toggle("lock");
}

function menuCloseFunction() {
    document.getElementById("menuActiv").style.left = "-100%";
    document.body.classList.remove("lock");
}