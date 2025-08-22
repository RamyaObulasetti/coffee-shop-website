document.addEventListener('DOMContentLoaded', () => {
    const goToHomeBtn = document.getElementById('goToHomeBtn');

    goToHomeBtn.addEventListener('click', () => {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });

    // Adding smooth scroll effect for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });
});