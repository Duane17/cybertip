"use client";

import { useState } from "react";
import { sampleReports } from "@/app/data/reports";
import { StatusBadge } from "@/components/admin/status-badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Report = (typeof sampleReports)[number];

export function ReportsTable({ reports }: { reports: Report[] }) {
  const [localReports, setLocalReports] = useState<Report[]>(reports);

  const handleStatusChange = (reportId: number, newStatus: Report["status"]) => {
    const updated = localReports.map((r) =>
      r.id === reportId ? { ...r, status: newStatus } : r
    );
    setLocalReports(updated);
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-100 text-sm">
        <thead className="bg-[#F9FAFB] text-gray-600 font-medium">
          <tr>
            <th className="px-6 py-3 text-left">Website</th>
            <th className="px-6 py-3 text-left">Bug Type</th>
            <th className="px-6 py-3 text-left">Reported Date</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-right">Change Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-[#1A1A1A]">
          {localReports.map((report) => (
            <tr key={report.id} className="hover:bg-[#F9FAFB] transition-all">
              <td className="px-6 py-4">{report.website}</td>
              <td className="px-6 py-4">{report.bugType}</td>
              <td className="px-6 py-4">{report.reportedDate}</td>
              <td className="px-6 py-4">
                <StatusBadge status={report.status} />
              </td>
              <td className="px-6 py-4 text-right">
                <Select
                  value={report.status}
                  onValueChange={(value) =>
                    handleStatusChange(report.id, value as Report["status"])
                  }
                >
                  <SelectTrigger className="w-[140px] bg-white border-gray-200 text-sm rounded-xl shadow-sm">
                    <SelectValue placeholder="Change status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-review">In Review</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
