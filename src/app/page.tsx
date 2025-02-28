"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Play, ChevronRight, Star, CheckCircle, Instagram, Twitter, Youtube, Mail, ChevronLeft} from "lucide-react"
import { InstagramEmbed } from "@/components/instagram-embed"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { useEffect } from "react"
import logoImage from '../components/data/img.png'



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
    price: "150,000",
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
  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center overflow-hidden">
                  <Image
                      src={logoImage}
                      alt="Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                  />
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
            <Link href="https://forms.gle/F2AvhA9LrdviTa3Y9" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0">
                    Hire Me
                </Button>
            </Link>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-purple-900/50 text-purple-300 hover:bg-purple-900/50 border-purple-700">
            Professional Video Editor
          </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-500">
                Turning Moments Into Cinematic Experiences
            </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-10">
            I create stunning, professional video edits that captivate audiences and elevate your brand. From commercials
            to social media content, I bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
          </div>
        </section>

        {/* Showcase Section */}
        <section id="showcase" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Featured Work</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Browse through my portfolio of Instagram reels and social media projects
            </p>

            {/* First Carousel */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Latest Reels</h3>
              <div className="relative">
                <div className="overflow-x-auto pb-4">
                  <div className="flex space-x-6 w-max px-4">
                    {/* Instagram Reel 1 */}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-80">
                      <div className="instagram-container p-4 bg-gradient-to-br from-purple-900/30 to-black/30 rounded-lg">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink="https://www.instagram.com/reel/DGk4rWdoHxt/"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              borderRadius: "3px",
                              border: "1px solid #dbdbdb",
                              boxShadow: "none",
                              display: "block",
                              margin: "0 auto",
                              minWidth: "300px",
                              padding: 0
                            }}
                        >
                        </blockquote>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-1">Travel Montage</h3>
                        <p className="text-gray-400 text-sm">Social Media</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/70 text-white border-0">instagram</Badge>
                      </div>
                    </div>

                    {/* Instagram Reel 2 */}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-80">
                      <div className="instagram-container p-4 bg-gradient-to-br from-purple-900/30 to-black/30 rounded-lg">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink="https://www.instagram.com/reel/DF7JhvNTwl_/"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              borderRadius: "3px",
                              border: "1px solid #dbdbdb",
                              boxShadow: "none",
                              display: "block",
                              margin: "0 auto",
                              minWidth: "300px",
                              padding: 0
                            }}
                        >
                        </blockquote>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-1">Urban Vibes</h3>
                        <p className="text-gray-400 text-sm">City Life</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/70 text-white border-0">instagram</Badge>
                      </div>
                    </div>

                    {/* Instagram Reel 3 */}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-80">
                      <div className="instagram-container p-4 bg-gradient-to-br from-purple-900/30 to-black/30 rounded-lg">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink="https://www.instagram.com/reel/DATMpQ_Tte0/"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              borderRadius: "3px",
                              border: "1px solid #dbdbdb",
                              boxShadow: "none",
                              display: "block",
                              margin: "0 auto",
                              minWidth: "300px",
                              padding: 0
                            }}
                        >
                        </blockquote>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-1">Fashion Highlights</h3>
                        <p className="text-gray-400 text-sm">Style & Design</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/70 text-white border-0">instagram</Badge>
                      </div>
                    </div>

                    {/* Instagram Reel 4 */}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-80">
                      <div className="instagram-container p-4 bg-gradient-to-br from-purple-900/30 to-black/30 rounded-lg">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink="https://www.instagram.com/reel/DFg-I3lzIi9/"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              borderRadius: "3px",
                              border: "1px solid #dbdbdb",
                              boxShadow: "none",
                              display: "block",
                              margin: "0 auto",
                              minWidth: "300px",
                              padding: 0
                            }}
                        >
                        </blockquote>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-1">City Vibes</h3>
                        <p className="text-gray-400 text-sm">Urban Photography</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/70 text-white border-0">instagram</Badge>
                      </div>
                    </div>
                    {/* Instagram Reel 5*/}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-80">
                      <div className="instagram-container p-4 bg-gradient-to-br from-purple-900/30 to-black/30 rounded-lg">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink="https://www.instagram.com/reel/DFj0EA_Tv3R/"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              borderRadius: "3px",
                              border: "1px solid #dbdbdb",
                              boxShadow: "none",
                              display: "block",
                              margin: "0 auto",
                              minWidth: "300px",
                              padding: 0
                            }}
                        >
                        </blockquote>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-1">City Vibes</h3>
                        <p className="text-gray-400 text-sm">Urban Photography</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/70 text-white border-0">instagram</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="text-center mt-6 mb-12">
            </div>
          </div>
        </section>

        {/* Instagram Reels Categories Section */}
        <section id="instagram" className="py-20 bg-gradient-to-b from-black to-purple-950/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Customer we worked with</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Explore my content by client category and discover the stories behind each project
            </p>

            {/* Travel Category Carousel */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6">Verified User that we working with</h3>
              <div className="relative">
                <div className="overflow-x-auto pb-4">
                  <div className="flex space-x-6 w-max px-4">
                    {/* Travel Reel 1 */}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-80">
                      <div className="instagram-container p-4 bg-gradient-to-br from-purple-900/30 to-black/30 rounded-lg">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink="https://www.instagram.com/reel/DGfl_iZPCKn/"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              borderRadius: "px",
                              border: "1px solid #dbdbdb",
                              boxShadow: "none",
                              display: "block",
                              margin: "0 auto",
                              minWidth: "300px",
                              padding: 0
                            }}
                        >
                        </blockquote>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-1">Varsha Easwaran</h3>
                        <p className="text-gray-400 text-sm">Founder of Optimal Nutrition Protocol</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/70 text-white border-0">Verfied</Badge>
                      </div>
                    </div>

                    {/* Travel Reel 2 */}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-80">
                      <div className="instagram-container p-4 bg-gradient-to-br from-purple-900/30 to-black/30 rounded-lg">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink="https://www.instagram.com/reel/DF4XgK3SMmC/"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              borderRadius: "3px",
                              border: "1px solid #dbdbdb",
                              boxShadow: "none",
                              display: "block",
                              margin: "0 auto",
                              minWidth: "300px",
                              padding: 0
                            }}
                        >
                        </blockquote>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-1">lulu </h3>
                        <p className="text-gray-400 text-sm">LuLu Hypermarket Coimbatore</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/70 text-white border-0">Verfied</Badge>
                      </div>
                    </div>

                    {/* Travel Reel 3 */}
                    <div className="relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl min-w-80">
                      <div className="instagram-container p-4 bg-gradient-to-br from-purple-900/30 to-black/30 rounded-lg">
                        <blockquote
                            className="instagram-media w-full"
                            data-instgrm-permalink="https://www.instagram.com/reel/DFj0EA_Tv3R/"
                            data-instgrm-version="14"
                            style={{
                              background: "#FFF",
                              borderRadius: "3px",
                              border: "1px solid #dbdbdb",
                              boxShadow: "none",
                              display: "block",
                              margin: "0 auto",
                              minWidth: "300px",
                              padding: 0
                            }}
                        >
                        </blockquote>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-1">GameOn Solution</h3>
                        <p className="text-gray-400 text-sm">gameon South India</p>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-black/70 text-white border-0">Verified</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Urban/City Category Carousel */}


            <div className="text-center mt-12">

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

                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Need a custom solution for your project?</p>
                <Link href="https://forms.gle/F2AvhA9LrdviTa3Y9" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0">
                        Contact for Custom Quote
                    </Button>
                </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}


          <section id="contact" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
              <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center">
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Create Something Amazing?</h2>
                      <p className="text-gray-400 mb-8">Let&apos;s discuss your project and bring your vision to life</p>
                      <Link href="mailto:youreditorfriend@gmail.com">
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg">
                              Get in Touch
                          </Button>
                      </Link>

                      <div className="flex justify-center gap-4 mt-12">
                          <Link href="https://www.instagram.com/iamyoureditorfriend/" target="_blank" rel="noopener noreferrer">
                              <Button
                                  variant="outline"
                                  size="icon"
                                  className="rounded-full border-purple-800 text-purple-400 hover:bg-purple-950/30 hover:border-purple-500"
                              >
                                  <Instagram className="h-5 w-5" />
                              </Button>
                          </Link>
                          <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                              <Button
                                  variant="outline"
                                  size="icon"
                                  className="rounded-full border-purple-800 text-purple-400 hover:bg-purple-950/30 hover:border-purple-500"
                              >
                                  <Twitter className="h-5 w-5" />
                              </Button>
                          </Link>
                          <Link href="https://www.youtube.com/@janishprabu" target="_blank" rel="noopener noreferrer">
                              <Button
                                  variant="outline"
                                  size="icon"
                                  className="rounded-full border-purple-800 text-purple-400 hover:bg-purple-950/30 hover:border-purple-500"
                              >
                                  <Youtube className="h-5 w-5" />
                              </Button>
                          </Link>
                          <Link href="mailto:youreditorfriend@gmail.com">
                              <Button
                                  variant="outline"
                                  size="icon"
                                  className="rounded-full border-purple-800 text-purple-400 hover:bg-purple-950/30 hover:border-purple-500"
                              >
                                  <Mail className="h-5 w-5" />
                              </Button>
                          </Link>
                      </div>
                  </div>
              </div>
          </section>

        {/* Footer */}
        <footer className="py-8 bg-black border-t border-purple-900/30">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} YourEditorFriend. All rights reserved.</p>
            <p className="mt-2">
              Professional Video Editing Services | Creating Cinematic Experiences
            </p>
          </div>
        </footer>
      </div>
  );
}