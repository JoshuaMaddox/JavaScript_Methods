/*	Question from: https://repl.it/Br7v/0
	Write a method that takes in a string of lowercase letters and
	spaces, producing a new string that capitalizes the first letter of
	each word. */


var str = "here is a string of words"


function letterCap(str)
{
	//Creates an empty array which we will later push our string into
	var tempArray = [];
	//Creates a string that we will then split the string "str" into. 
	//We will then split it at the delineation " "(space) using the .split() method. 
	//Effectively it breaks up the string into strings of individual words at every " "space.
	var tempString = str.split(" ");
	for(var i = 0; i < tempString.length; i++)
	{
		//targets the word at the index of "i" and then the first letter of each word at the index of "0"
		//toUpperCase capitalizes each word but creates the undesired effect of duplicating the first letter. i.e.
		//we now have 1 uppercase and 1 lower case letter such as "Ccase". We need to "slice" off the lowercase at the index of "1"
		//so we just end up with "Case" instead of "Ccase".
		tempArray.push(tempString[i][0].toUpperCase() + tempString[i].slice(1));
	}
	//we now reassemble the string " " spaces and make it equal to the string "str";
	str = tempArray.join(" ");
	return str;
}



