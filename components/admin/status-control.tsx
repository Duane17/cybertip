"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { BadgeCheck } from "lucide-react"
import { StatusBadge } from "@/components/admin/status-badge"

type Status = "open" | "in-review" | "resolved"

interface StatusControlCardProps {
  initialStatus: Status
  onStatusChange?: (status: Status) => void
}

export function StatusControlCard({ initialStatus, onStatusChange }: StatusControlCardProps) {
  const [status, setStatus] = useState<Status>(initialStatus)

  const handleChange = (value: string) => {
    const newStatus = value as Status
    setStatus(newStatus)
    onStatusChange?.(newStatus)
  }

  return (
    <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex items-center space-x-2">
        <BadgeCheck className="w-4 h-4 text-[#1ED3B6]" />
        <CardTitle className="text-base font-bold text-[#1A1A1A]">Manage Status</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Current status tag */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Current:</span>
          <StatusBadge status={status} />
        </div>

        {/* Status select control */}
        <Select value={status} onValueChange={handleChange}>
          <SelectTrigger className="w-full rounded-xl border-gray-300 text-sm focus:ring-0 focus:border-[#1ED3B6]">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-review">In Review</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}
