"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Eye,
  Key,
  MousePointer,
  Smartphone,
  Users,
  Wifi,
  Shield,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Heart,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useParams } from "next/navigation"
import { Footer } from "@/components/footer"

// Detailed content for each cybersecurity tip
const tipDetails = {
  "spotting-phishing-scams": {
    icon: Eye,
    title: "Spotting Phishing Scams",
    summary: "Learn to identify fake emails, messages, and websites that try to steal your personal information.",
    color: "bg-red-100 text-red-600",
    readTime: "8 min read",
    difficulty: "Beginner",
    content: {
      introduction:
        "Phishing scams are one of the most common cyber threats in Malawi. Scammers create fake emails, SMS messages, and websites that look legitimate to steal your personal information, passwords, or money.",

      warningSigns: [
        {
          title: "Urgent Language",
          description: "Messages claiming your account will be closed immediately or demanding urgent action.",
          example: '"Your TNM account will be suspended in 24 hours unless you verify your details now!"',
        },
        {
          title: "Generic Greetings",
          description: "Emails that start with 'Dear Customer' instead of your actual name.",
          example: '"Dear Valued Customer" instead of "Dear John Banda"',
        },
        {
          title: "Suspicious Links",
          description: "URLs that don't match the official website or contain misspellings.",
          example: '"standardbank-malawi.com" instead of "standardbank.co.mw"',
        },
        {
          title: "Requests for Sensitive Information",
          description: "Legitimate companies never ask for passwords or PINs via email or SMS.",
          example: '"Please reply with your ATM PIN to verify your identity"',
        },
      ],

      commonScams: [
        {
          type: "Bank Impersonation",
          description:
            "Fake emails claiming to be from Standard Bank, NBS Bank, or other Malawian banks asking you to verify account details.",
          action: "Always log into your bank account directly through their official website or app.",
        },
        {
          type: "Mobile Money Fraud",
          description: "SMS messages claiming to be from TNM Mpamba or Airtel Money asking for PIN verification.",
          action: "Mobile money providers never ask for your PIN via SMS. Contact them directly if unsure.",
        },
        {
          type: "Government Impersonation",
          description:
            "Emails claiming to be from MRA (Malawi Revenue Authority) or other government agencies demanding immediate payment.",
          action: "Government agencies communicate through official channels, not random emails.",
        },
      ],

      protectionSteps: [
        "Always verify the sender's email address carefully",
        "Hover over links to see the actual destination before clicking",
        "Type website URLs directly into your browser instead of clicking links",
        "Enable two-factor authentication on all important accounts",
        "Keep your devices and browsers updated with security patches",
        "Report suspicious messages to the relevant authorities",
      ],
    },
  },

  "password-hygiene": {
    icon: Key,
    title: "Password Hygiene",
    summary: "Create strong, unique passwords and use secure methods to manage them across all your accounts.",
    color: "bg-[#1ED3B6]/10 text-[#1ED3B6]",
    readTime: "10 min read",
    difficulty: "Beginner",
    content: {
      introduction:
        "Strong passwords are your first line of defense against cyber attacks. In Malawi, many people use simple passwords that are easy to guess, putting their accounts at risk.",

      passwordRules: [
        {
          rule: "Length Matters",
          description: "Use at least 12 characters - longer passwords are exponentially harder to crack.",
          example: "Instead of 'malawi123', use 'MyFavoritePlace2024Lilongwe!'",
        },
        {
          rule: "Mix Character Types",
          description: "Combine uppercase, lowercase, numbers, and special characters.",
          example: "Bl@ntyre2024$unSet",
        },
        {
          rule: "Avoid Personal Information",
          description: "Don't use your name, birthday, phone number, or other personal details.",
          example: "Avoid: 'JohnBanda1990' or 'Lilongwe265'",
        },
        {
          rule: "Unique for Each Account",
          description: "Never reuse passwords across different accounts or services.",
          example: "Different passwords for email, banking, social media, etc.",
        },
      ],

      commonMistakes: [
        "Using 'password123' or similar common passwords",
        "Using the same password for multiple accounts",
        "Writing passwords on sticky notes or in plain text files",
        "Sharing passwords with friends or family members",
        "Using only lowercase letters or only numbers",
      ],

      passwordManager: {
        benefits: [
          "Generate strong, unique passwords automatically",
          "Store passwords securely with encryption",
          "Auto-fill login forms to save time",
          "Sync passwords across all your devices",
          "Alert you to compromised or weak passwords",
        ],
        recommendations: [
          "Bitwarden (free and open-source)",
          "1Password (premium features)",
          "LastPass (freemium model)",
          "Built-in browser password managers (basic protection)",
        ],
      },

      twoFactorAuth: [
        "Enable 2FA on all important accounts (email, banking, social media)",
        "Use authenticator apps like Google Authenticator or Authy",
        "Keep backup codes in a safe place",
        "Avoid SMS-based 2FA when possible (SIM swapping risks)",
      ],
    },
  },

  "safe-browsing-habits": {
    icon: MousePointer,
    title: "Safe Browsing Habits",
    summary: "Navigate the web securely by avoiding malicious websites and suspicious downloads.",
    color: "bg-[#007BFF]/10 text-[#007BFF]",
    readTime: "7 min read",
    difficulty: "Beginner",
    content: {
      introduction:
        "Safe browsing protects you from malware, phishing sites, and other online threats. With increasing internet usage in Malawi, it's crucial to develop good browsing habits.",

      safeBrowsingTips: [
        {
          tip: "Check Website URLs",
          description: "Always verify you're on the correct website, especially for banking or shopping.",
          example: "Look for 'https://' and the padlock icon in your browser's address bar",
        },
        {
          tip: "Avoid Suspicious Downloads",
          description: "Only download software from official sources and trusted websites.",
          example: "Download apps from Google Play Store or Apple App Store, not random websites",
        },
        {
          tip: "Be Cautious with Pop-ups",
          description: "Close unexpected pop-ups and never click on suspicious advertisements.",
          example: '"You\'ve won $1000!" or "Your computer is infected!" pop-ups are usually scams',
        },
        {
          tip: "Use Updated Browsers",
          description: "Keep your web browser updated to get the latest security features.",
          example: "Enable automatic updates for Chrome, Firefox, Safari, or Edge",
        },
      ],

      redFlags: [
        "Websites asking for unnecessary personal information",
        "Too-good-to-be-true offers or prizes",
        "Websites with lots of spelling errors or poor design",
        "Requests to disable your antivirus or security software",
        "Urgent warnings about computer infections",
        "Websites that automatically start downloads",
      ],

      browserSecurity: [
        {
          setting: "Enable Safe Browsing",
          description: "Turn on your browser's built-in protection against malicious sites.",
          location: "Usually found in Privacy & Security settings",
        },
        {
          setting: "Block Pop-ups",
          description: "Prevent most unwanted pop-up windows and advertisements.",
          location: "Available in all major browsers' settings",
        },
        {
          setting: "Clear Browsing Data",
          description: "Regularly clear cookies, cache, and browsing history.",
          location: "Recommended weekly or monthly",
        },
        {
          setting: "Use Private/Incognito Mode",
          description: "Browse without saving history on shared or public computers.",
          location: "Ctrl+Shift+N (Chrome) or Ctrl+Shift+P (Firefox)",
        },
      ],

      publicWifiTips: [
        "Avoid accessing sensitive accounts on public Wi-Fi",
        "Use a VPN when connecting to public networks",
        "Turn off automatic Wi-Fi connection",
        "Verify the network name with staff before connecting",
        "Log out of accounts when finished browsing",
      ],
    },
  },

  "mobile-security": {
    icon: Smartphone,
    title: "Mobile Security",
    summary: "Protect your smartphone with proper app permissions, updates, and security settings.",
    color: "bg-purple-100 text-purple-600",
    readTime: "9 min read",
    difficulty: "Intermediate",
    content: {
      introduction:
        "Mobile phones are increasingly targeted by cybercriminals. In Malawi, where mobile money and banking apps are widely used, securing your smartphone is essential.",

      basicSecurity: [
        {
          measure: "Screen Lock",
          description: "Use a strong PIN, password, pattern, or biometric lock.",
          tip: "Avoid simple patterns like 'L' shapes or obvious PINs like '1234'",
        },
        {
          measure: "Automatic Updates",
          description: "Enable automatic security updates for your operating system.",
          tip: "Updates often contain critical security patches",
        },
        {
          measure: "App Source Verification",
          description: "Only install apps from official app stores (Google Play, Apple App Store).",
          tip: "Avoid 'sideloading' apps from unknown sources",
        },
        {
          measure: "Regular Backups",
          description: "Back up your important data regularly to cloud storage or computer.",
          tip: "This protects you if your phone is lost, stolen, or compromised",
        },
      ],

      appPermissions: [
        {
          permission: "Camera Access",
          guidance: "Only allow for apps that genuinely need camera functionality (camera apps, video calls).",
          warning: "Be suspicious of flashlight apps requesting camera access.",
        },
        {
          permission: "Microphone Access",
          guidance: "Required for calls, voice messages, and voice assistants.",
          warning: "Review which apps have microphone access regularly.",
        },
        {
          permission: "Location Services",
          guidance: "Useful for maps and weather apps, but not necessary for most others.",
          warning: "Turn off location for apps that don't need it to preserve privacy and battery.",
        },
        {
          permission: "Contacts Access",
          guidance: "Only allow for messaging apps and legitimate business applications.",
          warning: "Many apps request contacts unnecessarily for marketing purposes.",
        },
      ],

      mobileMoneyTips: [
        "Never share your mobile money PIN with anyone",
        "Always verify the recipient's number before sending money",
        "Use official mobile money apps, not third-party alternatives",
        "Set up transaction notifications to monitor your account",
        "Report suspicious transactions immediately",
        "Keep your mobile money account balance reasonable, not your entire savings",
      ],

      publicChargingStations: [
        "Use your own charging cable and power adapter when possible",
        "Avoid using public USB ports for charging",
        "Use 'charge-only' cables that don't transfer data",
        "Consider carrying a portable power bank",
        "If you must use public charging, don't unlock your phone while connected",
      ],
    },
  },

  "social-media-privacy": {
    icon: Users,
    title: "Social Media Privacy",
    summary: "Secure your social media accounts with privacy settings and safe sharing practices.",
    color: "bg-orange-100 text-orange-600",
    readTime: "8 min read",
    difficulty: "Beginner",
    content: {
      introduction:
        "Social media platforms like Facebook, WhatsApp, and Instagram are widely used in Malawi. Proper privacy settings protect your personal information from strangers and potential scammers.",

      privacySettings: [
        {
          platform: "Facebook",
          settings: [
            "Set profile to 'Friends Only' instead of public",
            "Review who can send you friend requests",
            "Limit who can see your posts and photos",
            "Turn off location tracking in posts",
            "Review tagged photos before they appear on your profile",
          ],
        },
        {
          platform: "WhatsApp",
          settings: [
            "Set 'Last Seen' to 'My Contacts' or 'Nobody'",
            "Hide your profile photo from strangers",
            "Turn off read receipts if desired",
            "Disable automatic photo/video downloads",
            "Use two-step verification",
          ],
        },
        {
          platform: "Instagram",
          settings: [
            "Switch to a private account",
            "Review follower requests carefully",
            "Turn off location services for posts",
            "Limit who can comment on your posts",
            "Hide your activity status",
          ],
        },
      ],

      safeSharingPractices: [
        "Think before you post - information online can be permanent",
        "Avoid sharing your exact location in real-time",
        "Don't post photos of important documents (IDs, tickets, etc.)",
        "Be cautious about sharing personal milestones that could be used for identity theft",
        "Avoid posting when you're away from home (vacation posts)",
        "Review your posts from a stranger's perspective",
      ],

      friendRequestGuidelines: [
        "Only accept requests from people you know personally",
        "Be suspicious of profiles with very few photos or friends",
        "Check if mutual friends actually know the person",
        "Look for profiles that seem too good to be true",
        "Don't accept requests from people claiming to be celebrities or officials",
        "Report and block suspicious accounts",
      ],

      scamAwareness: [
        {
          scam: "Romance Scams",
          description: "Fake profiles that build emotional relationships to ask for money.",
          prevention: "Never send money to someone you've only met online.",
        },
        {
          scam: "Fake Giveaways",
          description: "Posts claiming you've won prizes but asking for personal information.",
          prevention: "Legitimate companies don't ask for passwords or bank details for prizes.",
        },
        {
          scam: "Impersonation",
          description: "Fake accounts pretending to be friends or family members asking for help.",
          prevention: "Verify through another communication method before sending money or information.",
        },
      ],
    },
  },

  "wifi-security": {
    icon: Wifi,
    title: "Wi-Fi Security",
    summary: "Use public Wi-Fi safely and secure your home network from unauthorized access.",
    color: "bg-green-100 text-green-600",
    readTime: "10 min read",
    difficulty: "Intermediate",
    content: {
      introduction:
        "Wi-Fi security is crucial as more Malawians access the internet through wireless networks. Unsecured networks can expose your personal data to cybercriminals.",

      homeNetworkSecurity: [
        {
          step: "Change Default Passwords",
          description: "Replace the default router password with a strong, unique password.",
          importance: "Default passwords are easily found online and commonly exploited.",
        },
        {
          step: "Use WPA3 Encryption",
          description: "Enable the strongest available encryption (WPA3, or WPA2 if WPA3 isn't available).",
          importance: "Encryption protects data transmitted over your network.",
        },
        {
          step: "Update Router Firmware",
          description: "Regularly update your router's firmware to patch security vulnerabilities.",
          importance: "Outdated firmware often contains known security flaws.",
        },
        {
          step: "Hide Network Name (SSID)",
          description: "Consider hiding your network name to make it less visible to casual attackers.",
          importance: "Reduces the likelihood of opportunistic attacks.",
        },
        {
          step: "Enable Guest Network",
          description: "Set up a separate guest network for visitors.",
          importance: "Keeps your main network secure while allowing guest access.",
        },
      ],

      publicWifiRisks: [
        "Data interception by cybercriminals",
        "Fake Wi-Fi hotspots designed to steal information",
        "Malware distribution through compromised networks",
        "Man-in-the-middle attacks",
        "Unauthorized access to your device",
        "Identity theft through captured login credentials",
      ],

      publicWifiSafety: [
        {
          tip: "Verify Network Names",
          description: "Confirm the correct Wi-Fi network name with staff before connecting.",
          example: "Ask hotel reception for the exact network name and password.",
        },
        {
          tip: "Use HTTPS Websites",
          description: "Only visit websites that use HTTPS encryption (look for the padlock icon).",
          example: "https://standardbank.co.mw instead of http://standardbank.co.mw",
        },
        {
          tip: "Avoid Sensitive Activities",
          description: "Don't access banking, shopping, or other sensitive accounts on public Wi-Fi.",
          example: "Wait until you're on a secure network to check your bank balance.",
        },
        {
          tip: "Use a VPN",
          description: "A Virtual Private Network encrypts your internet connection.",
          example: "Popular VPNs include NordVPN, ExpressVPN, or free options like ProtonVPN.",
        },
        {
          tip: "Turn Off Auto-Connect",
          description: "Disable automatic Wi-Fi connection to prevent connecting to malicious networks.",
          example: "Manually select networks instead of automatically connecting.",
        },
      ],

      vpnBenefits: [
        "Encrypts all your internet traffic",
        "Hides your real IP address and location",
        "Protects against man-in-the-middle attacks",
        "Allows secure access to geo-restricted content",
        "Provides anonymity while browsing",
      ],

      routerMaintenanceTips: [
        "Restart your router monthly to clear temporary issues",
        "Check for firmware updates quarterly",
        "Monitor connected devices for unauthorized access",
        "Change Wi-Fi passwords annually or if compromised",
        "Position router centrally and away from windows",
        "Use strong admin passwords different from Wi-Fi passwords",
      ],
    },
  },
}

