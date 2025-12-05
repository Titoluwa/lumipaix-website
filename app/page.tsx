import Hero from "@/components/hero"
import OurServices from "@/components/our-service"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Blog from "@/components/blog"

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <Blog/>
      <Testimonials />
    </div>
  )
}
