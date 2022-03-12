
const videos = {
	one: `https://www.youtube.com/embed/px0E7HA-4a0`,
	two: `https://www.youtube.com/embed/1Bs8wX9vVCI`,
	three: `https://www.youtube.com/embed/l33d4tIoI2k`,
	four: `https://www.youtube.com/embed/xBcC83QZ2g0`,
}

function showPopup(type) {
	const popup = document.querySelector(`#${type}`);
	const iframe = $("iframe")
	const backdrop = document.querySelector(".backdrop");
	iframe.attr("src", videos[type]);
	popup.classList.remove("hidden");
	
	backdrop.classList.remove("hidden");
}

function hidePopup() {
	const popupOne = document.querySelector("#one");
	const popupTwo = document.querySelector("#two");
	const popupThree = document.querySelector("#three");
	const popupFour = document.querySelector("#four");

	const backdrop = document.querySelector(".backdrop");

	const iframe = $("iframe");
	iframe.attr("src", "");

	popupOne.classList.add("hidden");
	popupTwo.classList.add("hidden");
	popupThree.classList.add("hidden");
	popupFour.classList.add("hidden");
	backdrop.classList.add("hidden");
}