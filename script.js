// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const contactForm = document.querySelector(".contact-form");

    // Add an event listener for form submission
    contactForm.addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the input fields
        const name = contactForm.querySelector("input[name='name']");
        const email = contactForm.querySelector("input[name='email']");
        const subject = contactForm.querySelector("input[name='subject']");
        const message = contactForm.querySelector("textarea[name='message']");

        // Validate the form
        if (validateForm(name, email, subject, message)) {
            // If validation is successful, you can submit the form or perform other actions
            alert("Form submitted successfully!");
            // contactForm.submit(); // Uncomment this line to submit the form
        }
    });

    // Function to validate the form
    function validateForm(name, email, subject, message) {
        // Check if all fields are filled
        if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
            alert("Please fill in all fields.");
            return false;
        }

        // Validate email format
        if (!validateEmail(email.value.trim())) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    }

    // Function to validate email format using a regular expression
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
