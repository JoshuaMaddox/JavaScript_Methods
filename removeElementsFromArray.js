
// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are 
// of the same value as these arguments.

function destroyer(arr){
	arr = arguments[0];
	for(var i = 1; i < arguments.length; i++){
		var currentArg = arguments[i];
		var filteredArr = arr.filter(function(arrayValue){
			return arrayValue !== currentArg;	
		});
		arr = filteredArr;
	}
	return(arr);		
}
