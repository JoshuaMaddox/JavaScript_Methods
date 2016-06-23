/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7Q/0
	Problem: Palindrome
	Write a method that takes a string and returns true if it is a
	palindrome. A palindrome is a string that is the same whether written
	backward or forward. Assume that there are no spaces; only lowercase
	letters will be given.
*/

var str = "abcba";

function palindromeCheck() {

	var tempStr = "";
	for(var i = str.length - 1; i >= 0; i--) {

		tempStr += str[i];
	}
	if(tempStr === str) {
		return true;
	}else{
		return false;
	}
}