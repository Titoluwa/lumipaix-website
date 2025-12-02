"use client"

import Image from "next/image"
import { Zap, BookOpen, Cpu, DollarSign, TrendingUp } from "lucide-react"
import { useState } from "react"

const services = [
  {
    id: "ai",
    title: "AI Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and drive innovation across your organization.",
    image: "/images/ai.jpg",
    icon: Zap,
    features: ["Machine Learning", "Predictive Analytics", "Automation"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "training",
    title: "Training Services",
    description:
      "Empower your team with professional development and specialized training programs designed to build expertise and drive organizational growth.",
    image: "/images/training-1.jpg",
    icon: BookOpen,
    features: ["Custom Programs", "Expert Instructors", "Certification"],
    color: "from-green-500 to-teal-500",
  },
  {
    id: "automation",
    title: "Office Automation",
    description:
      "Streamline operations and increase efficiency through intelligent automation of office workflows, document management, and business processes.",
    image: "/images/office-automation.jpg",
    icon: Cpu,
    features: ["Workflow Optimization", "Document Management", "System Integration"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "financial",
    title: "Financial Services",
    description:
      "Comprehensive tax and bookkeeping solutions that ensure compliance, optimize finances, and provide clear financial insights for growth.",
    image: "/images/fs-tax.jpg",
    icon: DollarSign,
    features: ["Tax Planning", "Bookkeeping", "Financial Reporting"],
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "procurement",
    title: "Procurement Services",
    description:
      "Optimize your supply chain and vendor management with our strategic procurement solutions designed to reduce costs and enhance efficiency.",
    image: "/images/procurement.jpg",
    icon: TrendingUp,
    features: ["Vendor Management", "Cost Optimization", "Supply Chain"],
    color: "from-red-500 to-rose-500",
  },
]

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive solutions tailored to transform every aspect of your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            const isHovered = hoveredService === service.id

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative"
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>

                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>

                    {/* Features - Show on hover */}
                    {isHovered && (
                      <div className="space-y-2 mb-4 pt-4 border-t border-border animate-fadeIn">
                        {service.features.map((feature) => (
                          <p key={feature} className="text-xs text-primary font-medium">
                            ✓ {feature}
                          </p>
                        ))}
                      </div>
                    )}

                    <button className="text-primary font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
