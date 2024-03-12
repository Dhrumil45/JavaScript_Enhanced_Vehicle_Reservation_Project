"use strict";

$(document).ready(() => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  // Moving Focus to the “Pickup Date” text box.
  document.getElementById("pickup_date").focus();

  // Form submission event handler
  document
    .getElementById("reservation_form")
    .addEventListener("submit", function (event) {
      // Validation
      var PickupDateInput = document.getElementById("pickup_date");
      var DaysInput = document.getElementById("days");
      var NameInput = document.getElementById("name");
      var EmailInput = document.getElementById("email");
      var PhoneInput = document.getElementById("phone");
      var PickupDate = PickupDateInput.value.trim();
      var Days = DaysInput.value.trim();
      var Name = NameInput.value.trim();
      var Email = EmailInput.value.trim();
      var Phone = PhoneInput.value.trim();

      // Validating each text box
      if (PickupDate === "") {
        displayError(PickupDateInput, "Please enter the pickup date.");
        event.preventDefault();
        return;
      }

      if (Days === "" || isNaN(Days)) {
        displayError(DaysInput, "MUST enter a numeric value.");
        event.preventDefault();
        return;
      }

      if (Name === "") {
        displayError(NameInput, "Enter your name.");
        event.preventDefault();
        return;
      }

      if (!emailPattern.test(Email)) {
        displayError(EmailInput, "MUST enter a valid email address.");
        event.preventDefault();
        return;
      }

      if (Phone === "") {
        displayError(PhoneInput, "Enter your phone number.");
        event.preventDefault();
        return;
      }

      // trim entries and putting them back in controls
      PickupDateInput.value = PickupDate;
      DaysInput.value = Days;
      NameInput.value = Name;
      EmailInput.value = Email;
      PhoneInput.value = Phone;
    });

  // Function for error messages
  function displayError(inputElement, errorMessage) {
    var errorElement = inputElement.nextElementSibling;
    errorElement.textContent = errorMessage;
    inputElement.classList.add("error");
    inputElement.addEventListener("input", clearError);
  }

  // Function for clearing error messages
  function clearError(event) {
    var inputElement = event.target;
    var errorElement = inputElement.nextElementSibling;
    errorElement.textContent = "";
    inputElement.classList.remove("error");
    inputElement.removeEventListener("input", clearError);
  }
});
