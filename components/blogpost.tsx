import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark, TrendingUp, Target } from "lucide-react"
import { BlogPost } from "@/lib/blog-data"

interface BlogPostArticleProps {
  post: BlogPost
}

export default function BlogPostArticle({ post }: BlogPostArticleProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Back Navigation */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="group-hover:underline">Back to Articles</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="inline-block bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              <TrendingUp className="w-4 h-4" />
              Trending
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border shadow-sm">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Written by</p>
                  <p className="font-semibold text-foreground">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Published</p>
                  <p className="font-semibold text-foreground">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Read time</p>
                  <p className="font-semibold text-foreground">{post.readTime}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="p-3 hover:bg-muted rounded-full transition-colors" title="Share">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-3 hover:bg-muted rounded-full transition-colors" title="Save">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-[60vh] max-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Content Container */}
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl border shadow-xl p-8 md:p-12">
          <div className="prose prose-lg prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-4xl font-bold text-foreground mb-8 pt-4">
                    {paragraph.replace(/^#\s*/, "")}
                  </h1>
                )
              }

              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-foreground mt-12 mb-6 pb-3 border-b">
                    {paragraph.replace(/^##\s*/, "")}
                  </h2>
                )
              }

              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-primary mt-10 mb-4">
                    {paragraph.replace(/^###\s*/, "")}
                  </h3>
                )
              }

              if (paragraph.startsWith("- ")) {
                return (
                  <div key={index} className="my-8">
                    <ul className="space-y-4">
                      {paragraph.split("\n").map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-2 shrink-0 w-2 h-2 bg-primary rounded-full" />
                          <span className="text-lg text-muted-foreground leading-relaxed">
                            {item.replace(/^-\s*/, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }

              if (paragraph.startsWith("> ")) {
                return (
                  <blockquote key={index} className="my-8 pl-6 border-l-4 border-primary/50 italic">
                    <p className="text-xl text-muted-foreground">
                      {paragraph.replace(/^>\s*/, "")}
                    </p>
                  </blockquote>
                )
              }

              if (paragraph.startsWith("**")) {
                return (
                  <div key={index} className="my-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph.split("\n").map((line, i) => (
                        <span key={i}>
                          {line.includes("**") ? (
                            <>{line.split("**").map((text, j) => 
                              (j % 2 === 1 ? <strong key={j} className="text-primary">{text}</strong> : text)
                            )}</>
                          ) : (
                            line
                          )}
                          {i < paragraph.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                )
              }

              return (
                <p key={index} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Key Takeaways */}
          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Key Takeaways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-semibold text-foreground">Transformative Impact</p>
                <p className="text-sm text-muted-foreground">Learn how to implement these strategies effectively</p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <p className="font-semibold text-foreground">Practical Applications</p>
                <p className="text-sm text-muted-foreground">Real-world examples and case studies included</p>
              </div>
            </div>
          </div>
        </div>

        {/* Author Card */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">About the Author</h3>
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src={`/authors/${post.author.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground mb-2">{post.author}</h4>
                <p className="text-muted-foreground mb-4">
                  {post.author} is a certified expert with over 10 years of experience in {post.category.toLowerCase()}. 
                  Their insights have helped hundreds of businesses achieve transformational results.
                </p>
                <div className="flex gap-4">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Certified Expert</span>
                  <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">Industry Leader</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Continue Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/ai-future" className="group">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group-hover:shadow-xl">
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  The Future of AI in Business
                </h4>
                <p className="text-sm text-muted-foreground">Explore upcoming AI trends and their impact</p>
              </div>
            </Link>
            <Link href="/blog/cloud-strategies" className="group">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group-hover:shadow-xl">
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Cloud Migration Strategies
                </h4>
                <p className="text-sm text-muted-foreground">Best practices for seamless cloud transition</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-2xl p-12 text-center shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our experts to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-lg"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-card border border-border text-foreground px-8 py-4 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all font-semibold"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}