const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const checkBox = document.getElementById("terms");
const submit = document.getElementById("submit");

const alerts = {
	name: document.getElementById("alert-name"),
	lastname: document.getElementById("alert-lastname"),
	age: document.getElementById("alert-age"),
	nationality: document.getElementById("alert-nationality"),
	residence: document.getElementById("alert-residence"),
	address: document.getElementById("alert-address"),
	phone: document.getElementById("alert-phone"),
	email: document.getElementById("alert-email"),
	submit: document.getElementById("alert-submit"),
};

const expression = {
	name: /^[a-zA-Z]{3,16}\s[a-zA-Z]{3,16}$/,
	lastname: /^[a-zA-Z]{3,16}\s[a-zA-Z]{3,16}$/,
	age: /^\d{2}$/,
	nationality: /^[a-zA-Z]{4,16}$/,
	residence: /^([a-zA-Z]|[a-zA-Z]\s[a-zA-Z]){4,16}$/,
	address: /^.+$/,
	phone: /^\d{10}$/,
	email: /^[a-zA-Z]{4,24}\d*@(gmail|outlook|icloud).com$/,
};

const listAlert = {
	inNull: "Ingresa tus datos, por favor",
	noValid: "Tus datos no son válidos",
	submit: "Te has registrado correctamente",
};

const listColor = {
	sucessful: "#029918",
	unsuccessful: "#ff3333",
	enable: "#ff477e",
	disable: "#ff8bac",
};
let filled = false;

const validateForm = (e) => {
	switch (e.target.id) {
		case "name": {
			if (e.target.value === "") {
				alerts.name.innerHTML = listAlert.inNull;
				alerts.name.style.color = listColor.unsuccessful;
			} else if (!expression.name.test(e.target.value)) {
				alerts.name.innerHTML = listAlert.noValid;
				alerts.name.style.color = listColor.unsuccessful;
			} else {
				alerts.name.innerHTML = "";
			}
			break;
		}
		case "lastname": {
			if (e.target.value === "") {
				alerts.lastname.innerHTML = listAlert.inNull;
				alerts.lastname.style.color = listColor.unsuccessful;
			} else if (!expression.lastname.test(e.target.value)) {
				alerts.lastname.innerHTML = listAlert.noValid;
				alerts.lastname.style.color = listColor.unsuccessful;
			} else {
				alerts.lastname.innerHTML = "";
			}

			break;
		}

		case "age": {
			if (e.target.value === "") {
				alerts.age.innerHTML = listAlert.inNull;
				alerts.age.style.color = listColor.unsuccessful;
			} else if (!expression.age.test(e.target.value)) {
				alerts.age.innerHTML = listAlert.noValid;
				alerts.age.style.color = listColor.unsuccessful;
			} else {
				alerts.age.innerHTML = "";
			}
			break;
		}
		case "nationality": {
			if (e.target.value === "") {
				alerts.nationality.innerHTML = listAlert.inNull;
				alerts.nationality.style.color = listColor.unsuccessful;
			} else if (!expression.nationality.test(e.target.value)) {
				alerts.nationality.innerHTML = listAlert.noValid;
				alerts.nationality.style.color = listColor.unsuccessful;
			} else {
				alerts.nationality.innerHTML = "";
			}
			break;
		}
		case "residence": {
			if (e.target.value === "") {
				alerts.residence.innerHTML = listAlert.inNull;
				alerts.residence.style.color = listColor.unsuccessful;
			} else if (!expression.residence.test(e.target.value)) {
				alerts.residence.innerHTML = listAlert.noValid;
				alerts.residence.style.color = listColor.unsuccessful;
			} else {
				alerts.residence.innerHTML = "";
			}
			break;
		}
		case "address": {
			if (e.target.value === "") {
				alerts.address.innerHTML = listAlert.inNull;
				alerts.address.style.color = listColor.unsuccessful;
			} else if (!expression.address.test(e.target.value)) {
				alerts.address.innerHTML = listAlert.noValid;
				alerts.address.style.color = listColor.unsuccessful;
			} else {
				alerts.address.innerHTML = "";
			}
			break;
		}
		case "phone": {
			if (e.target.value === "") {
				alerts.phone.innerHTML = listAlert.inNull;
				alerts.phone.style.color = listColor.unsuccessful;
			} else if (!expression.phone.test(e.target.value)) {
				alerts.phone.innerHTML = listAlert.noValid;
				alerts.phone.style.color = listColor.unsuccessful;
			} else {
				alerts.phone.innerHTML = "";
			}
			break;
		}
		case "email": {
			if (e.target.value === "") {
				alerts.email.innerHTML = listAlert.inNull;
				alerts.email.style.color = listColor.unsuccessful;
			} else if (!expression.email.test(e.target.value)) {
				alerts.email.innerHTML = listAlert.noValid;
				alerts.email.style.color = listColor.unsuccessful;
			} else {
				alerts.email.innerHTML = "";
			}
			break;
		}
	}
};

checkBox.addEventListener("click", () => {
	if (checkBox.checked) {
		submit.style.backgroundColor = listColor.enable;
		submit.style.cursor = "pointer";
		filled = true;
	} else {
		submit.style.backgroundColor = listColor.disable;
		submit.style.cursor = "not-allowed";
	}
});

inputs.forEach((input) => {
	input.addEventListener("keyup", validateForm);
	input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (filled === true) {
		alerts.submit.innerHTML = listAlert.submit;
		alerts.submit.style.color = listColor.sucessful;
	}
});
