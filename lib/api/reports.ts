const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

// Get all reports
export async function fetchReports() {
  const res = await fetch(`${BASE_URL}/reports`);
  if (!res.ok) throw new Error("Failed to fetch reports");
  return res.json();
}

// Get single report by ID
export async function fetchReportById(id: number) {
  const res = await fetch(`${BASE_URL}/reports/${id}`);
  if (!res.ok) throw new Error("Report not found");
  return res.json();
}

// Update report status
export async function patchReportStatus(id: number, status: string) {
  const res = await fetch(`${BASE_URL}/reports/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Update failed");
  return res.json();
}

// Create a new report
export async function createReport(data: {
  website: string;
  bugType: string;
  description: string;
  submittedBy?: string;
  stepsToReproduce?: string[];
  impact?: string;
  recommendation?: string;
  screenshot?: string;
  reportedDate?: string; // optional
  status?: "open" | "in-review" | "resolved";
}) {
  const res = await fetch(`${BASE_URL}/reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error?.error || "Failed to create report");
  }

  return res.json();
}
