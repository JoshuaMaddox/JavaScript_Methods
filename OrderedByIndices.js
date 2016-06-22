// Question Found at https://repl.it/Br7w/0 
// Write a method that takes in a string and an array of indices in the
// string. Produce a new string, which contains letters from the input
// string in the order specified by the indices of the array of indices

// The Array of indices ("arr" could be any name you choose as long as you update the same within the funciton)
var arr = [5, 3, 1, 4, 2, 0];
// The String ("str" could be any name you choose as long as you update the same within the funciton)
var str = "markov";  

function sortOrder (str, arr)
{
	//The new string. Where we will store the letter moved out of the old string "str"
	var tempStore = "";
	//Iterates through the array "arr"
	for (var i = 0; i < arr.length; i++)
	{
		//The first iteration of i tempStore is empty so we then += (add) whichever character in the string
		// is equal to the i count of the array "arr". i.e. in the first loop i = 0. 0 in the array "arr = [5, 3, 1, 4, 2, 0]"
		// is "5" (because we start counting from 0 not 1). Therefore, in the first iteration of the loop, "str.charAt(arr[i])" equals str.charAt(5). 
		// In the second iteration of the loop str.charAt(arr[i]) would be str.charAt(3) and so on. .charAt() looks inside the string prepended to it at the position
		// passed inside it's parenthases. i.e. str.charAt(5) will look inside the string "str" at position 5. In this case in the
		// string "str = "markov"; position 5  is equal to "v" 
		tempStore += str.charAt(arr[i]);
		
	}
	console.log(tempStore);
}

