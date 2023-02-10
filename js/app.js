const billInput = document.querySelector("#bill")
const tipsBtn = document.querySelectorAll(".tip-btn")
const personInput = document.querySelector("#person")
let bill,
  person,
  tip = 0
// input keyup event
billInput.addEventListener("keyup", () => {
  activeError(billInput, parseInt(billInput.value))
})
personInput.addEventListener("keyup", () => {
  activeError(personInput, parseInt(personInput.value))
})
// function input error checker
function activeError(selection, value) {
  if (!value || value <= 0) {
    selection.classList.add("error-input")
    selection.nextElementSibling.classList.add("active")
  } else {
    selection.classList.remove("error-input")
    selection.nextElementSibling.classList.remove("active")
  }
}
//   console.log(value)
