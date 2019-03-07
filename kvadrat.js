function create() {
	for(var i = 0; i < 2000; i++) {
			createUserSegment();
		}
}		


function createUserSegment() {
  	var div = document.createElement("div");
  	div.className = 'square';
  	div.onclick = function() {
  	div.style.backgroundColor = "blue";
  	};
  	document.getElementById("field").appendChild(div);
}

create();