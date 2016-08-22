var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115]

var data = ascii.prototype.call(view, function() {String.fromCharCode(this)});



var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115]

ascii.map(String.fromCharCode).join('').replace(/[^\x20-\x7E]/g, '');

