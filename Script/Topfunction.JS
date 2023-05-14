window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var winY = window.scrollY
    var winH = window.innerHeight
    if ( winY > winH) {
        document.getElementById("goTop").style.bottom = "20px";
    } else {
        document.getElementById("goTop").style.bottom = "-100%";
    }
}

function topFunction() {
    window.scrollTo(0,0)
}