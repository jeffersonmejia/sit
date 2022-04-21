const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const userError = document.getElementById("user-error");
const passError = document.getElementById("pass-error");

const userRight = document.getElementById("user-right");
const passRight = document.getElementById("pass-right");

let guess = {
	user: false,
	pass: false,
};

const alertDisplay = {
	error: {
		user: `Ingresa tus datos, por favor`,
		pass: `Ingresa tus datos, por favor`,
	},
};

const expression = {
	user: /^[a-zA-Z]+[0-9]{4}$/,
	pass: {
		lowerCase: /[a-z]+/,
		upperCase: /[A-Z]+/,
		number: /[0-9]+/,
		char: /[^\w\d]/,
		notSpace: /[\S]+/,
		range: /^.{8,64}$/,
	},
};

const validateForm = (e) => {
	switch (e.target.name) {
		case "user": {
			// Borrar en deployment
			if (e.target.name === "user" && e.target.value === "Invitado") {
				userError.innerHTML = "";
				userRight.innerHTML = "Acceso de invitado";
				guess.user = true;
			} else if (e.target.name === "user" && e.target.value === "") {
				userRight.innerHTML = "";
				userError.innerHTML = "";
				userError.innerHTML = alertDisplay.error.user;
			} else {
				if (expression.user.test(e.target.value)) {
					userError.innerHTML = "";
					userRight.innerHTML = "El usuario ingresado es válido";
				} else {
					userRight.innerHTML = "";
					userError.innerHTML = "Los datos ingresados no son correctos";
				}
			}
			break;
		}

		case "pass": {
			// Borrar en deployment
			if (e.target.name === "pass" && e.target.value === "Invitado") {
				passError.innerHTML = "";
				passRight.innerHTML = "Acceso de invitado";
				guess.pass = true;
			} else if (e.target.name === "pass" && e.target.value === "") {
				passRight.innerHTML = "";
				passError.innerHTML = "";
				passError.innerHTML = alertDisplay.error.pass;
			} else {
				passError.innerHTML = "";
			}

			break;
		}
	}
};

inputs.forEach((input) => {
	input.addEventListener("keyup", validateForm);
	input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (e) => {
	if (guess.user === false) {
		e.preventDefault(e);
	} else if (guess.pass === false) {
		e.preventDefault(e);
	}
});
