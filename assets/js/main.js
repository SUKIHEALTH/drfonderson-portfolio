/* ==========================================================================
   MAIN JAVASCRIPT LOGIC - DR. SABINE FONDERSON PORTFOLIO
   Enhanced with Modal Article Reader & Quick Topic Booking
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initArticlesShowcase();
  initArticleModal();
  initProjectFilter();
  initQuickTopicBooking();
  initLeadMagnet();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle (Dark / Light)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
    updateThemeIcon(storedTheme);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}

/* --------------------------------------------------------------------------
   2. Sticky Header on Scroll
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const drawer = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openDrawer = () => {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   4. Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. AI & Tech Project Filtering
   -------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Articles & Thought Leadership Interactive Showcase
   -------------------------------------------------------------------------- */
let currentArticlePage = 1;
const articlesPerPage = 6;
let currentArticleCategory = 'all';
let currentArticleSearch = '';

function initArticlesShowcase() {
  const container = document.getElementById('articles-grid-container');
  const searchInput = document.getElementById('articles-search-input');
  const catFilterBtns = document.querySelectorAll('.article-cat-btn');
  const prevBtn = document.getElementById('articles-prev-btn');
  const nextBtn = document.getElementById('articles-next-btn');

  if (!container || typeof window.ARTICLES_DATA === 'undefined') return;

  renderArticles();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentArticleSearch = e.target.value.toLowerCase().trim();
      currentArticlePage = 1;
      renderArticles();
    });
  }

  catFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentArticleCategory = btn.getAttribute('data-category');
      currentArticlePage = 1;
      renderArticles();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentArticlePage > 1) {
        currentArticlePage--;
        renderArticles();
        document.getElementById('articles-archive-anchor')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const filtered = getFilteredArticles();
      const maxPage = Math.ceil(filtered.length / articlesPerPage);
      if (currentArticlePage < maxPage) {
        currentArticlePage++;
        renderArticles();
        document.getElementById('articles-archive-anchor')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function getFilteredArticles() {
  if (!window.ARTICLES_DATA) return [];
  return window.ARTICLES_DATA.filter(article => {
    const matchesCat = currentArticleCategory === 'all' || article.category === currentArticleCategory;
    const matchesSearch = !currentArticleSearch || 
      article.title.toLowerCase().includes(currentArticleSearch) || 
      article.excerpt.toLowerCase().includes(currentArticleSearch) ||
      article.category.toLowerCase().includes(currentArticleSearch);
    return matchesCat && matchesSearch;
  });
}

function renderArticles() {
  const container = document.getElementById('articles-grid-container');
  const pageInfo = document.getElementById('articles-page-info');
  const prevBtn = document.getElementById('articles-prev-btn');
  const nextBtn = document.getElementById('articles-next-btn');
  
  if (!container) return;

  const filtered = getFilteredArticles();
  const totalPages = Math.ceil(filtered.length / articlesPerPage) || 1;
  
  if (currentArticlePage > totalPages) currentArticlePage = totalPages;

  const startIndex = (currentArticlePage - 1) * articlesPerPage;
  const pageArticles = filtered.slice(startIndex, startIndex + articlesPerPage);

  if (pageArticles.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--muted-foreground);">
        <p style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem;">No articles found</p>
        <p style="font-size: 0.9rem;">Try adjusting your search terms or selecting another category.</p>
      </div>
    `;
  } else {
    container.innerHTML = pageArticles.map(art => {
      return `
        <article class="article-card">
          <div>
            <div class="article-meta">
              <span class="badge ${art.category.includes('AI') ? 'badge-accent' : ''}">${escapeHtml(art.category)}</span>
              <span>${escapeHtml(art.date || 'Article')}</span>
            </div>
            <h3 class="article-title">
              <a href="articles/${encodeURIComponent(art.filename)}" class="article-open-btn" data-filename="${encodeURIComponent(art.filename)}" data-title="${escapeHtml(art.title)}">${escapeHtml(art.title)}</a>
            </h3>
            <p class="article-excerpt">${escapeHtml(art.excerpt)}</p>
          </div>
          <div>
            <a href="articles/${encodeURIComponent(art.filename)}" class="article-cta article-open-btn" data-filename="${encodeURIComponent(art.filename)}" data-title="${escapeHtml(art.title)}">
              Read Article
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  if (pageInfo) {
    pageInfo.textContent = `Page ${currentArticlePage} of ${totalPages} (${filtered.length} total)`;
  }
  if (prevBtn) prevBtn.disabled = currentArticlePage <= 1;
  if (nextBtn) nextBtn.disabled = currentArticlePage >= totalPages;

  attachArticleModalListeners();
}

/* --------------------------------------------------------------------------
   7. Article Reader Modal
   -------------------------------------------------------------------------- */
function initArticleModal() {
  const backdrop = document.getElementById('article-modal-backdrop');
  const closeBtn = document.getElementById('article-modal-close-btn');

  if (!backdrop) return;

  const closeModal = () => {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });

  attachArticleModalListeners();
}

function attachArticleModalListeners() {
  const openButtons = document.querySelectorAll('.article-open-btn');
  const backdrop = document.getElementById('article-modal-backdrop');
  const titleEl = document.getElementById('article-modal-title');
  const bodyEl = document.getElementById('article-modal-content');
  const extLinkEl = document.getElementById('article-modal-external-link');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filename = btn.getAttribute('data-filename');
      const title = btn.getAttribute('data-title');
      const fileUrl = `articles/${filename}`;

      if (titleEl) titleEl.textContent = title;
      if (bodyEl) bodyEl.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--muted-foreground);">Loading full article...</p>';
      if (extLinkEl) extLinkEl.href = fileUrl;

      if (backdrop) {
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      fetch(fileUrl)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          
          const articleContentEl = doc.querySelector('.article-content');
          if (articleContentEl) {
            if (bodyEl) bodyEl.innerHTML = articleContentEl.innerHTML;
          } else {
            doc.querySelectorAll('script, style, .article-header-bar, .author-footer-card').forEach(el => el.remove());
            if (bodyEl) bodyEl.innerHTML = doc.body.innerHTML;
          }
        })
        .catch(err => {
          if (bodyEl) {
            bodyEl.innerHTML = `<p>Unable to load preview. You can <a href="${fileUrl}" target="_blank" style="color: var(--primary); text-decoration: underline;">open the full document directly</a>.</p>`;
          }
        });
    });
  });
}

