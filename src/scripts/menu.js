document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.nav-links');

  if (!menu || !navLinks) return;

  menu.addEventListener('click', () => {
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;
    
    menu.setAttribute('aria-expanded', `${newState}`);
    
    if (newState) {
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
    }
  });

  // 响应式：在较大屏幕上始终显示导航
  const mediaQuery = window.matchMedia('(min-width: 636px)');

  function handleMediaChange(e) {
    if (e.matches) {
      navLinks.style.display = 'flex';
      menu.setAttribute('aria-expanded', 'true');
    } else {
      const isExpanded = menu.getAttribute('aria-expanded') === 'true';
      navLinks.style.display = isExpanded ? 'flex' : 'none';
    }
  }

  mediaQuery.addEventListener('change', handleMediaChange);
  handleMediaChange(mediaQuery);
});