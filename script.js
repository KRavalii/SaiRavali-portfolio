// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Reset the form fields
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector(".animated-name");
    nameElement.classList.add("show");
});
