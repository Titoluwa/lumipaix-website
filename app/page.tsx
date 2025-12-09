import Hero from "@/components/hero"
import OurServices from "@/components/our-service"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import BlogNews from "@/components/blog-news"
import Blog from "@/components/blog"

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <BlogNews/>
      {/* <Blog/> */}
      <Testimonials />
    </div>
  )
}
