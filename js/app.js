const billInput = document.querySelector("#bill")
const tipsBtn = document.querySelectorAll(".tip-btn")
const customTip = document.querySelector("#custom-tip")
const personInput = document.querySelector("#person")
const tipAmount = document.querySelector("#tipAmount")
const total = document.querySelector("#total")
const resetBtn = document.querySelector(".result-reset")
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
// get tip from tip btns
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
// get tip from tip custom input
customTip.addEventListener("keyup", () => {
  tip = parseInt(customTip.value)
  calculateTip(bill, tip, persons)
  tipsBtn.forEach((btn) => {
    if (btn.classList.contains("selected-btn"))
      btn.classList.remove("selected-btn")
  })
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
resetBtn.addEventListener("click", () => {
  if (resetBtn.classList.contains("active-reset")) {
    resetBtn.classList.remove("active-reset")
    resetValues()
  }
})
// function calcualteTip and total
function calculateTip(bill, tip, persons) {
  if (bill && tip && persons) {
    const tipAmo = (bill * tip) / 100 / persons
    const totalAmo = bill / persons + tip
    tipAmount.textContent = `$${tipAmo.toFixed(1)}`
    total.textContent = `$${totalAmo.toFixed(1)}`
    if (!resetBtn.classList.contains("active-reset")) {
      resetBtn.classList.add("active-reset")
    }
    console.log({
      tipAmount: tipAmo,
      total: totalAmo,
      tip: tip,
      bill: bill,
      persons: persons,
    })
  }
}

// function for reset
function resetValues() {
  bill = 0
  persons = 0
  tip = 0
  billInput.value = ""
  personInput.value = ""
  tipsBtn.forEach((btn) => {
    if (btn.classList.contains("selected-btn"))
      btn.classList.remove("selected-btn")
  })
  tipAmount.textContent = `$00.0`
  total.textContent = `$00.0`
}
