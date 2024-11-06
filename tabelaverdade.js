const prompt = require('prompt-sync')();
 let opsAndOrXor = prompt("Qual porta deseja consutara? ");
 function and() {
    let A10 = prompt("Digite o 1 ou 0: ");
    let B10 = prompt("Digite o 1 ou 0: ");
    var a1=true;
    var b1=true;
    var a0= false;
    var b0 = false;
    if (A10 == '1' && B10 == '1') {
        console.log(a1 && b1);
    };
 };
if (opsAndOrXor  == 'and') {
    and()
};