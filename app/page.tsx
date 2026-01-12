"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Truck, Leaf, Sparkles } from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-card shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Textile</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance mb-6">
              Premium Textile Collections
            </h1>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Crafted with care, designed for elegance. Discover our curated selection of sustainable fabrics that
              transform your space.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Explore Collection
            </button>
          </div>

          <div className="fade-in-delay-100 relative h-80 md:h-96">
            <img
              src="/premium-textile-fabric-pattern.jpg"
              alt="Premium fabric texture"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="fade-in p-8 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
              <Leaf className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sustainable</h3>
              <p className="text-secondary">
                Ethically sourced fabrics with minimal environmental impact. Every piece tells a story of
                responsibility.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="fade-in-delay-100 p-8 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
              <Sparkles className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-secondary">
                Highest quality materials selected from artisan producers worldwide. Luxury that lasts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="fade-in-delay-200 p-8 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
              <Truck className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-secondary">
                Quick and reliable shipping worldwide. Get your textiles when you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Get In Touch</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <div className="fade-in text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:hello@textile.com" className="text-secondary hover:text-primary transition-colors">
                hello@textile.com
              </a>
            </div>

            {/* Phone */}
            <div className="fade-in-delay-100 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-secondary hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            {/* Address */}
            <div className="fade-in-delay-200 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-secondary">
                123 Textile Street
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>

          {/* Simple Contact Message */}
          <div className="fade-in max-w-2xl mx-auto text-center bg-card p-8 rounded-lg border border-border">
            <p className="text-lg text-secondary mb-6">
              Have questions about our collections? We'd love to hear from you. Reach out and let's create something
              beautiful together.
            </p>
            <a
              href="mailto:hello@textile.com"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2026 Textile Artisan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
