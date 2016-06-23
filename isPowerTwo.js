/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7W/0
	Problem: Is Power of 2?
	Write a method that takes in a number and returns true if it is a
	power of 2. Otherwise, return false.
	You may want to use the `%` modulo operation. `5 % 2` returns the
	remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
	of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
*/

var num = 78;


function isPowerTwo(num) {

	if(num < 1){
		return false;
	}
	for(var i = num; i >= 1; i /= 2) {
		if(i === 1) {
			return true; 
		}
		if(i % 2 !== 0 || i < 1) {
			console.log("I am num i --- " + i + " --i-- " + i)
			return false
		}
	}
	return true;
}
