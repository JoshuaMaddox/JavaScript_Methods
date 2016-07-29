

var myObj = { "Objkey": "value", "Objkey2": "value2", "Objkey3": "value3"};

function myLooper() {
	for(i in myObj) {
    console.log (i, myObj[i])
	}
}

