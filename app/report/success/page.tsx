"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Eye, Bell, Award, Shield, Heart, Sparkles, ArrowRight, Home } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function ReportSuccessPage() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Trigger confetti animation after component mounts
    const timer = setTimeout(() => {
      setShowConfetti(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const nextSteps = [
    {
      icon: Eye,
      title: "We Review",
      description: "Our security team validates the vulnerability and assesses its impact on the affected system.",
      color: "bg-[#007BFF]/10 text-[#007BFF]",
      delay: "animation-delay-200",
    },
    {
      icon: Bell,
      title: "We Notify",
      description: "The affected institution is contacted securely with detailed information about the vulnerability.",
      color: "bg-orange-100 text-orange-600",
      delay: "animation-delay-400",
    },
    {
      icon: Award,
      title: "You Get Credit",
      description:
        "If approved, your contribution will be recognized in our Hall of Thanks and responsible disclosure credits.",
      color: "bg-[#1ED3B6]/10 text-[#1ED3B6]",
      delay: "animation-delay-600",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in relative overflow-hidden">
      <Navbar />

      {/* Confetti Elements */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-30">
          {/* Confetti particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div
                className={`w-2 h-2 ${Math.random() > 0.5 ? "bg-[#1ED3B6]" : "bg-[#007BFF]"} rounded-full opacity-80`}
              />
            </div>
          ))}

          {/* Sparkle elements */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute animate-sparkle"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <Sparkles className="w-4 h-4 text-[#1ED3B6] opacity-60" />
            </div>
          ))}
        </div>
      )}

      {/* Hero/Confirmation Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B6]/10 via-[#F8FAFC] to-[#1ED3B6]/5" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #1ED3B6 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #1ED3B6 1px, transparent 1px),
                linear-gradient(45deg, transparent 49%, rgba(30, 211, 182, 0.1) 50%, transparent 51%)
              `,
              backgroundSize: "50px 50px, 30px 30px, 20px 20px",
            }}
          />
        </div>

        {/* Large Shield Background */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Shield className="w-96 h-96 text-[#1ED3B6]/5 animate-pulse-slow" />
        </div>

        {/* Floating Success Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-3 h-3 bg-[#1ED3B6]/30 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-[#1ED3B6]/40 rounded-full animate-bounce-slow" />
          <div className="absolute bottom-40 left-20 w-4 h-4 bg-[#1ED3B6]/20 rounded-full animate-pulse" />
          <div className="absolute top-60 right-40 w-1 h-1 bg-[#1ED3B6]/50 rounded-full animate-ping" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="text-center space-y-8">
            {/* Animated Checkmark */}
            <div className="flex justify-center animate-success-bounce">
              <div className="w-32 h-32 bg-[#1ED3B6]/10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-[#1ED3B6]/20">
                <CheckCircle className="w-20 h-20 text-[#1ED3B6] animate-checkmark-scale" />
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 animate-fade-in-up animation-delay-300">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-in-left">
                <span className="text-[#1ED3B6] animate-glow">Thank You</span> for Submitting Responsibly
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-in-right animation-delay-400">
                Your bug report has been received and will be reviewed by our security team.
              </p>
              <div className="bg-[#1ED3B6]/5 rounded-2xl p-6 max-w-4xl mx-auto border border-[#1ED3B6]/20 animate-fade-in-up animation-delay-500">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1ED3B6]">
                    You're helping protect millions of digital users across Malawi.
                  </span>
                  <br />
                  We deeply appreciate your contribution to building a safer web for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens Next?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's how we'll handle your security report with care and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((step, index) => (
              <Card
                key={step.title}
                className={`rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group animate-fade-in-up ${step.delay}`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse`}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-[#1ED3B6] transition-colors duration-300">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#1ED3B6]/5 to-[#007BFF]/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-8 animate-fade-in-up animation-delay-200">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Continue Making a Difference</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your work doesn't stop here. Keep contributing to Malawi's digital security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl px-8 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1ED3B6]/25 group"
              >
                <Link href="/report" className="flex items-center gap-2">
                  Submit Another Bug
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl px-8 py-6 text-lg font-medium bg-transparent transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/reports" className="flex items-center gap-2">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  View Reports
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="text-gray-600 hover:text-[#1ED3B6] transition-colors duration-300 group"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Banner */}
      <section className="w-full py-12 bg-[#1ED3B6]/10 border-t border-[#1ED3B6]/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center animate-fade-in-up">
            <div className="flex items-center justify-center space-x-3 text-[#1ED3B6]">
              <Award className="w-6 h-6 animate-pulse" />
              <p className="text-lg font-medium">You are now part of Malawi's cybersecurity community</p>
              <Award className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
