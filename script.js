


document.addEventListener('DOMContentLoaded', () => {
    
  
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const form = document.getElementById('idr-contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.innerText = "Processing...";
        submitBtn.style.opacity = "0.7";
        submitBtn.disabled = true;

        setTimeout(() => {
            alert("Thank you! Your registration interest has been received. Our team will contact you shortly.");
            submitBtn.innerText = originalText;
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
            form.reset();
        }, 1500);
    });

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

   
    document.querySelectorAll('.card, .about-text, .about-visual, .pipeline').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
});


