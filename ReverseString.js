/* 	
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br5n/0
	Problem Name: Reverse
	Write a method that will take a string as input, and return a new
	string with the same letters in reverse order.
	Don't use String's reverse method; that would be too simple.
*/

//Creates a variable with a name of "str". 
var str = "Here is my input";


function reverseStr(str) {
	//Creates a variable that we will use to store the new string.
	var reversedStr = "";
	//A for loop that will iterate through the variable str from left to right of the string.
	for(var i = str.length -1; i >= 0; i--) {
		//In each iteration of the for loop we will add the current value of "i" from the string "str"
		//to the string "reversedStr". We are taking a value from the right side of the str "str"
		//And adding it to the string "reversedStr" from left to right. 
		reversedStr += str[i];
	}
	//The for loop has finished. We return reversedStr which is a reversed copy of the string "str"
	return reversedStr;
}