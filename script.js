//Calculator program

let display = document.getElementById("display");


function appearText(input){
    display.value = display.value+input;

}

function clearAll(){
    display.value="";

}

function Delete() {
   display.value=display.value.slice(0,-1);
}


function result(){
    try{
        display.value= eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
function percentage(){
    try{
        display.value=eval(display.value)/100;
    }
    catch{
        display.value='Error';
    }
}