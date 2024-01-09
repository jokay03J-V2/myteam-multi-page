import './index';

const containers = document.querySelectorAll('.quote');
const btns = document.querySelectorAll('.quote div')
btns.forEach((el, index) => {
    // Loop on each buttons to be clicked
    el.addEventListener("click", () => {
        const element = containers[index];
        // put true if open = false or if open dataset doesn't exist
        element.dataset.open = !element.dataset.open || element.dataset.open !== "true";
    })
})