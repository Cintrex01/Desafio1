const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const spanFirstName = document.getElementById("spanFirstName");
const spanLastName = document.getElementById("spanLastName");
const spanEmail = document.getElementById("spanEmail");
const spanMessage = document.getElementById("spanMessage");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const nameRegex = /^[a-zA-Z\s]*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isFirstNameValid = firstNameValidate();
  const isLastNameValid = lastNameValidate();
  const isEmailValid = emailValidate();
  const isMessageValid = messageValidate();
  if (isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {
    let formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "../pages/error.html";
  } else {
    firstNameValidate();
    lastNameValidate();
    emailValidate();
    messageValidate();
  }
});

function firstNameValidate() {
  if (firstName.value.length < 1 || !nameRegex.test(firstName.value)) {
    setError(firstName, spanFirstName);
    return false;
  } else {
    removeError(firstName, spanFirstName);
    return true;
  }
}

function lastNameValidate() {
  if (lastName.value.length < 1 || !nameRegex.test(lastName.value)) {
    setError(lastName, spanLastName);
    return false;
  } else {
    removeError(lastName, spanLastName);
    return true;
  }
}

function emailValidate() {
  if (!emailRegex.test(email.value)) {
    setError(email, spanEmail);
    return false;
  } else {
    removeError(email, spanEmail);
    return true;
  }
}

function messageValidate() {
  if (message.value.length < 10) {
    setError(message, spanMessage);
    return false;
  } else {
    removeError(message, spanMessage);
    return true;
  }
}

function setError(element, span) {
  element.style.border = "1px solid #b45555";
  span.style.display = "block";
}

function removeError(element, span) {
  element.style.border = "";
  span.style.display = "none";
}
