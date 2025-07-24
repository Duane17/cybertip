import { AdminLayout } from "@/components/admin/layout/admin-layout"
import { DashboardStats } from "@/components/admin/dashboard-stats"
import { ReportDetailCard } from "@/components/admin/report-detail-card"
import { sampleReports } from "@/app/data/reports"

export default function AdminDashboardPage() {
  const openReports = sampleReports.filter(r => r.status === "open").slice(0, 3) // show first 3 open

  return (
    <AdminLayout>
      <div className="p-6 space-y-10">
        {/* Title */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Dashboard</h1>
          <p className="text-gray-600 text-sm">Welcome to the CyberTip Admin Panel.</p>
        </div>

        {/* Stats */}
        <DashboardStats reports={sampleReports} />

        {/* Open Issues */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#1A1A1A]">Open Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {openReports.map(report => (
              <ReportDetailCard key={report.id} report={report} />
            ))}
          </div>
        </section>
      </div>
    </AdminLayout>
  )
}
