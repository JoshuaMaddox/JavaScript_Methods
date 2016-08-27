var str = "sfGuisOthO12D|2 6 9 12";

function decodeStr(str) {
	var strChars = str.match(/[^|]*/i).toString();
	var keys = str.match(/[^|]*$/).toString().split(' ');
	console.log(typeof keys);
	var decodedStr = '';
	for(var i = 0; i < keys.length; i++) {
		var decNum = Number(keys[i]);
		console.log(typeof decNum);
		decodedStr += strChars.substring(decNum, decNum + 1);
	}
	return decodedStr
}

decodeStr(str);