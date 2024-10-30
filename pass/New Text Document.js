const prompt = require('prompt-sync')();
const clipboardy = require('clipboardy');
let gmail = prompt('press enter to copy gmail');
if (gmail.toLowerCase == '') {
    clipboardy.WritSync('slenderk54@gmail.com');
    let pass =  prompt('press enter to copy password');
    if (pass.toLowerCase == '') {
        clipboardy.writeSync('Goncalves0718');
    };
};