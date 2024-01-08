
// navbar
const closeBtn = document.getElementById("closeBtn");
const openBtn = document.getElementById("openBtn");
const navbar = document.getElementById("navbar");

openBtn.addEventListener("click", handleOpen)
closeBtn.addEventListener("click", handleClose);

function handleOpen() {
    navbar.dataset["open"] = true;
}

function handleClose() {
    navbar.dataset["open"] = false;
}
