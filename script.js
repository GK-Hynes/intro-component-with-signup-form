const form = document.querySelector(".form");
const inputContainers = document.querySelectorAll(".input-container");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const validateEmail = (email) => {
  const emailRegex = /^([A-Za-zÀ-ÖØ-öø-ÿ\d\._-]+)@([A-Za-zÀ-ÖØ-öø-ÿ\d-]+)\.([A-Za-zÀ-ÖØ-öø-ÿ]{2,66})(\.[A-Za-zÀ-ÖØ-öø-ÿ]{2,8})?$/;

  return emailRegex.test(String(email).toLowerCase());
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Remove existing error styles
  inputContainers.forEach((el) => {
    el.classList.remove("error");
  });

  if (firstName.value === "") {
    firstName.parentElement.classList.add("error");
  }

  if (lastName.value === "") {
    lastName.parentElement.classList.add("error");
  }

  if (!validateEmail(email.value)) {
    email.parentElement.classList.add("error");
  }

  if (password.value === "") {
    password.parentElement.classList.add("error");
  }
});
