const prompt = require('prompt-sync')();
do {
    math_operations();
    let continu = prompt('Do you want to continue? (y-yes/n-no): ');
    if (continu == 'n' || continu == 'no') {
        break;
    }
} while (true);
function math_operations() {
    var operations = prompt('select  operation (+, -, *, /) : ');
    if (operations ==  '+') {
    var Sum1 =  +prompt('Enter first number : ');
    var Sum2 =  +prompt('Enter second number : ');
    var Sum = Sum1 + Sum2;
    console.log('Sum of two numbers is : ',  Sum);
    }
    if  (operations ==  '-') {
        var Diff1 =  +prompt('Enter first number : ');
        var Diff2 =  +prompt('Enter second number : ');
        var Diff = Diff1 - Diff2;
        console.log('Difference of two numbers is : ',  Diff);
    }
    if (operations ==   '*') {
        var Mul1 =  +prompt('Enter first number : ');
        var Mul2 =  +prompt('Enter second number : ');
        var Mul = Mul1 * Mul2;
        console.log('Product of two numbers is : ',  Mul);
    }
    if (operations ==   '/') {
        var Div1 =  parseFloat(prompt('Enter first number : '));
        var Div2 =  parseFloat(prompt('Enter second number : '));
        var Div = Div1/Div2;
        console.log('Product of two numbers is : ',  Div);
    }
}