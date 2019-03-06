var field = document .getElementById("field");

window.onload = function(){
	for(var i = 0; i < 10; i++){
		var square = document.createElement("div");
		square.classList.add("square");
		square.onclick() = function(){
			square.style.backgroundColor = blue;
		};
		square.innerText = " ";

		field.appendChild(square);
	}
}