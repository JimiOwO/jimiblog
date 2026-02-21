/**
 * Portfolio 项目相关类型，供 portfolio/index.astro 与 PortfolioProjectLayout 复用
 */

export interface PortfolioFrontmatter {
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  tags?: string[];
  /** 卡片预览图 URL，如 /portfolio/xxx/preview.jpg */
  preview?: string;
  github?: string;
  demo?: string;
  [key: string]: unknown;
}

export interface PortfolioEntry {
  url: string;
  frontmatter: PortfolioFrontmatter;
}
