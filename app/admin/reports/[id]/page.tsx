"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { AdminLayout } from "@/components/admin/layout/admin-layout";
import { ReportMetaCard } from "@/components/admin/report-meta-card";
import { ReportDescriptionCard } from "@/components/admin/report-description-card";
import { StatusControlCard } from "@/components/admin/status-control";
import { LoadingScreen } from "@/components/admin/layout/loading-screen";
import { useReport } from "@/hooks/use-reports";

interface ReportDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function ReportDetailsPage({ params }: ReportDetailsPageProps) {
  const { id } = use(params);
  const reportId = Number(id);

  const { data: report, isLoading, isError } = useReport(reportId);

  return (
    <AdminLayout>
      {isLoading ? (
        <LoadingScreen message="Fetching report details..." />
      ) : isError || !report ? (
        <div className="min-h-[60vh] flex items-center justify-center text-center text-sm text-red-500">
          Report not found.
        </div>
      ) : (
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Report Details</h1>
            <p className="text-gray-600 text-sm">
              Detailed view and status management for this report.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReportMetaCard report={report} />
            <StatusControlCard initialStatus={report.status} />
            <ReportDescriptionCard description={report.description} />
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
