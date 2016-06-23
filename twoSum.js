/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7V/0
	Problem: Two Sum
	Write a method that takes an array of numbers. If a pair of numbers
	in the array sums to zero, return the positions of those two numbers.
	If no pair of numbers sums to zero, return `nil`.
*/
var arr = [1, 3, 5, -3];

function twoSum() {
    var pos = 0;
    var pos2 = 0;
	for(var i = 0; i < arr.length; i++) {
			for(var j = arr.length - 1; j >= 0; j--) {
				if((arr[i] + arr[j]) == 0 && i !== j) {
					return(i + "," + j);
			}
		}
	}
	return "nil";
}

		