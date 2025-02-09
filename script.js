// Function to switch between tabs (already in your code)
function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active state from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content and highlight the corresponding button
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// When the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // --- CAPTCHA Setup ---
    const contactForm = document.getElementById('contact-form');
    const captchaQuestion = document.getElementById('captcha-question');
    const captchaInput = document.getElementById('captcha');
    const captchaError = document.getElementById('captcha-error');

    // Generate a simple math CAPTCHA (e.g., "3 + 5")
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2;
    captchaQuestion.textContent = `${num1} + ${num2}`;

    // On form submission, validate the CAPTCHA first.
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Prevent the form from submitting immediately.
            event.preventDefault();

            // Check if the user's answer is correct.
            if (parseInt(captchaInput.value, 10) !== correctAnswer) {
                captchaError.textContent = "Incorrect CAPTCHA. Please try again.";
                captchaError.style.display = "block";
                return; // Stop here if the answer is wrong.
            } else {
                // Clear any previous error message.
                captchaError.textContent = "";
                captchaError.style.display = "none";
                // If CAPTCHA is correct, submit the form normally.
                contactForm.submit();
            }
        });
    }

    // --- Confirmation Message Handling ---
    // If the URL contains ?submitted=true then the form was submitted successfully.
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        // Hide the contact form.
        if (contactForm) {
            contactForm.classList.add('hidden');
        }
        // Show the confirmation message.
        const confirmationMessage = document.getElementById('confirmation-message');
        if (confirmationMessage) {
            confirmationMessage.classList.remove('hidden');
        }
    }
});
