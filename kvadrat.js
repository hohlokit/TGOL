var game = {
	size: '20x10',
	
};


window.onload = function () {
	render();
};

function render() {
	var size = game.size.split('x');
	var height = +size[1], width = +size[0];
	
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			createUserSegment()
		}
	}
}


function createUserSegment() {
	var div = document.createElement("div");
	div.className = 'square';
	div.onclick = function () {
		div.style.backgroundColor = "blue";
	};
	document.getElementById("field").appendChild(div);
}

function handleChangeSize(event) {
	game.size = event.target.value;
}