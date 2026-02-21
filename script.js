document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .fade-up');
    revealElements.forEach(el => revealObserver.observe(el));


    // 2. Hero Parallax Effect on Mouse Move
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        document.addEventListener('mousemove', (e) => {
            // Apply a very subtle movement to the background image
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;
            heroBg.style.transform = `translate(${-x}px, ${-y}px) scale(1.02)`;
        });
    }


    // 3. Form Submission Simulator
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = 'Sende Nachricht...';
            btn.disabled = true;

            // Simulate API Call
            setTimeout(() => {
                form.querySelectorAll('.form-group, .form-row').forEach(el => el.style.display = 'none');
                btn.style.display = 'none';
                successMsg.classList.remove('hidden');
            }, 1200);
        });
    }

    // 4. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(255,255,255,0.95)';
            navLinks.style.padding = '2rem 0';
            navLinks.style.borderBottom = '1px solid #eee';
        });
    }

});
