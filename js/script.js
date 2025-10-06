// Scroll to top button functionality
const slidupButton = document.querySelector('.slidup');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        slidupButton.style.opacity = '1';
        slidupButton.style.pointerEvents = 'auto';
    } else {
        slidupButton.style.opacity = '0';
        slidupButton.style.pointerEvents = 'none';
    }
});

// Scroll to top when the button is clicked
slidupButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});




document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".ul").style.left = "0%"
})
//add event listener to close
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".ul").style.left = "-70%"
})


// Form handling with EmailJS
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
          const formData = {
              'first-name': document.getElementById('first-name').value,
              'last-name': document.getElementById('last-name').value,
              'email': document.getElementById('email').value,
              'phone': document.getElementById('phone').value,
              'service': document.getElementById('service').value,
              'message': document.getElementById('message').value
          };

          await emailjs.send('Eren9676', 'template_1bc2awi', formData);
          
          successMessage.style.display = 'block';
          contactForm.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
              successMessage.style.display = 'none';
          }, 5000);

      } catch (error) {
          console.error('Failed to send email:', error);
          alert('Failed to send message. Please try again later.');
      }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .lang, .contact-info li').forEach(el => {
  observer.observe(el);
});