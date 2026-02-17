/**
 * 博客文章相关类型与工具，供 blog、tags 等页面复用
 */

export interface PostFrontmatter {
  title: string;
  tags: string[];
  pubDate?: Date | string;
  description?: string;
  [key: string]: unknown;
}

export interface PostEntry {
  url: string;
  frontmatter: PostFrontmatter;
}

/** 按发布时间排序（新 → 旧），无 pubDate 的排在最后 */
export function sortPostsByDate<T extends { frontmatter: { pubDate?: Date | string } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => {
    const dateA = a.frontmatter.pubDate ? new Date(a.frontmatter.pubDate).getTime() : 0;
    const dateB = b.frontmatter.pubDate ? new Date(b.frontmatter.pubDate).getTime() : 0;
    return dateB - dateA;
  });
}
