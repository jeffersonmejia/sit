const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expression = {
	name: /^[a-zA-Z]{3,16}$/,
	lastname: /^[a-zA-Z]{4,16}$/,
	age: /^\d{2}$/,
	nation: /^[a-zA-Z]{4,16}$/,
	residence: /^([a-zA-Z]|[a-zA-Z]\s[a-zA-Z]){4,16}$/,
	address: /^.+$/,
	tel: /^\d{10}$/,
};

const validateForm = (e) => {
	//AQUI ES EL PROBLEMA
	switch (e.target.lastname) {
		case "name": {
			console.log("it works");
			break;
		}
	}
};

//AQUI NO ES EL PROBLEMA
inputs.forEach((input) => {
	input.addEventListener("click", validateForm);
});

//AQUI TAMPOCO
form.addEventListener("submit", (e) => {
	e.preventDefault();
});
