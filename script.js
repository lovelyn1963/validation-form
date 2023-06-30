let id = (id) => document.getElementById(id); 
let radios = document.querySelectorAll("input[name = 'title']:checked")

let classes = (classes) => document.getElementsByClassName(classes); 

let username = id("contact-name"),
 phoneNo = id("phone"),
 address = id("address"),
  email = id("mail"),
  form = id("form"),
  radioRap = id("form5")
errorMsg = classes("error")

form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    if (username.value.trim() === "") {
        errorMsg[0].innerHTML = "Please input Name!";
        username.style.borderColor = "red";
    }
    else{
        errorMsg[0].innerHTML = " "
        username.style.borderColor = "green";
    }


     if (phoneNo.value.trim() === "") {
        errorMsg[1].innerHTML = "Please input Your Phone Number!"
        phoneNo.style.borderColor = "red";
    }
    
    
    else{
        errorMsg[1].innerHTML = " ";
        phoneNo.style.borderColor = "green";
    }


    if (address.value.trim() === "") {
        errorMsg[2].innerHTML = "Address Needed!";
        address.style.borderColor = "red";
    }
    
    else{
        errorMsg[2].innerHTML = " ";
        address.style.borderColor = "green";
    }


    if (email.value.trim() === "") {
        errorMsg[3].innerHTML = "Please input Your E-mail!";
        email.style.borderColor = "red";
    }
    else{
        errorMsg[3].innerHTML = " ";
        email.style.borderColor = "green";
    }

    if (radios == null ){
        errorMsg[5].innerHTML = "Please input Your E-mail!";
    }



})


