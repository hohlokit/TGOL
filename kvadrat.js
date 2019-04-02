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
			//alert("Welcome back," + element.email);
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

function play() {
	for(var l=0;l<10;l++){
		debugger
		play1();
	}
}

function play1() {
	var neighbors = 0;
	var temp;

	for (var k = 0; k < 200; k++) {
		if (game.arr[k]) {
			neighbors = 0;
			
			if (k === 0) {
				temp = k + 199;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 180;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 181;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 39;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 21;
				(game.arr[temp].selected === true) ? neighbors++ : {};
			}
			else if (k >= 1 && k <= 18) {
				temp = k + 179;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 180;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 181;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 21;
				(game.arr[temp].selected === true) ? neighbors++ : {};
			}
			else if (k === 19) {
				temp = k + 179;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 180;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 161;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
			}
			else if ((((k - 9) / 2) % 10) === 5 && k >= 39 && k <= 179) {
				
				temp = k - 21;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 39;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
			}
			else if ((k / 2 % 10 == 0) && k != 0 && k != 180) {
				temp = k - 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 39;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 21;
				(game.arr[temp].selected === true) ? neighbors++ : {};
			}
			else if (k >= 21 && k <= 178) {
				temp = k - 21;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 21;
				(game.arr[temp].selected === true) ? neighbors++ : {};
			}
			else if (k === 180) {
				temp = k - 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k + 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 161;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 180;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 179;
				(game.arr[temp].selected === true) ? neighbors++ : {};
			}
			else if (k === 199) {
				temp = k - 21;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 20;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 39;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 1;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 19;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 181;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 180;
				(game.arr[temp].selected === true) ? neighbors++ : {};
				temp = k - 199;
				(game.arr[temp].selected === true) ? neighbors++ : {};

			}
			
			if (game.arr[k].selected === false) {
				if (neighbors == 3) {
					document.getElementById(k).selected = true;
					document.getElementById(k).style.backgroundColor = 'blue';
				}
			}
			if (game.arr[k].selected === true) {
				if (neighbors > 3 || neighbors < 2) {
					document.getElementById(k).selected = false;
					document.getElementById(k).style.backgroundColor = 'white';
				}
			}
			//(neighbors == 3) ? game.arr[k].selected = true : (neighbors == 2 || neighbors == 3) ? {} : game.arr[k].selected = false;
		}
	}


}