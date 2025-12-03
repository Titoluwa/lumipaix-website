"use client"

import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, Tech Inc",
    company: "Tech Inc",
    content: "LumiPaix's AI solutions transformed our operational efficiency by 45%. Their team's innovative approach helped us automate 80% of our repetitive tasks.",
    rating: 5,
    image: "/placeholder.svg",
    service: "AI Solutions",
    result: "45% efficiency increase",
    // color: "from-blue-500 to-cyan-500",
    color: "from-primary to-cyan-500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Director",
    company: "Global Enterprises",
    content: "The professional training program elevated our team's capabilities dramatically. Within three months, we saw a 60% improvement in project delivery speed.",
    rating: 5,
    image: "/placeholder.svg",
    service: "Training Services",
    result: "60% faster delivery",
    // color: "from-green-500 to-teal-500",
    color: "from-primary to-cyan-500",
  },
  {
    id: 3,
    name: "Jennifer Martinez",
    role: "Finance Director",
    company: "First Regional Bank",
    content: "Their financial services saved us over $200k in the first year. The automated bookkeeping system reduced manual errors by 95%.",
    rating: 4,
    image: "/placeholder.svg",
    service: "Financial Services",
    result: "$200k annual savings",
    // color: "from-amber-500 to-orange-500",
    color: "from-primary to-cyan-500",
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "CTO",
    company: "ShopSphere",
    content: "Office automation implementation reduced processing time from 3 days to 2 hours. Seamless integration made the transition smooth.",
    rating: 4,
    image: "/placeholder.svg",
    service: "Office Automation",
    result: "95% time reduction",
    // color: "from-purple-500 to-pink-500",
    color: "from-primary to-cyan-500",
  },
  {
    id: 5,
    name: "Amanda Davis",
    role: "Procurement Manager",
    company: "Precision Manufacturing",
    content: "Procurement optimization saved us 30% on supply chain costs while improving vendor relationships. Data-driven approach was key.",
    rating: 5,
    image: "/placeholder.svg",
    service: "Procurement Services",
    result: "30% cost reduction",
    // color: "from-red-500 to-rose-500",
    color: "from-primary to-cyan-500",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-secondary/20 py-16 md:py-20 bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients</span> Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover how organizations are achieving remarkable results with our solutions
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mb-8">
          <div 
            className="relative bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Left Column - Testimonial Text */}
              <div className="lg:w-2/3 space-y-6">
                {/* Quote Icon */}
                <div className="text-primary/20">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-muted-foreground">{currentTestimonial.rating.toFixed(1)}</span>
                </div>

                {/* Quote */}
                <blockquote>
                  <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                    "{currentTestimonial.content}"
                  </p>
                </blockquote>

                {/* Service & Result */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-medium text-primary">{currentTestimonial.service}</span>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${currentTestimonial.color} text-white`}>
                    <span className="text-sm font-medium">{currentTestimonial.result}</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Author Info */}
              <div className="lg:w-1/3 flex flex-col items-center space-y-6">
                {/* Author Image */}
                <div className="relative">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-3 border-white shadow-lg">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  </div>
                </div>

                {/* Author Details */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{currentTestimonial.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{currentTestimonial.role}</p>
                  <p className="text-primary font-medium">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-border bg-card hover:bg-accent/20 hover:border-primary/50 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 ${index === currentIndex ? "w-6 h-1.5 bg-primary rounded-full" : "w-1.5 h-1.5 bg-border bg-white rounded-full hover:bg-primary/50"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full border border-border bg-card hover:bg-accent/20 hover:border-primary/50 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Small Testimonial Previews */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`text-left p-4 rounded-xl border bg-white transition-all duration-300 ${
                index === currentIndex 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/30 hover:bg-accent/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground truncate">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
                </div>
              </div>
              <div className={`w-2/3 h-1 rounded-full bg-gradient-to-r ${testimonial.color}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}