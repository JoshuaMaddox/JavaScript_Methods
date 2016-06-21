var str = "16539821543"

function ourOddity (str)
{
	var strHolder = "";

	for(var i = 0; i < str.length; i++)
		{
			if(str[i] % 2 !== 0)
			{	
					//odd is asumed - if its first and the second is even then add dash to right
				if(i === 0 && str[i+1] % 2 === 0)
				{
					strHolder = strHolder + (str[i] + "-");
				}
					//odd is asumed - if its first do nothing
				else if(i === 0)
				{
					strHolder = strHolder + str[i];
				}
					// if its odd and the second is even the put a dash to the right and the left
				else if(str[i] % 2 !== 0 && str[i+1] % 2 === 0)
				{
					strHolder = strHolder + ("-" + str[i]) + "-";
				}
					// if its odd put a dash to the left
				else if(str[i+1] % 2 !== 0) 
				{
					strHolder = strHolder + ("-" +str[i]);
					console.log("I am the 4th statement " + i + " --- " + str[i]);
				}
			}	
			 // if even don't add a dash just add into the string "strHolder"
			else
			{
				strHolder = strHolder + str[i];
			}
		}
		//return the string strHolder
	return strHolder;
}