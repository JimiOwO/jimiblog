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

  // 手机端：下滑隐藏顶栏，上滑显示顶栏
  const headerEl = document.querySelector('.header-isolate');
  if (headerEl) {
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (window.innerWidth > 635) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 52) {
        // 向下滑：隐藏顶栏并关闭下拉菜单
        headerEl.classList.add('header-hidden');
        navLinks.style.display = 'none';
        menu.setAttribute('aria-expanded', 'false');
      } else {
        // 向上滑：显示顶栏
        headerEl.classList.remove('header-hidden');
      }

      lastScrollY = currentScrollY;
    }, { passive: true });
  }
});