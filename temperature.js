var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')



var ch=access.question("1. Cel to Fah\n 2. Fah to Cel\n Enter your choice");
var temp=access.question("Please enter temperature");
switch(parseInt(ch))
{
    case 1: input.CalFTemp(parseInt(temp));
            break;
    case 2: input.CalCTemp(parseInt(temp));
            break;
    default : console.log("wrong choice");
            break;
}








