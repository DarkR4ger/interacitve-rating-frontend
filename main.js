const mainContainer = document.querySelector(".container");
const thankYou = document.getElementById("box-2");

const submitButton = document.getElementById("submitBtn");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");

const score = document.getElementById("score");

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    score.innerHTML = rating.innerHTML;
  })
  submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none";
    thankYou.style.display = "block";
  })
})


rateAgain.addEventListener("click", () => {
  thankYou.style.display = "none";
  mainContainer.style.display = "block";
  score.innerHTML = 0;
});
