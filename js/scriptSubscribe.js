const buttonSubscribe = document.getElementById("buttonSubscribe");

buttonSubscribe.addEventListener("click", function () {
  const email = document.getElementById("emailSubscribe");
  const spanEmail = document.querySelector(".spanEmailSubscribe");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailRegex.test(email.value)) {
    spanEmail.style.display = "none";
    window.location.href = "../pages/error.html";
  } else {
    spanEmail.style.display = "block";
  }
});
