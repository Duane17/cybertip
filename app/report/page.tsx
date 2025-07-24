"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Shield, Eye, Bell, Award, Heart } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ReportBugPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    targetUrl: "",
    bugType: "",
    description: "",
    name: "",
    email: "",
    agreeToPolicy: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)

    // Redirect to success page instead of showing inline success
    window.location.href = "/report/success"
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in">
      <Navbar />

      {/* Hero/Header Section */}
      <section className="relative w-full py-16 md:py-20 overflow-hidden">
        {/* Background Pattern with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/90 via-[#1A1A1A]/80 to-[#1ED3B6]/20" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#1ED3B6] rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#007BFF] rounded-full animate-ping" />
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-[#1ED3B6]/50 rounded-full animate-bounce" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="text-center space-y-6 animate-slide-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#1ED3B6]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-8 h-8 text-[#1ED3B6]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-slide-in-left">
              Submit a Security <span className="text-[#1ED3B6] animate-glow">Bug Report</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-in-right animation-delay-200">
              Help protect Malawi's digital infrastructure by sharing what you've found.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 mx-auto py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form Section */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg animate-slide-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Bug Report Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="targetUrl" className="text-sm font-medium">
                      Target URL *
                    </Label>
                    <Input
                      id="targetUrl"
                      type="url"
                      placeholder="https://example.com/vulnerable-page"
                      value={formData.targetUrl}
                      onChange={(e) => handleInputChange("targetUrl", e.target.value)}
                      className="rounded-xl border-2 border-gray-200 focus:border-[#1ED3B6] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bugType" className="text-sm font-medium">
                      Bug Type *
                    </Label>
                    <Select value={formData.bugType} onValueChange={(value) => handleInputChange("bugType", value)}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-[#1ED3B6]">
                        <SelectValue placeholder="Select bug type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xss">Cross-Site Scripting (XSS)</SelectItem>
                        <SelectItem value="sqli">SQL Injection</SelectItem>
                        <SelectItem value="broken-auth">Broken Authentication</SelectItem>
                        <SelectItem value="csrf">Cross-Site Request Forgery (CSRF)</SelectItem>
                        <SelectItem value="idor">Insecure Direct Object Reference</SelectItem>
                        <SelectItem value="file-upload">File Upload Vulnerability</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium">
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the vulnerability, steps to reproduce, and potential impact..."
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="rounded-xl border-2 border-gray-200 focus:border-[#1ED3B6] min-h-32 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Proof of Concept (Optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#1ED3B6] transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload screenshots or files</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Your Name (Optional)
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Chikondi Banda"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="rounded-xl border-2 border-gray-200 focus:border-[#1ED3B6] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ckbanda@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="rounded-xl border-2 border-gray-200 focus:border-[#1ED3B6] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="policy"
                      checked={formData.agreeToPolicy}
                      onCheckedChange={(checked) => handleInputChange("agreeToPolicy", checked as boolean)}
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="policy" className="text-sm text-gray-600 leading-relaxed">
                      I agree to the responsible disclosure policy and understand that this report will be handled
                      confidentially.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToPolicy}
                    className="w-full bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl py-6 text-lg font-medium disabled:opacity-50 transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Report...
                      </div>
                    ) : (
                      "Submit Bug Report"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="rounded-2xl border-2 border-[#007BFF]/20 bg-[#007BFF]/5 animate-slide-in-up animation-delay-400 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#007BFF]">What happens after submission?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-4 h-4 text-[#007BFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#007BFF]">We review your report</h4>
                    <p className="text-sm text-gray-600">Our security team validates the vulnerability</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-[#007BFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#007BFF]">Notify affected institution</h4>
                    <p className="text-sm text-gray-600">We securely inform the organization</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-[#007BFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#007BFF]">You may receive recognition</h4>
                    <p className="text-sm text-gray-600">Get credit for responsible disclosure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
