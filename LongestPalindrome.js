var str = "wrtwertwewretwertxyzzyxttyurtrytghsjjalkjlasdfkj;lasjd;flkajs;dlfj;alkajsdlfjjjjkdkdkdlalggggggggggggggggggggl;jl;kj;lkj;alkdjf;laskdjf;laskdjf";

function mainPalChecker(str)
{
	var strHolder = str.split("").reverse().join("");
	return strHolder == str;
}

function longPalOwn(str)
{
	longestPal = 0;
	finalPal = "";

	for (var i = 0; i < str.length; i++)
		{
			var tempStringOne = str.substr(i, str.length);
			for(var j = tempStringOne.length; j >= 0; j--)
				{
					var tempStringTwo = tempStringOne.substr(0, j)
					if(tempStringTwo.length <= 1)
						{
							continue;
						}
					if(mainPalChecker(tempStringTwo))
						{							
							if(tempStringTwo.length > longestPal)
								{
									longestPal = tempStringTwo.length;
									finalPal = tempStringTwo;
								}
						}
				}
		}
	return(longestPal + " : " + finalPal);
}