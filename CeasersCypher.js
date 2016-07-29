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

function try(offSetStr)
{

}