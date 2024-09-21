document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault()
    const inputValueAddAmount = document.getElementById("inputField-addMoney").value
    const inputValuePinNumber = document.getElementById("inputField-pinNumber").value
    console.log(inputValueAddAmount, inputValuePinNumber);
});