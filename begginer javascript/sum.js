function som(){
    var num1 = document.getElementById("text1");
    var num2 = document.getElementById("text2");
    var result = eval(num1.value) + eval(num2.value);
    let msg= document.getElementById("text3")
    msg.innerHTML = result;}
    