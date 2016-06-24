/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7Y/0
	Problem: Most Common Letter 
	Write a method that takes in a string. Your method should return the
	most common letter in the array, and a count of how many times it appears.
*/

var str = "abca";

function mostCommon() {
	var strCount = 0;
	var strCountTwo = 0;
	var newStr = "";
	var newStrTwo = "";
	for(var i = 0; i < str.length; i++) {
	    newStr = str[i];
	    for(var j = str.length -1; j >= 0; j--) {
	    	if(newStr == str[j]) {
	    		strCount++;
	    		if(strCount > strCountTwo) {
	    			strCountTwo = strCount;
	    			newStrTwo = newStr;
	    		}
	    	}

	    }
    strCount = 0;
	}
	return strCountTwo + " : " + newStrTwo;
}