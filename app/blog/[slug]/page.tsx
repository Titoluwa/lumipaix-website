import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Clock } from "lucide-react"
import { getBlogPostBySlug } from "@/lib/blog-data"
import { notFound } from "next/navigation"

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Article Header */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-96 md:h-[500px] w-full">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">
                  {paragraph.replace(/^##\s*/, "")}
                </h2>
              )
            }

            if (paragraph.startsWith("**")) {
              return (
                <p key={index} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  {paragraph.split("\n").map((line, i) => (
                    <span key={i}>
                      {line.includes("**") ? (
                        <>{line.split("**").map((text, j) => (j % 2 === 1 ? <strong key={j}>{text}</strong> : text))}</>
                      ) : (
                        line
                      )}
                      {i < paragraph.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )
            }

            if (paragraph.startsWith("-")) {
              return (
                <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item.replace(/^-\s*/, "")}
                    </li>
                  ))}
                </ul>
              )
            }

            return (
              <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Author Card */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">About the Author</h3>
            <p className="text-muted-foreground mb-4">{post.author}</p>
            <p className="text-sm text-muted-foreground">
              {post.author} is a certified expert with extensive experience in {post.category.toLowerCase()}.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6">
            Connect with our experts to discuss how we can help you achieve your goals.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all font-semibold"
          >
            Schedule a Consultation
          </Link>
        </div>
      </article>
    </main>
  )
}
