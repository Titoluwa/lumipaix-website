"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import TextType from "@/components/TextType"
import CountUp from "@/components/CountUp"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    // sm:min-h-screen
    <section className="relative flex items-center justify-center  overflow-hidden py-10 lg:py-28">
      {/* Main background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/25 via-background/80 to-gray-50/5" />

      {/* Grid pattern with primary color */}
      <div className="absolute inset-0 z-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 71, 171, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 71, 171, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Dark mode */}
      <div className="absolute inset-0 z-0 hidden dark:block opacity-10 bg-gradient-to-br from-primary/20 via-transparent to-dark-primary/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isLoaded ? "animate-fadeInUp" : "opacity-0"}`}>
            <div>
              <span className="text-6xl lg:text-5xl font-bold text-balance leading-tight text-primary">
                {/* Welcome to LumiPaix Global Inc. */}
                <TextType text={[`Welcome to LumiPaix Global Inc.`, "Use LumiPaix Global Inc. Today!", "Empower Your Business with LumiPaix Global Inc."]}
                  typingSpeed={115} pauseDuration={3000} showCursor={true} cursorCharacter="|"
                />
              </span>
            </div>

            <div className="inline-block">
            <h1 className="text-lg md:text-xl font-bold bg-primary/5 px-4 py-2  rounded-full border border-primary">
              Turnkey <span className="text-primary">Solutions</span> for Your Business
            </h1>
            </div>

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
                <p className="text-2xl font-bold text-foreground">
                  <CountUp from={0} to={500} separator="," direction="up" duration={1}/> 
                  +
                </p>
                <p className="text-sm text-muted-foreground">Clients Served</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  <CountUp from={0} to={15} separator="," direction="up" duration={1}/> 
                  +
                </p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  <CountUp from={0} to={98} separator="," direction="up" duration={1}/>                   %
                </p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative ${isLoaded ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/training-1.jpg" fill className="object-cover" priority
                alt="Professional team collaboration in modern office" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
