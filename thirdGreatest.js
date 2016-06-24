/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7X/0
	Problem: Third Greatest
	Write a method that takes an array of numbers in. Your method should
	return the third greatest number in the array. You may assume that
	the array has at least three numbers in it.
*/

var arr = [5, 3, 7, 4];

function findThird() {
	var num = 0;
	var numTwo = 0;
	var numThree = 0;
	for(var i = 0; i < arr.length; i++) {
		if(num < arr[i]) {
			numThree = numTwo;
			numTwo = num;
			num = arr[i];
		}else if(numTwo < arr[i]) {
			numThree = numTwo;
			numTwo = arr[i];
		}else if (numThree < arr[i]) {
			numThree = arr[i];
		}
	}
	return numThree;
}