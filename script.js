const formEl = document.querySelector(".form");
const amountOnAccountEl = document.querySelector(".AmountOnAccount");
const serviceQualityEl = document.querySelector(".ServiceQuality");
const amountOfPplEl = document.querySelector(".AmountOfPpl");
const tipEl = document.querySelector(".Tip");
const allEl = document.querySelector(".All");


const submitForm = (event) => {
    event.preventDefault();
    num1 = amountOnAccountEl.value
    num2 = amountOfPplEl.value
    num3 = serviceQualityEl.value
    num4 = num1/num3/num2
    num5 = num1/num2+num4
    tipEl.textContent = num4
    allEl.textContent = num5
}

formEl.addEventListener("submit",submitForm);
