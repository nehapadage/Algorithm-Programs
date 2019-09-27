var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')


var n=access.question("Enter no. of array elements");
var arr= new Array(n);
for(let i=0;i<n;i++)
{
    arr[i]=parseInt(access.question("enter value:"));                     
}

console.log(arr);

var x=access.questionInt("Enter the number u want to search");     

console.log(x);

var start=0;

var end=arr.length-1;

var mid=Math.floor((start+end)/2);

   
if(input.BinarySearch(arr, x, parseInt(start),parseInt(end) )) 
    console.log("Element found!"); 
else 
    console.log("Element not found!"); 


let arr1 = ["ankit","lavanya","madan","neha","rohit"]; 
console.log("Array is :"+arr1);
x = "rohit"; 
console.log("Search element : "+x);

   
if (input.BinarySearch(arr1, x, 0, arr1.length-1)) 
    console.log("Element found!"); 
else console.log("Element not found!"); 
