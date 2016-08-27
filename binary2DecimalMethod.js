String.prototype.binaryToDecimal = function () {
		var output = 0;
		var powerCounter = 1
		for (var i = this.length - 1; i >= 0 ; i--) {
			var numBin = Number(this[i]);
			if(numBin === 1) {
				output += powerCounter;
			}
			powerCounter *=2
		}
		return(output)
	}

function assert_equal(binary, decimal) {
	if(binary === decimal) {
		document.write('The binary number is equal to the decimal number.');
	} else {
		document.write('The binary number is NOT equal to the decimal number.');
	}
} 