"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Handshake,
  Bug,
  Building2,
  Smartphone,
  GraduationCap,
  Landmark,
  Code,
  Heart,
  Scale,
  ChevronDown,
  MapPin,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function AboutPage() {
  const coreGoals = [
    {
      icon: Shield,
      title: "Protect Local Digital Systems",
      description: "Safeguard Malawi's critical digital infrastructure from cyber threats and vulnerabilities.",
      color: "bg-[#1ED3B6]/10 text-[#1ED3B6]",
    },
    {
      icon: Users,
      title: "Support Cybersecurity Talent",
      description: "Empower local ethical hackers and security researchers to contribute meaningfully.",
      color: "bg-[#007BFF]/10 text-[#007BFF]",
    },
    {
      icon: Handshake,
      title: "Build Trust Between Hackers & Institutions",
      description: "Create a bridge of communication and collaboration for better security outcomes.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Bug,
      title: "Fix Bugs Before They're Exploited",
      description: "Enable proactive security measures through responsible vulnerability disclosure.",
      color: "bg-orange-100 text-orange-600",
    },
  ]

  const whoItHelps = [
    {
      icon: Landmark,
      title: "Government Institutions",
      description: "Secure public services and citizen data from cyber threats.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Building2,
      title: "Banks",
      description: "Protect financial systems and customer transactions.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Smartphone,
      title: "Telecoms",
      description: "Safeguard communication networks and subscriber information.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Schools",
      description: "Secure educational platforms and student records.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Code,
      title: "Developers",
      description: "Learn from real-world security issues and best practices.",
      color: "bg-[#007BFF]/10 text-[#007BFF]",
    },
    {
      icon: Heart,
      title: "Citizens",
      description: "Ensure personal data and digital services remain secure.",
      color: "bg-[#1ED3B6]/10 text-[#1ED3B6]",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B6]/5 via-[#F8FAFC] to-[#007BFF]/5" />
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

        {/* Malawi Map Silhouette */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-96 h-96 opacity-5">
            <MapPin className="w-full h-full text-[#1ED3B6] animate-pulse-slow" />
          </div>
        </div>

        {/* Floating Shield Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-4 h-4 bg-[#1ED3B6]/20 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-[#007BFF]/30 rounded-full animate-bounce-slow" />
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#1ED3B6]/15 rounded-full animate-pulse" />
          <div className="absolute top-60 right-40 w-1 h-1 bg-[#007BFF]/40 rounded-full animate-ping" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-slide-in-left">
                About <span className="text-[#1ED3B6] animate-glow">CyberTip Malawi</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-in-right animation-delay-200">
                A community-driven platform for reporting bugs, building trust, and protecting Malawi's digital future.
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center animate-fade-in-up animation-delay-400">
              <div className="flex flex-col items-center space-y-2 text-gray-500">
                <span className="text-sm font-medium">Learn More</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <ScrollAnimation>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">Our Mission & Story</h2>
                  <div className="w-16 h-1 bg-[#1ED3B6] rounded-full" />
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    The internet is becoming critical to life in Malawi — from banking and education to healthcare and
                    communication. But most websites don't have a proper way to report vulnerabilities.
                  </p>
                  <p className="text-lg">
                    CyberTip was created to fill that gap — giving ethical hackers a secure and recognized way to help
                    protect our digital infrastructure. We believe that by working together, we can build a safer
                    digital future for all Malawians.
                  </p>
                  <p className="text-lg">
                    Our platform bridges the gap between security researchers and institutions, creating a trusted
                    environment where vulnerabilities can be reported responsibly and addressed effectively.
                  </p>
                </div>
              </div>

              {/* Animated Graphic with Background Image */}
              <div className="flex justify-center">
                <div className="relative w-80 h-80 rounded-3xl animate-float overflow-hidden border border-white/20">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('/about.jpg')" }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#1ED3B6]/20 to-[#007BFF]/20 backdrop-blur-sm" />

                  {/* Icon Content */}
                  <div className="relative z-20 flex items-center justify-center w-full h-full">
                    <div className="relative">
                      <Shield className="w-32 h-32 text-[#1ED3B6] animate-pulse-slow" />
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#007BFF]/20 rounded-2xl flex items-center justify-center animate-spin-slow">
                        <Code className="w-8 h-8 text-[#007BFF]" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#1ED3B6]/30 rounded-xl flex items-center justify-center animate-bounce-slow">
                        <Users className="w-6 h-6 text-[#1ED3B6]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>


      {/* Core Goals Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Goals</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to building a secure digital ecosystem for Malawi through these key objectives.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreGoals.map((goal, index) => (
              <ScrollAnimation key={goal.title}>
                <Card
                  className="flex flex-col justify-between h-full min-h-[320px] rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 ${goal.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <goal.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-[#1ED3B6] transition-colors duration-300">
                      {goal.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-600 text-center leading-relaxed">{goal.description}</p>
                  </CardContent>
                </Card>

              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Helps Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                CyberTip Malawi benefits everyone in our digital ecosystem, from institutions to individual citizens.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoItHelps.map((group, index) => (
              <ScrollAnimation key={group.title}>
                <div
                  className="group cursor-pointer h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4 p-6 min-h-[180px] h-full rounded-2xl border-2 border-gray-100 bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div
                      className={`w-12 h-12 ${group.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <group.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold group-hover:text-[#1ED3B6] transition-colors duration-300">
                        {group.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{group.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

            ))}
          </div>
        </div>
      </section>

      {/* Responsible Disclosure Policy Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <ScrollAnimation>
            <Card className="rounded-2xl border-2 border-[#007BFF]/20 bg-[#007BFF]/5 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-[#007BFF]/10 rounded-2xl flex items-center justify-center">
                      <Scale className="w-10 h-10 text-[#007BFF]" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#007BFF]">Responsible Disclosure Policy</h2>
                    <div className="w-16 h-1 bg-[#007BFF] rounded-full mx-auto" />
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    <p className="text-lg">
                      We follow responsible disclosure principles. Bug reports are reviewed and forwarded safely to the
                      appropriate institutions. We do not support illegal activity or extortion.
                    </p>
                    <p className="text-lg">
                      All submissions must be made in good faith with the intention of improving security. We work
                      closely with organizations to ensure vulnerabilities are addressed promptly and effectively.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Badge className="bg-[#1ED3B6]/10 text-[#1ED3B6] border-0 px-4 py-2 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Ethical Reporting
                    </Badge>
                    <Badge className="bg-[#007BFF]/10 text-[#007BFF] border-0 px-4 py-2 text-sm font-medium">
                      <Shield className="w-4 h-4 mr-2" />
                      Secure Communication
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-600 border-0 px-4 py-2 text-sm font-medium">
                      <Handshake className="w-4 h-4 mr-2" />
                      Collaborative Approach
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#1ED3B6]/10 to-[#007BFF]/10">
        <div className="container px-4 md:px-6 mx-auto">
          <ScrollAnimation>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Join the Movement to Secure Malawi's Web</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Be part of the solution. Help us build a safer digital future for all Malawians.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl px-8 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1ED3B6]/25"
                >
                  <Link href="/report">Report a Bug</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl px-8 py-6 text-lg font-medium bg-transparent transition-all duration-300 hover:scale-105"
                >
                  <Link href="/reports">View Reports</Link>
                </Button>
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
