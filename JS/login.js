
// step -1 : set event handler
document.getElementById("btn-login").addEventListener("click",function(event){
    /* 
    Form Submission: When a form is submitted, the default behavior is to refresh the page. 
    Using event.preventDefault() allows you to handle the form submission with JavaScript without reloading the page.
    */
//    step -2: prevent default behaviour(prevent reloading browser)
    event.preventDefault();
    console.log("enter login button");

    // step -3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
    // step -4: get pin code
    const pinCode = document.getElementById("pin-code").value;
    console.log(pinCode);
})