// "use client"

// import Image from "next/image"
// import { Calendar, User, ArrowRight, Clock, ExternalLink, Globe, RefreshCw } from "lucide-react"
// import { useEffect, useState } from "react"
// import { BlogPost, BlogCategory } from "@/lib/news"

// // Define your blog topics/categories
// const BLOG_CATEGORIES: BlogCategory[] = [
//     { id: "ai", name: "AI Solutions", query: "artificial intelligence AI machine learning" },
//     { id: "cloud", name: "Cloud Computing", query: "cloud computing AWS Azure Google Cloud" },
//     { id: "loyalty", name: "Loyalty Program", query: "customer loyalty programs CRM rewards" },
//     { id: "dev", name: "Web & App Development", query: "web development mobile apps software development" },
//     { id: "automation", name: "Office Automation", query: "office automation productivity tools workflow" },
//     { id: "training", name: "Training Services", query: "corporate training online courses education" },
//     { id: "finance", name: "Financial Services", query: "fintech banking finance technology" },
//     { id: "procurement", name: "Procurement Services", query: "procurement supply chain B2B sourcing" }
// ]

// // Fallback placeholder images for different categories
// // const CATEGORY_IMAGES: Record<string, string> = {
// //     "ai": "/api/placeholder/400/225?text=AI+Solutions",
// //     "cloud": "/api/placeholder/400/225?text=Cloud+Computing",
// //     "loyalty": "/api/placeholder/400/225?text=Loyalty+Programs",
// //     "dev": "/api/placeholder/400/225?text=Development",
// //     "automation": "/api/placeholder/400/225?text=Automation",
// //     "training": "/api/placeholder/400/225?text=Training",
// //     "finance": "/api/placeholder/400/225?text=Financial+Tech",
// //     "procurement": "/api/placeholder/400/225?text=Procurement"
// // }
// const CATEGORY_IMAGES: Record<string, string> = {
//     "ai": "/images/ai.jpg",
//     "cloud": "/images/cloud.jpg",
//     "loyalty": "/images/loyalty-2.jpg",
//     "dev": "/images/web-app-development-2.jpg",
//     "automation": "/images/office-automation-2.jpg",
//     "training": "/images/training-3.jpg",
//     "finance": "/images/fs-taxes.jpg",
//     "procurement": "/images/procurement.jpg"
// }

// // Calculate read time from content
// const calculateReadTime = (content: string | null): string => {
//     const words = content ? content.split(/\s+/).length : 500
//     const minutes = Math.ceil(words / 200)
//     return `${minutes} min read`
// }

// // Format date
// const formatDate = (dateString: string): string => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//         month: 'short',
//         day: 'numeric',
//         year: 'numeric'
//     })
// }

// export default function BlogNews() {
//     const [newsPosts, setNewsPosts] = useState<BlogPost[]>([])
//     const [loading, setLoading] = useState<boolean>(true)
//     const [error, setError] = useState<string | null>(null)
//     const [activeCategory, setActiveCategory] = useState<string>("ai")
//     const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

//     // Transform News API articles to BlogPost format
//     const transformArticlesToPosts = (
//         articles: any[], 
//         categoryId: string
//     ): BlogPost[] => {
//         const category = BLOG_CATEGORIES.find(c => c.id === categoryId)
        
//         return articles.slice(0, 3).map((article, index): BlogPost => ({
//         id: `${categoryId}-${Date.now()}-${index}`,
//         title: article.title || "No title available",
//         excerpt: article.description?.substring(0, 150) + "..." || 
//                 "Read more about this topic...",
//         author: article.author || article.source?.name || "Unknown Author",
//         date: formatDate(article.publishedAt),
//         readTime: calculateReadTime(article.content),
//         category: category?.name || "General",
//         image: article.urlToImage || CATEGORY_IMAGES[categoryId] || "/placeholder.svg",
//         url: article.url || "#",
//         source: article.source?.name || "News Source"
//         }))
//     }

//     // Fallback posts if API fails
//     const getFallbackPosts = (categoryId: string): BlogPost[] => {
//         const category = BLOG_CATEGORIES.find(c => c.id === categoryId)
//         const now = new Date()
        
