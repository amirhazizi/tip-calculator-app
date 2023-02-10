const billInput = document.querySelector("#bill")
const tipsBtn = document.querySelectorAll(".tip-btn")
const personInput = document.querySelector("#person")
const tipAmount = document.querySelector("#tipAmount")
const total = document.querySelector("#total")
let bill,
  persons,
  tip = 0
// input keyup event
billInput.addEventListener("keyup", () => {
  activeError(billInput, parseInt(billInput.value))
  bill = parseInt(billInput.value)
  calculateTip(bill, tip, persons)
})
personInput.addEventListener("keyup", () => {
  activeError(personInput, parseInt(personInput.value))
  persons = parseInt(personInput.value)
  calculateTip(bill, tip, persons)
})
// function input error checker
function activeError(selection, value) {
  if (!value || value <= 0) {
    selection.classList.add("error-input")
    selection.nextElementSibling.classList.add("active")
    return false
  } else {
    selection.classList.remove("error-input")
    selection.nextElementSibling.classList.remove("active")
    return true
  }
}
//   console.log(value)
tipsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipsBtn.forEach((b) => {
      if (b.classList.contains("selected-btn"))
        b.classList.remove("selected-btn")
    })
    btn.classList.add("selected-btn")
    tip = parseInt(btn.value)
    activeError(billInput, bill)
    activeError(personInput, persons)
    calculateTip(bill, tip, persons)
  })
})

function calculateTip(bill, tip, persons) {
  if (bill && tip && persons) {
    const tipAmo = (bill * tip) / 100 / persons
    const totalAmo = bill / persons + tip
    tipAmount.textContent = `$${tipAmo.toFixed(1)}`
    total.textContent = `$${totalAmo.toFixed(2)}`
    console.log({
      tipAmount: tipAmo,
      total: totalAmo,
      tip: tip,
      bill: bill,
      persons: persons,
    })
  }
}
