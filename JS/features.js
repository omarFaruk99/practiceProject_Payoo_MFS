document.getElementById("btn-toggle-cashOut").addEventListener('click', function () {
    document.getElementById("cash-out-form-input").classList.remove("hidden");
    document.getElementById("add-money-form-input").classList.add("hidden");

})

document.getElementById("btn-toggle-addMoney").addEventListener("click", function () {
    document.getElementById("add-money-form-input").classList.remove("hidden");
    document.getElementById("cash-out-form-input").classList.add("hidden");
})