"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Industry Expertise",
    description: "With 15+ years of experience, we understand your business challenges and deliver proven solutions.",
  },
  {
    title: "Tailored Approach",
    description: "We customize every solution to fit your unique business needs and goals.",
  },
  {
    title: "Dedicated Support",
    description: "24/7 customer support and regular check-ins ensure your continued success.",
  },
  {
    title: "Proven Results",
    description: "Our clients see measurable improvements in efficiency, cost, and growth.",
  },
  {
    title: "Innovation Focus",
    description: "We leverage the latest technologies to keep your business ahead of the curve.",
  },
  {
    title: "Trusted Partner",
    description: "Trusted by 500+ organizations worldwide for reliable, effective solutions.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-28 bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">LumiPaix?</span>
              </h2>
              <p className="text-lg text-foreground/70 text-balance">
                We combine innovation, expertise, and commitment to deliver transformative solutions that drive real
                business results.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-foreground/55">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/fs-bookkeeping.jpg"
              alt="Professional team working on financial solutions"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
