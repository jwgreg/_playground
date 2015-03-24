function myFunc1(a, b, c) {

	return a + b + c;

}

function myFunc2() {
	var x = 0;

	for (var i = 0; i < arguments.length; i++) {
		x = x + arguments[i]
	};
	return x;
}

function buttonClick() {
	console.log(myFunc2(1, 2, 3));
	console.log(myFunc2(1, 2, 3, 4 ));
	console.log(myFunc2(1, 2));
}

var Calc = function (start) {
	var that = this;
	this.add = function(x) {
		start += x;
		return that;
	};

	this.multiply = function (x) {
		start *= x;
		return that;
	};

	this.equals =  function (callback) {
		callback(start);
		return that;
	};
}

function doCalc() {
	new Calc(0)
		.add(1)
		.add(2)
		.multiply(3)
		.equals(function (result) {
			console.log(result);
		});
}






