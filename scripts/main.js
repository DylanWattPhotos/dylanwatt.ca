// ============================================
// DYLAN WATT / HD CREATIVE — main.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // === MOBILE NAV ===
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // === ACTIVE NAV LINK ===
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath === href || currentPath.startsWith(href) && href !== '/')) {
      link.classList.add('active');
    }
    if (currentPath === '/' && href === '/') link.classList.add('active');
  });

  // === WORK PAGE FILTER ===
  const filterTabs = document.querySelectorAll('.filter-tab');
  const workItems = document.querySelectorAll('.work-item');

  if (filterTabs.length && workItems.length) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        workItems.forEach(item => {
          const cat = item.dataset.category;
          item.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
        });
      });
    });
  }

  // === CONTACT FORM ===
  const form = document.querySelector('.contact-form');
  const successMsg = document.querySelector('.form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (successMsg) successMsg.style.display = 'block';
    });
  }

});
