// main.js

// Intersection Observer for Section Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // We can stop observing after reveal if we want
            // revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with 'reveal' class
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Handling
    const reservationForm = document.getElementById('reservation-form');
    const formMsg = document.getElementById('form-msg');

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(reservationForm);
            const name = formData.get('name');
            
            // Simulate processing
            const submitBtn = reservationForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';

            setTimeout(() => {
                submitBtn.style.display = 'none';
                formMsg.style.display = 'block';
                formMsg.textContent = `Your reservation has been received, ${name}. We look forward to serving you at Falaq!`;
                reservationForm.reset();
                
                // Keep the success message visible
                setTimeout(() => {
                    // Optionally reset the button after some time
                    // submitBtn.style.display = 'flex';
                    // submitBtn.disabled = false;
                    // submitBtn.textContent = 'Request Reservation';
                }, 5000);
            }, 1000);
        });
    }

    // Dynamic Navbar Background
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'oklch(100% 0 0 / 0.9)';
            nav.style.boxShadow = 'var(--shadow-soft)';
        } else {
            nav.style.background = 'oklch(100% 0 0 / 0.7)';
            nav.style.boxShadow = 'none';
        }
    });
});
