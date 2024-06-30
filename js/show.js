window.addEventListener("load", function () {
  const formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    // Exibe os dados nos elementos HTML
    document.getElementById("firstName").textContent =
      "First Name: " + formData.firstName;
    document.getElementById("lastName").textContent =
      "Last Name: " + formData.lastName;
    document.getElementById("email").textContent = "Email: " + formData.email;
    document.getElementById("message").textContent =
      "Message: " + formData.message;
  }
});
