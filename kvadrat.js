var field = document.getElementById('field');

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
	else
	debugger;
}

window.onload = function () {
	render();
};

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
	var temp = document.getElementsByClassName('square');
	for (var i = 0; i < temp.length; i++) {
		temp[i].style.backgroundColor = 'white';
	}
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