document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
});

// Counter Animation with Ease-In-Out
const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

const runCounters = () => {
    statNumbers.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // Animation duration in milliseconds (2 seconds)
        let startTime = null;

        const updateCount = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-in-out formula using a cosine wave
            const easeProgress = 0.5 * (1 - Math.cos(progress * Math.PI));
            
            const currentCount = Math.floor(easeProgress * target);
            counter.innerText = currentCount + '+';

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + '+'; // Ensure it lands precisely on target
            }
        };

        requestAnimationFrame(updateCount);
    });
};

// Trigger animation when the Impact section enters the viewport
const impactSection = document.querySelector('#impact');
if (impactSection) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                runCounters();
                animated = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(impactSection);
}

// ==========================================
// HERO SECTION SLIDESHOW
// Edit the heroImages array below to add/remove slideshow images.
// ==========================================
const heroImages = [
    "Dimagi Kura Logo expanded.png", // Add additional image paths here (e.g., "images/hero-1.jpg")
    "Dimagi Kura Logo expanded.png", // Add additional image paths here (e.g., "images/hero-2.jpg")
];

const initHeroSlideshow = () => {
    const container = document.getElementById('hero-slideshow');
    if (!container || heroImages.length === 0) return;

    // Clear existing inner content
    container.innerHTML = '';

    // Dynamically build stacked image elements
    const imageElements = heroImages.map((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Dimagi Kura Showcase Graphic ${index + 1}`;
        img.classList.add('hero-poster');
        if (index === 0) img.classList.add('active'); // Set first image active
        container.appendChild(img);
        return img;
    });

    // Start 4-second continuous crossfade loop if there are multiple images
    if (imageElements.length > 1) {
        let currentIndex = 0;
        setInterval(() => {
            imageElements[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % imageElements.length;
            imageElements[currentIndex].classList.add('active');
        }, 4000); // 4 Seconds per image
    }
};

// Initialize slideshow when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
});

const hint = document.getElementById("rightClickHint");
let hideTimeout;

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    // Position slightly to the right of the cursor
    hint.style.left = `${e.clientX + 18}px`;
    hint.style.top = `${e.clientY - 10}px`;

    hint.classList.add("show");

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        hint.classList.remove("show");
    }, 2500);
});

// Keep it following the cursor while visible
document.addEventListener("mousemove", (e) => {
    if (!hint.classList.contains("show")) return;

    hint.style.left = `${e.clientX + 18}px`;
    hint.style.top = `${e.clientY - 10}px`;
});