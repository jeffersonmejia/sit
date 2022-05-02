const buttons = document.querySelectorAll("#panel-button button");
const footer = document.getElementById("footer");
console.log(footer);
const modalEl = {
	modal: document.getElementById("modal"),
	close: document.querySelector("#modal span a"),
	title: document.querySelector("#modal h3"),
	label: document.querySelectorAll("#modal label"),
	input: document.querySelectorAll("#modal input"),
	alert: document.querySelector("#modal h5"),
};

let config = {
	create: {
		title: "Crear viaje",
		label: {
			first: "Ruta",
			second: "Bus",
			third: "Chofer",
		},
		input: {
			first: "Ingrese la ruta",
			second: "Ingrese el bus",
			third: "Ingrese el chofer",
		},
		submit: "Crear",
		alert: {
			successfull: "Viaje creado éxitosamente",
			unsuccessful: "Aún quedan campos por llenar",
		},
	},
};

const listColor = {
	sucessful: "#029918",
	unsuccessful: "#ff3333",
	enable: "#ff477e",
	disable: "#ff8bac",
};

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
	}
};

buttons.forEach((element) => {
	element.addEventListener("click", (e) => {
		modal.style.visibility = "visible";
		footer.style.position = "initial";
		setButton(e);
	});
});

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

modalEl.close.addEventListener("click", () => {
	modalEl.modal.style.visibility = "hidden";
});
