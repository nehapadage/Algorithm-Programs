var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')



var n=access.question("Enter no. of array elements");
let arr= new Array(n);
for(let i=0;i<n;i++)
{
    arr[i]=access.question("enter name:");
}
input.bubbleSort(arr);

let arr1=["neha","madan","lavanya","rohit","Govind"];

input.bubbleSort(arr1);
