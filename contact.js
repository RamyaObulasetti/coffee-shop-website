document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent Successfully!');
    this.reset();
}); 
java