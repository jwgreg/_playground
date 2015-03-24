// Simple prototype example

// Constructor for prototype
function Player(n, s, r) {
	this.name = n;
	this.score = s;
	this.rank = r;
}

// Methods for prototype
Player.prototype.logInfo = function() {
	console.log("I am:",  this.name);
}

Player.prototype.promote = function() {
	this.rank++;
	console.log("My new rank is: ", this.rank);
}


// Implementation of Prototype

var fred = new Player("Fred", 10000, 5);
fred.logInfo();
fred.promote();

var barney = new Player("Barney", 20000, 3);
barney.logInfo();
barney.promote();

