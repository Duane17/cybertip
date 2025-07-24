import { notFound } from "next/navigation"
import { AdminLayout } from "@/components/admin/layout/admin-layout"
import { ReportMetaCard } from "@/components/admin/report-meta-card"
import { ReportDescriptionCard } from "@/components/admin/report-description-card"
import { StatusControlCard } from "@/components/admin/status-control"
import { sampleReports } from "@/app/data/reports"

interface ReportDetailsPageProps {
  params: { id: string }
}

export default function ReportDetailsPage({ params }: ReportDetailsPageProps) {
  const reportId = Number(params.id)
  const report = sampleReports.find((r) => r.id === reportId)

  if (!report) {
    return (
      <AdminLayout>
        <div className="min-h-[60vh] flex items-center justify-center text-center text-sm text-red-500">
          Report not found.
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">Report Details</h1>
          <p className="text-gray-600 text-sm">
            Detailed view and status management for this report.
          </p>
        </div>

        {/* Three‐column grid for all cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReportMetaCard report={report} />
          <StatusControlCard initialStatus={report.status} />
          <ReportDescriptionCard description={report.description} />
        </div>
      </div>
    </AdminLayout>
  )
}
