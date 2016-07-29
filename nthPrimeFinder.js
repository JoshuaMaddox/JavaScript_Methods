//find the nth Prime Number

var nth = 9;

function nthPrimeNum(nth)
{
	var nthCounter = 0;
	var startPrimeCount = 2;
	var primeCheck = true;
	var nthCheck = true;
//we want to count up one each time a numer is prime.

//if not prime, don't count.

//once the nth prime number is revealed return
	
	while(nthCheck)
		{ 
			for(var i=2; i < startPrimeCount; i++)
				{
					console.log("I am startPrimeCount in the for loop " + startPrimeCount);
					if(startPrimeCount % 2 === 0)
						{
							primeCheck = false;
						}
				}

				if(primeCheck == false)
				{
					console.log(i + " ---i-----I've shown false")
					startPrimeCount = startPrimeCount+1;
					console.log("I am startPrimeCount in primeCheck = false " + startPrimeCount);

				}

				else if(primeCheck)
				{
					nthCounter++;
					startPrimeCount++;
					console.log(i + " ---i-----I've shown true")
					primeCheck = false;
				}
			
			if(nthCounter === nth)
				{
					console.log(startPrimeCount);
					nthCheck = false;
				}
		}
		
}

function Prime(num) {
output = true  
for (var i=2 ; i<num ; i++) 
	{ //var i=2 
	    if (num%i === 0)  
	    {
	       output = false ; break
	    }
	}
return output
}

function PrimeMover(num) {
var count = 0
for (var i=2 ; i<10000 ; i++)  { //var i=2
    if (Prime(i) === true) {
        count = count + 1 
    }
    if (count === num) {
        return i
        break
    } 
}
}