import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import type { ReportDetails } from "../types/report";
import {
  approveReport,
  getReport,
  updateReport,
} from "../services/reportService";

type UseReportEditorProps = {
  id?: string;
};

export function useReportEditor({ id }: UseReportEditorProps) {
  const navigate = useNavigate();

  const [originalReport, setOriginalReport] = useState<ReportDetails>();
  const [draftReport, setDraftReport] = useState<ReportDetails>();

  const [editable, setEditable] = useState(false);

  const [saving, setSaving] = useState(false);

  const [approving, setApproving] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchReport = async () => {
      try {
        const data = await getReport(id);

        setOriginalReport(data);
        setDraftReport(structuredClone(data));
      } catch (error) {
        console.error(error);

        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cargar el reporte.",
        });
      }
    };

    fetchReport();
  }, [id]);

  const hasChanges = useMemo(() => {
    if (!originalReport || !draftReport) return false;

    return JSON.stringify(originalReport) !== JSON.stringify(draftReport);
  }, [originalReport, draftReport]);

  const isApproved = originalReport?.estado === "APPROVED";

  const canEdit = editable && !saving && !approving && !isApproved;

  const handleEnableEdit = () => {
    if (saving || approving || isApproved) return;

    setEditable(true);
  };

  const handleCancelEdit = async () => {
    if (!originalReport) return;

    if (hasChanges) {
      const result = await Swal.fire({
        icon: "warning",
        title: "¿Descartar cambios?",
        text: "Se perderán todos los cambios realizados.",
        showCancelButton: true,
        confirmButtonText: "Descartar",
        cancelButtonText: "Seguir editando",
      });

      if (!result.isConfirmed) {
        return;
      }
    }

    setDraftReport(structuredClone(originalReport));

    setEditable(false);
  };

  const handleSave = async (): Promise<boolean> => {
    if (!id || !draftReport) return false;

    try {
      setSaving(true);

      const updated = await updateReport(id, draftReport, {});
      console.log(updated);

      setOriginalReport(updated);

      setDraftReport(structuredClone(updated));

      setEditable(false);

      setSavedMessage(true);

      setTimeout(() => {
        setSavedMessage(false);
      }, 2500);

      return true;

      return true;
    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron guardar los cambios.",
      });

      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleApprove = async () => {
    if (!id) return;

    if (hasChanges) {
      const result = await Swal.fire({
        icon: "question",
        title: "Hay cambios sin guardar",
        text: "¿Deseas guardarlos antes de liquidar el reporte?",
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: "Guardar y liquidar",
        denyButtonText: "Liquidar sin guardar",
      });

      if (result.isDismissed) {
        return;
      }

      if (result.isConfirmed) {
        const saved = await handleSave();

        if (!saved) {
          return;
        }
      }
    }

    const confirm = await Swal.fire({
      icon: "warning",
      title: "Liquidar reporte",
      text: "Una vez liquidado el reporte ya no podrá editarse.",
      showCancelButton: true,
      confirmButtonText: "Liquidar",
      cancelButtonText: "Cancelar",
    });

    if (!confirm.isConfirmed) {
      return;
    }

    try {
      setApproving(true);

      await approveReport(id);

      await Swal.fire({
        icon: "success",
        title: "Reporte liquidado",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo liquidar el reporte.",
      });
    } finally {
      setApproving(false);
    }
  };

  return {
    originalReport,

    draftReport,

    setDraftReport,

    editable,

    saving,

    approving,

    hasChanges,

    isApproved,

    canEdit,

    handleEnableEdit,

    handleCancelEdit,

    handleSave,

    handleApprove,
    savedMessage,
  };
}
