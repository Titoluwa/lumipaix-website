"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowDown, RefreshCw, Globe } from "lucide-react"
import { BlogPost, BlogCategory } from "@/lib/news"

const POSTS_PER_PAGE = 6

const DYNAMIC_CATEGORIES: BlogCategory[] = [
  { id: "all", name: "All News", query: "technology business innovation AI cloud" },
  { id: "ai", name: "AI Solutions", query: "artificial intelligence AI machine learning" },
  { id: "cloud", name: "Cloud Computing", query: "cloud computing AWS Azure Google Cloud" },
//   { id: "loyalty", name: "Loyalty Program", query: "customer loyalty programs CRM rewards" },
  { id: "dev", name: "Web & App Development", query: "web development mobile apps software development" },
//   { id: "automation", name: "Office Automation", query: "office automation productivity tools workflow" },
//   { id: "training", name: "Training Services", query: "corporate training online courses education" },
//   { id: "financial", name: "Financial Services", query: "fintech banking finance technology" },
//   { id: "procurement", name: "Procurement Services", query: "procurement supply chain B2B sourcing" }
] as const

// Fallback images for categories
const CATEGORY_IMAGES: Record<string, string> = {
  "ai": "/images/ai.jpg",
  "cloud": "/images/cloud.jpg",
  "loyalty": "/images/loyalty-2.jpg",
  "dev": "/images/web-app-development-2.jpg",
  "automation": "/images/office-automation-2.jpg",
  "training": "/images/training-3.jpg",
  "finance": "/images/fs-taxes.jpg",
  "procurement": "/images/procurement.jpg",
  "default": "/images/web-app-development-2.jpg"
}

// Calculate read time from content
const calculateReadTime = (content: string | null): string => {
  const words = content ? content.split(/\s+/).length : 500
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

// Format date
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export default function News() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [dynamicPosts, setDynamicPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Transform News API articles to BlogPost format
  const transformArticlesToPosts = (
    articles: any[], 
    categoryId: string
  ): BlogPost[] => {
    const category = DYNAMIC_CATEGORIES.find(c => c.id === categoryId)
    
    return articles.map((article, index): BlogPost => {
      const postCategory = category?.name || "Technology"
      const categoryKey = categoryId === "all" ? "default" : categoryId
      
      return {
        id: `dynamic-${Date.now()}-${index}`,
        title: article.title || "Latest News",
        excerpt: article.description?.substring(0, 120) + "..." || 
                "Read the full article for more details...",
        author: article.author || article.source?.name || "Industry Expert",
        date: formatDate(article.publishedAt),
        readTime: calculateReadTime(article.content),
        category: postCategory,
        image: article.urlToImage || 
               CATEGORY_IMAGES[categoryKey] ||
               CATEGORY_IMAGES.default,
        url: article.url || "#",
        type: 'dynamic',
        source: article.source?.name || "News Source",
        publishedAt: article.publishedAt
      }
    })
  }

  // Fetch dynamic posts from NewsAPI
  const fetchDynamicPosts = async (categoryId: string) => {
    setLoading(true)
    setError(null)

    try {
      const category = DYNAMIC_CATEGORIES.find(c => c.id === categoryId)
      
      if (!category) {
        throw new Error(`Category ${categoryId} not found`)
      }

      const response = await fetch(
        `/api/news?query=${encodeURIComponent(category.query)}&category=${categoryId}`
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`)
      }

      const data = await response.json()
      
      if (!data.articles || !Array.isArray(data.articles)) {
        throw new Error("Invalid response format")
      }

      const formattedPosts: BlogPost[] = transformArticlesToPosts(data.articles, categoryId)
      setDynamicPosts(formattedPosts)
    } catch (err) {
      console.error("Error fetching dynamic posts:", err)
      setError(err instanceof Error ? err.message : "Failed to load latest news")
      setDynamicPosts([])
    } finally {
      setLoading(false)
    }
  }

  // Handle category change
  const handleCategoryChange = async (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
    await fetchDynamicPosts(categoryId)
  }

  // Pagination calculations
  const totalPages = Math.ceil(dynamicPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = dynamicPosts.slice(startIndex, endIndex)

  // Load initial content
  useEffect(() => {
    fetchDynamicPosts("all")
  }, [])

  // Reset to page 1 when posts change
  useEffect(() => {
    setCurrentPage(1)
  }, [dynamicPosts])

  return (
    <main className="bg-gradient-to-b from-background to-muted/10 py-16">
      {/* Header with Background Image */}
      <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/collaboration.jpg"
            alt="Team collaboration"
            fill
            className="object-cover brightness-50"
            priority
            quality={100}
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        </div>

        {/* Animated Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        
        {/* Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Latest <span className="text-primary">News</span>
          </h1>
          
          <p className="text-xl text-white max-w-3xl mx-auto mb-8 w-3/4">
            Explore cutting-edge perspectives on AI, digital transformation, cloud innovation, and strategic growth.
          </p>

          {/* API Status Indicator */}
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Globe className="w-4 h-4" />
            <span className="text-sm text-white">
              {loading ? "Fetching latest news..." : "Live from NewsAPI"}
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ArrowDown className="text-primary mt-2 animate-pulse"/>
          </div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">

        {/* Category Filter */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {DYNAMIC_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  cat.id === selectedCategory
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border hover:border-primary/50 hover:shadow-md"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          {/* Results count and refresh button */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing {dynamicPosts.length} post{dynamicPosts.length !== 1 ? 's' : ''} 
              {selectedCategory !== "all" && ` in "${DYNAMIC_CATEGORIES.find(c => c.id === selectedCategory)?.name}"`}
            </p>
            
            <button
              onClick={() => fetchDynamicPosts(selectedCategory)}
              disabled={loading}
              className="text-sm flex items-center gap-2 text-primary hover:text-primary/80 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh News
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-destructive/10 text-destructive rounded-lg text-sm">
              ⚠️ {error}
            </div>
          )}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            // Loading skeleton
            Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="h-56 bg-muted" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </div>
              </div>
            ))
          ) : paginatedPosts.length > 0 ? (
            paginatedPosts.map((post: BlogPost) => (
              <article
                key={post.id}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image Container */}
                <a 
                  href={post.url} 
                  className="relative h-56 overflow-hidden block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <Image
                    src={post.image || "/placeholder.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.src = CATEGORY_IMAGES.default
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-blue-500/90 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
                      {post.category} 🌐
                    </span>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute bottom-4 right-4 z-20 bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-lg">
                    {post.date}
                  </div>
                </a>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-3 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                  </a>

                  <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-semibold text-foreground line-clamp-1">{post.author}</p>
                      {post.source && (
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {post.source}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Read Button */}
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 text-primary font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 hover:shadow-lg hover:border-primary/30 group/btn"
                  >
                    Read on Source
                    <Globe className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                Could not fetch news articles. Please try again later.
              </p>
              <button
                onClick={() => fetchDynamicPosts(selectedCategory)}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* Pagination - Only show if there are posts */}
        {dynamicPosts.length > 0 && totalPages > 1 && (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl hover:bg-muted hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-medium">Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 ${
                      currentPage === page
                        ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30"
                        : "border border-border hover:bg-muted hover:shadow-md hover:border-primary/30"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl hover:bg-muted hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <span className="font-medium">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages} • {dynamicPosts.length} total posts • Powered by NewsAPI
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        {/* <div className="mt-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights delivered directly to your inbox.
              Plus get exclusive access to AI-curated tech news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-xl hover:shadow-xl transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Get AI-curated tech news + our exclusive content. No spam, ever.
            </p>
          </div> 
        </div> */}
      </div>
    </main>
  )
}