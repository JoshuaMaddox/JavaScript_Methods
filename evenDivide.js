Write a method that takes in two numbers. Return the greatest
# integer that evenly divides both numbers. You may wish to use the
# `%` modulo operation.

var num = 16;
var num2 = 24;

function evenDivide(num, num2)
{
	var numStore = 0;
	var numStoreTwo = 0;

	for(var i = 1; i <= num; i++)
	{
		if(num % i === 0 && i > numStore)
			{
				numStore = i;
				if(num2 % numStore === 0)
				{
					console.log(numStore + " In the Second Iteration");
					numStoreTwo = numStore;
				}
			}
	}
	return numStoreTwo;
}