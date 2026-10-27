/* ==========================================
   DIMAGI KURA — Main Shared Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        if (window.innerWidth <= 768) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('open');
            });
        }
    });

    /* ==========================================
       DIMAGI KURA — Active Navigation Highlighting
       ========================================== */
    let currentPath = window.location.pathname;
    
    // Normalize path for trailing slashes
    if (currentPath.endsWith('/') && currentPath.length > 1) {
        currentPath = currentPath.slice(0, -1);
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        const cleanHref = href.replace('.html', '').replace('./', '');

        const isHome = (currentPath === '/' || currentPath === '/index' || currentPath.endsWith('/index.html'));
        const linkIsHome = (cleanHref === 'index' || cleanHref === 'index.html' || href === '/');

        link.classList.remove('active');

        if (isHome && linkIsHome) {
            link.classList.add('active');
        } else if (!isHome && !linkIsHome && currentPath.includes(cleanHref)) {
            link.classList.add('active');
        }
    });

    /* ==========================================
       DIMAGI KURA — Right-Click Disable & 
       Cursor-Following Mental Health Messages
       ========================================== */
    const motivationalMessages = [
        "Breathe, you've got this.",
        "Take a deep breath.",
        "Your mental health matters.",
        "It's okay not to be okay.",
        "Rest is part of the work.",
        "Be gentle with yourself.",
        "One step at a time.",
        "Protect your peace.",
        "You are more than your thoughts.",
        "Progress, not perfection.",
        "Pause and reset.",
        "Healing takes time.",
        "You are not alone.",
        "Give your mind a break.",
        "Small steps still count.",
        "Your feelings are valid.",
        "Inhale peace, exhale stress.",
        "It's okay to slow down.",
        "Honor your boundaries.",
        "Tomorrow is a new day.",
        "Let go of what you can't control.",
        "You are enough just as you are.",
        "Check in with yourself today.",
        "Your peace is worth protecting.",
        "Unplug and recharge.",
        "Compassion starts with yourself.",
        "Breathe through the heavy moments.",
        "You deserve your own kindness.",
        "Listen to your body and mind.",
        "Softness is a strength.",
        "Let it go and breathe.",
        "Peace begins from within.",
        "You are stronger than you think.",
        "Give yourself grace today.",
        "Storms don't last forever.",
        "Protect your energy.",
        "Slow down; you're doing fine.",
        "Your well-being comes first.",
        "Healing isn't linear.",
        "You matter.",
        "Today, choose your peace.",
        "Breathe out the doubt.",
        "Nurture your mind.",
        "Create space for your peace.",
        "Focus on the present moment.",
        "Let your mind rest.",
        "You're doing the best you can.",
        "Peace of mind is priceless.",
        "Honor your feelings today.",
        "Take it easy on yourself."
    ];

    const toast = document.createElement('div');
    toast.id = 'motivational-toast';
    toast.style.cssText = `
        position: fixed;
        background-color: #ffffff;
        color: #111111;
        padding: 0.65rem 1.15rem;
        border: 1px solid #e2e2e2;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        font-size: 0.85rem;
        font-weight: 500;
        z-index: 99999;
        transition: opacity 0.15s ease;
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
        transform: translate(15px, 15px);
    `;
    document.body.appendChild(toast);

    let timeoutId;
    let isVisible = false;

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
        toast.textContent = motivationalMessages[randomIndex];

        toast.style.left = `${e.clientX}px`;
        toast.style.top = `${e.clientY}px`;
        toast.style.opacity = '1';
        isVisible = true;

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            toast.style.opacity = '0';
            isVisible = false;
        }, 3000);
    });

    document.addEventListener('mousemove', (e) => {
        if (isVisible) {
            toast.style.left = `${e.clientX}px`;
            toast.style.top = `${e.clientY}px`;
        }
    });
});