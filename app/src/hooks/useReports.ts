import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import {
  deleteReport as deleteReportService,
  getReports,
} from "../services/reportService";

import type { ReportFilters, ReportsResponse } from "../types/report";

import type { ReportStatusType } from "../types/reportStatus";

export function useReports() {
  const [response, setResponse] = useState<ReportsResponse>({
    stats: null,
    reports: [],
  });

  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState<ReportFilters>({
    status: "DRAFT",
    page: 1,
    pageSize: 20,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchReports() {
      try {
        setLoading(true);

        const data = await getReports(filters);

        if (!cancelled) {
          setResponse(data);
        }
      } catch (error) {
        console.error(error);

        if (!cancelled) {
          await Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudieron cargar los reportes.",
          });
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void fetchReports();

    return () => {
      cancelled = true;
    };
  }, [filters]);

  const reload = async () => {
    setLoading(true);

    try {
      const data = await getReports(filters);

      setResponse(data);
    } finally {
      setLoading(false);
    }
  };

  const setStatus = (status: ReportStatusType) => {
    setFilters((current) => ({
      ...current,
      status,
      page: 1,
    }));
  };

  const deleteReport = async (reportId: string) => {
    try {
      await deleteReportService(reportId);

      await reload();
    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el reporte.",
      });
    }
  };

  return {
    reports: response.reports,
    stats: response.stats,

    loading,

    filters,

    setFilters,

    setStatus,

    reload,

    deleteReport,
  };
}
