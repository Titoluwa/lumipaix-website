import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { SERVICES } from "@/lib/constants"

// Constants for maintainability
const CURRENT_YEAR = new Date().getFullYear()
const COMPANY_NAME = "LumiPaix Global Inc."
const EMAIL = "info@lumipaix.com"
const TAGLINE = "Transforming businesses through innovative turnkey solutions and expert guidance."

// Service links data
const SERVICE_LINKS = [
  "AI Solutions",
  "Cloud Computing",
  "Loyalty Program",
  "Web and App Development",
  "Office Automation",
  "Training Services",
  "Financial Services",
  "Procurement Services",
] as const

// Company links data
const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
] as const

// Social media links data
const SOCIAL_LINKS = [
  { href: "#", icon: FaLinkedin, label: "LinkedIn" },
  { href: "#", icon: FaXTwitter, label: "X (Twitter)" },
  { href: "#", icon: FaFacebook, label: "Facebook" },
  { href: "#", icon: FaInstagram, label: "Instagram" },
] as const

// Reusable components
const SocialIcon = ({ href, icon: Icon, label }: { 
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string 
}) => (
  <a
    href={href}
    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
)

const NavLink = ({ href, children }: { 
  href: string 
  children: React.ReactNode 
}) => (
  <Link
    href={href}
    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
    prefetch={href.startsWith("/")}
  >
    {children}
  </Link>
)

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link  href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity mb-3" aria-label="LumiPaix Home"
              prefetch
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image src="/logo/no-bg/logo1.png" alt="LumiPaix Logo" fill className="object-contain" sizes="(max-width: 768px) 40px, 48px"
                  priority={false}
                />
              </div>
              <span className="font-bold text-xl">
                <span className="text-primary/80">Lumi</span>
                <span className="text-secondary">Paix</span>
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {TAGLINE}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service}>
                  <NavLink href="/services">
                    {service}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    prefetch={link.href.startsWith("/")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © {CURRENT_YEAR} {COMPANY_NAME} All rights reserved.
            </p>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.label} href={social.href} icon={social.icon} label={social.label}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}