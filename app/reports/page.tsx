"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Globe, Shield, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample report data
const sampleReports = [
  {
    id: 1,
    website: "malawibank.mw",
    bugType: "SQL Injection",
    reportedDate: "January 15, 2025",
    status: "resolved" as const,
    description:
      "Critical SQL injection vulnerability found in login form allowing unauthorized database access and potential data breach.",
  },
  {
    id: 2,
    website: "tnm.co.mw",
    bugType: "Cross-Site Scripting (XSS)",
    reportedDate: "January 12, 2025",
    status: "in-review" as const,
    description: "Stored XSS vulnerability in customer portal comments section could allow malicious script execution.",
  },
  {
    id: 3,
    website: "airtel.mw",
    bugType: "Broken Authentication",
    reportedDate: "January 10, 2025",
    status: "open" as const,
    description:
      "Weak session management allows session hijacking and unauthorized account access through predictable tokens.",
  },
  {
    id: 4,
    website: "unima.ac.mw",
    bugType: "Insecure Direct Object Reference",
    reportedDate: "January 8, 2025",
    status: "resolved" as const,
    description:
      "Student records accessible by manipulating URL parameters, exposing sensitive academic and personal information.",
  },
  {
    id: 5,
    website: "malawi.gov.mw",
    bugType: "Cross-Site Request Forgery",
    reportedDate: "January 5, 2025",
    status: "in-review" as const,
    description:
      "CSRF vulnerability in admin panel allows unauthorized actions to be performed on behalf of authenticated users.",
  },
  {
    id: 6,
    website: "standardbank.co.mw",
    bugType: "File Upload Vulnerability",
    reportedDate: "January 3, 2025",
    status: "open" as const,
    description: "Unrestricted file upload in document submission form could allow malicious file execution on server.",
  },
  {
    id: 7,
    website: "mzuni.ac.mw",
    bugType: "Information Disclosure",
    reportedDate: "December 28, 2024",
    status: "resolved" as const,
    description:
      "Sensitive configuration files and database credentials exposed through misconfigured web server directory listing.",
  },
  {
    id: 8,
    website: "nbm.mw",
    bugType: "Broken Access Control",
    reportedDate: "December 25, 2024",
    status: "in-review" as const,
    description:
      "Privilege escalation vulnerability allows regular users to access administrative functions and sensitive data.",
  },
  {
    id: 9,
    website: "escom.mw",
    reportedDate: "December 22, 2024",
    bugType: "Security Misconfiguration",
    status: "open" as const,
    description:
      "Default credentials and exposed admin interfaces create multiple attack vectors for unauthorized system access.",
  },
]

const statusConfig = {
  open: { label: "Open", color: "bg-red-500", textColor: "text-red-700", bgColor: "bg-red-50", icon: "❌" },
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

const filterOptions = ["All", "Open", "In Review", "Resolved"]

export default function ViewReportsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const reportsPerPage = 6

  const filteredReports = sampleReports.filter((report) => {
    if (activeFilter === "All") return true
    return statusConfig[report.status].label === activeFilter
  })

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage)
  const startIndex = (currentPage - 1) * reportsPerPage
  const currentReports = filteredReports.slice(startIndex, startIndex + reportsPerPage)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in">
      <Navbar />

      {/* Page Header */}
      <section className="relative w-full py-16 md:py-20 overflow-hidden">
        {/* Background Pattern with Overlay */}
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

        {/* Shield Watermark */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Shield className="w-96 h-96 text-[#1ED3B6]/5 animate-pulse-slow" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="text-center space-y-6 animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-in-left">
              Recent <span className="text-[#1ED3B6] animate-glow">Bug Reports</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animation-delay-200">
              These are the most recent security issues reported by our ethical hacker community.
            </p>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in-up animation-delay-400">
              {filterOptions.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => handleFilterChange(filter)}
                  className={`rounded-xl px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter
                      ? "bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white shadow-lg shadow-[#1ED3B6]/25"
                      : "border-gray-300 text-gray-600 hover:border-[#1ED3B6] hover:text-[#1ED3B6] hover:bg-[#1ED3B6]/5"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <div className="container px-4 md:px-6 mx-auto py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReports.map((report, index) => {
            const status = statusConfig[report.status]
            return (
              <Card
                key={report.id}
                className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-[#007BFF]" />
                      <span className="text-sm font-medium text-[#007BFF]">{report.website}</span>
                    </div>
                    <Badge
                      className={`${status.bgColor} ${status.textColor} border-0 rounded-lg px-3 py-1 text-xs font-medium`}
                    >
                      <span className="mr-1">{status.icon}</span>
                      {status.label}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#1ED3B6] transition-colors duration-300">
                    {report.bugType}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{report.reportedDate}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{report.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl transition-all duration-300 group-hover:scale-105 bg-transparent"
                  >
                    <Link href={`/reports/${report.id}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4 mt-12 animate-fade-in-up">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-300 hover:border-[#1ED3B6] hover:text-[#1ED3B6] disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "ghost"}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl ${
                    currentPage === page
                      ? "bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white"
                      : "border border-gray-300 hover:border-[#1ED3B6] hover:text-[#1ED3B6]"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-xl border border-gray-300 hover:border-[#1ED3B6] hover:text-[#1ED3B6] disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            asChild
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl px-8 py-3 font-medium bg-transparent"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
