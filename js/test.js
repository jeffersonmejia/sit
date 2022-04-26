if (e.target.value === "") {
	alerts.nationality.innerHTML = listAlert.inNull;
	alerts.nationality.style.color = listColor.unsuccessful;
} else if (!expression.nationality.test(e.target.value)) {
	alerts.nationality.innerHTML = listAlert.noValid;
	alerts.nationality.style.color = listColor.unsuccessful;
} else {
	alerts.nationality.innerHTML = "";
}
