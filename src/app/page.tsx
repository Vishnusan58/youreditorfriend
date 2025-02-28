import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ChevronRight, Star, CheckCircle, Instagram, Twitter, Youtube, Mail } from "lucide-react"
import { InstagramEmbed } from "@/components/instagram-embed"
import { YouTubeEmbed } from "@/components/youtube-embed"

// Define the missing variables
const clients = [
  { name: "Brand 1", logo: "/placeholder.svg" },
  { name: "Brand 2", logo: "/placeholder.svg" },
  { name: "Brand 3", logo: "/placeholder.svg" },
  { name: "Brand 4", logo: "/placeholder.svg" },
  { name: "Brand 5", logo: "/placeholder.svg" },
  { name: "Brand 6", logo: "/placeholder.svg" }
];

const testimonials = [
  {
    text: "The quality of work was exceptional. Delivered ahead of schedule and exceeded our expectations!",
    name: "Sarah Johnson",
    position: "Marketing Director",
    avatar: "/placeholder.svg"
  },
  {
    text: "Transformed our raw footage into a captivating story. Highly recommended for any video project.",
    name: "Alex Thompson",
    position: "Content Creator",
    avatar: "/placeholder.svg"
  },
  {
    text: "Professional, creative, and responsive throughout the entire process. Will definitely work with again.",
    name: "Michael Chen",
    position: "Brand Manager",
    avatar: "/placeholder.svg"
  }
];

const pricingPlans = [
  {
    name: "Basic",
    description: "Simple edits for social media content",
    price: "5,000",
    features: [
      "Up to 2 minutes final video",
      "Basic color correction",
      "Simple transitions",
      "1 round of revisions"
    ],
    idealFor: "Social media content creators"
  },
  {
    name: "Premium",
    description: "Professional edits for marketing and brand content",
    price: "15,000",
    popular: true,
    features: [
      "Up to 5 minutes final video",
      "Advanced color grading",
      "Custom transitions & effects",
      "Motion graphics",
      "3 rounds of revisions"
    ],
    idealFor: "Small businesses and marketing teams"
  },
  {
    name: "Elite",
    description: "High-end production value for commercial use",
    price: "30,000",
    features: [
      "Up to 10 minutes final video",
      "Cinema-grade color grading",
      "Premium visual effects",
      "Custom motion graphics",
      "Sound design & mixing",
      "Unlimited revisions"
    ],
    idealFor: "Corporate clients and ad agencies",
    minReels: 5
  }
];

export default function VideoEditorPortfolio() {
  return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <Play className="h-5 w-5 fill-white text-white ml-0.5" />
            </div>
            <span className="text-xl font-bold">YourEditorFriend</span>
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
              <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]">
                <YouTubeEmbed videoId="aPVd9B21TmQ" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">Summer Vibes</h3>
                  <p className="text-gray-400 text-sm">Music Video</p>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-black/70 text-white border-0">youtube</Badge>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]">
                <YouTubeEmbed videoId="cKkilTF7rDc" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">Product Launch</h3>
                  <p className="text-gray-400 text-sm">Marketing</p>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-black/70 text-white border-0">youtube</Badge>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]">
                <InstagramEmbed url="https://www.instagram.com/p/CdkgxzMAkHo/" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">Travel Montage</h3>
                  <p className="text-gray-400 text-sm">Social Media</p>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-black/70 text-white border-0">instagram</Badge>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]">
                <YouTubeEmbed videoId="07wzDnzA9QM" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">Urban Documentary</h3>
                  <p className="text-gray-400 text-sm">Documentary</p>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-black/70 text-white border-0">youtube</Badge>
                </div>
              </div>
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
              I&apos;ve had the pleasure of working with amazing brands and creators
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
                    <p className="text-gray-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
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

        {/* Pricing Section - Enhanced with Table Format */}
        <section id="pricing" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Pricing Plans</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Transparent pricing options tailored to your project needs
            </p>

            <div className="w-full overflow-x-auto pb-6">
              <div className="min-w-[768px]">
                <table className="w-full border-collapse">
                  <thead>
                  <tr className="border-b border-purple-800/30">
                    <th className="p-4 text-left font-bold text-lg">Package/Tier</th>
                    <th className="p-4 text-left font-bold text-lg">Price (₹)</th>
                    <th className="p-4 text-left font-bold text-lg">Services Included</th>
                    <th className="p-4 text-left font-bold text-lg">Ideal For</th>
                  </tr>
                  </thead>
                  <tbody>
                  {pricingPlans.map((plan, index) => (
                      <tr
                          key={index}
                          className={`border-b border-purple-800/20 transition-all duration-300 hover:bg-purple-900/10 ${
                              plan.popular ? "bg-gradient-to-r from-purple-900/20 to-transparent" : ""
                          }`}
                      >
                        <td className="p-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold">{plan.name}</span>
                              {plan.popular && (
                                  <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
                              Best Value
                            </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-400">{plan.description}</p>
                            {plan.minReels && (
                                <span className="mt-2 text-xs font-medium text-purple-300">
                            Minimum {plan.minReels} reels required
                          </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">₹{plan.price}</span>
                            <span className="text-gray-400">/ project</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <ul className="space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-purple-500" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-4">
                          <p className="text-sm">{plan.idealFor || "Individual Projects"}</p>
                          <Button
                              className={`mt-4 w-full transition-all duration-300 ${
                                  plan.popular
                                      ? "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                                      : "bg-purple-950/50 text-white hover:bg-purple-900"
                              }`}
                          >
                            Choose Plan
                          </Button>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
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
              <p className="text-gray-400 mb-8">Let&apos;s discuss your project and bring your vision to life</p>
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
        <footer className="py-8 bg-black border-t border-purple-900/30">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>© 2025 EDITPRO. All rights reserved.</p>
            <p className="mt-2">
              Professional Video Editing Services | Creating Cinematic Experiences
            </p>
          </div>
        </footer>
      </div>
  );
}