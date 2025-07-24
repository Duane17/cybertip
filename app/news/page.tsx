"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Bell,
  ExternalLink,
  ArrowRight,
  Calendar,
  Users,
  Megaphone,
  Mail,
  Globe,
  Newspaper,
  AlertTriangle
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  const newsItems = [
    {
        id: 1,
        title: "Airtel Malawi Launches Africa’s First AI-Powered Spam Alert Service",
        subtitle: "Airtel leads the continent with a new AI system to detect and block fraudulent messages in real time.",
        date: "July 11, 2025",
        icon: AlertTriangle,
        color: "bg-[#1ED3B6]/10 text-[#1ED3B6]",
        hoverColor: "group-hover:bg-[#1ED3B6]/20",
        url: "https://techafricanews.com/2025/07/11/airtel-malawi-launches-africas-first-ai-powered-spam-alert-service/"
    },
    {
        id: 2,
        title: "Malawi Dragging Its Feet on Legal Gaps for Human Rights in the Digital Age",
        subtitle: "Experts warn slow legal reforms could lead to unchecked digital surveillance and rights violations.",
        date: "August 15, 2024",
        icon: Globe,
        color: "bg-red-100 text-red-600",
        hoverColor: "group-hover:bg-red-200",
        url: "https://www.apc.org/en/news/malawi-dragging-its-feet-filling-legal-gaps-prevent-human-rights-violations"
    },
    {
        id: 3,
        title: "UNDP Donates Digital Forensic Tools to Boost Malawi Police Investigations",
        subtitle: "New forensic and ICT equipment to help police handle cybercrime and document verification cases.",
        date: "March 24, 2025",
        icon: Shield,
        color: "bg-blue-100 text-blue-600",
        hoverColor: "group-hover:bg-blue-200",
        url: "https://www.undp.org/malawi/news/undp-hands-over-forensic-document-examination-and-ict-equipment-malawi-police-help-improve-investigations"
    },
    {
        id: 4,
        title: "Malawi Passport System Restored After Major Cyberattack",
        subtitle: "System back online after a prolonged disruption that halted passport processing nationwide.",
        date: "March 14, 2024",
        icon: Newspaper,
        color: "bg-yellow-100 text-yellow-600",
        hoverColor: "group-hover:bg-yellow-200",
        url: "https://www.darkreading.com/cyberattacks-data-breaches/malawi-passport-system-back-online-after-cyberattack"
    }
    ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image with Overlays */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/news.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/80 to-[#1ED3B6]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-[#1ED3B6]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#1ED3B6]/30">
              <Shield className="w-8 h-8 text-[#1ED3B6] animate-pulse-slow" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float animation-delay-200">
            <div className="w-12 h-12 bg-[#007BFF]/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-[#007BFF]/30">
              <Bell className="w-6 h-6 text-[#007BFF] animate-pulse-slow" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float animation-delay-400">
            <div className="w-14 h-14 bg-[#1ED3B6]/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#1ED3B6]/20">
              <Megaphone className="w-7 h-7 text-[#1ED3B6] animate-pulse-slow" />
            </div>
          </div>
          <div className="absolute top-60 right-40 animate-float animation-delay-300">
            <div className="w-10 h-10 bg-[#007BFF]/15 rounded-lg flex items-center justify-center backdrop-blur-sm border border-[#007BFF]/20">
              <Users className="w-5 h-5 text-[#007BFF] animate-pulse-slow" />
            </div>
          </div>
        </div>

        {/* Pulsing Background Dots */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-[#1ED3B6]/30 rounded-full animate-pulse" />
          <div className="absolute top-48 right-1/3 w-2 h-2 bg-[#007BFF]/40 rounded-full animate-ping" />
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-[#1ED3B6]/20 rounded-full animate-bounce-slow" />
          <div className="absolute top-72 right-1/4 w-1 h-1 bg-[#007BFF]/50 rounded-full animate-pulse" />
          <div className="absolute bottom-48 right-1/5 w-2 h-2 bg-[#1ED3B6]/25 rounded-full animate-ping" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white animate-slide-in-left">
                Cybersecurity <span className="text-[#1ED3B6] animate-glow">News & Campaigns</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-in-right animation-delay-200">
                Updates on digital safety events and awareness efforts across Malawi.
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
                Stay informed about CyberTip's latest initiatives, workshops, and national cybersecurity updates. Join
                our community efforts to build a safer digital Malawi.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* News List Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#F8FAFC] to-[#1ED3B6]/5" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, #1ED3B6 2px, transparent 2px),
                radial-gradient(circle at 80% 80%, #007BFF 1px, transparent 1px),
                radial-gradient(circle at 40% 60%, #1ED3B6 1px, transparent 1px),
                linear-gradient(90deg, transparent 49%, rgba(30, 211, 182, 0.1) 50%, transparent 51%)
              `,
              backgroundSize: "80px 80px, 60px 60px, 40px 40px, 30px 30px",
            }}
          />
        </div>

        {/* Circuit-style pattern */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 w-1 h-1 bg-[#1ED3B6]/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-[#007BFF]/15 rounded-full animate-ping" />
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-[#1ED3B6]/25 rounded-full animate-pulse" />
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-[#007BFF]/20 rounded-full animate-ping" />
          <div className="absolute bottom-60 right-1/5 w-2 h-2 bg-[#1ED3B6]/15 rounded-full animate-pulse" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Events</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover upcoming cybersecurity events, workshops, and awareness campaigns happening across Malawi.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <ScrollAnimation key={item.id}>
                <Link href="#" className="block group">
                <Card
                    className="flex flex-col justify-between rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full min-h-[340px] max-h-[340px] animate-fade-in-up group-hover:border-[#1ED3B6]/30"
                    style={{ animationDelay: `${index * 100}ms` }}
                    >
                    <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                        <div
                            className={`w-12 h-12 ${item.color} ${item.hoverColor} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0`}
                        >
                            <item.icon className="w-6 h-6 group-hover:animate-pulse" />
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="w-5 h-5 text-[#1ED3B6] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#1ED3B6] transition-colors duration-300 leading-tight">
                        {item.title}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col justify-between flex-grow space-y-4">
                        <div className="flex-grow">
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {item.subtitle}
                        </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 mt-auto">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{item.date}</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="w-4 h-4 text-[#1ED3B6] group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        </div>
                    </CardContent>
                    </Card>


                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#1ED3B6]/10 to-[#007BFF]/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #1ED3B6 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #007BFF 1px, transparent 1px),
                linear-gradient(45deg, transparent 49%, rgba(30, 211, 182, 0.1) 50%, transparent 51%)
              `,
              backgroundSize: "60px 60px, 40px 40px, 30px 30px",
            }}
          />
        </div>

        {/* Floating Elements */}
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
                  <div className="w-20 h-20 bg-[#1ED3B6]/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#1ED3B6]/20 animate-success-bounce">
                    <Mail className="w-10 h-10 text-[#1ED3B6] animate-pulse-slow" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Want to feature your cybersecurity event here?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Join our network of cybersecurity advocates and help spread awareness across Malawi. Share your
                  workshops, conferences, and awareness campaigns with our community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl px-8 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1ED3B6]/25 group"
                >
                  <Link href="#" className="flex items-center gap-2">
                    <Mail className="w-5 h-5 group-hover:animate-pulse" />
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl px-8 py-6 text-lg font-medium bg-transparent transition-all duration-300 hover:scale-105"
                >
                  <Link href="/about">Learn More About Us</Link>
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
                <h2 className="text-2xl md:text-3xl font-bold">Stay Connected</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Don't miss out on important cybersecurity updates and community events.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center space-y-3 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-12 h-12 bg-[#1ED3B6]/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Bell className="w-6 h-6 text-[#1ED3B6] group-hover:animate-pulse" />
                  </div>
                  <h3 className="font-bold group-hover:text-[#1ED3B6] transition-colors duration-300">
                    Event Notifications
                  </h3>
                  <p className="text-sm text-gray-600">Get notified about upcoming cybersecurity events in your area</p>
                </div>
                <div className="text-center space-y-3 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-[#007BFF] group-hover:animate-pulse" />
                  </div>
                  <h3 className="font-bold group-hover:text-[#007BFF] transition-colors duration-300">
                    Community Network
                  </h3>
                  <p className="text-sm text-gray-600">
                    Connect with other cybersecurity professionals and enthusiasts
                  </p>
                </div>
                <div className="text-center space-y-3 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="font-bold group-hover:text-purple-600 transition-colors duration-300">
                    Security Updates
                  </h3>
                  <p className="text-sm text-gray-600">Receive the latest cybersecurity news and threat intelligence</p>
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
