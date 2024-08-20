// Initialize EmailJS with your Public Key
emailjs.init("Yncjpb6MM_08Uq_Gt"); // Replace with your actual public key

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send form data to EmailJS
    emailjs.sendForm('service_qzfkruj', 'template_0ei53vr', this)
        .then(function(response) {
            alert('Submission Successful!');
        }, function(error) {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
});

