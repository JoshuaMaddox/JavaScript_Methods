which takes in an array of integers and returns true if any three consecutive elements sum to 7

var arr = [2,1,5,1,0];

function luckySevens(){
	num = 0;
	num2 = 0;
	num3 = 0;
	for(var i = 0; i < arr.length; i++) {
		num = arr[i];
		num2 = arr[i+1];
		num3 = arr[1+2];
		if((num + num2 + num3) === 7) {
			return true;
		}
	}
	return false;
}

var arr = [1,2,3,4,5];
function oddBall() {
	var numHolder = 0; 
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] % 2 !== 0){
			numHolder += arr[i];
		}
	}
	return numHolder; 
}

var str = "foobar";

function dismvowel() {
	var newStr = "";
	for(var i = 0; i < str.length; i++) {

		if(str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {

			newStr += str[i];
		}
	}
	return newStr;
}