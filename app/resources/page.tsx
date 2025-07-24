"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Lock,
  Globe,
  Search,
  Eye,
  Key,
  MousePointer,
  Smartphone,
  Users,
  Wifi,
  AlertTriangle,
  ArrowRight,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ResourcesPage() {
  const cybersecurityTips = [
    {
      icon: Eye,
      title: "Spotting Phishing Scams",
      summary: "Learn to identify fake emails, messages, and websites that try to steal your personal information.",
      color: "bg-red-100 text-red-600",
      hoverColor: "group-hover:bg-red-200",
      slug: "spotting-phishing-scams",
    },
    {
      icon: Key,
      title: "Password Hygiene",
      summary: "Create strong, unique passwords and use secure methods to manage them across all your accounts.",
      color: "bg-[#1ED3B6]/10 text-[#1ED3B6]",
      hoverColor: "group-hover:bg-[#1ED3B6]/20",
      slug: "password-hygiene",
    },
    {
      icon: MousePointer,
      title: "Safe Browsing Habits",
      summary: "Navigate the web securely by avoiding malicious websites and suspicious downloads.",
      color: "bg-[#007BFF]/10 text-[#007BFF]",
      hoverColor: "group-hover:bg-[#007BFF]/20",
      slug: "safe-browsing-habits",
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      summary: "Protect your smartphone with proper app permissions, updates, and security settings.",
      color: "bg-purple-100 text-purple-600",
      hoverColor: "group-hover:bg-purple-200",
      slug: "mobile-security",
    },
    {
      icon: Users,
      title: "Social Media Privacy",
      summary: "Secure your social media accounts with privacy settings and safe sharing practices.",
      color: "bg-orange-100 text-orange-600",
      hoverColor: "group-hover:bg-orange-200",
      slug: "social-media-privacy",
    },
    {
      icon: Wifi,
      title: "Wi-Fi Security",
      summary: "Use public Wi-Fi safely and secure your home network from unauthorized access.",
      color: "bg-green-100 text-green-600",
      hoverColor: "group-hover:bg-green-200",
      slug: "wifi-security",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/tip.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/80 to-[#1ED3B6]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent" />
        </div>

        {/* Animated Floating Icons */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-12 h-12 bg-[#1ED3B6]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-6 h-6 text-[#1ED3B6] animate-pulse" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float animation-delay-200">
            <div className="w-10 h-10 bg-[#007BFF]/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Lock className="w-5 h-5 text-[#007BFF] animate-pulse" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float animation-delay-400">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Globe className="w-7 h-7 text-purple-400 animate-pulse" />
            </div>
          </div>
          <div className="absolute top-60 right-40 animate-float animation-delay-300">
            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Search className="w-4 h-4 text-orange-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Floating Background Dots */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-[#1ED3B6]/30 rounded-full animate-pulse" />
          <div className="absolute top-48 right-1/3 w-1 h-1 bg-[#007BFF]/40 rounded-full animate-ping" />
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#1ED3B6]/20 rounded-full animate-bounce-slow" />
          <div className="absolute top-72 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white animate-slide-in-left">
                Cybersecurity <span className="text-[#1ED3B6] animate-glow">Tips & Resources</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-in-right animation-delay-200">
                Stay informed. Stay safe. Learn how to protect yourself and your digital life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether you're a student, professional, or tech enthusiast, these guides will help you browse safely and
                spot online threats early. In today's digital world, cybersecurity knowledge is essential for everyone.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tips Grid Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Security Tips</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Master these fundamental cybersecurity practices to protect yourself online.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cybersecurityTips.map((tip, index) => (
              <ScrollAnimation key={tip.title}>
                <Card
                  className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-16 h-16 ${tip.color} ${tip.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0`}
                      >
                        <tip.icon className="w-8 h-8 group-hover:animate-pulse" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold group-hover:text-[#1ED3B6] transition-colors duration-300 mb-2">
                          {tip.title}
                        </CardTitle>
                        <p className="text-gray-600 leading-relaxed text-sm">{tip.summary}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#1ED3B6] text-[#1ED3B6] hover:bg-[#1ED3B6] hover:text-white rounded-xl transition-all duration-300 group-hover:scale-105 bg-transparent group/button"
                    >
                      <Link href={`/resources/${tip.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#1ED3B6]/10 to-[#007BFF]/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, #1ED3B6 2px, transparent 2px),
                radial-gradient(circle at 80% 80%, #007BFF 1px, transparent 1px),
                linear-gradient(45deg, transparent 49%, rgba(30, 211, 182, 0.1) 50%, transparent 51%)
              `,
              backgroundSize: "60px 60px, 40px 40px, 30px 30px",
            }}
          />
        </div>

        {/* Floating Shield Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-10 left-10 w-3 h-3 bg-[#1ED3B6]/20 rounded-full animate-float" />
          <div className="absolute top-20 right-20 w-2 h-2 bg-[#007BFF]/30 rounded-full animate-bounce-slow" />
          <div className="absolute bottom-10 left-20 w-4 h-4 bg-[#1ED3B6]/15 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-[#007BFF]/40 rounded-full animate-ping" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <ScrollAnimation>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#1ED3B6]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm animate-pulse">
                    <AlertTriangle className="w-10 h-10 text-[#1ED3B6]" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Spotted Something Suspicious?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  If you encounter suspicious online behavior, phishing attempts, or security vulnerabilities while
                  browsing, don't hesitate to report them. Your vigilance helps protect the entire Malawian digital
                  community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl px-8 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1ED3B6]/25 group"
                >
                  <Link href="/report" className="flex items-center gap-2">
                    <Shield className="w-5 h-5 group-hover:animate-pulse" />
                    Report a Threat
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl px-8 py-6 text-lg font-medium bg-transparent transition-all duration-300 hover:scale-105"
                >
                  <Link href="/reports">View Recent Reports</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <ScrollAnimation>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Stay Updated</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Cybersecurity is an evolving field. We regularly update our resources with the latest threats and
                  protection methods.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center space-y-3 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#1ED3B6]/10 rounded-xl flex items-center justify-center mx-auto">
                    <Globe className="w-6 h-6 text-[#1ED3B6]" />
                  </div>
                  <h3 className="font-bold">Latest Threats</h3>
                  <p className="text-sm text-gray-600">Stay informed about emerging cybersecurity threats in Malawi</p>
                </div>
                <div className="text-center space-y-3 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-[#007BFF]" />
                  </div>
                  <h3 className="font-bold">Best Practices</h3>
                  <p className="text-sm text-gray-600">Learn industry-standard security practices and protocols</p>
                </div>
                <div className="text-center space-y-3 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold">Community</h3>
                  <p className="text-sm text-gray-600">Connect with other security-conscious Malawians</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
