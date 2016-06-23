/*
	http://prepwork.appacademy.io/coding-test-1/practice-problems/
	https://repl.it/Br7E/0/
	Problem: Longest Word
	Write a method that takes in a string. Return the longest word in
	the string. You may assume that the string contains only letters and
	spaces.You may use the String `split` method to aid you in your quest.
*/

var str = "Input string to find the longest word";
var strLength = 0;

function longestString() {
	//Splits the string into an array. We deliniate where we want the split to occur by what we place
	//inbetween the "". In this case we put a space in str.split(" "), so we will split at each space. 
	strArray = str.split(" ");
	//iterates through each element in the array
	for(var i = 0; i < strArray.length; i++) {
		//We've created this variable to later store the length of each word
		var tempLength = 0;
		//.length returns (gives us) a value equal to the length of the string in the position of "i". 
		// if i is on its 4th iteration (on its 4th loop), then strArray[i].length will become equal to
		// the length of the word in position 5(we started counting at 0).
		// we then make tempLength equal to the length of the word in the 5th position(in the current position of i)
		tempLength = strArray[i].length;
		//We check to see if strLength is less then the value we just set tempLength to be. If tempLength is bigger
		//then we jump into the if statement. If it isn't, then we loop again, or move out of the for loop if we are at the end. 
		if(strLength < tempLength) {
			//If we've made it inside the if statement, it means that tempLength is bigger than strLength. i.e. the word's length is#
			//is bigger. Because of that we want to capture and holde the count of the length and also the word itself. Eventually, we
			//will end up with our longest word. strArray[i] holds the current word and tempLength holds it's length value. We then pass 
			//those values into strLength and longestStr. 
			strLength = tempLength;
			longestStr = strArray[i];
		}
	}
	// We return our longest string (our longest word). If we wanted the length of it as a numerical value, then we 
	// could return strLength. 
	return longestStr;
}