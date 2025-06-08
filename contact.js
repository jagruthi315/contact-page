const contactForm = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !subject || !message) {
        statusMessage.textContent = 'All fields are required!';
        statusMessage.style.color = 'red';
        return;
    }

    // Show success message
    statusMessage.textContent = 'Message sent successfully!';
    statusMessage.style.color = 'green';

    // Clear the form
    contactForm.reset();
});