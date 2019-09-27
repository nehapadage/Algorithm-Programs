var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')



var n=access.question("Enter no. of array elements");
let arr= new Array(n);
for(let i=0;i<n;i++)
{
    arr[i]=access.question("enter string:");
}
input.insertionSort(arr);


