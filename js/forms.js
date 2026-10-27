/* ==========================================
   DIMAGI KURA — Google Forms Configuration
   ========================================== */

const googleFormsUrls = {
    partner: "https://forms.gle/GjEw6dHeyigaZAWJ7",
    sponsor: "https://forms.gle/zizoZt28LJXjq4ek6",
    volunteer: "https://forms.gle/gVtXTGRaqb4HE2Xq9",
    director: "https://forms.gle/XjS8Y7w4MXZVpxtf6",
    director_preference: "https://forms.gle/rLDv3XpF8cQsWMH37"
};

document.addEventListener('DOMContentLoaded', () => {
    // Bind Google Form buttons based on data attributes
    const formButtons = document.querySelectorAll('[data-form-type]');
    formButtons.forEach(btn => {
        const type = btn.getAttribute('data-form-type');
        if (googleFormsUrls[type]) {
            btn.href = googleFormsUrls[type];
            btn.setAttribute('target', '_blank');
            btn.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Handle join.html dynamic view rendering
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    
    if (typeParam && document.getElementById('join-content-container')) {
        const sections = document.querySelectorAll('.join-section-view');
        sections.forEach(sec => sec.style.display = 'none');
        
        const targetSection = document.getElementById(`view-${typeParam}`);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
});