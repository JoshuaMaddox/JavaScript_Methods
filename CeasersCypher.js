var offSet = 3;
var offSetStr = "xyz";
var strReturn = "";

function CeasarCipher()
{
	var tempStr = "";
	for (var i = 0; i < offSetStr.length; i++)
		{
			var tempVar = offSetStr[i].charCodeAt(0);
			console.log(offSetStr[i].charCodeAt(0));
			var tempVarConv = tempVar + 3;
			if(tempVarConv === 123 || tempVarConv === 124 || tempVarConv === 125)
				{
					tempVarConv -= 26;
					console.log("--I am tempVarConv--- " + tempVarConv)
				}
			strReturn += String.fromCharCode(tempVarConv);
			console.log(strReturn);
		}	
}


// the ROT13 Version:


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