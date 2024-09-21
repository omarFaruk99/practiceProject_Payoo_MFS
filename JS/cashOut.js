document.getElementById("btn-cashOut").addEventListener("click",function(){
    let withdrawAmount = document.getElementById("inputField-cashOut").value
    withdrawAmount = parseFloat(withdrawAmount);
    const inputFieldPinNumber = document.getElementById("inputField-pinNumber").value

    // pin number validation
    if(inputFieldPinNumber === "999"){

    }else{
        alert("Wrong Pin Number!")
    }
})