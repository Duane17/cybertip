"use client";

import { ReportsTable } from "@/components/admin/reports-table";
import { sampleReports } from "@/app/data/reports";
import { PageTransition } from "@/components/page-transition";
import { AdminLayout } from "@/components/admin/layout/admin-layout";

export default function AdminReportsPage() {
  return (
    <AdminLayout>
      <PageTransition>
        <main className="flex-1 px-4 md:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">Bug Reports</h1>
            <p className="text-gray-600">Manage and track reported security issues.</p>
          </div>

          <ReportsTable reports={sampleReports} />
        </main>
      </PageTransition>
    </AdminLayout>
  );
}
