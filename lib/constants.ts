
// export const SERVICES = [
//   {
//     id: "ai",
//     title: "AI Solutions",
//     description:
//       "Leverage cutting-edge artificial intelligence to automate processes, enhance decision-making, and drive innovation across your organization.",
//     longDescription:
//       "Our AI solutions transform how you do business. We implement machine learning models that analyze patterns in your data, predictive analytics that forecast trends, and intelligent automation that reduces manual work by up to 80%. From natural language processing to computer vision, we build custom AI systems tailored to your specific business needs.",
//     image: "/images/ai.jpg",
//     icon: Zap,
//     features: ["Machine Learning Models", "Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision", "Custom AI Integration"],
//     benefits: ["40-80% efficiency gains", "Real-time insights", "Reduced operational costs", "Competitive advantage"],
//     altColor: "from-blue-500 to-cyan-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primay/70"
//   },
//   {
//     id: "cloud",
//     title: "Cloud Computing",
//     description:
//       "Scalable cloud infrastructure and solutions that enhance flexibility, reduce costs, and enable your business to operate anywhere, anytime.",
//     longDescription:
//       "Transform your business with our comprehensive cloud solutions. We provide end-to-end cloud services including seamless migration, secure infrastructure management, and scalable architecture design. Whether you need hybrid, public, or private cloud solutions, we ensure optimal performance, security, and cost-efficiency for your digital transformation journey.",
//     image: "/images/cloud-computing-2.jpg",
//     icon: Cloud,
//     features: ["Cloud Migration Services", "Infrastructure Management", "Security & Compliance", "Scalable Architecture", "Disaster Recovery", "Cost Optimization"],
//     benefits: ["50% reduction in IT costs", "99.9% uptime guarantee", "Enhanced security posture", "Business continuity"],
//     altColor: "from-indigo-500 to-blue-500",
//     color: "from-primary to-cyan-500",
//     bgColor: "bg-primary/20 dark:bg-primay/70"
//   },
//   {
//     id: "loyalty",
//     title: "Loyalty Program",
//     description:
//       "Build lasting customer relationships with customized loyalty programs that increase retention, boost engagement, and maximize customer lifetime value.",
//     longDescription:
//       "Create powerful customer connections with our data-driven loyalty programs. We design and implement customized loyalty ecosystems that reward customer engagement, increase repeat purchases, and build brand advocacy. Our solutions include program design, analytics integration, multi-channel engagement strategies, and real-time rewards management to drive measurable ROI.",
//     image: "/images/loyalty-2.jpg",
//     icon: Gift,
//     features: ["Program Design & Strategy", "Analytics & Insights", "Customer Engagement", "Multi-Channel Integration", "Rewards Management", "Performance Tracking"],
//     benefits: ["30% increase in customer retention", "Higher customer lifetime value", "Improved brand loyalty", "Actionable customer insights"],
//     altColor: "from-pink-500 to-red-500",
//     color: "from-primary to-cyan-500",
//     bgColor: "bg-primary/20 dark:bg-primay/70"
//   },
//   {
//     id: "web-app",
//     title: "Web and App Development",
//     description:
//       "Custom web and mobile applications built with cutting-edge technology to deliver seamless user experiences and drive digital transformation.",
//     longDescription:
//       "Bring your digital vision to life with our full-stack development expertise. We create responsive web applications, progressive web apps (PWAs), and native mobile applications that deliver exceptional user experiences. Our agile development process ensures on-time delivery of scalable, secure, and high-performance solutions tailored to your business objectives.",
//     image: "/images/web-app-development.jpg",
//     icon: Globe,
//     features: ["Web Development", "Mobile App Development", "UI/UX Design", "Progressive Web Apps", "API Integration", "Performance Optimization"],
//     benefits: ["Enhanced user engagement", "Cross-platform compatibility", "Scalable architecture", "Faster time-to-market"],
//     altColor: "from-cyan-500 to-blue-500",
//     color: "from-cyan-500 to-primary",
//     bgColor: "bg-primary/20 dark:bg-primay/70"
//   },
//   {
//     id: "training",
//     title: "Professional Training",
//     description:
//       "Empower your team with professional development and specialized training programs designed to build expertise and drive organizational growth.",
//     longDescription:
//       "We offer comprehensive training programs that bridge the skills gap in your organization. Our curriculum includes hands-on workshops, certification courses, and ongoing mentorship. Whether you need technical upskilling, leadership development, or industry-specific training, we create programs that deliver measurable results and ROI.",
//     image: "/images/training-4.jpg",
//     icon: BookOpen,
//     features: ["Custom Training Programs", "Expert-Led Workshops", "Certification Courses", "Ongoing Mentorship", "Skills Assessment", "ROI Tracking"],
//     benefits: ["Higher employee retention", "Increased productivity", "Skills standardization", "Compliance readiness"],
//     altColor: "from-green-500 to-teal-500",
//     color: "from-secondary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primay/70"
//   },
//   {
//     id: "automation",
//     title: "Office Automation",
//     description:
//       "Streamline operations and increase efficiency through intelligent automation of office workflows, document management, and business processes.",
//     longDescription:
//       "Transform your office operations with our comprehensive automation solutions. We analyze your workflows, identify bottlenecks, and implement automated systems that handle repetitive tasks. Our solutions include document management automation, workflow optimization, CRM integration, and reporting systems that save hundreds of hours monthly.",
//     image: "/images/office-automation.jpg",
//     icon: Cpu,
//     features: ["Workflow Optimization", "Document Management", "CRM Integration", "Reporting Automation", "Email Automation", "Process Mapping"],
//     benefits: ["70% time savings on admin tasks", "Error reduction", "Better resource allocation", "Scalable processes"],
//     altColor: "from-purple-500 to-pink-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primay/70"
//   },
//   {
//     id: "financial",
//     title: "Financial Services",
//     description:
//       "Comprehensive tax and bookkeeping solutions that ensure compliance, optimize finances, and provide clear financial insights for growth.",
//     longDescription:
//       "Our financial services go beyond basic bookkeeping. We provide strategic financial management including tax planning, financial analysis, cash flow optimization, and compliance management. With real-time financial dashboards and predictive financial modeling, we help you make informed decisions that drive profitability.",
//     image: "/images/fs-tax.jpg",
//     icon: DollarSign,
//     features: ["Strategic Tax Planning", "Advanced Bookkeeping", "Financial Analysis", "Cash Flow Management", "Compliance & Audit", "Financial Forecasting"],
//     benefits: ["Tax savings up to 30%", "Real-time financial visibility", "Improved cash flow", "Audit readiness"],
//     altColor: "from-amber-500 to-orange-500",
//     color: "from-secondary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primay/70"
//   },
//   {
//     id: "procurement",
//     title: "Procurement Services",
//     description:
//       "Optimize your supply chain and vendor management with our strategic procurement solutions designed to reduce costs and enhance efficiency.",
//     longDescription:
//       "We revolutionize your procurement process with data-driven strategies that reduce costs while maintaining quality. Our services include vendor management optimization, contract negotiation, supply chain analytics, and procurement automation. We help you build resilient supplier relationships and create efficient procurement ecosystems.",
//     image: "/images/procurement.jpg",
//     icon: TrendingUp,
//     features: ["Vendor Management", "Strategic Sourcing", "Contract Negotiation", "Supply Chain Analytics", "Procurement Automation", "Cost Optimization"],
//     benefits: ["15-40% cost reduction", "Improved vendor relationships", "Supply chain resilience", "Faster procurement cycles"],
//     altColor: "from-red-500 to-rose-500",
//     color: "from-primary/40 to-cyan-500/30",
//     bgColor: "bg-primary/20 dark:bg-primay/70"
//   },
// ]
export const SERVICES = [
    "AI Solutions",
    "Cloud Computing",
    "Loyalty Program",
    "Web and App Development",
    "Office Automation",
    "Training Services",
    "Financial Services",
    "Procurement Services",
]

export const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of AI in Business Automation",
        excerpt:
        "Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.",
        author: "Sarah Johnson",
        date: "December 1, 2024",
        category: "AI Solutions",
        image: "/images/ai-buiness.jpg",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "Digital Transformation: Why Your Business Needs It Now",
        excerpt:
        "Learn about the critical steps to modernize your business operations and stay competitive in today's digital-first world.",
        author: "Michael Chen",
        date: "November 28, 2024",
        category: "Digital Strategy",
        image: "/images/digital-service.jpg",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "Maximizing ROI with Cloud Infrastructure",
        excerpt:
        "Explore proven strategies for leveraging cloud computing to reduce costs and improve your operational efficiency.",
        author: "Emma Rodriguez",
        date: "November 25, 2024",
        category: "Cloud Computing",
        image: "/images/cloud.jpg",
        readTime: "6 min read",
    },
]