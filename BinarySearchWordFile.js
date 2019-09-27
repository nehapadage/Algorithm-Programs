var input= require('../Neha Algorithm/Utility_Algo/utility_algo');
var access=require('readline-sync')

		
		
	//	var file = new File("/home/admin1/Desktop/Bridgelabz material");
        var fileName=access.question("enter filename");
        let data=fileCall(fileName);
        input.bubbleSort(data);

        function fileCall(fileName)
        {
            var fileStream=require('fs');
            var f=fileStream.readFileSync(fileName,'utf8');
            var arr=f.trim().split(' ');
            console.log((arr+" in arr"));
            return arr;
            
        }
		  
		 
		  
	/*	  var st;
		var values = new Array(n);
		console.log("Strings read from file are : ");
		
		  while(file.nextLine()) 
		  {
			  st=file.nextLine();
			  values = st.split(",");
			  for(var i=0;i<values.length;i++)
			  {
				  console.log(values[i]+" ");
			  }
		  }
		  
		  console.log("\n\nEnter search key from above array : ");
		  var key=access.question();
		  var first=0,last=values.length;
		  
		  
		 
		  input.BinarySearch(values,key,first,last);
		  	  
		*/  
		