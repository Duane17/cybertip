"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Globe, Shield, User, AlertTriangle, ImageIcon, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useParams } from "next/navigation"

// Expanded sample report data with detailed information
const detailedReports = {
  "1": {
    id: 1,
    website: "malawibank.mw",
    bugType: "SQL Injection",
    reportedDate: "January 15, 2025",
    status: "resolved" as const,
    submittedBy: "Anonymous",
    description:
      "Critical SQL injection vulnerability found in login form allowing unauthorized database access and potential data breach. The vulnerability exists in the authentication endpoint where user input is not properly sanitized before being passed to the database query.",
    stepsToReproduce: [
      "Navigate to https://malawibank.mw/login",
      "Enter ' OR 1=1 -- in the username field",
      "Enter any value in the password field",
      "Click the 'Login' button",
      "Observe that authentication is bypassed and access is granted",
    ],
    screenshot: "screenshot-malawibank-sqli.png",
    impact:
      "High - Allows complete bypass of authentication mechanism, potentially exposing all customer data and banking information.",
    recommendation:
      "Implement parameterized queries and input validation. Use prepared statements to prevent SQL injection attacks.",
  },
  "2": {
    id: 2,
    website: "tnm.co.mw",
    bugType: "Cross-Site Scripting (XSS)",
    reportedDate: "January 12, 2025",
    status: "in-review" as const,
    submittedBy: "John Banda",
    description:
      "Stored XSS vulnerability in customer portal comments section could allow malicious script execution. User input in the feedback form is not properly sanitized and is reflected back to other users without encoding.",
    stepsToReproduce: [
      "Log into the TNM customer portal at tnm.co.mw/portal",
      "Navigate to the 'Feedback' or 'Comments' section",
      "Submit a comment containing: <script>alert('XSS')</script>",
      "View the comments page as another user",
      "Observe that the JavaScript executes in the browser",
    ],
    screenshot: "screenshot-tnm-xss.png",
    impact:
      "Medium - Could be used to steal session cookies, redirect users to malicious sites, or perform actions on behalf of other users.",
    recommendation:
      "Implement proper input validation and output encoding. Use Content Security Policy (CSP) headers to prevent script execution.",
  },
  "3": {
    id: 3,
    website: "airtel.mw",
    bugType: "Broken Authentication",
    reportedDate: "January 10, 2025",
    status: "open" as const,
    submittedBy: "Anonymous",
    description:
      "Weak session management allows session hijacking and unauthorized account access through predictable tokens. Session IDs are generated using a weak algorithm that can be easily predicted or brute-forced.",
    stepsToReproduce: [
      "Log into an Airtel account at airtel.mw/login",
      "Capture the session token from browser cookies or network traffic",
      "Analyze the pattern of session token generation",
      "Generate a valid session token for another user",
      "Use the predicted token to access another user's account",
    ],
    screenshot: "screenshot-airtel-session.png",
    impact:
      "High - Allows attackers to hijack user sessions and gain unauthorized access to customer accounts and personal information.",
    recommendation:
      "Implement cryptographically secure session token generation. Use proper session timeout and regenerate tokens after authentication.",
  },
  "4": {
    id: 4,
    website: "unima.ac.mw",
    bugType: "Insecure Direct Object Reference",
    reportedDate: "January 8, 2025",
    status: "resolved" as const,
    submittedBy: "Mary Phiri",
    description:
      "Student records accessible by manipulating URL parameters, exposing sensitive academic and personal information. The application does not properly verify user authorization before displaying student data.",
    stepsToReproduce: [
      "Log into the UNIMA student portal",
      "Navigate to your student profile page",
      "Note the URL contains a student ID parameter (e.g., /student/profile?id=12345)",
      "Modify the ID parameter to another student's ID",
      "Observe that other students' records are accessible without authorization",
    ],
    screenshot: "screenshot-unima-idor.png",
    impact: "Medium - Exposes sensitive student information including grades, personal details, and academic records.",
    recommendation:
      "Implement proper access controls and verify user authorization before displaying sensitive data. Use indirect object references.",
  },
  "5": {
    id: 5,
    website: "malawi.gov.mw",
    bugType: "Cross-Site Request Forgery",
    reportedDate: "January 5, 2025",
    status: "in-review" as const,
    submittedBy: "Anonymous",
    description:
      "CSRF vulnerability in admin panel allows unauthorized actions to be performed on behalf of authenticated users. The application does not validate the origin of requests, allowing malicious sites to perform actions.",
    stepsToReproduce: [
      "Log into the government portal admin panel",
      "Create a malicious HTML page with a form that submits to the admin endpoint",
      "Host the malicious page on an external site",
      "Trick an authenticated admin into visiting the malicious page",
      "Observe that administrative actions are performed without the admin's knowledge",
    ],
    screenshot: "screenshot-gov-csrf.png",
    impact:
      "High - Could allow attackers to perform administrative actions, modify government data, or compromise system integrity.",
    recommendation:
      "Implement CSRF tokens for all state-changing operations. Validate the Referer header and use SameSite cookie attributes.",
  },
  "6": {
    id: 6,
    website: "standardbank.co.mw",
    bugType: "File Upload Vulnerability",
    reportedDate: "January 3, 2025",
    status: "open" as const,
    submittedBy: "Peter Mwale",
    description:
      "Unrestricted file upload in document submission form could allow malicious file execution on server. The application does not properly validate file types or scan for malicious content.",
    stepsToReproduce: [
      "Navigate to the document upload section of Standard Bank's portal",
      "Create a malicious PHP file (e.g., shell.php) with web shell code",
      "Upload the malicious file through the document submission form",
      "Access the uploaded file directly via URL",
      "Execute commands on the server through the web shell",
    ],
    screenshot: "screenshot-standardbank-upload.png",
    impact:
      "Critical - Could lead to complete server compromise, data theft, and unauthorized access to banking systems.",
    recommendation:
      "Implement strict file type validation, scan uploads for malware, and store files outside the web root with proper access controls.",
  },
  "7": {
    id: 7,
    website: "mzuni.ac.mw",
    bugType: "Information Disclosure",
    reportedDate: "December 28, 2024",
    status: "resolved" as const,
    submittedBy: "Anonymous",
    description:
      "Sensitive configuration files and database credentials exposed through misconfigured web server directory listing. The web server allows browsing of directories containing sensitive information.",
    stepsToReproduce: [
      "Navigate to mzuni.ac.mw/config/ or similar directory paths",
      "Observe that directory listing is enabled",
      "Browse configuration files containing database credentials",
      "Download sensitive files like config.php or database.conf",
      "Extract database connection strings and other sensitive configuration data",
    ],
    screenshot: "screenshot-mzuni-disclosure.png",
    impact:
      "High - Exposes database credentials, API keys, and other sensitive configuration data that could lead to further compromise.",
    recommendation:
      "Disable directory listing, move sensitive files outside web root, and implement proper access controls on configuration files.",
  },
  "8": {
    id: 8,
    website: "nbm.mw",
    bugType: "Broken Access Control",
    reportedDate: "December 25, 2024",
    status: "in-review" as const,
    submittedBy: "Grace Tembo",
    description:
      "Privilege escalation vulnerability allows regular users to access administrative functions and sensitive data. The application does not properly enforce role-based access controls.",
    stepsToReproduce: [
      "Create a regular user account on NBM's portal",
      "Log in with the regular user credentials",
      "Manually navigate to admin URLs (e.g., /admin/users, /admin/reports)",
      "Observe that administrative functions are accessible",
      "Perform administrative actions like viewing all user data or modifying system settings",
    ],
    screenshot: "screenshot-nbm-privilege.png",
    impact:
      "High - Allows unauthorized access to sensitive banking data and administrative functions, potentially compromising customer information.",
    recommendation:
      "Implement proper role-based access control (RBAC) and verify user permissions for each protected resource.",
  },
  "9": {
    id: 9,
    website: "escom.mw",
    bugType: "Security Misconfiguration",
    reportedDate: "December 22, 2024",
    status: "open" as const,
    submittedBy: "Anonymous",
    description:
      "Default credentials and exposed admin interfaces create multiple attack vectors for unauthorized system access. The application uses default passwords and exposes administrative interfaces to the public internet.",
    stepsToReproduce: [
      "Navigate to escom.mw/admin or common admin paths",
      "Attempt login with default credentials (admin/admin, admin/password, etc.)",
      "Access administrative interface with default credentials",
      "Explore system configuration and user management functions",
      "Identify additional security misconfigurations and exposed services",
    ],
    screenshot: "screenshot-escom-config.png",
    impact:
      "Critical - Provides immediate administrative access to utility systems, potentially affecting power grid operations and customer data.",
    recommendation:
      "Change all default credentials, restrict admin interface access to authorized networks, and implement proper authentication mechanisms.",
  },
}

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

