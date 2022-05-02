//MAIN PANEL BUTTON
const buttons = document.querySelectorAll("#panel-button button");
const footer = document.getElementById("footer");

//MODAL ELEMENTS
const modalEl = {
	modal: document.getElementById("modal"),
	contain: document.querySelector("#modal form"),
	close: document.querySelector("#modal span a"),
	title: document.querySelector("#modal h3"),
	label: document.querySelectorAll("#modal label"),
	input: document.querySelectorAll("#modal input"),
	alert: document.querySelector("#modal h5"),
};

//MODAL SETTING MESSAGES DEPENDING OF THE BUTTON SELECTED
let config = {
	create: {
		title: "Crear viaje",
		label: {
			first: "Ruta",
			second: "Bus",
			third: "Chofer",
		},
		input: {
			first: "Ingresa la ruta",
			second: "Ingresa el bus",
			third: "Ingresa el chofer",
		},
		submit: "Crear",
		alert: {
			successfull: "Los datos ingresados han sido validados",
			unsuccessful: "Aún quedan campos por llenar",
		},
	},
	set: {
		title: "Seleccionar viaje",
		label: {
			first: "Ruta",
			second: "Bus",
		},
		input: {
			first: "Ingresa la ruta",
			second: "Ingresa el bus",
		},
		submit: "Buscar",
	},
	add: {
		title: "Añadir cliente",
		label: {
			first: "Cédula de identidad",
			second: "Nombre",
			third: "Destino",
		},
		input: {
			first: "Ingresa CI",
			second: "Ingresa el nombre",
			third: "Ingresa el destino",
		},
		submit: "Añadir",
	},
};
//TO SET ON ALERTS
const listColor = {
	sucessful: "#029918",
	unsuccessful: "#ff3333",
	enable: "#ff477e",
	disable: "#ff8bac",
};
//MODAL SETTING INPUT AND LABEL
const setButton = (element) => {
	switch (element.target.id) {
		case "create": {
			modalEl.title.innerHTML = config.create.title;
			modalEl.label.forEach((el) => {
				switch (el.id) {
					case "label-first": {
						el.innerHTML = config.create.label.first;
						break;
					}
					case "label-second": {
						el.innerHTML = config.create.label.second;
						break;
					}
					case "label-third": {
						el.innerHTML = config.create.label.third;
						break;
					}
				}
			});
			modalEl.input.forEach((el) => {
				switch (el.id) {
					case "in-first": {
						el.placeholder = config.create.input.first;
						break;
					}
					case "in-second": {
						el.placeholder = config.create.input.second;
						break;
					}
					case "in-third": {
						el.placeholder = config.create.input.third;
						el.style.borderBottom = "1px solid #adadad";
						break;
					}
					case "submit": {
						el.value = config.create.submit;
						break;
					}
				}
			});
			break;
		}
		case "set": {
			modalEl.title.innerHTML = config.set.title;
			modalEl.label.forEach((el) => {
				switch (el.id) {
					case "label-first": {
						el.innerHTML = config.set.label.first;
						break;
					}
					case "label-second": {
						el.innerHTML = config.set.label.second;
						break;
					}
					case "label-third": {
						el.innerHTML = "";
						break;
					}
				}
				modalEl.input.forEach((el) => {
					switch (el.id) {
						case "in-first": {
							el.placeholder = config.set.input.first;
							break;
						}
						case "in-second": {
							el.placeholder = config.set.input.second;
							break;
						}
						case "in-third": {
							el.placeholder = "";
							el.style.borderBottom = "0px";
							break;
						}
						case "submit": {
							el.value = config.set.submit;
							break;
						}
					}
				});
			});

			break;
		}
		case "close": {
			modalEl.modal.style.visibility = "hidden";
			footer.style.position = "absolute";
			break;
		}
		case "add-client": {
			modalEl.title.innerHTML = config.add.title;
			modalEl.label.forEach((el) => {
				switch (el.id) {
					case "label-first": {
						el.innerHTML = config.add.label.first;
						break;
					}
					case "label-second": {
						el.innerHTML = config.add.label.second;
						break;
					}
					case "label-third": {
						el.innerHTML = config.add.label.third;
						break;
					}
				}
			});
			modalEl.input.forEach((el) => {
				switch (el.id) {
					case "in-first": {
						el.placeholder = config.add.input.first;
						break;
					}
					case "in-second": {
						el.placeholder = config.add.input.second;
						break;
					}
					case "in-third": {
						el.placeholder = config.add.input.third;
						break;
					}
					case "submit": {
						el.value = config.add.submit;
						break;
					}
				}
			});
		}
	}
};
//TO APPEAR MODAL
buttons.forEach((element) => {
	element.addEventListener("click", (e) => {
		modalEl.modal.style.visibility = "visible";
		modalEl.contain.style.transform = "translateY(0)";
		footer.style.position = "initial";
		setButton(e);
	});
});
//TO NOT SEND HTTPS REQUEST DEFAULT
modalEl.modal.addEventListener("submit", (e) => {
	e.preventDefault();
	modalEl.alert.style.color = listColor.sucessful;
	modalEl.alert.innerHTML = config.create.alert.successfull;
	modalEl.alert.style.visibility = "visible";
	setTimeout(() => {
		modalEl.modal.style.visibility = "hidden";
		modalEl.alert.style.visibility = "hidden";
		footer.style.position = "absolute";
	}, 1500);
});
//BUTTON TO CLOSE MODAL
modalEl.close.addEventListener("click", () => {
	modalEl.modal.style.visibility = "hidden";
	footer.style.position = "absolute";
	modalEl.contain.style.transform = "translateY(-200%)";
});
