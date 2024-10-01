function clearDisplay(){
    document.getElementById("input").value="";
}
function deleteLast(){
    let display=document.getElementById("input")
    display.value=display.value.slice(0,-1);
}

function appendChar(char) {
    const input = document.getElementById("input");
    const lastChar = input.value.slice(-1);
    if (['+', '-', '*', '/', '.', '%'].includes(lastChar) && ['+', '-', '*', '/', '.', '%'].includes(char)) {
        return;
    }
    input.value += char;
}

function calculate() {
    try {
        const input = document.getElementById("input")
        input.value = eval(input.value)
    }
    catch (error) {
        document.getElementById("input").value = "error"
    }
}
