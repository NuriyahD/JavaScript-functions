const button = document.querySelector("#caculateBtn")
const message = document.querySelector("#message")

function calculatScore(testone, testTwo) {
    const total = testone + testTwo;
    return total;
}

function showResult(name, score) {
    message.textContent = `${name}, your score is ${score}`;
}

button.addEventListener("click", function () {
  const studentname = prompt("What is your name?");
  const firstScore = Number(prompt("Enter first score"));
  const secondScore = Number(prompt("Enter second score"));
  
  const finalScore = calculatScore(firstScore, secondScore);
  showResult(studentname, finalScore);
})