var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')



var ch=access.questionInt("1. Cel to Fah\n 2. Fah to Cel\n Enter your choice");
var temp=access.questionInt("Please enter temperature");
switch(ch)
{
    case 1: input.CalFTemp(temp);
            break;
    case 2: input.CalCTemp(temp);
            break;
    default : console.log("wrong choice");
            break;
}








