function slideLeftFunction() {
    var marLf = document.getElementById("slideOne").style.marginLeft;

    if (marLf == "0px") {
        document.getElementById("slideOne").style.marginLeft = "-91%";
    
    } else if (marLf == "-13%") {
        document.getElementById("slideOne").style.marginLeft = "0px";
    
    }else if (marLf == "-26.5%") {
        document.getElementById("slideOne").style.marginLeft = "-13%";
    
    } else if (marLf == "-39%") {
        document.getElementById("slideOne").style.marginLeft = "-26.5%";

    } else if (marLf == "-52%") {
        document.getElementById("slideOne").style.marginLeft = "-39%";

    } else if (marLf == "-65%") {
        document.getElementById("slideOne").style.marginLeft = "-52%";
        
    } else if (marLf == "-78%") {
        document.getElementById("slideOne").style.marginLeft = "-65%";
        
    } else if (marLf == "-91%") {
        document.getElementById("slideOne").style.marginLeft = "-78%";
        
    }
}

function slideRightFunction() {
    marLf = document.getElementById("slideOne").style.marginLeft;

    if (marLf == "0px") {
        document.getElementById("slideOne").style.marginLeft = "-13%";

    } else if (marLf == "-13%") {
        document.getElementById("slideOne").style.marginLeft = "-26.5%";
    
    }else if (marLf == "-26.5%") {
        document.getElementById("slideOne").style.marginLeft = "-39%";
    
    } else if (marLf == "-39%") {
        document.getElementById("slideOne").style.marginLeft = "-52%";

    } else if (marLf == "-52%") {
        document.getElementById("slideOne").style.marginLeft = "-65%";

    } else if (marLf == "-65%") {
        document.getElementById("slideOne").style.marginLeft = "-78%";

    } else if (marLf == "-78%") {
        document.getElementById("slideOne").style.marginLeft = "-91%";

    } else if (marLf == "-91%") {
        document.getElementById("slideOne").style.marginLeft = "0px";

    }
}