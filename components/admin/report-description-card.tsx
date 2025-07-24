"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollText } from "lucide-react"

interface ReportDescriptionCardProps {
  description: string
}

export function ReportDescriptionCard({ description }: ReportDescriptionCardProps) {
  return (
    <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex items-center space-x-2 pb-2">
        <ScrollText className="w-4 h-4 text-[#1ED3B6]" />
        <CardTitle className="text-base font-bold text-[#1A1A1A]">Report Description</CardTitle>
      </CardHeader>

      {/* Scrollable / typography-enhanced content */}
      <CardContent className="max-h-64 overflow-y-auto">
        <article
          className="
            prose prose-sm max-w-none text-gray-700
            whitespace-pre-wrap leading-relaxed
          "
        >
          {description}
        </article>
      </CardContent>
    </Card>
  )
}
