import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ChevronRight, Star, CheckCircle, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { InstagramEmbed } from "@/components/instagram-embed"
import { YouTubeEmbed } from "@/components/youtube-embed"

export default function VideoEditorPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
            <Play className="h-5 w-5 fill-white text-white ml-0.5" />
          </div>
          <span className="text-xl font-bold">EDITPRO</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#showcase" className="hover:text-purple-400 transition-colors">
            Work
          </Link>
          <Link href="#clients" className="hover:text-purple-400 transition-colors">
            Clients
          </Link>
          <Link href="#pricing" className="hover:text-purple-400 transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0">
          Hire Me
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
          Professional Video Editor
        </Badge>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500">
          Turning Moments Into Cinematic Experiences
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-10">
          I create stunning, professional video edits that captivate audiences and elevate your brand. From commercials
          to social media content, I bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg">
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-950/30 px-8 py-6 text-lg"
          >
            Get a Quote <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Featured Work</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Browse through my portfolio of commercial, music video, and social media projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                {project.type === "instagram" ? (
                  <InstagramEmbed url={project.url} />
                ) : project.type === "youtube" ? (
                  <YouTubeEmbed videoId={project.videoId} />
                ) : (
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
                        <Play className="h-8 w-8 fill-white text-white ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.category}</p>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-black/70 text-white border-0">{project.type}</Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/30">
              View All Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Trusted By</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I've had the pleasure of working with amazing brands and creators
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-purple-950/20 border-purple-900/50 p-6 hover:border-purple-500 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-12 h-12"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Pricing Plans</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Transparent pricing options tailored to your project needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 border transition-all duration-300 hover:translate-y-[-8px] ${
                  plan.popular
                    ? "bg-gradient-to-b from-purple-950/40 to-black border-purple-500"
                    : "bg-purple-950/10 border-purple-900/30 hover:border-purple-700"
                }`}
              >
                {plan.popular && (
                  <Badge className="bg-purple-600 text-white hover:bg-purple-700 mb-4">Most Popular</Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/ project</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                      : "bg-purple-950/50 text-white hover:bg-purple-900"
                  }`}
                >
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Need a custom solution for your project?</p>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/30">
              Contact for Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Create Something Amazing?</h2>
            <p className="text-gray-400 mb-8">Let's discuss your project and bring your vision to life</p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg">
              Get in Touch
            </Button>

            <div className="flex justify-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-800 text-purple-400 hover:bg-purple-950/30 hover:border-purple-500"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-800 text-purple-400 hover:bg-purple-950/30 hover:border-purple-500"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-800 text-purple-400 hover:bg-purple-950/30 hover:border-purple-500"
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-800 text-purple-400 hover:bg-purple-950/30 hover:border-purple-500"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                <Play className="h-4 w-4 fill-white text-white ml-0.5" />
              </div>
              <span className="text-lg font-bold">EDITPRO</span>
            </div>
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} EditPro. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Updated sample data
const projects = [
  {
    title: "Summer Vibes",
    category: "Music Video",
    type: "youtube",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Travel Montage",
    category: "Social Media",
    type: "instagram",
    url: "https://www.instagram.com/reel/DGlRwYXv_YJ/",
  },
  {
    title: "Product Launch",
    category: "Marketing",
    type: "youtube",
    videoId: "M7FIvfx5J10",
  },
  {
    title: "Urban Documentary",
    category: "Documentary",
    type: "instagram",
    url: "https://www.instagram.com/p/CdkgxzMAkHo/",
  },
  {
    title: "Nike - Just Do It",
    category: "Commercial",
    type: "video",
    thumbnail: "/placeholder.svg?height=340&width=600",
  },
  {
    title: "Fitness Challenge",
    category: "Social Media",
    type: "video",
    thumbnail: "/placeholder.svg?height=340&width=600",
  },
]

const clients = [
  { name: "Nike", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Adidas", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Spotify", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Netflix", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Apple", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Google", logo: "/placeholder.svg?height=60&width=120" },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director, Spotify",
    avatar: "/placeholder.svg?height=50&width=50",
    text: "Working with EditPro was a game-changer for our campaign. The attention to detail and creative vision exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    position: "Content Creator",
    avatar: "/placeholder.svg?height=50&width=50",
    text: "My YouTube channel grew by 200% after switching to EditPro for my video editing. The quality and turnaround time are unmatched.",
  },
  {
    name: "Jessica Williams",
    position: "Film Producer",
    avatar: "/placeholder.svg?height=50&width=50",
    text: "I've worked with many editors over my career, but none have delivered the level of professionalism and creativity that I experienced here.",
  },
]

const pricingPlans = [
  {
    name: "Basic",
    price: 299,
    description: "Perfect for social media content and short videos",
    popular: false,
    features: [
      "Up to 2 minutes of edited content",
      "Basic color grading",
      "2 revision rounds",
      "Royalty-free music",
      "48-hour delivery",
    ],
  },
  {
    name: "Professional",
    price: 599,
    description: "Ideal for commercials and promotional videos",
    popular: true,
    features: [
      "Up to 5 minutes of edited content",
      "Advanced color grading",
      "Unlimited revision rounds",
      "Custom sound design",
      "Motion graphics",
      "24-hour delivery",
    ],
  },
  {
    name: "Premium",
    price: 999,
    description: "For high-end productions and complex projects",
    popular: false,
    features: [
      "Up to 15 minutes of edited content",
      "Cinema-grade color grading",
      "Unlimited revision rounds",
      "Custom sound design & music",
      "Advanced VFX & motion graphics",
      "Priority support",
      "Express delivery",
    ],
  },
]

