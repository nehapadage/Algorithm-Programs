var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')



var n=access.questionInt("Enter no. of array elements");
let arr= new Array(n);
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(access.question("enter value:"));
}
input.bubbleSort(arr);

let arr1=[5,3,7,1,6,8];

input.bubbleSort(arr1);

