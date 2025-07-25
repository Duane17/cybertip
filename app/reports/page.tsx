"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";
import {
  ArrowRight,
  Calendar,
  Globe,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

import { useReports } from "@/hooks/use-reports";
import { LoadingScreen } from "@/components/loading-screen";

const statusConfig = {
  open: {
    label: "Open",
    color: "bg-red-500",
    textColor: "text-red-700",
    bgColor: "bg-red-50",
    icon: "❌",
  },
  "in-review": {
    label: "In Review",
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bgColor: "bg-orange-50",
    icon: "⚠️",
  },
  resolved: {
    label: "Resolved",
    color: "bg-green-500",
    textColor: "text-green-700",
    bgColor: "bg-green-50",
    icon: "✅",
  },
};

const filterOptions = ["All", "Open", "In Review", "Resolved"] as const;

export default function ViewReportsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 6;

  const { data: reports = [], isLoading, isError } = useReports();

  const filteredReports = useMemo(() => {
    if (activeFilter === "All") return reports;
    return reports.filter((r) => statusConfig[r.status].label === activeFilter);
  }, [reports, activeFilter]);

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);
  const currentReports = filteredReports.slice(
    (currentPage - 1) * reportsPerPage,
    currentPage * reportsPerPage
  );

  const handleFilterChange = (filter: (typeof filterOptions)[number]) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <LoadingScreen message="Loading reports..." />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-mono animate-page-fade-in">
      <Navbar />

      <section className="relative w-full py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3B6]/5 via-[#F8FAFC] to-[#007BFF]/5" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, #1ED3B6 1px, transparent 1px),
                radial-gradient(circle at 80% 80%, #007BFF 1px, transparent 1px),
                linear-gradient(90deg, transparent 49%, rgba(30, 211, 182, 0.1) 50%, transparent 51%)
              `,
              backgroundSize: "40px 40px, 60px 60px, 30px 30px",
            }}
          />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Shield className="w-96 h-96 text-[#1ED3B6]/5 animate-pulse-slow" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="text-center space-y-6 animate-slide-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-in-left">
              Recent <span className="text-[#1ED3B6] animate-glow">Bug Reports</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right animation-delay-200">
              These are the most recent security issues reported by our ethical hacker community.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in-up animation-delay-400">
              {filterOptions.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => handleFilterChange(filter)}
                  className={`rounded-xl px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter
                      ? "bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white shadow-lg shadow-[#1ED3B6]/25"
                      : "border-gray-300 text-gray-600 hover:border-[#1ED3B6] hover:text-[#1ED3B6] hover:bg-[#1ED3B6]/5"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 mx-auto py-8">
        {isError && <p className="text-center text-red-500">Failed to load reports.</p>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReports.map((report, index) => {
            const status = statusConfig[report.status];
            return (
              <Card
                key={report.id}
                className="rounded-2xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-[#007BFF]" />
                      <span className="text-sm font-medium text-[#007BFF]">{report.website}</span>
                    </div>
                    <Badge
                      className={`${status.bgColor} ${status.textColor} border-0 rounded-lg px-3 py-1 text-xs font-medium`}
                    >
                      <span className="mr-1">{status.icon}</span>
                      {status.label}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#1ED3B6] transition-colors duration-300">
                    {report.bugType}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(report.reportedDate), "MMMM d, yyyy")}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{report.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl transition-all duration-300 group-hover:scale-105 bg-transparent"
                  >
                    <Link href={`/reports/${report.id}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4 mt-12 animate-fade-in-up">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-gray-300 hover:border-[#1ED3B6] hover:text-[#1ED3B6] disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "ghost"}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl ${
                    currentPage === page
                      ? "bg-[#1ED3B6] hover:bg-[#1ED3B6]/90 text-white"
                      : "border border-gray-300 hover:border-[#1ED3B6] hover:text-[#1ED3B6]"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-xl border border-gray-300 hover:border-[#1ED3B6] hover:text-[#1ED3B6] disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            asChild
            variant="outline"
            className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white rounded-xl px-8 py-3 font-medium bg-transparent"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
