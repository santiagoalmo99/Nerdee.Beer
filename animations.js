/* =====================================================
   NERDEE.AI CLONE - Animations
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initFAQAccordion();
    initSmoothScroll();
});

// Scroll-triggered fade animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Add fade-up class to sections
    const sections = document.querySelectorAll(
        '.section-what, .section-transform, .section-panel, ' +
        '.section-features, .section-risk, .section-eio, ' +
        '.section-example, .section-panel-features, ' +
        '.section-integration, .section-exclusive, .section-faq'
    );
    
    sections.forEach(section => {
        const elements = section.querySelectorAll(
            'h2, h3, p, .eio-card, .feature-card-white, ' +
            '.config-card, .example-box, .example-steps, ' +
            '.exclusive-card, .faq-item'
        );
        elements.forEach((el, i) => {
            el.classList.add('fade-up');
            el.style.transitionDelay = `${i * 0.1}s`;
            observer.observe(el);
        });
    });
}

// FAQ Accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close others
            faqItems.forEach(other => {
                if (other !== item && other.classList.contains('open')) {
                    other.classList.remove('open');
                }
            });
            
            // Toggle current
            item.classList.toggle('open');
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

console.log('%c⚡ NERDEE.AI Clone', 'font-size: 18px; font-weight: bold; color: #10b981;');
