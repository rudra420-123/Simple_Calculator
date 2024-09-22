function clearDisplay(){
    document.getElementById("input").value="";
}
function deleteLast(){
    let display=document.getElementById("input")
    display.value=display.value.slice(0,-1);
}
function appendChar(char){
    const input=document.getElementById("input");
    input.value+=char;
}
function calculate(){
    try{
        input.value=eval(input.value);
    }
    catch(error){
        input.value="Error";
    }
}