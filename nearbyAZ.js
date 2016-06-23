/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7R/0
	Problem: Nearby AZ
	Write a method that takes a string in and returns true if the letter
	"z" appears within three letters **after** an "a". You may assume
	that the string contains only lowercase letters.
*/


var str = "Here are some letters to check out if a  z then this should be true";

function nearbyAZ() {
	for(var i = 0; i < str.length; i++) {

		if(str[i] === "a") {
			if (str[i+1] === "z" || str[i+2] === "z"  || str[i+3] === "z") {
				return true;
			}
		} 			
	}
	return false;
}
