let billInputNumber = document.getElementById("input-num");
let btn5 = document.getElementById("btn-1");
let btn10 = document.getElementById("btn-2");
let btn15 = document.getElementById("btn-3");
let btn25 = document.getElementById("btn-4");
let btn50 = document.getElementById("btn-5");
let customInput = document.getElementById("input-custom");
let personNumInput = document.getElementById("persons");
let tipAmount = document.getElementById("result1");
let total = document.getElementById("result2");
let resetBtn = document.getElementById("reset");

const calculator = (btn) => {
  if (personNumInput.value == 0) {
    personNumInput.style.border = "1px solid red";
    alert("Number Of Persons Must be >0");
  } else {
    tipAmount.innerHTML = (
      (billInputNumber.value * btn.value) /
      100 /
      personNumInput.value
    ).toFixed(2);

    total.innerHTML = (
      billInputNumber.value / personNumInput.value +
      +tipAmount.innerHTML
    ).toFixed(2);
  }
};

resetBtn.addEventListener("click", (e) => {
  billInputNumber.value = "";
  personNumInput.value = "";
  tipAmount.innerHTML = "0.00";
  total.innerHTML = "0.00";
  customInput.value = "0";
});

btn5.addEventListener("click", () => {
  calculator(btn5);
});
btn10.addEventListener("click", () => {
  calculator(btn10);
});
btn15.addEventListener("click", () => {
  calculator(btn15);
});
btn25.addEventListener("click", () => {
  calculator(btn25);
});
btn50.addEventListener("click", () => {
  calculator(btn50);
});
customInput.addEventListener("change", () => {
  calculator(customInput);
});
