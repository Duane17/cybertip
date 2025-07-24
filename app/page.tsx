import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Lock,
  Users,
  Send,
  CheckCircle,
  Building2,
  Smartphone,
  GraduationCap,
  Landmark,
  Code,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern with Image and Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Base Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/hero.jpg')`,
            }}
          />

          {/* Colored Overlays */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Animated Grid Pattern Layer */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #1ED3B6 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #007BFF 1px, transparent 1px),
                linear-gradient(45deg, transparent 49%, rgba(30, 211, 182, 0.1) 50%, transparent 51%)
              `,
              backgroundSize: "50px 50px, 30px 30px, 20px 20px",
            }}
          />

          {/* Subtle Gradient Fades */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/80 to-[#1A1A1A]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent" />
        </div>


        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#1ED3B6] rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#007BFF] rounded-full animate-ping" />
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#1ED3B6]/50 rounded-full animate-bounce" />
          <div className="absolute top-60 right-40 w-1 h-1 bg-[#007BFF]/70 rounded-full animate-pulse" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white animate-slide-in-left">
                  Report Security Issues. <span className="text-[#1ED3B6] animate-glow">Protect Malawi's Web.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed animate-slide-in-left animation-delay-200">
                  CyberTip Malawi is a secure platform where local developers and ethical hackers can safely report
                  security flaws in banks, telecoms, schools, and government systems.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up animation-delay-400">
                <Link href="/report">
                  <Button
                    size="lg"
                    className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl px-8 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1ED3B6]/25"
                  >
                    Report a Bug
                  </Button>
                </Link>

                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10 rounded-xl px-8 py-6 text-lg font-medium bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-right">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-[#1ED3B6]/30 to-[#007BFF]/30 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 animate-float">
                  <Shield className="w-32 h-32 text-[#1ED3B6] animate-pulse-slow" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#007BFF] rounded-2xl flex items-center justify-center animate-bounce-slow">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#1ED3B6] rounded-xl flex items-center justify-center animate-spin-slow">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl border-2 border-gray-100 bg-white">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-[#007BFF]/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Code className="w-10 h-10 text-[#007BFF]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Step 1: Submit a Bug</h3>
                    <p className="text-gray-600">"Fill in a secure form describing the issue."</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-gray-100 bg-white">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-[#1ED3B6]/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Send className="w-10 h-10 text-[#1ED3B6]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Step 2: We Notify the Institution</h3>
                    <p className="text-gray-600">"We review and forward valid issues."</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-gray-100 bg-white">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Step 3: Get Recognized</h3>
                    <p className="text-gray-600">"Get a thank-you badge or responsible disclosure credit."</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It Helps Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Malawi's Digital Future</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-medium">Banks</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <p className="font-medium">Telecoms</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <p className="font-medium">Schools</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                <Landmark className="w-8 h-8 text-red-600" />
              </div>
              <p className="font-medium">Government</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#007BFF]/10 rounded-2xl flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-[#007BFF]" />
              </div>
              <p className="font-medium">Developers</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#1ED3B6]/10 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-[#1ED3B6]" />
              </div>
              <p className="font-medium">Malawians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#1ED3B6]/10 to-[#007BFF]/10">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Help Secure Malawi's Web?</h2>
            <Button
              asChild
              size="lg"
              className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl px-12 py-6 text-xl font-medium"
            >
              <Link href="/report">Report an Issue Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