/* --------------------------------------------------------------------------
   8. Quick Topic Booking Pre-fill
   -------------------------------------------------------------------------- */
function initQuickTopicBooking() {
  const topicButtons = document.querySelectorAll('.request-topic-btn');
  const topicSelect = document.getElementById('form-topic');

  topicButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const topicName = btn.getAttribute('data-topic');
      if (topicSelect && topicName) {
        topicSelect.value = topicName;
      }
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* --------------------------------------------------------------------------
   9. Lead Magnet Free Tool Download
   -------------------------------------------------------------------------- */
function initLeadMagnet() {
  const form = document.getElementById('lead-magnet-form');
  const successMsg = document.getElementById('lead-magnet-success');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('lead-magnet-email')?.value || '';
    if (form) form.style.display = 'none';
    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.innerHTML = `<strong>Thank you!</strong> The Free GP Prompt & Documentation Guide has been sent to <em>${escapeHtml(email)}</em>. (Check your inbox & spam folder).`;
    }
  });
}

/* --------------------------------------------------------------------------
   10. Contact & Booking Form Handler
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const organization = formData.get('organization') || '';
    const eventType = formData.get('eventType') || 'Keynote Speech';
    const topic = formData.get('topic') || 'Healthcare AI & Medicine';
    const preferredDate = formData.get('preferredDate') || 'TBD';
    const budget = formData.get('budget') || 'Discuss with speaker';
    const details = formData.get('goals') || '';

    const subject = encodeURIComponent(`Speaking / Booking Inquiry: ${eventType} - ${organization}`);
    const body = encodeURIComponent(
`Hi Dr. Sabine,

I would like to inquire about booking you for an upcoming event.

--- Event Details ---
Name: ${name}
Organization: ${organization}
Email: ${email}
Event Type: ${eventType}
Topic of Interest: ${topic}
Preferred Date: ${preferredDate}
Budget: ${budget}

--- Event Goals & Notes ---
${details}

Looking forward to connecting!`
    );

    window.location.href = `mailto:sabine@drfonderson.com?subject=${subject}&body=${body}`;
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
      default: return m;
    }
  });
}
