var field = document.getElementById('field');
var squareinf = [];

var arrLS = JSON.parse(window.localStorage.getItem('squareinf'));

var game = {
	size: '20x10',
	arr: []
};

function handleSquare(event) {

	var id = event.target.id;

	if (id != 'field') {
		if (event.target.style.backgroundColor === "") {
			event.target.style.backgroundColor = "blue";
			game.arr[id].selected = true;
		}
		else {
			event.target.style.backgroundColor = "";
			game.arr[id].selected = false;
		}
	}
}

window.onload = function () {
	redirect();
	render();
};

function redirect() {
	DataBase.forEach(element => {
		if (element.isonline === true) {
			alert("Welcome back," + element.email);
		}
		else {
			document.location.href = "./log.html";
		}
	});
}

function render() {
	var size = game.size.split('x');
	var height = +size[1], width = +size[0];
	var n = 0;
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			createUserSegment(n);
			game.arr.push({ selected: false });
			n++;
		}
	}
}

function createUserSegment(sum) {
	var div = document.createElement("div");
	div.className = 'square';
	div.id = sum;
	document.getElementById("field").appendChild(div);
}

function clearField() {
	while (field.lastChild) {
		field.removeChild(field.lastChild);
	}
}

function Clear() {
	clearField();
	render();
}
function fieldSize(fieldsize) {
	if (game.size === "20x10") {
		var temp = document.getElementById('field');
		temp.style.height = '150px';
		temp.style.width = '300px';
	}
	if (game.size === "50x30") {
		var temp = document.getElementById("field");
		temp.style.width = '750px';
		temp.style.height = '450px';
	}
	if (game.size === "70x50") {
		var temp = document.getElementById('field');
		temp.style.height = '750px';
		temp.style.width = '1050px';
	}
}

function handleChangeSize(event) {
	game.size = event.target.value;
	clearField(game.size);
	fieldSize(game.size);
	render();
}

function randomGen() {
	clearField();
	render();

	var squareTemp;
	var squareColorTemp;
	var countTemp;

	if (game.size === "20x10") {
		countTemp = Math.floor(Math.random() * (200 - 0)) + 0;

		for (var i = 0; i < countTemp; i++) {
			squareTemp = Math.floor(Math.random() * (200 - 0)) + 0;
			squareColorTemp = document.getElementById(squareTemp);
			squareColorTemp.style.backgroundColor = "blue";
			game.arr[squareTemp].selected = true;
		}
	}
	if (game.size === "50x30") {
		countTemp = Math.floor(Math.random() * (1500 - 0)) + 0;

		for (var i = 0; i < countTemp; i++) {
			squareTemp = Math.floor(Math.random() * (1500 - 0)) + 0;
			squareColorTemp = document.getElementById(squareTemp);
			squareColorTemp.style.backgroundColor = "blue";
			game.arr[squareTemp].selected = true;
		}
	}
	if (game.size === "70x50") {
		countTemp = Math.floor(Math.random() * (3500 - 0)) + 0;

		for (var i = 0; i < countTemp; i++) {
			squareTemp = Math.floor(Math.random() * (3500 - 0)) + 0;
			squareColorTemp = document.getElementById(squareTemp);
			squareColorTemp.style.backgroundColor = "blue";
			game.arr[squareTemp].selected = true;
		}
	}
}