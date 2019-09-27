var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
//var access=require('readline-sync')


'use strict';

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}


var P=process.argv[2];
console.log(P);

var Y=process.argv[3];

console.log(Y);


var R=process.argv[4];

input.MonthlyPayment(P,Y,R);
                                                