function Book () {
	var name = '';
	var archive = [];
	//var price = 0;

	Object.defineProperty(this, 'name', {
		get: function () {
			return name;
		},
		set: function (value) {
			name = value;
			archive.push({val: name });
		}
	});

	// Object.defineProperty(this, 'price', {

	// 	get: function () {
	// 		return price;
	// 	},
	// 	set: function (value) {
	// 		price = value;
	// 	}
	// });

	this.getArchive = function () { return archive; };
	
}

function ListBooks() {
	var aBook = new Book();
	console.log('Set object Properties');
	aBook.name = 'Moby Dick';
	aBook.name = 'War and Peace';
	aBook.name = 'The Hobbit';
	//aBook.price = 19.99;
	console.log('Show object Properties');
	//console.log(aBook.name);
	//console.log(aBook.price);

	var bookList = [] 
	bookList = aBook.getArchive();
	console.log('Book Count - ' + bookList.length);
	for (var i = 0; i < bookList.length; i++) {
		console.log('Book ' + (i + 1) + ' - ' + bookList[i].val);
	};

}
