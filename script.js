const advice = document.querySelector(".advice");
const advice_no = document.querySelector(".advice_no");
const myButton = document.getElementById("button");
function fetching() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      advice_no.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
    });
}
fetching();

myButton.addEventListener("click", fetching);
