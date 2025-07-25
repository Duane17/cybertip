"use client";

import { ReportsTable } from "@/components/admin/reports-table";
import { PageTransition } from "@/components/page-transition";
import { AdminLayout } from "@/components/admin/layout/admin-layout";
import { useReports } from "@/hooks/use-reports";
import { LoadingScreen } from "@/components/admin/layout/loading-screen";

export default function AdminReportsPage() {
  const { data: reports = [], isLoading, isError } = useReports();

  return (
    <AdminLayout>
      <PageTransition>
        <main className="flex-1 px-4 md:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Bug Reports</h1>
            <p className="text-gray-600">Manage and track reported security issues.</p>
          </div>

          {isLoading ? (
            <LoadingScreen message="Loading reports..." />
          ) : isError ? (
            <p className="text-sm text-red-600">Failed to load reports.</p>
          ) : (
            <ReportsTable reports={reports} />
          )}
        </main>
      </PageTransition>
    </AdminLayout>
  );
}
