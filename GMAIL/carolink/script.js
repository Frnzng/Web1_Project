// Function to handle login form submission
function handleLoginForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Fetching form elements
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here, you can perform validation or authentication checks
    // For demonstration purpose, let's just log the email and password
    console.log("Login Details:");
    console.log("Email:", email);
    console.log("Password:", password);
}

// Function to handle signup form submission
function handleSignupForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Fetching form elements
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email2').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    // Here, you can perform form validation
    // For demonstration purpose, let's just log the form data
    console.log("Signup Details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Birthdate:", birthdate);
    console.log("Gender:", gender);
}

// Open the modal
function openModal(event) {
  event.preventDefault();
  document.getElementById("myModal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Accept terms and conditions
function acceptTerms() {
  document.getElementById("terms").checked = true;
  closeModal(); // Close the modal after accepting terms
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to the "Accept" button
  var acceptButton = document.querySelector(".accept-button");
  acceptButton.addEventListener("click", acceptTerms);
});

