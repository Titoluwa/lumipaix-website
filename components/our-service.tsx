"use client"

import Image from "next/image"
import { Zap, BookOpen, Cpu, DollarSign, TrendingUp, CheckCircle, Cloud, Gift, Globe } from "lucide-react"
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
    color: "from-primary to-cyan-500",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure and solutions that enhance flexibility, reduce costs, and enable your business to operate anywhere, anytime.",
    image: "/images/cloud-computing-2.jpg",
    icon: Cloud,
    features: ["Migration Services", "Infrastructure Management", "Security"],
    color: "from-primary to-cyan-500",
    // color: "from-indigo-500 to-blue-500",
    
  },
  {
    id: "loyalty",
    title: "Loyalty Program",
    description:
      "Build lasting customer relationships with customized loyalty programs that increase retention, boost engagement, and maximize customer lifetime value.",
    image: "/images/loyalty-2.jpg",
    icon: Gift,
    features: ["Program Design", "Analytics & Insights", "Customer Engagement"],
    // color: "from-pink-500 to-red-500",
    color: "from-primary to-cyan-500",
  },
  {
    id: "web-app",
    title: "Web and App Development",
    description:
      "Custom web and mobile applications built with cutting-edge technology to deliver seamless user experiences and drive digital transformation.",
    image: "/images/web-app-development.jpg",
    icon: Globe,
    features: ["Web Development", "Mobile Apps", "UI/UX Design"],
    // color: "from-primary to-cyan-500",
    color: "from-cyan-500 to-primary",
  },
  {
    id: "automation",
    title: "Office Automation",
    description:
      "Streamline operations and increase efficiency through intelligent automation of office workflows, document management, and business processes.",
    image: "/images/office-automation.jpg",
    icon: Cpu,
    features: ["Workflow Optimization", "Document Management", "System Integration"],
    color: "from-primary to-cyan-500",
  },
  {
    id: "training",
    title: "Training Services",
    description:
      "Empower your team with professional development and specialized training programs designed to build expertise and drive organizational growth.",
    image: "/images/training-4.jpg",
    icon: BookOpen,
    features: ["Custom Programs", "Expert Instructors", "Certification"],
    color: "from-primary to-cyan-500",
  },
  {
    id: "financial",
    title: "Financial Services",
    description:
      "Comprehensive tax and bookkeeping solutions that ensure compliance, optimize finances, and provide clear financial insights for growth.",
    image: "/images/fs-tax.jpg",
    icon: DollarSign,
    features: ["Tax Planning", "Bookkeeping", "Financial Reporting"],
    color: "from-primary to-cyan-500",
  },
  {
    id: "procurement",
    title: "Procurement Services",
    description:
      "Optimize your supply chain and vendor management with our strategic procurement solutions designed to reduce costs and enhance efficiency.",
    image: "/images/procurement.jpg",
    icon: TrendingUp,
    features: ["Vendor Management", "Cost Optimization", "Supply Chain"],
    color: "from-primary to-cyan-500",
  },
]

export default function OurServices() {
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

        {/* Services Grid 1 */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => {
            const IconComponent = service.icon
            const isHovered = hoveredService === service.id

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>

                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>

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
        </div> */}

        {/* Services Grid 2*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service) => {
            const IconComponent = service.icon
            const isHovered = hoveredService === service.id

            return (
            <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group"
            >
                <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer h-full">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Image - Left half */}
                    <div className="md:w-1/2 relative h-48 md:h-auto">
                    <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content - Right half */}
                    <div className="md:w-1/2 p-6 flex flex-col">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>

                    <div className="space-y-2 mb-4">
                        {service.features.map((feature) => (
                        <p key={feature} className="text-xs text-primary font-medium flex items-center gap-2">
                            <CheckCircle className="w-3 h-3" />
                            {feature}
                        </p>
                        ))}
                    </div>

                    <button className="w-full py-2 text-center text-primary font-semibold text-sm border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                        Explore Service
                    </button>
                    </div>
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
