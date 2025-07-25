"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useReport } from "@/hooks/use-reports"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Globe,
  Shield,
  User,
  AlertTriangle,
  ImageIcon,
  CheckCircle,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function ReportDetailPage() {
  const params = useParams()
  const reportId = parseInt(params.id as string)
  const { data: report, isLoading, isError } = useReport(reportId)

  const statusConfig = {
    open: {
      label: "Open",
      color: "bg-red-500",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      icon: "❌",
    },
    "in-review": {
      label: "In Review",
      color: "bg-orange-500",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50",
      icon: "⚠️",
    },
    resolved: {
      label: "Resolved",
      color: "bg-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      icon: "✅",
    },
  }

  if (isLoading) {
    return <LoadingScreen message="Loading bug report..." />
  }

  if (isError || !report) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono flex flex-col">
        <Navbar />
        <div className="flex-grow container px-4 md:px-6 mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Report Not Found</h1>
          <p className="text-gray-600 mb-8">
            The requested report could not be found or failed to load.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl bg-transparent"
          >
            <Link href="/reports">Back to Reports</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const status = statusConfig[report.status as keyof typeof statusConfig]

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in flex flex-col">
      <Navbar />

      <section className="relative w-full py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B6]/5 via-[#F8FAFC] to-[#007BFF]/5" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, #1ED3B6 1px, transparent 1px),
                radial-gradient(circle at 80% 80%, #007BFF 1px, transparent 1px),
                linear-gradient(90deg, transparent 49%, rgba(30, 211, 182, 0.1) 50%, transparent 51%)
              `,
              backgroundSize: "40px 40px, 60px 60px, 30px 30px",
            }}
          />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Shield className="w-96 h-96 text-[#1ED3B6]/5 animate-pulse-slow" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="text-center space-y-6 animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-in-left">
              Bug Report <span className="text-[#1ED3B6] animate-glow">Details</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animation-delay-200">
              Submitted by a verified ethical hacker
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 mx-auto py-8 flex-grow">
        <div className="mb-8 animate-fade-in-up">
          <Button
            asChild
            variant="ghost"
            className="border border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10 rounded-xl"
          >
            <Link href="/reports" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Reports
            </Link>
          </Button>
        </div>

        <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg mb-8 animate-slide-in-up animation-delay-200">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-[#007BFF]" />
                  <span className="text-lg font-bold text-[#007BFF]">{report.website}</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{report.bugType}</CardTitle>
              </div>
              <Badge
                className={`${status.bgColor} ${status.textColor} border-0 rounded-lg px-4 py-2 text-sm font-medium w-fit`}
              >
                <span className="mr-2">{status.icon}</span>
                {status.label}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Date Reported</p>
                  <p className="font-medium">{report.reportedDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Submitted By</p>
                  <p className="font-medium">{report.submittedBy}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg animate-slide-in-up animation-delay-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Bug Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{report.description}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg animate-slide-in-up animation-delay-400">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Steps to Reproduce</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {Array.isArray(report.stepsToReproduce) ? (
                  report.stepsToReproduce.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#1ED3B6] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 italic">No steps provided.</p>
                )}
              </ol>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center bg-gray-50 animate-slide-in-up animation-delay-500">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Proof of Concept</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">{report.screenshot || "screenshot.png"}</p>
                <p className="text-sm text-gray-500 mt-2">Screenshot not shown publicly for security reasons</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl border-2 border-red-100 bg-red-50/50 shadow-lg animate-slide-in-up animation-delay-600">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Impact Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">{report.impact}</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 border-[#1ED3B6]/20 bg-[#1ED3B6]/5 shadow-lg animate-slide-in-up animation-delay-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#1ED3B6] flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{report.recommendation}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl border-2 border-[#007BFF]/20 bg-[#007BFF]/5 shadow-lg animate-slide-in-up animation-delay-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#007BFF] mb-2">Responsible Disclosure Notice</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This report was submitted in accordance with CyberTip Malawi's responsible disclosure policy.
                    The vulnerability details are shared to help improve security awareness and encourage proper
                    remediation. Please do not attempt to exploit these vulnerabilities on live systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
            <Button
              variant="outline"
              className="border-[#1ED3B6] text-[#1ED3B6] hover:bg-[#1ED3B6] hover:text-white rounded-xl px-8 py-3 font-medium bg-transparent"
            >
              Mark as Resolved
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl px-8 py-3 font-medium bg-transparent"
            >
              <Link href="/reports">Go Back to Reports</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
