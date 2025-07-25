"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Report } from "@/hooks/use-reports"

interface DashboardStatsProps {
  reports: Report[];
}

export function DashboardStats({ reports }: DashboardStatsProps) {
  const total = reports.length;
  const open = reports.filter((r) => r.status === "open").length;
  const inReview = reports.filter((r) => r.status === "in-review").length;
  const resolved = reports.filter((r) => r.status === "resolved").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard label="Total Reports" value={total} color="text-[#1A1A1A]" />
      <StatCard label="Open Reports" value={open} color="text-red-600" />
      <StatCard label="In Review" value={inReview} color="text-yellow-600" />
      <StatCard label="Resolved" value={resolved} color="text-green-600" />
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <Card className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl hover:scale-[1.015] transition-all duration-300 min-h-[120px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500 tracking-wide">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={`text-3xl font-bold tracking-tight ${color ?? "text-[#1A1A1A]"}`}
        >
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
