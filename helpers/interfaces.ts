export interface Article {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  claps_count: number;
  comments_count: number;
  views: number;
  updated_at: string;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  image: string | null;
}

export type ContentBlock =
  | { type: "paragraph"; data: { text: string } }
  | { type: "header"; data: { text: string; level: number } }
  | {
      type: "editorImage";
      data: { caption: string; url: string; width: string; height: string };
    };

export interface Tag {
  id: number;
  title: string;
}

export interface ArticleFull {
  id: number;
  author: Author;
  title: string;
  image: string;
  content: ContentBlock[];
  claps_count: number;
  comments_count: number;
  views: number;
  updated_at: string;
  tags: Tag[];
}

export interface Comment {
  id: number;
  content: string;
  date_and_time: string;
  likes_count: number;
  username: string;
  user_avatar: string;
}
