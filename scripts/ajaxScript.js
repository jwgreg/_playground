// Simple AJAX example

// 1. Create the request
var myRequest;

// feature check
if (window.XMLHttpRequest) {
	myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	myRequest = new ActiveXObject("MicrosoftXMLHTTP");
}

// Create an event handler
myRequest.onreadystatechange = function (){
	console.log('We are Called!');
	console.log(myRequest.readyState);
	if(myRequest.readyState === 4) {
		var p = document.createElement("p");
		var t = document.createTextNode(myRequest.responseText);
		p.appendChild(t);
		document.getElementById("mainContent").appendChild(p);
	}
};

// open and send it
myRequest.open('GET', 'scripts/simple.txt', true);
// any parameters
myRequest.send(null);



