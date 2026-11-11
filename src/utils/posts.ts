/**
 * 博客文章相关类型与工具，供 blog、tags、文章布局等复用
 */

export interface PostFrontmatter {
  title: string;
  tags?: string[];
  pubDate?: Date | string;
  description?: string;
  [key: string]: unknown;
}

export interface PostEntry {
  url: string;
  frontmatter: PostFrontmatter;
}

// 所有文章只在这里 glob 一次，页面统一通过 getAllPosts() 读取
const postModules = import.meta.glob<PostEntry>('../pages/posts/*.md', { eager: true });

/** 按发布时间排序（新 → 旧），无 pubDate 的排在最后 */
export function sortPostsByDate<T extends { frontmatter: { pubDate?: Date | string } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => {
    const dateA = a.frontmatter.pubDate ? new Date(a.frontmatter.pubDate).getTime() : 0;
    const dateB = b.frontmatter.pubDate ? new Date(b.frontmatter.pubDate).getTime() : 0;
    return dateB - dateA;
  });
}

/** 全部文章（新 → 旧） */
export function getAllPosts(): PostEntry[] {
  return sortPostsByDate(Object.values(postModules));
}

/** 文章的标签列表，没写 tags 时返回空数组 */
export function getPostTags(post: PostEntry): string[] {
  return post.frontmatter.tags ?? [];
}

/** 全部标签（去重、排序） */
export function getAllTags(posts: PostEntry[] = getAllPosts()): string[] {
  return [...new Set(posts.flatMap(getPostTags))].sort();
}

/** 把 frontmatter 的日期格式化为 YYYY-MM-DD；缺失或无法解析时返回空字符串 */
export function formatDate(date?: Date | string): string {
  if (!date) return '';
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? '' : parsed.toISOString().slice(0, 10);
}