export default function TipDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const tip = tipDetails[slug as keyof typeof tipDetails]

  if (!tip) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono">
        <Navbar />
        <div className="container px-4 md:px-6 mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
          <p className="text-gray-600 mb-8">The requested cybersecurity resource could not be found.</p>
          <Button
            asChild
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl bg-transparent"
          >
            <Link href="/resources">Back to Resources</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Get all tip slugs for navigation
  const tipSlugs = Object.keys(tipDetails)
  const currentIndex = tipSlugs.indexOf(slug)
  const prevTip = currentIndex > 0 ? tipSlugs[currentIndex - 1] : null
  const nextTip = currentIndex < tipSlugs.length - 1 ? tipSlugs[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 overflow-hidden">
        {/* Background Pattern */}
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

        {/* Icon Watermark */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <tip.icon className="w-96 h-96 text-[#1ED3B6]/5 animate-pulse-slow" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8 animate-fade-in-up">
              <Button
                asChild
                variant="ghost"
                className="border border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10 rounded-xl"
              >
                <Link href="/resources" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Resources
                </Link>
              </Button>
            </div>

            {/* Title Section */}
            <div className="text-center space-y-6 animate-slide-in-up">
              <div className="flex justify-center">
                <div
                  className={`w-20 h-20 ${tip.color} rounded-2xl flex items-center justify-center animate-success-bounce`}
                >
                  <tip.icon className="w-10 h-10" />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold animate-slide-in-left">{tip.title}</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animation-delay-200">
                  {tip.summary}
                </p>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
                <Badge className="bg-[#1ED3B6]/10 text-[#1ED3B6] border-0 px-4 py-2">📖 {tip.readTime}</Badge>
                <Badge className="bg-[#007BFF]/10 text-[#007BFF] border-0 px-4 py-2">🎯 {tip.difficulty}</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container px-4 md:px-6 mx-auto py-8 max-w-4xl">
        {/* Introduction */}
        <ScrollAnimation>
          <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">{tip.content.introduction}</p>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Dynamic Content Based on Tip Type */}
        {slug === "spotting-phishing-scams" && (
          <>
            {/* Warning Signs */}
            <ScrollAnimation>
              <Card className="rounded-2xl border-2 border-red-100 bg-red-50/50 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-red-800 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6" />
                    Warning Signs to Watch For
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {tip.content.warningSigns?.map((sign, index) => (
                    <div key={index} className="border-l-4 border-red-400 pl-6">
                      <h3 className="font-bold text-red-800 mb-2">{sign.title}</h3>
                      <p className="text-gray-700 mb-2">{sign.description}</p>
                      <div className="bg-red-100 p-3 rounded-lg">
                        <p className="text-sm text-red-700 italic">Example: {sign.example}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Common Scams */}
            <ScrollAnimation>
              <Card className="rounded-2xl border-2 border-orange-100 bg-orange-50/50 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-800 flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    Common Scams in Malawi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {tip.content.commonScams?.map((scam, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-orange-200">
                      <h3 className="font-bold text-orange-800 mb-2">{scam.type}</h3>
                      <p className="text-gray-700 mb-3">{scam.description}</p>
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <p className="text-sm text-orange-700 font-medium">✅ What to do: {scam.action}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollAnimation>
          </>
        )}

        {slug === "password-hygiene" && (
          <>
            {/* Password Rules */}
            <ScrollAnimation>
              <Card className="rounded-2xl border-2 border-[#1ED3B6]/20 bg-[#1ED3B6]/5 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#1ED3B6] flex items-center gap-3">
                    <Key className="w-6 h-6" />
                    Essential Password Rules
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {tip.content.passwordRules?.map((rule, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-[#1ED3B6]/20">
                      <h3 className="font-bold text-[#1ED3B6] mb-2">{rule.rule}</h3>
                      <p className="text-gray-700 mb-3">{rule.description}</p>
                      <div className="bg-[#1ED3B6]/10 p-3 rounded-lg">
                        <p className="text-sm text-[#1ED3B6] font-medium">💡 Example: {rule.example}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Password Manager */}
            <ScrollAnimation>
              <Card className="rounded-2xl border-2 border-blue-100 bg-blue-50/50 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-3">
                    <Lock className="w-6 h-6" />
                    Password Managers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-blue-800 mb-3">Benefits:</h3>
                    <ul className="space-y-2">
                      {tip.content.passwordManager?.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-3">Recommended Options:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tip.content.passwordManager?.recommendations.map((rec, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="text-gray-700">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </>
        )}

        {/* Add similar sections for other tips... */}

        {/* Protection Steps (Common to all tips) */}
        <ScrollAnimation>
          <Card className="rounded-2xl border-2 border-[#1ED3B6]/20 bg-[#1ED3B6]/5 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#1ED3B6] flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                {slug === "spotting-phishing-scams"
                  ? "Protection Steps"
                  : slug === "password-hygiene"
                    ? "Two-Factor Authentication"
                    : slug === "safe-browsing-habits"
                      ? "Browser Security Settings"
                      : slug === "mobile-security"
                        ? "Essential Security Measures"
                        : slug === "social-media-privacy"
                          ? "Privacy Settings"
                          : "Home Network Security"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {(slug === "spotting-phishing-scams"
                  ? tip.content.protectionSteps
                  : slug === "password-hygiene"
                    ? tip.content.twoFactorAuth
                    : slug === "safe-browsing-habits"
                      ? tip.content.publicWifiTips
                      : slug === "mobile-security"
                        ? tip.content.mobileMoneyTips
                        : slug === "social-media-privacy"
                          ? tip.content.safeSharingPractices
                          : tip.content.vpnBenefits || []
                )?.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1ED3B6] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Navigation Between Tips */}
        <ScrollAnimation>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8">
            {prevTip ? (
              <Button
                asChild
                variant="outline"
                className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl bg-transparent group"
              >
                <Link href={`/resources/${prevTip}`} className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  Previous Tip
                </Link>
              </Button>
            ) : (
              <div />
            )}

            {nextTip ? (
              <Button asChild className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl group">
                <Link href={`/resources/${nextTip}`} className="flex items-center gap-2">
                  Next Tip
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            ) : null}
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation>
          <Card className="rounded-2xl border-2 border-[#007BFF]/20 bg-[#007BFF]/5 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-[#007BFF]/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-[#007BFF]" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#007BFF]">Stay Vigilant, Stay Safe</h2>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    If you encounter any security threats or suspicious activity while applying these tips, don't
                    hesitate to report them to help protect the Malawian digital community.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white rounded-xl group">
                    <Link href="/report" className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 group-hover:animate-pulse" />
                      Report a Threat
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl bg-transparent"
                  >
                    <Link href="/resources">More Security Tips</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
