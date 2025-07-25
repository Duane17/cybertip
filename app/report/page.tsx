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
import { Upload, Shield, Eye, Bell, Award } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

export default function ReportBugPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null)
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null)
  const [steps, setSteps] = useState([""])
  const [formData, setFormData] = useState({
    targetUrl: "",
    bugType: "",
    description: "",
    impact: "",
    recommendation: "",
    name: "",
    email: "",
    agreeToPolicy: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setScreenshotFile(file)
      setScreenshotPreview(URL.createObjectURL(file))
    }
  }

  const handleStepChange = (index: number, value: string) => {
    const updated = [...steps]
    updated[index] = value
    setSteps(updated)
  }

  const addStep = () => setSteps((prev) => [...prev, ""])
  const removeStep = (index: number) => setSteps((prev) => prev.filter((_, i) => i !== index))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      website: formData.targetUrl,
      bugType: formData.bugType,
      description: formData.description,
      stepsToReproduce: steps.filter(Boolean),
      impact: formData.impact,
      recommendation: formData.recommendation,
      submittedBy: formData.name || "Anonymous",
      screenshot: screenshotFile?.name || "",
      status: "open",
    }

    try {
      const res = await fetch(`${API_URL}/reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed to submit report")

      window.location.href = "/report/success"
    } catch (err) {
      console.error("❌ Submit error:", err)
      alert("Failed to submit bug report. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in">
      <Navbar />

      <section className="relative w-full py-16 md:py-20 overflow-hidden">
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
          <div className="lg:col-span-2">
            <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Bug Report Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="targetUrl" className="text-sm font-medium">Target URL *</Label>
                    <Input
                      id="targetUrl"
                      type="url"
                      placeholder="https://example.com/vulnerable-page"
                      value={formData.targetUrl}
                      onChange={(e) => handleInputChange("targetUrl", e.target.value)}
                      className="rounded-xl border-2 border-gray-200 focus:border-[#1ED3B6]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bugType" className="text-sm font-medium">Bug Type *</Label>
                    <Select value={formData.bugType} onValueChange={(value) => handleInputChange("bugType", value)}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-[#1ED3B6]">
                        <SelectValue placeholder="Select bug type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cross-Site Scripting (XSS)">Cross-Site Scripting (XSS)</SelectItem>
                        <SelectItem value="SQL Injection">SQL Injection</SelectItem>
                        <SelectItem value="Broken Authentication">Broken Authentication</SelectItem>
                        <SelectItem value="Cross-Site Request Forgery (CSRF)">Cross-Site Request Forgery (CSRF)</SelectItem>
                        <SelectItem value="Insecure Direct Object Reference">Insecure Direct Object Reference</SelectItem>
                        <SelectItem value="File Upload Vulnerability">File Upload Vulnerability</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the vulnerability, steps to reproduce, and potential impact..."
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="rounded-xl border-2 border-gray-200 min-h-32"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Steps to Reproduce *</Label>
                    {steps.map((step, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={step}
                          placeholder={`Step ${index + 1}`}
                          onChange={(e) => handleStepChange(index, e.target.value)}
                          className="flex-1 rounded-xl border-2 border-gray-200"
                          required
                        />
                        {index > 0 && (
                          <Button type="button" variant="ghost" onClick={() => removeStep(index)}>❌</Button>
                        )}
                      </div>
                    ))}
                    <Button type="button" variant="outline" onClick={addStep} className="mt-2">➕ Add Step</Button>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Impact *</Label>
                    <Textarea
                      value={formData.impact}
                      onChange={(e) => handleInputChange("impact", e.target.value)}
                      placeholder="What is the potential damage or risk?"
                      required
                      className="rounded-xl border-2 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Recommendation *</Label>
                    <Textarea
                      value={formData.recommendation}
                      onChange={(e) => handleInputChange("recommendation", e.target.value)}
                      placeholder="Suggest a fix or mitigation"
                      required
                      className="rounded-xl border-2 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Screenshot (optional)</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleScreenshotChange}
                      className="rounded-xl border-2 border-dashed border-gray-300"
                    />
                    {screenshotPreview && (
                      <img src={screenshotPreview} alt="Preview" className="mt-2 w-40 rounded-xl shadow" />
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Your Name (Optional)</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Chikondi Banda"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="rounded-xl border-2 border-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ckbanda@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="rounded-xl border-2 border-gray-200"
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
                      I agree to the responsible disclosure policy and understand that this report will be handled confidentially.
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

          <div className="lg:col-span-1">
            <Card className="rounded-2xl border-2 border-[#007BFF]/20 bg-[#007BFF]/5">
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

      <Footer />
    </div>
  )
}
