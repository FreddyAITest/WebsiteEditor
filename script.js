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

    // 2. Theme Switch on scroll (Dark to Light to Dark)
    const problemSection = document.getElementById('problem');
    const body = document.body;
    let isLightMode = false;

    window.addEventListener('scroll', () => {
        const rect = problemSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // If Problem section is substantially in view
        if (rect.top < viewportHeight * 0.7 && rect.bottom > viewportHeight * 0.3) {
            if (!isLightMode) {
                body.classList.remove('theme-dark');
                body.classList.add('theme-light');
                isLightMode = true;
            }
        } else {
            if (isLightMode) {
                body.classList.remove('theme-light');
                body.classList.add('theme-dark');
                isLightMode = false;
            }
        }
    });

    // 3. Hero Parallax Effect on Mouse Move
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // max 10px shift
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            heroBg.style.transform = `translate(${-x}px, ${-y}px) scale(1.05)`;
        });
    }

    // 4. Carousel Controls
    const track = document.getElementById('carouselTrack');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    if (track && btnPrev && btnNext) {
        const scrollAmount = window.innerWidth * 0.6 + 32; // ~60vw slide width + gap

        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // 5. Form Submission Simulator
    const form = document.getElementById('pioneerForm');
    const successMsg = document.getElementById('successMsg');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = 'Sende...';
            btn.disabled = true;

            // Simulate API Call
            setTimeout(() => {
                form.querySelectorAll('.form-group, .form-row').forEach(el => el.style.display = 'none');
                btn.style.display = 'none';
                successMsg.classList.remove('hidden');
            }, 1500);
        });
    }
});
