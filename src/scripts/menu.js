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

  // 手机端：下滑隐藏顶栏，上滑足够距离后显示顶栏
  const headerEl = document.querySelector('.header-isolate');
  if (headerEl) {
    let lastScrollY = window.scrollY;
    let scrollUpAccum = 0;
    const SHOW_THRESHOLD = 52; // 需要向上滑动的最小距离

    window.addEventListener('scroll', () => {
      if (window.innerWidth > 635) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // 向下滑：重置上滑累计，隐藏顶栏
        scrollUpAccum = 0;
        if (currentScrollY > 52) {
          headerEl.classList.add('header-hidden');
          navLinks.style.display = 'none';
          menu.setAttribute('aria-expanded', 'false');
        }
      } else {
        // 向上滑：累计上滑距离，超过阈值才显示顶栏
        scrollUpAccum += lastScrollY - currentScrollY;
        if (scrollUpAccum >= SHOW_THRESHOLD) {
          headerEl.classList.remove('header-hidden');
        }
      }

      lastScrollY = currentScrollY;
    }, { passive: true });
  }
});