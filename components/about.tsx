"use client"

import Image from "next/image"
import { CheckCircle, Users, Eye, TrendingUp, Target, Globe, Shield, Award, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const features = [
        {
            icon: Target,
            title: "Our Mission",
            description: "Empower businesses globally with innovative, integrated solutions that drive efficiency, growth, and sustainable success.",
            highlight: "Transforming challenges into opportunities",
        },
        {
            icon: Globe,
            title: "Our Vision",
            description: "To be the world's most trusted partner for digital transformation and holistic business excellence across all industries.",
            highlight: "Global impact, local expertise",
        },
        {
            icon: Shield,
            title: "Our Values",
            description: "Integrity, Innovation, Excellence, and Customer-Centricity guide every decision and action we take.",
            highlight: "Ethics before profits",
        },
    ]

    const stats = [
        { value: "50+", label: "Global Partners", icon: Users },
        { value: "98%", label: "Client Satisfaction", icon: Award },
        { value: "200+", label: "Projects Delivered", icon: CheckCircle },
        { value: "5", label: "Continents Served", icon: Globe },
    ]

    return (
        <section id="about" className="relative py-24 overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">About LumiPaix Global</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
                        Redefining <span className="text-primary">Business Excellence</span> Through Innovation
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                        Where visionary strategy meets cutting-edge technology to create sustainable growth and transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                    {/* Left Column - Main Image with Overlay Content */}
                    <div className={`relative ${isLoaded ? "animate-fadeIn" : "opacity-0"}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/training-3.jpg"
                                alt="LumiPaix Global Team Collaboration"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover aspect-[3/4] border border-primary/30"
                            />
                            {/* Image Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            
                            {/* Floating Stats Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                                <div className="flex items-center justify-between">
                                    {stats.slice(0, 2).map((stat, index) => {
                                        const Icon = stat.icon
                                        return (
                                            <div key={index} className="text-center">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                                                </div>
                                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl rotate-12 -z-10" />
                    </div>

                    {/* Right Column - Main Content */}
                    <div className={`space-y-8 ${isLoaded ? "animate-fadeInUp" : "opacity-0"}`}>
                        <div>
                            <h3 className="text-3xl font-bold text-foreground mb-4">
                                Our Journey of <span className="text-primary">Transformation</span>
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Founded in 2015, LumiPaix Global began as a specialized IT consultancy with a bold vision: to simplify complex technology and translate it into tangible business outcomes. What started with a passionate team of three has evolved into a global collective of over 200 experts.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Our evolution mirrors the digital transformation journey we guide our clients through—constantly adapting, innovating, and expanding our expertise to meet the ever-changing demands of the modern business landscape.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <div key={index} className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                        <div className="flex gap-4">
                                            <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary/80 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="">
                                                <h4 className="text-xl font-bold text-secondary mb-1 flex items-center gap-2">
                                                    {feature.title}
                                                </h4>
                                                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                                    {feature.highlight}
                                                </span>
                                                <p className="text-foreground/70 mt-2">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* CTA Section */}
                        {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
                            <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                Explore Our Story
                            </button>
                            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300">
                                Meet Our Team
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 ${isLoaded ? "animate-fadeIn" : "opacity-0"}`}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-card to-background border border-border hover:border-primary/30 transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Bottom Gradient Border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </section>
    )
}