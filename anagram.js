var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')

let str1=access.question("Enter First String= ");
var s1=str1.split('');
let str2=access.question("Enter Second String= ");
var s2=str2.split('');
input.anagram(s1,s2);



