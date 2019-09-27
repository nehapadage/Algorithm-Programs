var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')


'use strict';

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}
	    
	    
	    do
	    {
	    var day=access.questionInt("Enter the day (dd) : ");
	   
	    }while(day> 31 || day< 1);
	    
	    do
	    {
	    var month=access.questionInt("Enter the month (mm) : ");
	  
	    }while(month> 12 || month< 1);
	    
	    
	    do
	    {
	    var year=access.questionInt("Enter the year (yyyy) : ");
	    
        }while(year< 1000 || year> 9999);
        
       /*var day=process.argv[2];
       var month=process.argv[3];
       var year=process.argv[4];
       */
        console.log(day);
        console.log(month);
        console.log(year);
        
          input.dayofweek(day,month,year); 
           
          
	    