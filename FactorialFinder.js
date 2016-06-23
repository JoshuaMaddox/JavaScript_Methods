/*	
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br5o/0
	Problem: Factorial
	Write a method that takes an integer `n` in; it should return
	n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
	As a special case, `factorial(0) == 1`.
*/

//Creates the variable named "num". IThe variable could have had nearly any name we so desired. 
var num = 6;

function factorialFinder(num) {

	//Created the variable "factorial" that will be used to store our final answer
	var factorial = 1;
	//If num is explicitly equal to 0 or "|| = or" 1 then end the function and return 1.
	//"return" is used to end a function and return some value. In our case we will 
	//return the original value of factorial which we stated as being "1"
	if(num === 0 || num === 1) {
		return factorial;
	}
	//Creates  an iterative for loop that will effectively subtract
	//1 from the the value of num each time it loops. It will continue 
	//to loop until "i" is equal to 1 
	//note: you could name the variable "i" anything. It's just usual to see 
	//i used as the name for an iterative loop. If there is a second iterative loop within the first
	//it will commonly be named "j"
	for (var i = num; i >= 1; i--) {
		//each time we loop through factorial will become equal to 
		//the previous value of factorial times the current count of i.
		factorial *= i;
	}
	//returns the final value of factorial
	return factorial; 
}