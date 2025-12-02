"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc",
    content:
      "LumiPaix's AI solutions transformed our operational efficiency by 45%. Their team is professional, innovative, and truly dedicated to our success.",
    rating: 5,
    image: "/images/training-1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, Global Enterprises",
    content:
      "The training services provided exceptional value. Our team gained skills that immediately improved our project delivery and client satisfaction.",
    rating: 5,
    image: "/images/office-automation.jpg",
  },
  {
    name: "Jennifer Martinez",
    role: "Finance Director, Regional Bank",
    content:
      "Their financial services and bookkeeping solutions streamlined our processes. Highly recommended for any organization seeking reliable financial management.",
    rating: 5,
    image: "/images/fs-bookkeeping.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from organizations that transformed their business with LumiPaix
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