//         return [
//         {
//             id: `fallback-${categoryId}-1`,
//             title: `Latest Trends in ${category?.name || "Technology"}`,
//             excerpt: "Discover the newest developments and innovations in this field. Stay ahead of the curve with cutting-edge insights.",
//             author: "Industry Expert",
//             date: formatDate(now.toISOString()),
//             readTime: "3 min read",
//             category: category?.name || "General",
//             image: CATEGORY_IMAGES[categoryId] || "/placeholder.svg",
//             url: "#",
//             source: "Industry Insights"
//         },
//         {
//             id: `fallback-${categoryId}-2`,
//             title: `How ${category?.name || "Technology"} is Transforming Businesses`,
//             excerpt: "Learn how forward-thinking companies are leveraging these solutions to drive growth and innovation.",
//             author: "Business Analyst",
//             date: formatDate(new Date(now.getTime() - 86400000).toISOString()),
//             readTime: "4 min read",
//             category: category?.name || "General",
//             image: CATEGORY_IMAGES[categoryId] || "/placeholder.svg",
//             url: "#",
//             source: "Tech Review"
//         },
//         {
//             id: `fallback-${categoryId}-3`,
//             title: `Best Practices for ${category?.name || "Technology"} Implementation`,
//             excerpt: "Essential strategies, tips, and methodologies for successful deployment and adoption.",
//             author: "Senior Consultant",
//             date: formatDate(new Date(now.getTime() - 172800000).toISOString()),
//             readTime: "5 min read",
//             category: category?.name || "General",
//             image: CATEGORY_IMAGES[categoryId] || "/placeholder.svg",
//             url: "#",
//             source: "Professional Guide"
//         }
//         ]
//     }

//     // Fetch news from NewsAPI
//     const fetchNews = async (categoryId: string = "ai"): Promise<void> => {
//         setLoading(true)
//         setError(null)
        
//         try {
//         // Find the category
//         const category = BLOG_CATEGORIES.find(c => c.id === categoryId)
        
//         if (!category) {
//             throw new Error(`Category ${categoryId} not found`)
//         }

//         // Using Next.js API route to hide API key
//         const response = await fetch(
//             `/api/news-1?query=${encodeURIComponent(category.query)}&category=${categoryId}`
//         )
        
//         if (!response.ok) {
//             throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`)
//         }
        
//         const data = await response.json()
        
//         // Check if we have articles
//         if (!data.articles || !Array.isArray(data.articles)) {
//             throw new Error("Invalid response format from news API")
//         }
        
//         // Transform and set posts
//         const formattedPosts = transformArticlesToPosts(data.articles, categoryId)
//         setNewsPosts(formattedPosts)
//         setLastUpdated(new Date())
        
//         } catch (err) {
//         console.error("Error fetching news:", err)
//         setError(err instanceof Error ? err.message : "Failed to load latest news. Please try again later.")
        
//         // Set fallback posts
//         setNewsPosts(getFallbackPosts(categoryId))
//         setLastUpdated(new Date())
//         } finally {
//         setLoading(false)
//         }
//     }

//     // Handle category click
//     const handleCategoryClick = (categoryId: string): void => {
//         setActiveCategory(categoryId)
//         fetchNews(categoryId)
//     }

//     // Format last updated time
//     const formatLastUpdated = (date: Date | null): string => {
//         if (!date) return ""
        
//         const now = new Date()
//         const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
        
//         if (diffInMinutes < 1) return "Just now"
//         if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`
//         if (diffInMinutes < 120) return "1 hour ago"
//         return `${Math.floor(diffInMinutes / 60)} hours ago`
//     }

//     useEffect(() => {
//         fetchNews(activeCategory)
        
//         // Refresh news every 6 hours
//         const refreshInterval = 6 * 60 * 60 * 1000 // 6 hours
//         const interval = setInterval(() => {
//         fetchNews(activeCategory)
//         }, refreshInterval)
        
//         return () => clearInterval(interval)
//     }, [activeCategory])

//     return (
//         <section id="blog" className="py-20 bg-secondary/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             {/* Section Header */}
//             <div className="text-center mb-12 space-y-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground">
//                 Latest <span className="text-primary">Insights</span>
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
//                 Stay informed with expert insights on industry trends, best practices, and business transformation strategies
//             </p>
            
//             {/* Last Updated Indicator */}
//             {lastUpdated && !loading && (
//                 <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
//                 <RefreshCw className="w-4 h-4" />
//                 Updated {formatLastUpdated(lastUpdated)}
//                 </div>
//             )}
//             </div>

