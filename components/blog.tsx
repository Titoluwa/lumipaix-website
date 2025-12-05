"use client"

import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"
import { BLOG_POSTS } from "@/lib/constants"

export default function Blog() {
    return (
        <section id="blog" className="py-20 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    Latest <span className="text-primary">Insights</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                    Stay informed with expert insights on industry trends, best practices, and business transformation
                    strategies
                </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <article
                    key={post.id}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary flex flex-col"
                    >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                        <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">{post.excerpt}</p>

                        {/* Meta */}
                        <div className="space-y-3 mb-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <User className="w-4 h-4" />
                            {post.author}
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                            </div>
                            <span>{post.readTime}</span>
                        </div>
                        </div>

                        {/* CTA */}
                        <button className="text-primary font-semibold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    </article>
                ))}
                </div>

                {/* View All Posts Button */}
                <div className="text-center mt-12">
                <a href="/blog" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold inline-flex items-center gap-2 group">
                    View All Articles
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                </div>
            </div>
        </section>
    )
}
