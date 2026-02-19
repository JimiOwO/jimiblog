/**
 * 兴趣卡片数据，供 about 页与独立页面复用
 */
export interface InterestItem {
  slug: string;
  tag: string;
  tagEn: string;
  size: 's' | 'm' | 'l' | 'x';
  detail: string;
  detailEn: string;
}

export const interests: InterestItem[] = [
  { slug: 'languages', tag: '语言', tagEn: 'Languages', size: 'l', detail: '我会说四种语言。\nI speak 4 languages.\n4か国語を話します。\nJag talar 4 språk.', detailEn: '我会说四种语言。\nI speak 4 languages.\n4か国語を話します。\nJag talar 4 språk.' },
  { slug: 'tech', tag: '技术', tagEn: 'Tech', size: 'm', detail: '我是个技术宅。算是吧。', detailEn: 'I am a bit of a tech geek, I suppose.' },
  { slug: 'music', tag: '音乐', tagEn: 'Music', size: 's', detail: '我爱弹吉他。\n不过弹得很烂。', detailEn: 'I love playing guitar\n although not very well.' },
  { slug: 'gaming', tag: '游戏', tagEn: 'Gaming', size: 'x', detail: '我是游戏大王。', detailEn: 'I am Big Game Nerd.' },
  { slug: 'reading', tag: '电影', tagEn: 'Movies', size: 'm', detail: '我身体的70%是电影构成的。', detailEn: '70% of my body is made of movies.' },
  { slug: 'gaming', tag: '设计', tagEn: 'Design', size: 'x', detail: '默认字体爱好者', detailEn: 'I use default fonts, for reasons.' },
  { slug: 'photography', tag: '摄影', tagEn: 'Photography', size: 'm', detail: '我拍照还行。', detailEn: 'My photography skills are not bad.' },
  { slug: 'kendo', tag: '剑道', tagEn: 'Kendo', size: 's', detail: '我练习剑道很多年。', detailEn: 'I have been practicing kendo for many years.' },
];