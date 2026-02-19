/**
 * 全局导航配置，供 Header/Navigation 等复用
 */
export interface NavItem {
  href: string;
  labelZh: string;
  labelEn: string;
}

export const navItems: NavItem[] = [
  { href: '/about', labelZh: '关于', labelEn: 'About' },
  { href: '/cv', labelZh: '简历', labelEn: 'CV' },
  { href: '/blog', labelZh: '博客', labelEn: 'Blog' },
  { href: '/portfolio', labelZh: '作品', labelEn: 'Portfolio' },
];
