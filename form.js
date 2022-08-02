


function validateForm() {
  let email = document.forms["valid"]["mail"].value;

  let empty = document.forms["valid"]["game"].value;

  let passwo = document.forms["valid"]["passwor"].value;

  let anni = document.forms["valid"]["mois"].value;



  if (email == "") {
    document.getElementById("validate").innerHTML = "Email must be filled out";
    return false;
  }
  

  if (empty == "0") {
      document.getElementById("valida").innerHTML = "Please choose a game to continue!";
      return false;
  }

  if (anni == "") {
    document.getElementById("age").innerHTML = "Enter your age please!";
    return false;
  }else if (anni < 21) {
    document.getElementById("age").innerHTML = "You must be equal or over 21!";
    return false;
  }

  if (passwo == "" ) {
    document.getElementById("pass").innerHTML = "Please enter a password between 8-12 characters!";
    return false;
  }

 
  
  
}


