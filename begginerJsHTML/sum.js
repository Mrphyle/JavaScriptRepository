/*function som(){
    var num1 = document.getElementById("text1");
    var num2 = document.getElementById("text2");
    var result = eval(num1.value) + eval(num2.value);
    let msg= document.getElementById("text3")
    msg.innerHTML = result;}*/
function som() {
    var num1 = document.getElementById("text1").value;
    var num2 = document.getElementById("text2").value;
    var result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").value = result;
}    
