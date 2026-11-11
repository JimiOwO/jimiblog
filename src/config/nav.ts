/**
 * 全局导航配置，供 Header/Navigation 等复用
 */
export interface NavItem {
  href: string;
  labelZh: string;
  labelEn: string;
  /** 除 href 及其子路径外，还应高亮该导航项的路径前缀 */
  activePrefixes?: string[];
}

export const navItems: NavItem[] = [
  { href: '/about', labelZh: '关于', labelEn: 'About' },
  { href: '/cv', labelZh: '简历', labelEn: 'CV' },
  { href: '/blog', labelZh: '博客', labelEn: 'Blog', activePrefixes: ['/posts', '/tags'] },
  { href: '/portfolio', labelZh: '作品', labelEn: 'Portfolio' },
];

/** 当前路径是否属于某个导航项（自身、子路径或额外前缀） */
export function isNavItemActive(item: NavItem, currentPath: string): boolean {
  return [item.href, ...(item.activePrefixes ?? [])].some(
    (prefix) => currentPath === prefix || currentPath.startsWith(`${prefix}/`)
  );
}
