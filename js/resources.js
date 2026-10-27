/* ==========================================
   DIMAGI KURA — Blog & Resource Dataset
   ========================================== */

const articlesData = [
    {
        id: "navigating-youth-anxiety",
        title: "Navigating Youth Anxiety in Academic Environments",
        description: "Practical strategies and evidence-based insights for students dealing with academic stress, performance pressure, and burnout.",
        date: "October 12, 2026",
        readTime: "10 min read",
        author: "Dimagi Kura Editorial Team",
        reviewer: "Clinical Advisory Board",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
        content: `
            <p>Academic environments are primary hubs of intellectual and personal growth for young adults. However, they can also become breeding grounds for chronic stress, anxiety, and burnout. Recognizing the signs of mental strain early is the first step toward building sustainable resilience.</p>
            <h3>Understanding the Pressure</h3>
            <p>Students today face unprecedented expectations regarding academic achievement, extracurricular participation, and future career readiness. When continuous pressure is applied without adequate coping mechanisms, mental fatigue sets in, diminishing both well-being and academic performance.</p>
            <h3>Actionable Coping Strategies</h3>
            <p>1. <strong>Establish Boundaries:</strong> Separate study hours from personal downtime. Constant connectivity leads to cognitive exhaustion.</p>
            <p>2. <strong>Mindful Breathing:</strong> Incorporate grounding exercises into your daily routine to regulate the nervous system during high-stress periods.</p>
            <p>3. <strong>Seek Community:</strong> Isolation compounds anxiety. Sharing experiences with peers fosters mutual understanding and emotional relief.</p>
            <p>Remember, prioritizing mental health is not a sign of weakness—it is a fundamental prerequisite for sustained personal excellence.</p>
        `
    },
    {
        id: "breaking-mental-health-stigma",
        title: "Breaking the Silence: Youth Mental Health in Nepal",
        description: "An in-depth look at how youth-led advocacy is transforming conversations around mental health and emotional well-being across Nepali communities.",
        date: "September 28, 2026",
        readTime: "6 min read",
        author: "Aayush Maharjan",
        reviewer: "Dimagi Kura Directorate",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        content: `
            <p>For generations, mental health in Nepal has remained shrouded in stigma and silence. Emotional struggles were frequently dismissed as personal weakness or temporary phases, preventing individuals from seeking timely, professional support.</p>
            <h3>The Power of Youth-Led Dialogue</h3>
            <p>Youth organizations are uniquely positioned to bridge generational divides. By speaking candidly about vulnerability, stress, and emotional health, young advocates normalize these vital conversations in schools, colleges, and digital spaces.</p>
            <h3>Moving Forward Together</h3>
            <p>True cultural transformation requires collective commitment. When educational institutions, families, and communities unite to prioritize mental well-being, we create an environment where every individual feels valued, heard, and supported.</p>
        `
    },

    
];

document.addEventListener('DOMContentLoaded', () => {
    // Render blog list on resources.html
    const blogListContainer = document.getElementById('blog-list-container');
    if (blogListContainer) {
        blogListContainer.innerHTML = articlesData.map(art => `
            <article class="card-shadow" style="margin-bottom: 2.5rem;">
                <img src="${art.image}" alt="${art.title}" style="width: 100%; height: 320px; object-fit: cover; margin-bottom: 1.5rem;">
                <div style="display: flex; gap: 1rem; color: var(--color-medium-gray); font-size: 0.9rem; margin-bottom: 0.5rem;">
                    <span>${art.date}</span> • <span>${art.readTime}</span>
                </div>
                <h2><a href="blog/article.html?id=${art.id}">${art.title}</a></h2>
                <p>${art.description}</p>
                <a href="blog/article.html?id=${art.id}" class="btn btn-secondary" style="margin-top: 1rem;">Read Article</a>
            </article>
        `).join('');
    }

    // Render individual article on blog/article.html
    const articleContainer = document.getElementById('single-article-container');
    if (articleContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('id');
        const article = articlesData.find(a => a.id === articleId) || articlesData[0]; // fallback to first

        document.title = `${article.title} — Dimagi Kura`;

        articleContainer.innerHTML = `
            <div style="max-width: 900px; margin: 0 auto; padding: 4rem 2rem;">
                <div style="font-size: 0.95rem; color: var(--color-medium-gray); margin-bottom: 1rem;">
                    <a href="../resources.html">Resources</a> / <span>Article</span>
                </div>
                <h1 style="margin-bottom: 1.5rem;">${article.title}</h1>
                <div style="display: flex; flex-wrap: wrap; gap: 2rem; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); padding: 1rem 0; margin-bottom: 2.5rem; font-size: 0.95rem; color: var(--color-medium-gray);">
                    <div><strong>Written by:</strong> ${article.author}</div>
                    <div><strong>Verified by:</strong> ${article.reviewer}</div>
                    <div><strong>Published:</strong> ${article.date}</div>
                    <div><strong>Read Time:</strong> ${article.readTime}</div>
                </div>
                <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 450px; object-fit: cover; margin-bottom: 3rem;">
                <div class="article-body" style="font-size: 1.15rem; line-height: 1.8;">
                    ${article.content}
                </div>
            </div>

            <section class="bg-off-white" style="margin-top: 4rem; padding: 4rem 0;">
                <div class="container">
                    <h2>Check Out Our Other Blogs</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-top: 2rem;">
                        ${articlesData.filter(a => a.id !== article.id).map(rel => `
                            <div class="card-shadow">
                                <img src="${rel.image}" alt="${rel.title}" style="width: 100%; height: 200px; object-fit: cover; margin-bottom: 1rem;">
                                <div style="font-size: 0.85rem; color: var(--color-medium-gray); margin-bottom: 0.5rem;">${rel.date} • ${rel.readTime}</div>
                                <h3><a href="article.html?id=${rel.id}">${rel.title}</a></h3>
                                <p style="font-size: 0.95rem;">${rel.description}</p>
                                <a href="article.html?id=${rel.id}" class="btn btn-secondary" style="margin-top: 1rem; font-size: 0.85rem; padding: 0.6rem 1.5rem;">Read More</a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }
});