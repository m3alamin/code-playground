var root = document.getElementById('root');

var newTag = document.createElement('h1');
newTag.setAttribute('id', 'someAwesomeId');
var newContent = document.createTextNode("Hi there and greetings!"); 
newTag.appendChild(newContent);
root.appendChild(newTag);


var main = document.getElementById('main');
var lastDiv = document.getElementById('lastDiv');


function addNewItem(domElement, id) {
	var createDivTag = document.createElement('div');
	createDivTag.setAttribute('id', id);
	var newContent = document.createTextNode("Hi there and greetings!"); 
	createDivTag.appendChild(newContent);
	domElement.appendChild(createDivTag);
}


initLastDiv();

function initLastDiv() {
	document.getElementById('lastDiv') && document.getElementById('lastDiv').remove();
	addNewItem(main, 'lastDiv');
	lastDivEventListener();
};


function lastDivEventListener() {
	document.getElementById('lastDiv').addEventListener('click', function() {
		addNewItem(main, Math.random());
		initLastDiv();
	});
}

