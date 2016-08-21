
// the ROT13 Version of Ceasers Cypher:


function rot13(str) {
	var tempVar = '';
	var tempVarConv = '';
	var newStr = '';
	for(var i = 0; i < str.length; i++){
		var tempVar = str[i].charCodeAt(0);
		if(tempVar < 65 || tempVar > 90){
			newStr += String.fromCharCode(tempVar);
		} else if(tempVar > 64 && tempVar < 78) {
			tempVar = tempVar + 13;
			newStr += String.fromCharCode(tempVar);
		} else if (tempVar > 77 && tempVar < 91) {
			tempVar = tempVar - 13;
			newStr += String.fromCharCode(tempVar);
		}
	}
	str = newStr;
	return str;
}