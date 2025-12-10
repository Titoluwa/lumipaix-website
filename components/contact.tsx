// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Mail, Phone, MapPin, Send } from "lucide-react"
// import { SERVICES } from "@/lib/constants"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Alert, AlertDescription } from "@/components/ui/alert"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSelectChange = (value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       service: value,
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     // Validation
//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Please fill in all required fields")
//       return
//     }
//     // Simulate form submission
//     setSubmitted(true)
//     setFormData({ name: "", email: "", phone: "", service: "", message: "" })
//     setTimeout(() => setSubmitted(false), 3000)
//   }

//   return (
//     <section id="contact" className="relative py-20 bg-muted/30">
//       {/* Background gradient */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/25 via-background/80 to-gray-50/5" />

//       {/* Grid pattern with primary color */}
//       <div className="absolute inset-0 z-0 opacity-15" style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(0, 71, 171, 0.1) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(0, 71, 171, 0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: "50px 50px",
//         }}
//       />

//       {/* Optional: Dark mode support */}
//       <div className="absolute inset-0 z-0 hidden dark:block opacity-10 bg-gradient-to-br from-primary/20 via-transparent to-dark-primary/20" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16 mt-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             Get In <span className="text-primary">Touch</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Ready to transform your business? Contact us today for a consultation
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
//           {/* Contact Info */}
//           <Card className="border-0 shadow-none bg-transparent">
//             <CardContent className="p-0 space-y-6">
//               {/* Phone - Commented out */}
//               {/* <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">Phone</h3>
//                   <p className="text-muted-foreground">+1 (555) 123-4567</p>
//                 </div>
//               </div> */}

//               {/* Email */}
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">Email</h3>
//                   <p className="text-muted-foreground">info@lumipaix.com</p>
//                 </div>
//                </div>

//               {/* Address - Commented out */}
//               {/* <div className="flex gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">Address</h3>
//                   <p className="text-muted-foreground">
//                     123 Business Street
//                     <br />
//                     New York, NY 10001
//                   </p>
//                 </div>
//               </div> */}
//             </CardContent>
//           </Card>

//           {/* Contact Form */}
//           <Card className="lg:col-span-2 border-0 shadow-none bg-transparent">
//             <CardContent className="p-0">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {/* Name */}
//                   <div className="space-y-2">
//                     <Label htmlFor="name" className="text-foreground">
//                       Full Name<span className="text-red-500">*</span>
//                     </Label>
//                     <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
//                       placeholder="Your name" required
//                       className="border-border bg-background focus-visible:ring-primary/50 h-11"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div className="space-y-2">
//                     <Label htmlFor="email" className="text-foreground">
//                       Email Address<span className="text-red-500">*</span>
//                     </Label>
//                     <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
//                       placeholder="your@email.com" required
//                       className="border-border bg-background focus-visible:ring-primary/50 h-11"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {/* Phone */}
//                   <div className="space-y-2">
//                     <Label htmlFor="phone" className="text-foreground">
//                       Phone Number
//                     </Label>
//                     <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
//                       placeholder="(555) 000-0000"
//                       className="border-border bg-background focus-visible:ring-primary/50 h-11"
//                     />
//                   </div>

//                   {/* Service */}
//                   <div className="space-y-2">
//                     <Label htmlFor="service" className="text-foreground">
//                       Service of Interest
//                     </Label>
//                     <Select value={formData.service} onValueChange={handleSelectChange}>
//                       <SelectTrigger id="service" className="border-border bg-background focus:ring-primary/50 w-full h-11 py-5">
//                         <SelectValue placeholder="Select a service" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {SERVICES.map((service) => (
//                           <SelectItem key={service} value={service}>
//                             {service}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="space-y-2">
//                   <Label htmlFor="message" className="text-foreground">
//                     Message<span className="text-red-500">*</span>
//                   </Label>
//                   <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..."
//                     required className="min-h-[120px] border-border bg-background focus-visible:ring-primary/50 resize-none"
//                   />
//                 </div>

//                 {/* Submit */}
//                 <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 font-semibold flex items-center justify-center gap-2 group">
//                   <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   Send Message
//                 </Button>

//                 {submitted && (
//                   <Alert className="bg-green-50 border-green-200 text-green-700 animate-fadeIn">
//                     <AlertDescription>
//                       ✓ Thank you! We'll be in touch soon.
//                     </AlertDescription>
//                   </Alert>
//                 )}
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import  ContactForm  from "@/components/contact-form"

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-muted/30">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/25 via-background/80 to-gray-50/5" />

      {/* Grid pattern with primary color */}
      <div className="absolute inset-0 z-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 71, 171, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 71, 171, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Optional: Dark mode support */}
      <div className="absolute inset-0 z-0 hidden dark:block opacity-10 bg-gradient-to-br from-primary/20 via-transparent to-dark-primary/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Contact us today for a consultation
          </p>
        </div>
        <div>
          <ContactForm/>
        </div>

        {/* Alternative Contact Method */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Having trouble with the form? Email us directly at{" "}
            <a 
              href="mailto:info@lumipaix.com" 
              className="text-primary hover:underline font-medium"
            >
              info@lumipaix.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}