"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-background to-gray-50 z-0" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b8ad40a_1px,transparent_1px),linear-gradient(to_bottom,#0b8ad40a_1px,transparent_1px)] bg-[size:50px_50px] z-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isLoaded ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Welcome to LumiPaix Global
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              Turnkey <span className="text-primary">Solutions</span> for Your Business
            </h1>

            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              Transform your organization with our comprehensive suite of AI solutions, professional training, office
              automation, financial services, and procurement expertise. We deliver innovation with integrity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold flex items-center justify-center gap-2 group">
                Schedule Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-all duration-200 font-semibold">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Clients Served</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative ${isLoaded ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/training-1.jpg"
                alt="Professional team collaboration in modern office"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
