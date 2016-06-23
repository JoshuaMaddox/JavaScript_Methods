/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7N/0
	Problem: Count Vowels
	Write a method that takes a string and returns the number of vowels
	in the string. You may assume that all the letters are lower cased.
	You can treat "y" as a consonant.
*/

var str = "cecilia";

function vowelCounter(str) {

	var vCount = 0;
	for(var i = 0; i < str.length; i++) {

		if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
			vCount++;
		}
	}
	return vCount;
}


