function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    const contact=document.getElementById("contact").value;
  
    const nameError = document.getElementById("name-error");
    
    const addressError = document.getElementById(
        "address-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    const contactError = document.getElementById(
        "contact-error"
    );
    

    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    contactError.textContent = "";
   
    let isValid = true;

    if (name === "" || name.length<5) {
        nameError.textContent =
            "Name cannot be blank.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent =
            "Please enter your address.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Invalid email Address";
        isValid = false;
    }

    if (password === "" || password.length < 7) {
        passwordError.textContent =
            "Please enter a  strong password with at least 6 characters.";
        isValid = false;
    }
    if (contact === "" || contact.length <= 9) {
        contactError.textContent =
            "Please enter a proper Mobile number";
        isValid = false;
    }
    
    return isValid;
    
}