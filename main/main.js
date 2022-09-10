const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const buttons = document.querySelectorAll(".btn");
const choose = document.getElementById("choose");

// add eventlistener to submit

submit.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    mainContainer.style.display = "none"
});

// add eventlistener to rateAgain

rateAgain.addEventListener("click", () => {
    thankYou.classList.add("hidden");
    mainContainer.style.display = "block";
})



buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        choose.innerText = btn.innerText;
    })
})
