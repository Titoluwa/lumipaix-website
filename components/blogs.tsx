"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Clock, ArrowDown } from "lucide-react"
import { getPaginatedPosts, getAllPosts, BlogPost} from "@/lib/blog-data"

const POSTS_PER_PAGE = 6
const CATEGORIES = [
  "All", 
  "AI Solutions", 
  "Cloud Computing", 
  "Digital Transformation", 
  "Training", 
  "Automation", 
  "Financial"
] as const

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>("All")
  
  // Get all posts for filtering
  const allPosts = getAllPosts()
  
  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return allPosts
    return allPosts.filter((post: { category: string }) => post.category === selectedCategory)
  }, [allPosts, selectedCategory])
  
  // Calculate pagination for filtered posts
  const totalFilteredPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)
  
  // Reset to page 1 when category changes
  const handleCategoryChange = (category: (typeof CATEGORIES)[number]) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/10 py-16">
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
            Latest <span className="text-primary">Insights</span>
          </h1>
          
          <p className="text-xl text-white max-w-3xl mx-auto mb-8 w-3/4">
            Explore cutting-edge perspectives on AI, digital transformation, cloud innovation, and strategic growth.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ArrowDown className="text-primary mt-2 animate-pulse"/>
          </div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16 relative z-20">

        {/* Category Filter */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  cat === selectedCategory
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border hover:border-primary/50 hover:shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Results count */}
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} 
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post: BlogPost) => (
              <article
                key={post.id}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image Container */}
                <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <Image
                    src={post.image || "/placeholder.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  {/* Date Badge */}
                  <div className="absolute bottom-4 right-4 z-20 bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-lg">
                    {post.date}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-xs font-semibold text-foreground">{post.author}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Read Button */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 w-full bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 text-primary font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 hover:shadow-lg hover:border-primary/30 group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                No posts available in the "{selectedCategory}" category.
              </p>
            </div>
          )}
        </div>

        {/* Pagination - Only show if there are posts */}
        {filteredPosts.length > 0 && (
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
              {Array.from({ length: totalFilteredPages }, (_, i) => i + 1).map((page) => (
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
              onClick={() => setCurrentPage((p) => Math.min(totalFilteredPages, p + 1))}
              disabled={currentPage === totalFilteredPages}
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl hover:bg-muted hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <span className="font-medium">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights delivered directly to your inbox.
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
          </div>
        </div>
      </div>
    </main>
  )
}