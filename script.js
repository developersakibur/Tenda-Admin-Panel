function submit() {
  let inputValue = document.getElementById("inputValue").value;
  let msgFild = document.querySelector(".errorMsg");
  let pass = "123";
  if (inputValue === pass) {
    msgFild.innerHTML = "Successful. You have enterd the right password";
    msgFild.style = "color:green;";
  } else if (inputValue == 0) {
    msgFild.innerHTML = "Please enter the password";
    msgFild.style = "color:#f60;";
  } else {
    msgFild.innerHTML = "Sorry! Password don't match.";
    msgFild.style = "color:red;";
  }

  alert("Passwoed:- 123");
}

function passSH() {
  let inputValue = document.getElementById("inputValue");
  let eye = document.getElementById("eye");
  let eyeClass = eye.className;
  let eyeClose = "eye-close";
  let eyeOpen = "eye-open";

  if (eyeClass === eyeClose) {
    eye.classList.remove("eye-close");
    eye.classList.add("eye-open");
    inputValue.type = "text";
  } else if (eyeClass === eyeOpen) {
    eye.classList.remove("eye-open");
    eye.classList.add("eye-close");
    inputValue.type = "password";
  }
}
