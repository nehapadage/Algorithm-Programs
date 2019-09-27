module.exports = {

    anagram(s1, s2) {
        var n1 = s1.length;
        var n2 = s2.length;
        var flag = false;
        if (n1 == n2) {
            s1.sort();
            s2.sort();
            for (var i = 0; i < n1; i++) {
                if (s1[i] == s2[i]) {
                    flag = true;
                }
            }
        } else {
            flag = false;
        }

        if (flag == true) {
            console.log("Strings are anagram.");
        } else {
            console.log("Strings are not anagram.");
        }
    },



    bubbleSort(arr) {
        var length = arr.length;

        for (var i = 0; i < length; i++) {

            for (var j = 0; j < (length - i - 1); j++) {

                if (arr[j] > arr[j + 1]) {

                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        console.log(arr);
    },


    BinarySearch(arr, x, start, end) {
        if (start > end)
            return false;

        var mid = Math.floor((start + end) / 2);


        if (arr[mid] === x)
            return true;

        if (arr[mid] > x)
            return this.BinarySearch(arr, x, start, (mid - 1));
        else
            return this.BinarySearch(arr, x, (mid + 1), end);
    },



    PrimeNo(n) {
        var cnt = 0;

        var arr = new Array(n);

        for (var number = 1; number <= n; number++) {
            var flag = false;
            for (var i = 2; i <= number / 2; i++) {
                if (number % i == 0) {
                    flag = true;

                    break;
                }

            }
            if (flag == false && number > 1) {
                arr[cnt] = number;
                cnt++;
            }
        }
        return arr;
    },


    CalFTemp(temp) {
        var ftemp;
        ftemp = (temp * 9 / 5) + 32;
        console.log("Temperature from celsius to Fahrenheit : " + ftemp);
    },

    CalCTemp(temp) {

        var ctemp;
        ctemp = (temp - 32) * 5 / 9;
        console.log("Temperature from Fahrenheit to  celsius: " + ctemp);
    },


    insertionSort(arr) {
        let i, j, k;
        for (i = 1; i < arr.length; i++) {
            k = arr[i];
            j = i - 1;
            while (j >= 0 && arr[j] > k) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = k;
        }
        console.log(arr);
    },

    dayofweek(day,month,year) 
           {  
               var y0,d0,m0,x;
               y0 = year - parseInt((14 - month) / 12);
               console.log(y0);
               x = y0 + parseInt(y0 /4) - parseInt(y0 /100) + parseInt(y0 /400);
               console.log(x);               
               m0 = month + 12*(parseInt((14 - month ) / 12)-2);
               console.log((m0));               
               d0 =  (day + x + parseInt(31 * m0 / 12)) % 7;
               
               console.log(d0);

               let str=["sun","mon","tue","wed","thu","fri","sat"];
                
               console.log("\n\nDay is - "+str[parseInt(d0)]);
                          
           },


           MonthlyPayment(P,Y,R)
            {
             var n=12*parseInt(Y);
            var r=parseInt((R/12)*100);
            var payment=parseInt((P*r)/(1-(1+r)^(-n)));
            console.log(payment);
            },



            CalSqrtNewton(c)
      {
	    var epsilon = 1e-15;    
        var t = c;              

    
        while (Math.abs(t - c/t) > epsilon*t) 
        {
            t = (c/t + t) / 2.0;
        }
        
        console.log("estimate of the square root of c ="+t);
      },


      CalcNotes(arr,change) 
    { 
	var n_notes,min_notes=0;
	while(change>0)
	{
		for(var i=0;i<arr.length;i++)
		{
			n_notes = parseInt(change / arr[i]);
			change = parseInt(change % arr[i]);
			min_notes= min_notes + n_notes;
            
            console.log("No of "+arr[i]+" rupees notes : "+n_notes);
		}
	}
	console.log("\n\nMinimum number of notes : "+parseInt(min_notes));
    }


	   	





}