//             {/* Category Filter */}
//             <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {BLOG_CATEGORIES.map((category: BlogCategory) => (
//                 <button
//                 key={category.id}
//                 onClick={() => handleCategoryClick(category.id)}
//                 className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeCategory === category.id
//                     ? "bg-primary text-primary-foreground shadow-lg"
//                     : "bg-muted text-muted-foreground hover:bg-muted/80 hover:shadow-md"
//                 }`}
//                 aria-label={`View articles about ${category.name}`}
//                 aria-pressed={activeCategory === category.id}
//                 >
//                 {category.name}
//                 </button>
//             ))}
//             </div>

//             {/* Loading State */}
//             {loading && (
//             <div className="text-center py-16 space-y-4">
//                 <div className="inline-block animate-spin rounded-full h-12 w-12 border-[3px] border-primary border-t-transparent"></div>
//                 <p className="text-muted-foreground">
//                 Fetching latest articles on {BLOG_CATEGORIES.find(c => c.id === activeCategory)?.name}...
//                 </p>
//             </div>
//             )}

//             {/* Error State */}
//             {error && !loading && (
//             <div className="text-center py-12 space-y-4 max-w-md mx-auto">
//                 <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
//                 <p className="font-medium">Unable to fetch live news</p>
//                 <p className="text-sm mt-1">{error}</p>
//                 </div>
//                 <button
//                 onClick={() => fetchNews(activeCategory)}
//                 className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold inline-flex items-center gap-2"
//                 >
//                 <RefreshCw className="w-4 h-4" />
//                 Try Again
//                 </button>
//             </div>
//             )}

//             {/* Blog Grid */}
//             {!loading && (
//             <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {newsPosts.map((post: BlogPost) => (
//                     <article
//                     key={post.id}
//                     className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary flex flex-col h-full"
//                     >
//                     {/* Image */}
//                     <div className="relative h-48 overflow-hidden bg-muted">
//                         <Image
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         className="object-cover transition-transform duration-300 group-hover:scale-105"
//                         onError={(e) => {
//                             const target = e.currentTarget as HTMLImageElement
//                             target.src = CATEGORY_IMAGES[activeCategory] || "/placeholder.svg"
//                         }}
//                         priority={post.id.startsWith("fallback") ? false : true}
//                         />
//                         <div className="absolute top-4 right-4">
//                         <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
//                             {post.category}
//                         </span>
//                         </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 flex flex-col flex-grow">
//                         <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-3 group-hover:text-primary transition-colors">
//                         {post.title}
//                         </h3>

//                         <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
//                         {post.excerpt}
//                         </p>

//                         {/* Meta Information */}
//                         <div className="space-y-3 mb-4 pt-4 border-t border-border">
//                         <div className="flex items-center justify-between text-xs text-muted-foreground">
//                             <div className="flex items-center gap-2">
//                             <User className="w-3.5 h-3.5" />
//                             <span className="line-clamp-1" title={post.author}>
//                                 {post.author}
//                             </span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                             <Globe className="w-3.5 h-3.5" />
//                             <span className="line-clamp-1" title={post.source}>
//                                 {post.source}
//                             </span>
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-between text-xs text-muted-foreground">
//                             <div className="flex items-center gap-2">
//                             <Calendar className="w-3.5 h-3.5" />
//                             <time dateTime={post.date}>
//                                 {post.date}
//                             </time>
//                             </div>
//                             {/* <div className="flex items-center gap-2">
//                             <Clock className="w-3.5 h-3.5" />
//                             <span>{post.readTime}</span>
//                             </div> */}
//                         </div>
//                         </div>

//                         {/* Read Article Button */}
//                         <a
//                         href={post.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-primary font-semibold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all mt-auto pt-2 border-t border-border/50"
//                         aria-label={`Read article: ${post.title}`}
//                         >
//                         Read Full Article
//                         <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
//                         </a>
//                     </div>
//                     </article>
//                 ))}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="text-center mt-12 space-y-4">
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button
//                     onClick={() => fetchNews(activeCategory)}
//                     disabled={loading}
//                     className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                     aria-label="Refresh articles"
//                     >
//                     <RefreshCw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
//                     {loading ? "Refreshing..." : "Refresh Articles"}
//                     </button>
                    
