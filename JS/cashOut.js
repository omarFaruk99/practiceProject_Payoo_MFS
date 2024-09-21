document.getElementById("btn-cashOut").addEventListener("click", function (event) {
    event.preventDefault()
    let withdrawAmount = document.getElementById("inputField-cashOut").value
    withdrawAmount = parseFloat(withdrawAmount);
    const inputFieldPinNumber = document.getElementById("cashOut-inputField-pinNumber").value

    // pin number validation
    if (inputFieldPinNumber === "999") {
        let currentBalance = document.getElementById("current-balance").innerText
        currentBalance = parseFloat(currentBalance);
        let newBalance = currentBalance - withdrawAmount;
        if(newBalance >=0){

            document.getElementById("current-balance").innerText = newBalance;
        }else{
            alert("Insufficient Balance!")
        }

    } else {
        alert("Wrong Pin Number!")
    }
})