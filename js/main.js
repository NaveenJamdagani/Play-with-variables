var inputs = document.querySelectorAll(".controls input");

console.log(inputs);

var variableChange = function () {
	if(this.name === "base")
	{
		document.documentElement.style.setProperty(`--${this.name}`,this.value);
	}
	else
	{
		document.documentElement.style.setProperty(`--${this.name}`,this.value + "px");
	}
	console.log(this.name);
}

inputs.forEach(input => input.addEventListener("input",variableChange));