//                     <a
//                     href="/blog"
//                     className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-all duration-200 font-semibold inline-flex items-center justify-center gap-2 group"
//                     >
//                     View All Categories
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </a>
//                 </div>
                
//                 {/* API Status */}
//                 <p className="text-xs text-muted-foreground pt-4">
//                     Powered by NewsAPI • Showing {newsPosts.length} articles for {BLOG_CATEGORIES.find(c => c.id === activeCategory)?.name}
//                 </p>
//                 </div>
//             </>
//             )}
//         </div>
//         </section>
//     )
// }

"use client"

import Image from "next/image"
import { Calendar, User, ArrowRight, ExternalLink, Globe, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"
import { BlogPost } from "@/lib/news"

// Fallback placeholder images for different categories
const CATEGORY_IMAGES: Record<string, string> = {
  "ai": "/images/ai.jpg",
  "cloud": "/images/cloud.jpg",
  "loyalty": "/images/loyalty-2.jpg",
  "dev": "/images/web-app-development-2.jpg",
  "automation": "/images/office-automation-2.jpg",
  "training": "/images/training-3.jpg",
  "finance": "/images/fs-taxes.jpg",
  "procurement": "/images/procurement.jpg",
  "default": "/images/digital-service.jpg"
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

export default function BlogNews() {
  const [newsPosts, setNewsPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  // Transform News API articles to BlogPost format
  const transformArticlesToPosts = (articles: any[]): BlogPost[] => {
    return articles.slice(0, 3).map((article, index): BlogPost => {
      // Auto-detect category from title/description
      const text = (article.title + " " + (article.description || "")).toLowerCase()
      let category = "Technology"
      let categoryKey = "default"

      if (text.includes('ai') || text.includes('artificial intelligence') || text.includes('machine learning')) {
        category = "AI Solutions"
        categoryKey = "ai"
      } else if (text.includes('cloud') || text.includes('aws') || text.includes('azure')) {
        category = "Cloud Computing"
        categoryKey = "cloud"
      } else if (text.includes('loyalty') || text.includes('customer') || text.includes('rewards')) {
        category = "Loyalty Program"
        categoryKey = "loyalty"
      } else if (text.includes('development') || text.includes('software') || text.includes('app')) {
        category = "Web & App Development"
        categoryKey = "dev"
      } else if (text.includes('automation') || text.includes('workflow') || text.includes('productivity')) {
        category = "Office Automation"
        categoryKey = "automation"
      } else if (text.includes('training') || text.includes('education') || text.includes('learning')) {
        category = "Training Services"
        categoryKey = "training"
      } else if (text.includes('finance') || text.includes('banking') || text.includes('fintech')) {
        category = "Financial Services"
        categoryKey = "finance"
      } else if (text.includes('procurement') || text.includes('supply') || text.includes('sourcing')) {
        category = "Procurement Services"
        categoryKey = "procurement"
      }

      return {
        id: `news-${Date.now()}-${index}`,
        title: article.title || "No title available",
        excerpt: article.description?.substring(0, 150) + "..." || 
                "Read more about this topic...",
        author: article.author || article.source?.name || "Unknown Author",
        date: formatDate(article.publishedAt),
        readTime: calculateReadTime(article.content),
        category: category,
        image: article.urlToImage || CATEGORY_IMAGES[categoryKey] || CATEGORY_IMAGES.default,
        url: article.url || "#",
        source: article.source?.name || "News Source",
        type: 'dynamic'
      }
    })
  }

  // Fallback posts if API fails
  const getFallbackPosts = (): BlogPost[] => {
    const now = new Date()
    
    return [
      {
        id: `fallback-1`,
        title: "Latest Technology Trends Shaping Business",
        excerpt: "Discover the newest developments and innovations in technology. Stay ahead of the curve with cutting-edge insights.",
        author: "Industry Expert",
        date: formatDate(now.toISOString()),
        readTime: "3 min read",
        category: "Technology",
        image: CATEGORY_IMAGES.ai,
        url: "#",
        source: "Industry Insights",
        type: 'dynamic'
      },
      {
        id: `fallback-2`,
        title: "Digital Transformation Strategies for Modern Business",
        excerpt: "Learn how forward-thinking companies are leveraging technology solutions to drive growth and innovation.",
        author: "Business Analyst",
        date: formatDate(new Date(now.getTime() - 86400000).toISOString()),
        readTime: "4 min read",
        category: "Digital Transformation",
        image: CATEGORY_IMAGES.cloud,
        url: "#",
        source: "Tech Review",
        type: 'dynamic'
      },
      {
        id: `fallback-3`,
        title: "Best Practices for Business Innovation",
        excerpt: "Essential strategies, tips, and methodologies for successful implementation and adoption.",
        author: "Senior Consultant",
        date: formatDate(new Date(now.getTime() - 172800000).toISOString()),
        readTime: "5 min read",
        category: "Business Strategy",
        image: CATEGORY_IMAGES.automation,
        url: "#",
        source: "Professional Guide",
        type: 'dynamic'
      }
    ]
  }

  // Fetch latest news from all categories
  const fetchLatestNews = async (): Promise<void> => {
    setLoading(true)
    setError(null)
    
    try {
      // Fetch general tech/business news covering all topics
      const response = await fetch(
        // technology business innovation AI cloud
        // technology business innovation AI cloud digital transformation 
        `/api/news?query=${encodeURIComponent("technology business innovation AI cloud")}&category=general`
      )
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`)
      }
      
      const data = await response.json()
      
      // Check if we have articles
      if (!data.articles || !Array.isArray(data.articles)) {
        throw new Error("Invalid response format from news API")
      }
      
      // Transform and set posts (get only 3 latest)
      const formattedPosts = transformArticlesToPosts(data.articles)
      setNewsPosts(formattedPosts)
      setLastUpdated(new Date())
      
    } catch (err) {
      console.error("Error fetching news:", err)
      setError(err instanceof Error ? err.message : "Failed to load latest news. Please try again later.")
      
      // Set fallback posts
      setNewsPosts(getFallbackPosts())
      setLastUpdated(new Date())
    } finally {
      setLoading(false)
    }
  }

  // Format last updated time
  const formatLastUpdated = (date: Date | null): string => {
    if (!date) return ""
    
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`
    if (diffInMinutes < 120) return "1 hour ago"
    return `${Math.floor(diffInMinutes / 60)} hours ago`
  }

  useEffect(() => {
    fetchLatestNews()
    
    // Refresh news every 6 hours
    const refreshInterval = 6 * 60 * 60 * 1000 // 6 hours
    const interval = setInterval(() => {
      fetchLatestNews()
    }, refreshInterval)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="blog" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {/* Stay informed with the latest industry news, trends, and expert insights */}
            Stay informed with expert insights on industry trends, best practices, and business transformation strategies
          </p>
          
          {/* Last Updated Indicator */}
          {lastUpdated && !loading && (
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Updated {formatLastUpdated(lastUpdated)}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16 space-y-4">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-[3px] border-primary border-t-transparent"></div>
            <p className="text-muted-foreground">
              Fetching latest articles...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12 space-y-4 max-w-md mx-auto">
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
              <p className="font-medium">Unable to fetch live news</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
            <button
              onClick={() => fetchLatestNews()}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold inline-flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}

        {/* Blog Grid - Show only 3 latest articles */}
        {!loading && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsPosts.map((post: BlogPost) => (
                <article
                  key={post.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.src = CATEGORY_IMAGES.default
                      }}
                      priority={post.id.startsWith("fallback") ? false : true}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-3 mb-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5" />
                          <span className="line-clamp-1" title={post.author}>
                            {post.author}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-3.5 h-3.5" />
                          <span className="line-clamp-1" title={post.source}>
                            {post.source}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={post.date}>
                            {post.date}
                          </time>
                        </div>
                      </div>
                    </div>

                    {/* Read Article Button */}
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all mt-auto pt-2"
                      aria-label={`Read article: ${post.title}`}
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="text-center mt-12 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => fetchLatestNews()}
                  disabled={loading}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Refresh articles"
                >
                  <RefreshCw className={`w-5 h-5 ${loading ? "animate-spin" : ""}`} />
                  {loading ? "Refreshing..." : "Refresh Articles"}
                </button>
                
                <a
                  href="/blog"
                  className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-all duration-200 font-semibold inline-flex items-center justify-center gap-2 group"
                >
                  View All News
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* API Status */}
              <p className="text-xs text-muted-foreground pt-4">
                Powered by NewsAPI • Updates every 6 hours
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}