"use client"

import Image from "next/image"
import { Zap, BookOpen, Cpu, DollarSign, TrendingUp, CheckCircle, ArrowRight, Cloud, Gift, Globe } from "lucide-react"
import { useState } from "react"

export const SERVICES = [
  {
    id: "ai",
    title: "AI Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and drive innovation across your organization.",
    longDescription:
      "Our AI solutions transform how you do business. We implement machine learning models that analyze patterns in your data, predictive analytics that forecast trends, and intelligent automation that reduces manual work by up to 80%. From natural language processing to computer vision, we build custom AI systems tailored to your specific business needs.",
    image: "/images/ai.jpg",
    icon: Zap,
    features: ["Machine Learning Models", "Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision", "Custom AI Integration"],
    benefits: ["40-80% efficiency gains", "Real-time insights", "Reduced operational costs", "Competitive advantage"],
    altColor: "from-blue-500 to-cyan-500",
    color: "from-primary/40 to-cyan-500/30",
    bgColor: "bg-primary/20 dark:bg-primay/70"
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure and solutions that enhance flexibility, reduce costs, and enable your business to operate anywhere, anytime.",
    longDescription:
      "Transform your business with our comprehensive cloud solutions. We provide end-to-end cloud services including seamless migration, secure infrastructure management, and scalable architecture design. Whether you need hybrid, public, or private cloud solutions, we ensure optimal performance, security, and cost-efficiency for your digital transformation journey.",
    image: "/images/cloud-computing-2.jpg",
    icon: Cloud,
    features: ["Cloud Migration Services", "Infrastructure Management", "Security & Compliance", "Scalable Architecture", "Disaster Recovery", "Cost Optimization"],
    benefits: ["50% reduction in IT costs", "99.9% uptime guarantee", "Enhanced security posture", "Business continuity"],
    altColor: "from-indigo-500 to-blue-500",
    color: "from-secondary/40 to-cyan-500/30",
    bgColor: "bg-primary/20 dark:bg-primay/70"
    // color: "from-primary to-cyan-500",
    // bgColor: "bg-primary/20 dark:bg-primay/70"
  },
  {
    id: "loyalty",
    title: "Loyalty Program",
    description:
      "Build lasting customer relationships with customized loyalty programs that increase retention, boost engagement, and maximize customer lifetime value.",
    longDescription:
      "Create powerful customer connections with our data-driven loyalty programs. We design and implement customized loyalty ecosystems that reward customer engagement, increase repeat purchases, and build brand advocacy. Our solutions include program design, analytics integration, multi-channel engagement strategies, and real-time rewards management to drive measurable ROI.",
    image: "/images/loyalty-2.jpg",
    icon: Gift,
    features: ["Program Design & Strategy", "Analytics & Insights", "Customer Engagement", "Multi-Channel Integration", "Rewards Management", "Performance Tracking"],
    benefits: ["30% increase in customer retention", "Higher customer lifetime value", "Improved brand loyalty", "Actionable customer insights"],
    altColor: "from-pink-500 to-red-500",
    color: "from-primary/40 to-cyan-500/30",
    bgColor: "bg-primary/20 dark:bg-primay/70"
    // color: "from-primary to-cyan-500",
    // bgColor: "bg-primary/20 dark:bg-primay/70"
  },
  {
    id: "web-app",
    title: "Web and App Development",
    description:
      "Custom web and mobile applications built with cutting-edge technology to deliver seamless user experiences and drive digital transformation.",
    longDescription:
      "Bring your digital vision to life with our full-stack development expertise. We create responsive web applications, progressive web apps (PWAs), and native mobile applications that deliver exceptional user experiences. Our agile development process ensures on-time delivery of scalable, secure, and high-performance solutions tailored to your business objectives.",
    image: "/images/web-app-development.jpg",
    icon: Globe,
    features: ["Web Development", "Mobile App Development", "UI/UX Design", "Progressive Web Apps", "API Integration", "Performance Optimization"],
    benefits: ["Enhanced user engagement", "Cross-platform compatibility", "Scalable architecture", "Faster time-to-market"],
    altColor: "from-cyan-500 to-blue-500",
    color: "from-primary/40 to-cyan-500/30",
    bgColor: "bg-primary/20 dark:bg-primay/70"
    // color: "from-cyan-500 to-primary",
    // bgColor: "bg-primary/20 dark:bg-primay/70"
  },
  {
    id: "automation",
    title: "Office Automation",
    description:
      "Streamline operations and increase efficiency through intelligent automation of office workflows, document management, and business processes.",
    longDescription:
      "Transform your office operations with our comprehensive automation solutions. We analyze your workflows, identify bottlenecks, and implement automated systems that handle repetitive tasks. Our solutions include document management automation, workflow optimization, CRM integration, and reporting systems that save hundreds of hours monthly.",
    image: "/images/office-automation.jpg",
    icon: Cpu,
    features: ["Workflow Optimization", "Document Management", "CRM Integration", "Reporting Automation", "Email Automation", "Process Mapping"],
    benefits: ["70% time savings on admin tasks", "Error reduction", "Better resource allocation", "Scalable processes"],
    altColor: "from-purple-500 to-pink-500",
    color: "from-primary/40 to-cyan-500/30",
    bgColor: "bg-primary/20 dark:bg-primay/70"
  },
  {
    id: "training",
    title: "Professional Training",
    description:
      "Empower your team with professional development and specialized training programs designed to build expertise and drive organizational growth.",
    longDescription:
      "We offer comprehensive training programs that bridge the skills gap in your organization. Our curriculum includes hands-on workshops, certification courses, and ongoing mentorship. Whether you need technical upskilling, leadership development, or industry-specific training, we create programs that deliver measurable results and ROI.",
    image: "/images/training-4.jpg",
    icon: BookOpen,
    features: ["Custom Training Programs", "Expert-Led Workshops", "Certification Courses", "Ongoing Mentorship", "Skills Assessment", "ROI Tracking"],
    benefits: ["Higher employee retention", "Increased productivity", "Skills standardization", "Compliance readiness"],
    altColor: "from-green-500 to-teal-500",
    color: "from-secondary/40 to-cyan-500/30",
    bgColor: "bg-primary/20 dark:bg-primay/70"
  },
  {
    id: "financial",
    title: "Financial Services",
    description:
      "Comprehensive tax and bookkeeping solutions that ensure compliance, optimize finances, and provide clear financial insights for growth.",
    longDescription:
      "Our financial services go beyond basic bookkeeping. We provide strategic financial management including tax planning, financial analysis, cash flow optimization, and compliance management. With real-time financial dashboards and predictive financial modeling, we help you make informed decisions that drive profitability.",
    image: "/images/fs-tax.jpg",
    icon: DollarSign,
    features: ["Strategic Tax Planning", "Advanced Bookkeeping", "Financial Analysis", "Cash Flow Management", "Compliance & Audit", "Financial Forecasting"],
    benefits: ["Tax savings up to 30%", "Real-time financial visibility", "Improved cash flow", "Audit readiness"],
    altColor: "from-amber-500 to-orange-500",
    color: "from-secondary/40 to-cyan-500/30",
    bgColor: "bg-primary/20 dark:bg-primay/70"
  },
  {
    id: "procurement",
    title: "Procurement Services",
    description:
      "Optimize your supply chain and vendor management with our strategic procurement solutions designed to reduce costs and enhance efficiency.",
    longDescription:
      "We revolutionize your procurement process with data-driven strategies that reduce costs while maintaining quality. Our services include vendor management optimization, contract negotiation, supply chain analytics, and procurement automation. We help you build resilient supplier relationships and create efficient procurement ecosystems.",
    image: "/images/procurement.jpg",
    icon: TrendingUp,
    features: ["Vendor Management", "Strategic Sourcing", "Contract Negotiation", "Supply Chain Analytics", "Procurement Automation", "Cost Optimization"],
    benefits: ["15-40% cost reduction", "Improved vendor relationships", "Supply chain resilience", "Faster procurement cycles"],
    altColor: "from-red-500 to-rose-500",
    color: "from-primary/40 to-cyan-500/30",
    bgColor: "bg-primary/20 dark:bg-primay/70"
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState<string>("ai")

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Comprehensive <span className="text-primary">Business Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            End-to-end services designed to transform every aspect of your operations with measurable results
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Services Navigation - Left Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Services</h3>
              {SERVICES.map((service) => {
                const IconComponent = service.icon
                const isActive = activeService === service.id

                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? `border-primary shadow-lg bg-gradient-to-r ${service.color} bg-opacity-5 border-l-4 border-l-primary`
                        : "border-border hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} ${isActive ? "border-b-2 border-primary" : ""}`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground mb-2">{service.title}</h4>
                        <p className="text-sm text-foreground/60 line-clamp-2">{service.description}</p>
                        {/* {isActive && ( */}
                          <div className="mt-4 flex items-center text-primary font-medium text-sm">
                            View details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        {/* )}/ */}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Service Details - Right Content */}
          <div className="lg:w-2/3">
            {SERVICES.map((service) => {
              const IconComponent = service.icon
              const isActive = activeService === service.id

              if (!isActive) return null

              return (
                <div key={service.id} className="space-y-8 animate-fadeIn">
                  {/* Header with Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={1200}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-20 m-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h3>
                      </div>
                      <p className="text-white/90 text-lg max-w-2xl">{service.longDescription}</p>
                    </div>
                  </div>

                  {/* Features and Benefits Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div className={`bg-gradient-to-r ${service.color} p-8 rounded-2xl border border-border`}>
                      <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-4">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className={`p-1 rounded-full bg-gradient-to-br ${service.color} mt-1`}>
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-card border border-border p-8 rounded-2xl">
                      <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Measurable Benefits
                      </h4>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className={`p-1 rounded-full bg-gradient-to-br ${service.color}`}>
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-foreground font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h4 className="text-2xl font-bold text-foreground mb-2">Ready to transform your business?</h4>
                        <p className="text-muted-foreground">
                          Get a free consultation to discuss how our {service.title.toLowerCase()} can benefit your organization
                        </p>
                      </div>
                      <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105">
                        Schedule Consultation
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
// "use client"

// import Image from "next/image"
// import { Zap, BookOpen, Cpu, DollarSign, TrendingUp, CheckCircle, ArrowRight, Cloud, Gift, Globe } from "lucide-react"
// import { useState, useEffect } from "react"

// export const SERVICES = [
//   {
//     id: "ai",
//     title: "AI Solutions",
//     description: "Leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and drive innovation.",
//     longDescription: "Our AI solutions transform how you do business. We implement machine learning models that analyze patterns in your data, predictive analytics that forecast trends, and intelligent automation that reduces manual work by up to 80%. From natural language processing to computer vision, we build custom AI systems tailored to your specific business needs.",
//     image: "/images/ai.jpg",
//     icon: Zap,
//     features: ["Machine Learning Models", "Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision", "Custom AI Integration"],
//     benefits: ["40-80% efficiency gains", "Real-time insights", "Reduced operational costs", "Competitive advantage"],
//     altColor: "from-blue-500 to-cyan-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "cloud",
//     title: "Cloud Computing",
//     description: "Scalable cloud infrastructure that enhances flexibility, reduces costs, and enables anywhere operations.",
//     longDescription: "Transform your business with our comprehensive cloud solutions. We provide end-to-end cloud services including seamless migration, secure infrastructure management, and scalable architecture design. Whether you need hybrid, public, or private cloud solutions, we ensure optimal performance, security, and cost-efficiency for your digital transformation journey.",
//     image: "/images/cloud-computing-2.jpg",
//     icon: Cloud,
//     features: ["Cloud Migration Services", "Infrastructure Management", "Security & Compliance", "Scalable Architecture", "Disaster Recovery", "Cost Optimization"],
//     benefits: ["50% reduction in IT costs", "99.9% uptime guarantee", "Enhanced security posture", "Business continuity"],
//     altColor: "from-indigo-500 to-blue-500",
//     color: "from-secondary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "loyalty",
//     title: "Loyalty Program",
//     description: "Build lasting customer relationships with customized loyalty programs that increase retention and engagement.",
//     longDescription: "Create powerful customer connections with our data-driven loyalty programs. We design and implement customized loyalty ecosystems that reward customer engagement, increase repeat purchases, and build brand advocacy. Our solutions include program design, analytics integration, multi-channel engagement strategies, and real-time rewards management to drive measurable ROI.",
//     image: "/images/loyalty-2.jpg",
//     icon: Gift,
//     features: ["Program Design & Strategy", "Analytics & Insights", "Customer Engagement", "Multi-Channel Integration", "Rewards Management", "Performance Tracking"],
//     benefits: ["30% increase in customer retention", "Higher customer lifetime value", "Improved brand loyalty", "Actionable customer insights"],
//     altColor: "from-pink-500 to-red-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "web-app",
//     title: "Web and App Development",
//     description: "Custom web and mobile applications built with cutting-edge technology for seamless user experiences.",
//     longDescription: "Bring your digital vision to life with our full-stack development expertise. We create responsive web applications, progressive web apps (PWAs), and native mobile applications that deliver exceptional user experiences. Our agile development process ensures on-time delivery of scalable, secure, and high-performance solutions tailored to your business objectives.",
//     image: "/images/web-app-development.jpg",
//     icon: Globe,
//     features: ["Web Development", "Mobile App Development", "UI/UX Design", "Progressive Web Apps", "API Integration", "Performance Optimization"],
//     benefits: ["Enhanced user engagement", "Cross-platform compatibility", "Scalable architecture", "Faster time-to-market"],
//     altColor: "from-cyan-500 to-blue-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "automation",
//     title: "Office Automation",
//     description: "Streamline operations with intelligent automation of workflows, document management, and business processes.",
//     longDescription: "Transform your office operations with our comprehensive automation solutions. We analyze your workflows, identify bottlenecks, and implement automated systems that handle repetitive tasks. Our solutions include document management automation, workflow optimization, CRM integration, and reporting systems that save hundreds of hours monthly.",
//     image: "/images/office-automation.jpg",
//     icon: Cpu,
//     features: ["Workflow Optimization", "Document Management", "CRM Integration", "Reporting Automation", "Email Automation", "Process Mapping"],
//     benefits: ["70% time savings on admin tasks", "Error reduction", "Better resource allocation", "Scalable processes"],
//     altColor: "from-purple-500 to-pink-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "training",
//     title: "Professional Training",
//     description: "Empower your team with professional development and specialized training programs for organizational growth.",
//     longDescription: "We offer comprehensive training programs that bridge the skills gap in your organization. Our curriculum includes hands-on workshops, certification courses, and ongoing mentorship. Whether you need technical upskilling, leadership development, or industry-specific training, we create programs that deliver measurable results and ROI.",
//     image: "/images/training-4.jpg",
//     icon: BookOpen,
//     features: ["Custom Training Programs", "Expert-Led Workshops", "Certification Courses", "Ongoing Mentorship", "Skills Assessment", "ROI Tracking"],
//     benefits: ["Higher employee retention", "Increased productivity", "Skills standardization", "Compliance readiness"],
//     altColor: "from-green-500 to-teal-500",
//     color: "from-secondary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "financial",
//     title: "Financial Services",
//     description: "Comprehensive tax and bookkeeping solutions that ensure compliance and optimize finances for growth.",
//     longDescription: "Our financial services go beyond basic bookkeeping. We provide strategic financial management including tax planning, financial analysis, cash flow optimization, and compliance management. With real-time financial dashboards and predictive financial modeling, we help you make informed decisions that drive profitability.",
//     image: "/images/fs-tax.jpg",
//     icon: DollarSign,
//     features: ["Strategic Tax Planning", "Advanced Bookkeeping", "Financial Analysis", "Cash Flow Management", "Compliance & Audit", "Financial Forecasting"],
//     benefits: ["Tax savings up to 30%", "Real-time financial visibility", "Improved cash flow", "Audit readiness"],
//     altColor: "from-amber-500 to-orange-500",
//     color: "from-secondary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "procurement",
//     title: "Procurement Services",
//     description: "Optimize supply chain and vendor management with strategic procurement solutions to reduce costs.",
//     longDescription: "We revolutionize your procurement process with data-driven strategies that reduce costs while maintaining quality. Our services include vendor management optimization, contract negotiation, supply chain analytics, and procurement automation. We help you build resilient supplier relationships and create efficient procurement ecosystems.",
//     image: "/images/procurement.jpg",
//     icon: TrendingUp,
//     features: ["Vendor Management", "Strategic Sourcing", "Contract Negotiation", "Supply Chain Analytics", "Procurement Automation", "Cost Optimization"],
//     benefits: ["15-40% cost reduction", "Improved vendor relationships", "Supply chain resilience", "Faster procurement cycles"],
//     altColor: "from-red-500 to-rose-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
// ]

// export default function Services() {
//   const [activeService, setActiveService] = useState<string>("ai")
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   const currentService = SERVICES.find(service => service.id === activeService) || SERVICES[0]

//   return (
//     <section id="services" className="py-16 bg-background relative overflow-hidden mt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 space-y-4">
//           <h1 className="text-3xl md:text-4xl font-bold text-foreground">
//             Comprehensive <span className="text-primary">Business Solutions</span>
//           </h1>
//           <p className="text-base text-muted-foreground max-w-2xl mx-auto text-balance">
//             End-to-end services designed to transform every aspect of your operations with measurable results
//           </p>
//         </div>

//         {/* Mobile View: Details First */}
//         {isMobile ? (
//           <div className="space-y-8">
//             {/* Service Details - Top */}
//             <div className="space-y-6">
//               {/* Service Header */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className={`p-3 rounded-lg bg-gradient-to-br ${currentService.color} shadow-lg`}>
//                   <currentService.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-foreground">{currentService.title}</h2>
//               </div>

//               {/* Service Image */}
//               <div className="relative rounded-xl overflow-hidden shadow-lg h-48">
//                 <Image
//                   src={currentService.image || "/placeholder.svg"}
//                   alt={currentService.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 912px) 100vw, 50vw"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               </div>

//               {/* Description */}
//               <p className="text-base text-foreground leading-relaxed">
//                 {currentService.longDescription}
//               </p>

//               {/* Features & Benefits Side by Side */}
//               <div className="grid grid-cols-1 gap-6">
//                 <div className={`bg-gradient-to-r ${currentService.color} p-6 rounded-xl border border-border`}>
//                   <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
//                     <CheckCircle className="w-5 h-5 text-primary" />
//                     Key Features
//                   </h3>
//                   <ul className="space-y-3">
//                     {currentService.features.slice(0, 4).map((feature, index) => (
//                       <li key={index} className="flex items-start gap-3">
//                         <div className={`p-1 rounded-full bg-gradient-to-br ${currentService.color} mt-1 flex-shrink-0`}>
//                           <div className="w-2 h-2 bg-white rounded-full" />
//                         </div>
//                         <span className="text-sm text-foreground">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-card border border-border p-6 rounded-xl">
//                   <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
//                     <TrendingUp className="w-5 h-5 text-primary" />
//                     Measurable Benefits
//                   </h3>
//                   <ul className="space-y-3">
//                     {currentService.benefits.map((benefit, index) => (
//                       <li key={index} className="flex items-center gap-3">
//                         <div className={`p-1 rounded-full bg-gradient-to-br ${currentService.color} flex-shrink-0`}>
//                           <CheckCircle className="w-4 h-4 text-white" />
//                         </div>
//                         <span className="text-sm text-foreground font-medium">{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
//                 <h3 className="text-lg font-bold text-foreground mb-3">Ready to get started?</h3>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   Get a free consultation for {currentService.title.toLowerCase()}
//                 </p>
//                 <button className="w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
//                   Schedule Consultation
//                 </button>
//               </div>
//             </div>

//             {/* Services Navigation - Bottom */}
//             <div className="pt-8 border-t border-border">
//               <h3 className="text-xl font-bold text-foreground mb-6">All Services</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {SERVICES.map((service) => {
//                   const IconComponent = service.icon
//                   const isActive = activeService === service.id

//                   return (
//                     <button
//                       key={service.id}
//                       onClick={() => setActiveService(service.id)}
//                       className={`text-left p-4 rounded-lg border transition-all ${
//                         isActive
//                           ? `border-primary bg-gradient-to-r ${service.color} bg-opacity-10`
//                           : "border-border hover:border-primary/50 hover:bg-primary/5"
//                       }`}
//                     >
//                       <div className="flex flex-col items-center text-center gap-3">
//                         <div className={`p-2.5 rounded-lg bg-gradient-to-br ${service.color}`}>
//                           <IconComponent className="w-4 h-4 text-white" />
//                         </div>
//                         <h4 className="font-semibold text-sm text-foreground line-clamp-2">{service.title}</h4>
//                       </div>
//                     </button>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* Desktop/Tablet View: Split Layout */
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//             {/* Services Navigation - Right (60%) */}
//             <div className="lg:col-span-5">
//               <div className="sticky top-24 space-y-4">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-2xl font-bold text-foreground">Our Services</h3>
//                   {/* <span className="text-sm text-muted-foreground">{SERVICES.length} services available</span> */}
//                 </div>

//                 <div className="grid grid-cols-1 gap-4">
//                   {SERVICES.map((service) => {
//                     const IconComponent = service.icon
//                     const isActive = activeService === service.id

//                     return (
//                       <button
//                         key={service.id}
//                         onClick={() => setActiveService(service.id)}
//                         className={`text-left p-5 rounded-xl border transition-all duration-300 group ${
//                           isActive
//                             ? `border-primary shadow-lg bg-gradient-to-r ${service.color} bg-opacity-10 border-l-4 border-l-primary`
//                             : "border-border hover:border-primary/50 hover:shadow-md hover:bg-primary/5"
//                         }`}
//                       >
//                         <div className="flex items-start gap-4">
//                           <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
//                             <IconComponent className="w-5 h-5 text-white" />
//                           </div>
                          
//                           <div className="flex-1">
//                             <h4 className="font-bold text-lg text-foreground mb-2">{service.title}</h4>
//                             <p className="text-sm text-foreground/60 line-clamp-2 mb-3">{service.description}</p>
                            
//                             <div className="flex items-center justify-between">
//                               <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
//                                 View details
//                               </span>
//                               <ArrowRight className={`w-4 h-4 text-primary transition-transform duration-300 ${isActive ? 'translate-x-1' : ''}`} />
//                             </div>
//                           </div>
//                         </div>
//                       </button>
//                     )
//                   })}
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-xl p-6">
//                   <h4 className="text-lg font-bold text-foreground mb-2">Need a custom solution?</h4>
//                   <p className="text-sm text-muted-foreground mb-4">
//                     We can tailor our services to meet your specific business requirements
//                   </p>
//                   <button className="w-full py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all">
//                     Contact Our Experts
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* Service Details - Left (40%) */}
//             <div className="lg:col-span-7 space-y-8">
//               {/* Service Header with Image */}
//               <div className="relative rounded-xl overflow-hidden shadow-lg">
//                 <div className="aspect-video relative">
//                   <Image
//                     src={currentService.image || "/placeholder.svg"}
//                     alt={currentService.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 912px) 100vw, 40vw"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="flex items-center gap-4">
//                     <div className={`p-3 rounded-lg bg-gradient-to-br ${currentService.color} shadow-lg`}>
//                       <currentService.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <h2 className="text-2xl font-bold text-white">{currentService.title}</h2>
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="space-y-4">
//                 <h3 className="text-lg font-semibold text-foreground">Overview</h3>
//                 <p className="text-base text-foreground/80 leading-relaxed">
//                   {currentService.longDescription}
//                 </p>
//               </div>

//               {/* Features & Benefits */}
//               <div className="space-y-6">
//                 <div className={`bg-gradient-to-r ${currentService.color} p-6 rounded-xl border border-border`}>
//                   <h3 className="text-lg font-bold text-foreground mb-4">Key Features</h3>
//                   <ul className="grid grid-cols-2 gap-3">
//                     {currentService.features.slice(0, 6).map((feature, index) => (
//                       <li key={index} className="flex items-start gap-2">
//                         <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
//                         <span className="text-sm text-foreground">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-card border border-border p-6 rounded-xl">
//                   <h3 className="text-lg font-bold text-foreground mb-4">Measurable Benefits</h3>
//                   <ul className="space-y-3">
//                     {currentService.benefits.map((benefit, index) => (
//                       <li key={index} className="flex items-center gap-3">
//                         <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
//                         <span className="text-sm text-foreground font-medium">{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
//                 <h3 className="text-lg font-bold text-foreground mb-3">Ready to transform your business?</h3>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   Get a free consultation to discuss how our {currentService.title.toLowerCase()} can benefit your organization
//                 </p>
//                 <button className="w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-[1.02]">
//                   Schedule Consultation
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }


// "use client"

// import Image from "next/image"
// import { Zap, BookOpen, Cpu, DollarSign, TrendingUp, CheckCircle, ArrowRight, Cloud, Gift, Globe } from "lucide-react"
// import { useState, useEffect } from "react"

// export const SERVICES = [
//   {
//     id: "ai",
//     title: "AI Solutions",
//     description: "Leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and drive innovation.",
//     longDescription: "Our AI solutions transform how you do business. We implement machine learning models that analyze patterns in your data, predictive analytics that forecast trends, and intelligent automation that reduces manual work by up to 80%. From natural language processing to computer vision, we build custom AI systems tailored to your specific business needs.",
//     image: "/images/ai.jpg",
//     icon: Zap,
//     features: ["Machine Learning Models", "Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision", "Custom AI Integration"],
//     benefits: ["40-80% efficiency gains", "Real-time insights", "Reduced operational costs", "Competitive advantage"],
//     altColor: "from-blue-500 to-cyan-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "cloud",
//     title: "Cloud Computing",
//     description: "Scalable cloud infrastructure that enhances flexibility, reduces costs, and enables anywhere operations.",
//     longDescription: "Transform your business with our comprehensive cloud solutions. We provide end-to-end cloud services including seamless migration, secure infrastructure management, and scalable architecture design. Whether you need hybrid, public, or private cloud solutions, we ensure optimal performance, security, and cost-efficiency for your digital transformation journey.",
//     image: "/images/cloud-computing-2.jpg",
//     icon: Cloud,
//     features: ["Cloud Migration Services", "Infrastructure Management", "Security & Compliance", "Scalable Architecture", "Disaster Recovery", "Cost Optimization"],
//     benefits: ["50% reduction in IT costs", "99.9% uptime guarantee", "Enhanced security posture", "Business continuity"],
//     altColor: "from-indigo-500 to-blue-500",
//     color: "from-secondary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "loyalty",
//     title: "Loyalty Program",
//     description: "Build lasting customer relationships with customized loyalty programs that increase retention and engagement.",
//     longDescription: "Create powerful customer connections with our data-driven loyalty programs. We design and implement customized loyalty ecosystems that reward customer engagement, increase repeat purchases, and build brand advocacy. Our solutions include program design, analytics integration, multi-channel engagement strategies, and real-time rewards management to drive measurable ROI.",
//     image: "/images/loyalty-2.jpg",
//     icon: Gift,
//     features: ["Program Design & Strategy", "Analytics & Insights", "Customer Engagement", "Multi-Channel Integration", "Rewards Management", "Performance Tracking"],
//     benefits: ["30% increase in customer retention", "Higher customer lifetime value", "Improved brand loyalty", "Actionable customer insights"],
//     altColor: "from-pink-500 to-red-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "web-app",
//     title: "Web and App Development",
//     description: "Custom web and mobile applications built with cutting-edge technology for seamless user experiences.",
//     longDescription: "Bring your digital vision to life with our full-stack development expertise. We create responsive web applications, progressive web apps (PWAs), and native mobile applications that deliver exceptional user experiences. Our agile development process ensures on-time delivery of scalable, secure, and high-performance solutions tailored to your business objectives.",
//     image: "/images/web-app-development.jpg",
//     icon: Globe,
//     features: ["Web Development", "Mobile App Development", "UI/UX Design", "Progressive Web Apps", "API Integration", "Performance Optimization"],
//     benefits: ["Enhanced user engagement", "Cross-platform compatibility", "Scalable architecture", "Faster time-to-market"],
//     altColor: "from-cyan-500 to-blue-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "automation",
//     title: "Office Automation",
//     description: "Streamline operations with intelligent automation of workflows, document management, and business processes.",
//     longDescription: "Transform your office operations with our comprehensive automation solutions. We analyze your workflows, identify bottlenecks, and implement automated systems that handle repetitive tasks. Our solutions include document management automation, workflow optimization, CRM integration, and reporting systems that save hundreds of hours monthly.",
//     image: "/images/office-automation.jpg",
//     icon: Cpu,
//     features: ["Workflow Optimization", "Document Management", "CRM Integration", "Reporting Automation", "Email Automation", "Process Mapping"],
//     benefits: ["70% time savings on admin tasks", "Error reduction", "Better resource allocation", "Scalable processes"],
//     altColor: "from-purple-500 to-pink-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "training",
//     title: "Professional Training",
//     description: "Empower your team with professional development and specialized training programs for organizational growth.",
//     longDescription: "We offer comprehensive training programs that bridge the skills gap in your organization. Our curriculum includes hands-on workshops, certification courses, and ongoing mentorship. Whether you need technical upskilling, leadership development, or industry-specific training, we create programs that deliver measurable results and ROI.",
//     image: "/images/training-4.jpg",
//     icon: BookOpen,
//     features: ["Custom Training Programs", "Expert-Led Workshops", "Certification Courses", "Ongoing Mentorship", "Skills Assessment", "ROI Tracking"],
//     benefits: ["Higher employee retention", "Increased productivity", "Skills standardization", "Compliance readiness"],
//     altColor: "from-green-500 to-teal-500",
//     color: "from-secondary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "financial",
//     title: "Financial Services",
//     description: "Comprehensive tax and bookkeeping solutions that ensure compliance and optimize finances for growth.",
//     longDescription: "Our financial services go beyond basic bookkeeping. We provide strategic financial management including tax planning, financial analysis, cash flow optimization, and compliance management. With real-time financial dashboards and predictive financial modeling, we help you make informed decisions that drive profitability.",
//     image: "/images/fs-tax.jpg",
//     icon: DollarSign,
//     features: ["Strategic Tax Planning", "Advanced Bookkeeping", "Financial Analysis", "Cash Flow Management", "Compliance & Audit", "Financial Forecasting"],
//     benefits: ["Tax savings up to 30%", "Real-time financial visibility", "Improved cash flow", "Audit readiness"],
//     altColor: "from-amber-500 to-orange-500",
//     color: "from-secondary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
//   {
//     id: "procurement",
//     title: "Procurement Services",
//     description: "Optimize supply chain and vendor management with strategic procurement solutions to reduce costs.",
//     longDescription: "We revolutionize your procurement process with data-driven strategies that reduce costs while maintaining quality. Our services include vendor management optimization, contract negotiation, supply chain analytics, and procurement automation. We help you build resilient supplier relationships and create efficient procurement ecosystems.",
//     image: "/images/procurement.jpg",
//     icon: TrendingUp,
//     features: ["Vendor Management", "Strategic Sourcing", "Contract Negotiation", "Supply Chain Analytics", "Procurement Automation", "Cost Optimization"],
//     benefits: ["15-40% cost reduction", "Improved vendor relationships", "Supply chain resilience", "Faster procurement cycles"],
//     altColor: "from-red-500 to-rose-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primary/70"
//   },
// ]

// export default function Services() {
//   const [activeService, setActiveService] = useState<string>("ai")
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   const currentService = SERVICES.find(service => service.id === activeService) || SERVICES[0]

//   return (
//     <section id="services" className="py-16 bg-background relative overflow-hidden mt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 space-y-4">
//           <h1 className="text-3xl md:text-4xl font-bold text-foreground">
//             Comprehensive <span className="text-primary">Business Solutions</span>
//           </h1>
//           <p className="text-base text-muted-foreground max-w-2xl mx-auto text-balance">
//             End-to-end services designed to transform every aspect of your operations with measurable results
//           </p>
//         </div>

//         {/* Mobile View: Details First */}
//         {isMobile ? (
//           <div className="space-y-8">
//             {/* Service Details - Top */}
//             <div className="space-y-6">
//               {/* Service Header */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className={`p-3 rounded-lg bg-gradient-to-br ${currentService.color} shadow-lg`}>
//                   <currentService.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-foreground">{currentService.title}</h2>
//               </div>

//               {/* Service Image */}
//               <div className="relative rounded-xl overflow-hidden shadow-lg h-48">
//                 <Image
//                   src={currentService.image || "/placeholder.svg"}
//                   alt={currentService.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 912px) 100vw, 50vw"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               </div>

//               {/* Description */}
//               <p className="text-base text-foreground leading-relaxed">
//                 {currentService.longDescription}
//               </p>

//               {/* Features & Benefits Side by Side */}
//               <div className="grid grid-cols-1 gap-6">
//                 <div className={`bg-gradient-to-r ${currentService.color} p-6 rounded-xl border border-border`}>
//                   <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
//                     <CheckCircle className="w-5 h-5 text-primary" />
//                     Key Features
//                   </h3>
//                   <ul className="space-y-3">
//                     {currentService.features.slice(0, 4).map((feature, index) => (
//                       <li key={index} className="flex items-start gap-3">
//                         <div className={`p-1 rounded-full bg-gradient-to-br ${currentService.color} mt-1 flex-shrink-0`}>
//                           <div className="w-2 h-2 bg-white rounded-full" />
//                         </div>
//                         <span className="text-sm text-foreground">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-card border border-border p-6 rounded-xl">
//                   <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
//                     <TrendingUp className="w-5 h-5 text-primary" />
//                     Measurable Benefits
//                   </h3>
//                   <ul className="space-y-3">
//                     {currentService.benefits.map((benefit, index) => (
//                       <li key={index} className="flex items-center gap-3">
//                         <div className={`p-1 rounded-full bg-gradient-to-br ${currentService.color} flex-shrink-0`}>
//                           <CheckCircle className="w-4 h-4 text-white" />
//                         </div>
//                         <span className="text-sm text-foreground font-medium">{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
//                 <h3 className="text-lg font-bold text-foreground mb-3">Ready to get started?</h3>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   Get a free consultation for {currentService.title.toLowerCase()}
//                 </p>
//                 <button className="w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
//                   Schedule Consultation
//                 </button>
//               </div>
//             </div>

//             {/* Services Navigation - Bottom */}
//             <div className="pt-8 border-t border-border">
//               <h3 className="text-xl font-bold text-foreground mb-6">All Services</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {SERVICES.map((service) => {
//                   const IconComponent = service.icon
//                   const isActive = activeService === service.id

//                   return (
//                     <button
//                       key={service.id}
//                       onClick={() => setActiveService(service.id)}
//                       className={`text-left p-4 rounded-lg border transition-all ${
//                         isActive
//                           ? `border-primary bg-gradient-to-r ${service.color} bg-opacity-10`
//                           : "border-border hover:border-primary/50 hover:bg-primary/5"
//                       }`}
//                     >
//                       <div className="flex flex-col items-center text-center gap-3">
//                         <div className={`p-2.5 rounded-lg bg-gradient-to-br ${service.color}`}>
//                           <IconComponent className="w-4 h-4 text-white" />
//                         </div>
//                         <h4 className="font-semibold text-sm text-foreground line-clamp-2">{service.title}</h4>
//                       </div>
//                     </button>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* Desktop/Tablet View: Split Layout */
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             {/* Service Details - Left (40%) */}
//             <div className="lg:col-span-5 space-y-8">
//               {/* Service Header with Image */}
//               <div className="relative rounded-xl overflow-hidden shadow-lg">
//                 <div className="aspect-video relative">
//                   <Image
//                     src={currentService.image || "/placeholder.svg"}
//                     alt={currentService.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 912px) 100vw, 40vw"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="flex items-center gap-4">
//                     <div className={`p-3 rounded-lg bg-gradient-to-br ${currentService.color} shadow-lg`}>
//                       <currentService.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <h2 className="text-2xl font-bold text-white">{currentService.title}</h2>
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="space-y-4">
//                 <h3 className="text-lg font-semibold text-foreground">Overview</h3>
//                 <p className="text-base text-foreground/80 leading-relaxed">
//                   {currentService.longDescription}
//                 </p>
//               </div>

//               {/* Features & Benefits */}
//               <div className="space-y-6">
//                 <div className={`bg-gradient-to-r ${currentService.color} p-6 rounded-xl border border-border`}>
//                   <h3 className="text-lg font-bold text-foreground mb-4">Key Features</h3>
//                   <ul className="grid grid-cols-2 gap-3">
//                     {currentService.features.slice(0, 6).map((feature, index) => (
//                       <li key={index} className="flex items-start gap-2">
//                         <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
//                         <span className="text-sm text-foreground">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-card border border-border p-6 rounded-xl">
//                   <h3 className="text-lg font-bold text-foreground mb-4">Measurable Benefits</h3>
//                   <ul className="space-y-3">
//                     {currentService.benefits.map((benefit, index) => (
//                       <li key={index} className="flex items-center gap-3">
//                         <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
//                         <span className="text-sm text-foreground font-medium">{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6">
//                 <h3 className="text-lg font-bold text-foreground mb-3">Ready to transform your business?</h3>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   Get a free consultation to discuss how our {currentService.title.toLowerCase()} can benefit your organization
//                 </p>
//                 <button className="w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-[1.02]">
//                   Schedule Consultation
//                 </button>
//               </div>
//             </div>

//             {/* Services Navigation - Right (60%) */}
//             <div className="lg:col-span-7">
//               <div className="sticky top-24 space-y-4">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-2xl font-bold text-foreground">Our Services</h3>
//                   <span className="text-sm text-muted-foreground">{SERVICES.length} services available</span>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {SERVICES.map((service) => {
//                     const IconComponent = service.icon
//                     const isActive = activeService === service.id

//                     return (
//                       <button
//                         key={service.id}
//                         onClick={() => setActiveService(service.id)}
//                         className={`text-left p-5 rounded-xl border transition-all duration-300 group ${
//                           isActive
//                             ? `border-primary shadow-lg bg-gradient-to-r ${service.color} bg-opacity-10 border-l-4 border-l-primary`
//                             : "border-border hover:border-primary/50 hover:shadow-md hover:bg-primary/5"
//                         }`}
//                       >
//                         <div className="flex items-start gap-4">
//                           <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
//                             <IconComponent className="w-5 h-5 text-white" />
//                           </div>
                          
//                           <div className="flex-1">
//                             <h4 className="font-bold text-lg text-foreground mb-2">{service.title}</h4>
//                             <p className="text-sm text-foreground/60 line-clamp-2 mb-3">{service.description}</p>
                            
//                             <div className="flex items-center justify-between">
//                               <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
//                                 View details
//                               </span>
//                               <ArrowRight className={`w-4 h-4 text-primary transition-transform duration-300 ${isActive ? 'translate-x-1' : ''}`} />
//                             </div>
//                           </div>
//                         </div>
//                       </button>
//                     )
//                   })}
//                 </div>

//                 {/* Bottom CTA */}
//                 <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border border-border rounded-xl p-6">
//                   <h4 className="text-lg font-bold text-foreground mb-2">Need a custom solution?</h4>
//                   <p className="text-sm text-muted-foreground mb-4">
//                     We can tailor our services to meet your specific business requirements
//                   </p>
//                   <button className="w-full py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all">
//                     Contact Our Experts
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }