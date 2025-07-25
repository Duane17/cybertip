"use client"

import { AdminLayout } from "@/components/admin/layout/admin-layout"
import { DashboardStats } from "@/components/admin/dashboard-stats"
import { ReportDetailCard } from "@/components/admin/report-detail-card"
import { useReports } from "@/hooks/use-reports"
import { LoadingScreen } from "@/components/admin/layout/loading-screen"

export default function AdminDashboardPage() {
  const { data: reports = [], isLoading } = useReports()

  const openReports = reports.filter(r => r.status === "open")

  return (
    <AdminLayout>
      <div className="p-6 space-y-10">
        {/* Title */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Dashboard</h1>
          <p className="text-gray-600 text-sm">Welcome to the CyberTip Admin Panel.</p>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="h-[300px] flex items-center justify-center">
            <LoadingScreen message="Loading reports..." />
          </div>
        ) : (
          <>
            {/* Stats */}
            <DashboardStats reports={reports} />

            {/* Open Issues */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-[#1A1A1A]">Open Issues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {openReports.length > 0 ? (
                  openReports.map((report) => (
                    <ReportDetailCard key={report.id} report={report} />
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No open reports found.</p>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </AdminLayout>
  )
}
