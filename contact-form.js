// Initialize EmailJS
emailjs.init("YussyZXyTv_TXcGGHB");

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;

    // Function to show message
    function showMessage(text, bgColor, textColor, borderColor) {
        let messageDiv = document.getElementById('form-message');
        if (!messageDiv) {
            messageDiv = document.createElement('div');
            messageDiv.id = 'form-message';
            messageDiv.style.padding = "15px";
            messageDiv.style.borderRadius = "8px";
            messageDiv.style.textAlign = "center";
            messageDiv.style.fontWeight = "bold";
            messageDiv.style.marginTop = "15px";
            form.parentNode.insertBefore(messageDiv, form.nextSibling);
        }

        messageDiv.textContent = text;
        messageDiv.style.backgroundColor = bgColor;
        messageDiv.style.color = textColor;
        messageDiv.style.border = `1px solid ${borderColor}`;

        // Remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Send form data to EmailJS
    emailjs.sendForm('service_bk6ft2f', 'template_0ei53vr', form)
        .then(function(response) {
            showMessage(
                "Thank you for registering! We will contact you shortly.",
                "#d4edda", // light green
                "#155724",
                "#c3e6cb"
            );
            form.reset(); // Clear the form
        }, function(error) {
            showMessage(
                "Failed to send message. Please try again later.",
                "#f8d7da", // light red
                "#721c24",
                "#f5c6cb"
            );
        });
});
