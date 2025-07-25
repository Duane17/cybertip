"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StatusBadge } from "@/components/admin/status-badge"
import type { Report } from "@/hooks/use-reports"

interface ReportDetailCardProps {
  report: Report
}

export function ReportDetailCard({ report }: ReportDetailCardProps) {
  return (
    <Card
      className="
        relative group rounded-2xl border border-gray-200 bg-white
        shadow-sm hover:shadow-xl transition-all duration-300
        hover:-translate-y-0.5
        min-h-[280px] flex flex-col
      "
    >
      {/* Gradient accent bar */}
      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#1ED3B6] to-[#007BFF] opacity-70" />

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-bold text-[#1A1A1A] leading-tight">
            {report.website}
          </CardTitle>
          <StatusBadge status={report.status} />
        </div>
        <p className="text-[11px] text-gray-500 mt-1">{report.reportedDate}</p>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 flex-1">
        {/* Bug type chip */}
        <Badge
          variant="secondary"
          className="w-fit bg-[#F9FAFB] text-gray-700 border border-gray-200 text-[11px] font-medium rounded-md"
        >
          {report.bugType}
        </Badge>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {report.description}
        </p>

        {/* Footer link */}
        <div className="mt-auto flex justify-end">
          <Link
            href={`/admin/reports/${report.id}`}
            className="
              flex items-center space-x-1 text-xs font-medium text-[#1ED3B6]
              transition-colors group-hover:text-[#007BFF]
            "
          >
            <span>View / Edit</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
