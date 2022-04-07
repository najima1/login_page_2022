let sing_in_btn = document.querySelector(".sing_in_btn");

// checkbox
let check_input = document.querySelector(".check_input");

let checkFn = () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};
check_input.addEventListener("click", checkFn);

let formFn = (event) => {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let email_error = document.querySelector(".email_error");
  let email_success = document.querySelector(".email_success");
  let regexs = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !email.match(regexs)) {
    email_error.innerHTML = "Not a valid email";
    email_success.innerHTML = "";
  } else {
    email_error.innerHTML = "";
    email_success.innerHTML = "Email is valid";
    document.querySelector("#email").value = "";
  }

  // password
  let password = document.querySelector("#password").value;
  let password_error = document.querySelector(".password_error");
  let password_success = document.querySelector(".password_success");
  let regexPass =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

  if (password.length < 6 || password === "") {
    password_error.innerHTML = "Password is less then 6 charecter";
  } else if (password.length > 15) {
    password_error.innerHTML = "Password is more then 15 charecter";
  } else if (!password.match(regexPass)) {
    password_error.innerHTML = "Password is weak!";
  } else if (password.match(regexPass)) {
    password_error.innerHTML = "";
    password_success.innerHTML = "Password is strong";
    document.querySelector("#password").value = "";
  }
  // else {
  //   password_error.innerHTML = "";
  //   password_success.innerHTML = "success";
  // }
};
sing_in_btn.addEventListener("click", formFn);
