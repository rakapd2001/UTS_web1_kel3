  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm_password");

    form.addEventListener("submit", function (event) {
      // Reset error messages
      resetErrorMessages();

      let isValid = true;

      // Validate First Name
      if (firstName.value.trim() === "") {
        showError(firstName, "Nama depan wajib diisi.");
        isValid = false;
      }

      // Validate Last Name
      if (lastName.value.trim() === "") {
        showError(lastName, "Nama belakang wajib diisi.");
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        showError(email, "Email tidak valid.");
        isValid = false;
      }

      // Validate Password
      if (password.value.length < 6) {
        showError(password, "Password harus terdiri dari minimal 6 karakter.");
        isValid = false;
      }

      // Validate Confirm Password
      if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Password tidak cocok.");
        isValid = false;
      }

      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault();
      }
    });

    // Show error message
    function showError(input, message) {
      const parent = input.parentElement;
      const errorMessage = document.createElement("small");
      errorMessage.className = "text-danger";
      errorMessage.textContent = message;
      parent.appendChild(errorMessage);
    }

    // Reset error messages
    function resetErrorMessages() {
      const errorMessages = document.querySelectorAll(".text-danger");
      errorMessages.forEach((msg) => msg.remove());
    }
  });
