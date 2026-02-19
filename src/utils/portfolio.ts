/**
 * 作品集相关类型与工具，供 portfolio 页面复用
 */

export interface ProjectFrontmatter {
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  tags: string[];
  github?: string;
  demo?: string;
  [key: string]: unknown;
}

export interface ProjectEntry {
  url: string;
  frontmatter: ProjectFrontmatter;
}
