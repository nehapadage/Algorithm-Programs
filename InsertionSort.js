var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')



var n=access.questionInt("Enter no. of array elements");
let arr= new Array(n);
for(let i=0;i<n;i++)
{
    arr[i]=access.questionInt("enter value:");
}
input.insertionSort(arr);


