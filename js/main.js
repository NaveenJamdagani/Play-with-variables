var inputs = document.querySelectorAll(".controls input");

console.log(inputs);

var variableChange = function () {
	console.log(this.name);
}

inputs.forEach(input => input.addEventListener("change",variableChange));
inputs.forEach(input => input.addEventListener("input",variableChange));



