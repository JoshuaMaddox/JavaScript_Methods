/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7J/0
	Problem: Sum Num
	Write a method that takes in an integer `num` and returns the sum of
	all integers between zero and num, up to and including `num`.
*/

//creates a variable that we will pass into the fuction
var num = 1;

function sumNum(num) {
	//created a variable equal to num so we can run a loop on it without affecting the original
	//variable "num"
	var numHolder = num;
	//Starting at 0 we will count i up by 1 (i++) until it is no longer smaller than
	//the variable "num"
	for(var i = 0; i < num; i++) {
		//each time we loop through the for statment we will 
		//add the current count of i to the value of numHolder. 
		//By using the += operator we can make numHolder equal to the sum 
		//of numHolder + i. We will do that each time we loop through
		//which means since we started at 0 and will then count i up
		//until we've gone through all integers between zero and num, including num
		numHolder += i;
	}
	//retruns the value of numHolder ending the fucntion
	return numHolder;
}