/* =====================================================
   PROPUESTA NERDEE - INTERACTIVITY
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProgressBar();
    initBottleAnimations();
    initPricingCards();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Elements to animate on scroll
    const elements = document.querySelectorAll(
        '.feature-card, .pricing-card, .timeline-item, ' +
        '.stat-card, .module-card, .step-box'
    );
    
    elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${i * 0.1}s`;
        observer.observe(el);
    });
}

// Animated progress bar for timeline
function initProgressBar() {
    const progressBar = document.querySelector('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate progress to 33% (Week 1 complete)
                setTimeout(() => {
                    progressBar.style.width = '100%';
                }, 500);
            }
        });
    }, { threshold: 0.5 });

    if (progressBar) {
        observer.observe(progressBar);
    }
}

// Bottle liquid fill animation trigger
function initBottleAnimations() {
    const bottles = document.querySelectorAll('.bottle');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    bottles.forEach(bottle => {
        observer.observe(bottle);
    });
}

// Pricing card hover effects
function initPricingCards() {
    const cards = document.querySelectorAll('.pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const price = card.querySelector('.amount');
            if (price) {
                // Add a subtle scale effect
                price.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const price = card.querySelector('.amount');
            if (price) {
                price.style.transform = 'scale(1)';
            }
        });
    });
}

// Smooth scroll for anchor links
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

// Module cards interaction
const moduleCards = document.querySelectorAll('.module-card');
moduleCards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('active')) {
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        }
    });
});

// Beer match cards interaction
const beerMatches = document.querySelectorAll('.beer-match');
beerMatches.forEach(match => {
    match.addEventListener('click', () => {
        // Highlight effect
        match.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.3)';
        setTimeout(() => {
            match.style.boxShadow = 'none';
        }, 1000);
    });
});

// Add transition to price amounts
document.querySelectorAll('.amount').forEach(amount => {
    amount.style.transition = 'transform 0.3s ease';
});

console.log('%c⚡ Propuesta Nerdee Cargada', 'font-size: 18px; font-weight: bold; color: #10b981;');
