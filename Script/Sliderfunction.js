function slideOneFunction() {
    document.getElementById("slideOne").style.marginLeft = "0";
    
    document.getElementById("slideBtOne").style.opacity = "1";
    document.getElementById("slideBtTwo").style.opacity = "0.6";
    document.getElementById("slideBtThree").style.opacity = "0.6";
    document.getElementById("slideBtFour").style.opacity = "0.6";

}

function slideTwoFunction() {
    document.getElementById("slideOne").style.marginLeft = "-25%";
    
    document.getElementById("slideBtOne").style.opacity = "0.6";
    document.getElementById("slideBtTwo").style.opacity = "1";
    document.getElementById("slideBtThree").style.opacity = "0.6";
    document.getElementById("slideBtFour").style.opacity = "0.6";
}

function slideThreeFunction() {
    document.getElementById("slideOne").style.marginLeft = "-50%";
    
    document.getElementById("slideBtOne").style.opacity = "0.6";
    document.getElementById("slideBtTwo").style.opacity = "0.6";
    document.getElementById("slideBtThree").style.opacity = "1";
    document.getElementById("slideBtFour").style.opacity = "0.6";
}

function slideFourFunction() {
    document.getElementById("slideOne").style.marginLeft = "-75%";
    
    document.getElementById("slideBtOne").style.opacity = "0.6";
    document.getElementById("slideBtTwo").style.opacity = "0.6";
    document.getElementById("slideBtThree").style.opacity = "0.6";
    document.getElementById("slideBtFour").style.opacity = "1";
}

function slideLeftFunction() {
    var marLf = document.getElementById("slideOne").style.marginLeft;

    if (marLf == "0px") {
        document.getElementById("slideOne").style.marginLeft = "-75%";
        
        document.getElementById("slideBtOne").style.opacity = "0.6";
        document.getElementById("slideBtTwo").style.opacity = "0.6";
        document.getElementById("slideBtThree").style.opacity = "0.6";
        document.getElementById("slideBtFour").style.opacity = "1";
    
    } else if (marLf == "-25%") {
        document.getElementById("slideOne").style.marginLeft = "0";
        
        document.getElementById("slideBtOne").style.opacity = "1";
        document.getElementById("slideBtTwo").style.opacity = "0.6";
        document.getElementById("slideBtThree").style.opacity = "0.6";
        document.getElementById("slideBtFour").style.opacity = "0.6";
    
    }else if (marLf == "-50%") {
        document.getElementById("slideOne").style.marginLeft = "-25%";
        
        document.getElementById("slideBtOne").style.opacity = "0.6";
        document.getElementById("slideBtTwo").style.opacity = "1";
        document.getElementById("slideBtThree").style.opacity = "0.6";
        document.getElementById("slideBtFour").style.opacity = "0.6";
    
    } else if (marLf == "-75%") {
        document.getElementById("slideOne").style.marginLeft = "-50%";
        
        document.getElementById("slideBtOne").style.opacity = "0.6";
        document.getElementById("slideBtTwo").style.opacity = "0.6";
        document.getElementById("slideBtThree").style.opacity = "1";
        document.getElementById("slideBtFour").style.opacity = "0.6";
    
    }
}

function slideRightFunction() {
    marLf = document.getElementById("slideOne").style.marginLeft;

    if (marLf == "0px") {
        document.getElementById("slideOne").style.marginLeft = "-25%";
        
        document.getElementById("slideBtOne").style.opacity = "0.6";
        document.getElementById("slideBtTwo").style.opacity = "1";
        document.getElementById("slideBtThree").style.opacity = "0.6";
        document.getElementById("slideBtFour").style.opacity = "0.6";
    
    } else if (marLf == "-25%") {
        document.getElementById("slideOne").style.marginLeft = "-50%";
        
        document.getElementById("slideBtOne").style.opacity = "0.6";
        document.getElementById("slideBtTwo").style.opacity = "0.6";
        document.getElementById("slideBtThree").style.opacity = "1";
        document.getElementById("slideBtFour").style.opacity = "0.6";
    
    }else if (marLf == "-50%") {
        document.getElementById("slideOne").style.marginLeft = "-75%";
        
        document.getElementById("slideBtOne").style.opacity = "0.6";
        document.getElementById("slideBtTwo").style.opacity = "0.6";
        document.getElementById("slideBtThree").style.opacity = "0.6";
        document.getElementById("slideBtFour").style.opacity = "1";
    
    } else if (marLf == "-75%") {
        document.getElementById("slideOne").style.marginLeft = "0px";
        
        document.getElementById("slideBtOne").style.opacity = "1";
        document.getElementById("slideBtTwo").style.opacity = "0.6";
        document.getElementById("slideBtThree").style.opacity = "0.6";
        document.getElementById("slideBtFour").style.opacity = "0.6";
    
    }
}