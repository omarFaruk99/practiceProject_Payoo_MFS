document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault()
    let inputValueAddAmount = document.getElementById("inputField-addMoney").value
    let inputValuePinNumber = document.getElementById("inputField-pinNumber").value
    // check pinNumber
    if (inputValuePinNumber === '999') {
        let curretBalance = document.getElementById("current-balance").innerText
        curretBalance = parseFloat(curretBalance);
        inputValueAddAmount = parseFloat(inputValueAddAmount);
        let newBalance = curretBalance + inputValueAddAmount;
        // console.log(newBalance);
        document.getElementById("current-balance").innerText = newBalance;
    } else {
        alert("Pin Number incorrect!")
    }
});