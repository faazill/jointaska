// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FAQ Toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.toggle').textContent = '+';
        });

        // If the clicked item wasn't active, open it
        if (!isActive) {
            faqItem.classList.add('active');
            question.querySelector('.toggle').textContent = '-';
        }
    });
});

// Form submission handling
const form = document.getElementById('ambassador-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        college: document.getElementById('college').value,
        course: document.getElementById('course').value,
        year: document.getElementById('year').value,
        whyJoin: document.getElementById('why-join').value
    };

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your application! We will get back to you soon.');
    form.reset();
}); 