import Hero from "@/components/hero"
import OurServices from "@/components/our-service"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <Testimonials />
    </div>
  )
}
