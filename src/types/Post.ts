export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  tags?: string[];
  created_at: string;
}
