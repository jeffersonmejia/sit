const account = document.getElementById("account-box");
const accountBtn = document.getElementById("account-icon");
const blockDisplay = document.getElementById("block-display");
const buttons = document.getElementById("buttons");

//DATA SUMMARY
let clicked = false;

accountBtn.addEventListener("click", () => {
	if (clicked === false) {
		clicked = true;
		account.style.visibility = "visible";
	} else if (clicked === true) {
		clicked = false;
		account.style.visibility = "hidden";
	}
	console.log("listening event");
});

console.log("hola");
