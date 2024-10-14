//npm install prompt-sync
do{
    const prompt = require('prompt-sync')();
    let list = []; //90,10,70,5,4,6,100,11,0,1,8
    var inputnumberslist = parseInt(prompt("when numbers you want add in this list? "))
    for (let i = 0; i < inputnumberslist; i++){
        let inputnumberINlist = parseInt(prompt("add the number:  "))
        list.push(inputnumberINlist)
    }
    function bubbleSort(){
        let num = list.length;
        let ligado;
     do { ligado = false;
        for (let i = 0; i < num -1; i++){
            if (list [i] > list [ i + 1]){
                let temp = list[i] ;
                list[i] = list[i+1];
                list[i+1] = temp;
                ligado = true;
            } 
        }
        num--;
    }while(ligado);
    }
    bubbleSort()
    console.log(list)
    var restartcode= prompt("you want restart this code? ")
    if (restartcode.toLowerCase() != "y"){
        break;
    }
}while(true);