export default function ReportDetailPage() {
  const params = useParams()
  const reportId = params.id as string
  const report = detailedReports[reportId as keyof typeof detailedReports]

  if (!report) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono">
        <Navbar />
        <div className="container px-4 md:px-6 mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Report Not Found</h1>
          <p className="text-gray-600 mb-8">The requested report could not be found.</p>
          <Button
            asChild
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl bg-transparent"
          >
            <Link href="/reports">Back to Reports</Link>
          </Button>
        </div>
      </div>
    )
  }

  const status = statusConfig[report.status]

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
              Bug Report <span className="text-[#1ED3B6] animate-glow">Details</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animation-delay-200">
              Submitted by a verified ethical hacker
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 mx-auto py-8">
        {/* Back Button */}
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

        {/* Report Metadata */}
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

        {/* Report Content */}
        <div className="space-y-8">
          {/* Description */}
          <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg animate-slide-in-up animation-delay-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Bug Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{report.description}</p>
            </CardContent>
          </Card>

          {/* Steps to Reproduce */}
          <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg animate-slide-in-up animation-delay-400">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Steps to Reproduce</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {report.stepsToReproduce.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1ED3B6] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Screenshot */}
          <Card className="rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center bg-gray-50 animate-slide-in-up animation-delay-500">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Proof of Concept</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">{report.screenshot}</p>
                <p className="text-sm text-gray-500 mt-2">Screenshot not shown publicly for security reasons</p>
              </div>
            </CardContent>
          </Card>

          {/* Impact and Recommendation */}
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

          {/* Disclosure Notice */}
          <Card className="rounded-2xl border-2 border-[#007BFF]/20 bg-[#007BFF]/5 shadow-lg animate-slide-in-up animation-delay-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-[#007BFF] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#007BFF] mb-2">Responsible Disclosure Notice</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This report was submitted in accordance with CyberTip Malawi's responsible disclosure policy. The
                    vulnerability details are shared to help improve security awareness and encourage proper
                    remediation. Please do not attempt to exploit these vulnerabilities on live systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
