const checkButton = document.getElementById("check-btn");

const userInput = document.getElementById("text-input");

const result = document.getElementById("result");

checkButton.addEventListener("click", () => {

  const replace = userInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (userInput.value === "") {
    alert("Please input a value");
  } else if (userInput.value.length === 1) {
    result.innerText = `${userInput.value} is a palindrome`;
  } 
    else if (replace === [...replace].reverse().join("")) {
    result.innerText = `${userInput.value} is a palindrome`;
  } else {
    result.innerText = `${userInput.value} is not a palindrome`;
}});