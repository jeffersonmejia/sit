const buttons = document.querySelectorAll("#panel-button button");
const modal = document.getElementById("modal");

const setButton = (element) => {
	switch (element.target.id) {
		case "create": {
			console.log("it works");
			break;
		}
	}
};

buttons.forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		modal.style.visibility = "visible";
		setButton(e);
	});
});

// modal.addEventListener("click", (e) => {
// 	e.preventDefault();
// });
