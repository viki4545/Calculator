let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for(item of buttons){
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if(buttonText == "x"){
            buttonText = "*";
            screenValue += buttonText;
            screen.value += buttonText;
        }else if (buttonText == "C"){
            screenValue = "";
            screen.value = "";
        }else if(buttonText == "="){
            screen.value = eval(screenValue);
        }else{
            screenValue += buttonText;
            screen.value += buttonText;
        }
    })
}