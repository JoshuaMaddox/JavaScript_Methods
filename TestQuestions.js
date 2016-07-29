Write a method named crazy_sum(numbers) that takes an array of numbers. crazy_sum should multiply each number in the array by its position in the array, and return the sum.

var arr = [2, 3, 5, 2];

function crazy_sum() {

var num = 0;
var numSum = 0;
	for (var i = 0; i < arr.length; i++) {
		num = arr[i] * i;
		numSum += num;
	}
	return numSum
}

Write a method square_nums that takes a number max and 
returns the number of perfect squares less than max. Do not use Math.sqrt(x) or x ** 0.5; 
we don't want you to calculate square roots for this problem. You will, however, want to find squares (x * x is fine).

var num = 25;

function square_nums() {
	var sqrCount = 0;
	for (var i = 0; i < num; i++) {
		tempNum = (i/i);
		for(var j = num; j>=0; j--) {
			if(tempNum = j) {
				sqrCount++;
			}
		}		
	}
	return sqrCount;
}

var num = 25;

function square_nums() {
	var sqrCount = 0; 
	for (var i = 0; i < num; i++) {
		if (i % 2 == 0)
		{
			sqrCount++
		}
	}
	return sqrCount;
}




Write a method crazy_nums that takes a number, max, and returns an array of the integers that

ARE less than max
AND ARE divisible by either three or five
BUT ARE NOT divisible by _both_ three and five
You should return the result in increasing order.

You may wish to use the modulo operation: 5 % 2 returns the remainder when dividing 5 by 2: 1. If num is divisible by i, then num % i == 0.

crazy_nums(3) == []
crazy_nums(10) == [3, 5, 6, 9]
crazy_nums(20) == [3, 5, 6, 9, 10, 12, 18]


var max = 20;

function crazy_nums() {
	var finalArr = [];
	for (var i = max -1; i >= 1; i--) {
		if(i % 5 == 0 || i % 3 == 0) {
			console.log(i)
			if(i % 5 !== 0 || i % 3 !== 0) {
				finalArr.unshift(i);
			}
		}
	}
	return finalArr;
}