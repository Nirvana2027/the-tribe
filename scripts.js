document.getElementById('membership-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for joining our tribe! We will contact you shortly.');
    // Here you can add code to handle the form submission, e.g., send data to a server
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // Here you can add code to handle the form submission, e.g., send data to a server
});