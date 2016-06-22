// Write a method that takes in an integer (greater than one) and
// returns true if it is prime; otherwise return false.

var numToCheck = 5;

function primeCheck()
{
	
		//Checks to see if the numbers passed in via the variable "numToCheck" is less than 2. If it is, then it's not a prime number
		//So we end the function by returning "false";
		if(numToCheck < 2)
			{
				return false;
			}
	//"i" starts as equal to 2. As long as "i" is less than the number passed in via the variable "numToCheck", increase the value of "i" by 1. 
	// note you could, and probably should, set the count for i to be (var i = 0; i <= Math.sqrt(numToCheck) as any iteration 
	// below the square root of the variable "numToCheck" (Math.sqrt(numToCheck) has aleady been effectively checked by the correspobing greater factors. 
	// i.e. it just makes the function run through less loops so is therefore more effecient.But as this is a beginners explination, we'll run through all of the iterations
	// and throw efficiency out the proverbial window. You can hear the advance readers gasping in horror!
	if(var i = 2; i < numToCheck; i++)
	{	
		// if the number passed in via the varaible "value" is divided by the iteration count of "i" and the remainder is 
		// explicitly equal to the int 0 then we've proven that the number is NOT prime so therefore we return "false". Basically we are
		// just dividing number passed in via the variable numToCheck by every number between 2 and the number passed in via the same variable.
		// i.e. if the variable numToCheck equals 5 then first time the loop runs we are asking if the remainder of 5 / 2 = 0. If not then
		// the loop runs again to see if 5 / 3 = 0 and so on. 
		if(numToCheck % i === 0)
		{
			return false
		}
	}
	return numToCheck;
}


// same function without the annoying comments. 

var numToCheck = 5;

function primeCheck()
{
	
	if(numToCheck < 2)
		{
			return false;
		}

	for(var i = 2; i < numToCheck; i++)
		{	
			if(numToCheck % i === 0)
			{
				return false;
			}
		}
	return numToCheck;
}

