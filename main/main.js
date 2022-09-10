const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const buttons = document.querySelectorAll(".btn");
const choose = document.getElementById("choose");

submit.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    mainContainer.style.display = "none"
})
