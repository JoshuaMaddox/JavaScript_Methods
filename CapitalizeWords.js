
/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7v/0
	Problem: Capitalize Words
	Write a method that takes in a string of lowercase letters and
	spaces, producing a new string that capitalizes the first letter of
	each word. You'll want to use the `split` and `join` methods. Also, the String
	method `upcase`, which converts a string to all upper case will be
	helpful.

*/

var str = "mike bloomfield"

function toUpperCase(str) {
	//We pass in str and then say we want to find the search value (before comma), and then the new value ,(post comma). We use a regular expression
	//that says find each word in the sentence ("\w" looks for word charaters "a-z, A-Z, 0-9 and "_" underscore", we will look for all non white space characters
	// "S" looks for non-white space chacters "*" means to look for all instances of.
	//We then create a function that gives us the replacement values
	//The function takes in a string and returns characters at position 0 of substings created after spaces...i.e the first letter in each word. 
	return str.replace(/\w\S*/g, function(strTwo){return strTwo.charAt(0).toUpperCase() + strTwo.substr(1).toLowerCase();})
}