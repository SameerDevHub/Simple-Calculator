let display=document.getElementById("display");


function livescreen(enteredvalue){
    display.value +=enteredvalue;
}

function Calculate(value){
    const result=eval(value);
    display.value=result;
}

document.addEventListener("keydown",KeyboardInputHandeler);
function KeyboardInputHandeler(e){
    e.preventDefault();

    //numbers
    if(e.key === "0"){
        display.value += "0";
    }
    else if(e.key ==="1"){
        display.value += "1";
    }
    else if(e.key ==="2"){
        display.value += "2";
    }
    else if(e.key ==="3"){
        display.value += "3";
    }
    else if(e.key ==="4"){
        display.value += "4";
    }
    else if(e.key ==="5"){
        display.value += "5";
    }
    else if(e.key ==="6"){
        display.value += "6";
    }
    else if(e.key ==="7"){
        display.value += "7";
    }
    else if(e.key ==="8"){
        display.value += "8";
    }
    else if(e.key ==="9"){
        display.value += "9";
    }
    
    //operators

    if(e.key === "+"){
        display.value += "+";
    }
    else if(e.key === "-"){
        display.value += "-";
    }
    else if(e.key === "*"){
        display.value += "*";
    }
    else if(e.key === "/"){
        display.value += "/";
    }

    // decimal operator

    if(e.key === "."){
        display.value += ".";
    }

    //press enter to see result

    if(e.key === "Enter"){
        Calculate(display.value);
    }

    //Backspace for removing the last input

    if(e.key === "Backspace"){
        const displayInput=display.value;
        display.value=displayInput.substring(0,display.value.length-1);
    }

}