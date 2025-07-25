// components/admin/report-meta-card.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Bug, Calendar } from "lucide-react"
import { Report } from "@/hooks/use-reports";

interface ReportMetaCardProps {
  report: Report
}

export function ReportMetaCard({ report }: ReportMetaCardProps) {
  const { website, bugType, reportedDate } = report
  return (
    <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-base font-bold text-[#1A1A1A]">Report Metadata</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-gray-700">
        <div className="flex items-center space-x-3">
          <Globe className="w-4 h-4 text-[#1ED3B6]" />
          <span className="font-medium text-gray-600">Website:</span>
          <span className="text-[#1A1A1A] truncate">{website}</span>
        </div>

        <div className="flex items-center space-x-3">
          <Bug className="w-4 h-4 text-[#1ED3B6]" />
          <span className="font-medium text-gray-600">Bug Type:</span>
          <span className="text-[#1A1A1A]">{bugType}</span>
        </div>

        <div className="flex items-center space-x-3">
          <Calendar className="w-4 h-4 text-[#1ED3B6]" />
          <span className="font-medium text-gray-600">Reported:</span>
          <span className="text-[#1A1A1A]">{reportedDate}</span>
        </div>
      </CardContent>
    </Card>
  )
}
