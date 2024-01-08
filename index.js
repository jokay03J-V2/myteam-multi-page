import "./css/base.scss";

// navbar
const mobileBtn = document.querySelector(".navbar-mobile");
mobileBtn.addEventListener("click", handleNavbar)

function handleNavbar() {
    mobileBtn.classList.add("active");

    mobileBtn.addEventListener("focusout", () => {
        mobileBtn.classList.remove("active");
        mobileBtn.removeEventListener("focusout", handleNavbar);
    })
}