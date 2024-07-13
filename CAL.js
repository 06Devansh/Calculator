let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue ='';
for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log("button text is",buttonText);
        if(buttonText == '*'){
            buttonText = '*';
            screenValue= screenValue+buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'CLR'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == 'DLT'){
            screenValue = screen.value.toString().slice(0,-1);
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value =screenValue;
        }
    })
}