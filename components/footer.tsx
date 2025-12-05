import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            {/* <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo/no-bg/logo1.png"
                  alt="LumiPaix Logo"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <h3 className="font-bold text-lg">LumiPaix</h3>
            </div> */}
            {/* Logo */}
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity mb-3" aria-label="LumiPaix Home">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image src="/logo/no-bg/logo1.png" alt="LumiPaix Logo" fill className="object-contain" sizes="(max-width: 768px) 40px, 48px" />
                </div>
                <span className="font-bold text-xl text-foreground">
                  <span className="text-primary/80">Lumi</span><span className="text-secondary">Paix</span>
                </span>
              </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Transforming businesses through innovative turnkey solutions and expert guidance.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Loyalty Program
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Web and App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Training Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Office Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Financial Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Procurement Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              {/* <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+15551234567"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div> */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@lumipaix.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@lumipaix.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} LumiPaix Global Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <FaFacebook/>
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
