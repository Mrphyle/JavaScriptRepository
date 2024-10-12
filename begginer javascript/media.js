function media_numeros() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var n3 = parseFloat(document.getElementById("num3").value);
    var n4 = parseFloat(document.getElementById("num4").value);
    let media = (n1 + n2 + n3 + n4)/4;
    document.getElementById("resultM").innerHTML = media;
}