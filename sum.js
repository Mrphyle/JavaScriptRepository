const prompt = require('prompt-sync')();
function media_numeros(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4;
    return media;
}
var input1 = parseFloat(prompt("type the first number: "));
var input2 = parseFloat(prompt("type the second number: "));
var input3 = parseFloat(prompt("type the third number: "));
var input4 = parseFloat(prompt("type the fourth number: "));
console.log(media_numeros(input1, input2, input3, input4));