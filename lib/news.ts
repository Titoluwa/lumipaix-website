// lib/news-types.ts

// News API Response Types
export interface NewsApiSource {
  id: string | null;
  name: string;
}

export interface NewsApiArticle {
  source: NewsApiSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsApiArticle[];
}

// Blog Post Type
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  url: string;
  source?: string;
  slug?: string;
  type?: 'static' | 'dynamic';
  publishedAt?: string;
}

// Category Type
export interface BlogCategory {
  id: string;
  name: string;
  query: string;
}

// API Response Type for our route
export interface ApiNewsResponse {
  articles: NewsApiArticle[];
  error?: string;
}

// Pagination Type
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  startIndex: number;
  endIndex: number;
}