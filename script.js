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

// Add this code to handle the contact form submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            // Gather form data
            const formData = new FormData(contactForm);

            try {
                // Send the form data to the form's action endpoint
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Hide the form and show the confirmation message
                    contactForm.reset();
                    contactForm.classList.add('hidden');
                    document.getElementById('confirmation-message').classList.remove('hidden');
                } else {
                    alert('Something went wrong. Please try again later.');
                }
            } catch (error) {
                console.error('Error submitting the form:', error);
                alert('There was an error sending your message.');
            }
        });
    }
});
