import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchReports,
  fetchReportById,
  createReport,
  patchReportStatus,
} from "@/lib/api/reports";

// Extended Report Interface
export interface Report {
  id: number;
  website: string;
  bugType: string;
  description: string;
  reportedDate: string;
  status: "open" | "in-review" | "resolved";
  submittedBy?: string;
  stepsToReproduce?: string[]; // array of instructions
  impact?: string;
  recommendation?: string;
  screenshot?: string;
}

// Payload structure for creating a report
export type CreateReportInput = Omit<Report, "id" | "reportedDate"> & {
  reportedDate?: string; // optional override
};

// All Reports List Hook
export function useReports() {
  return useQuery<Report[]>({
    queryKey: ["reports"],
    queryFn: fetchReports,
    staleTime: 60_000,
  });
}

// Single Report by ID Hook
export function useReport(id: number) {
  return useQuery<Report>({
    queryKey: ["report", id],
    queryFn: () => fetchReportById(id),
    enabled: !!id,
    staleTime: 60_000,
  });
}

// Create Report Hook
export function useCreateReport() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateReportInput) => createReport(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
  });
}

// Update Status Hook (optional helper if you use it)
export function useUpdateReportStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      patchReportStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
  });
}
