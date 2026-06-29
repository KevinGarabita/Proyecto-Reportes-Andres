import type { ReportDetails } from "../types/report";
import type { FieldConfig } from "../types/reportFields";

export const identificationFields: FieldConfig[] = [
  {
    label: "Folio Pisa",
    getValue: (report: ReportDetails) => report.folio_pisa,
    col: 3,
  },
  {
    label: "Folio Plex",
    getValue: (report: ReportDetails) => report.folio_plex,
    col: 3,
  },
  {
    label: "Expediente PIC",
    getValue: (report: ReportDetails) => report.expediente_pic,
    col: 3,
  },
  {
    label: "Tipo de tarea",
    getValue: (report: ReportDetails) => report.tipo_tarea,
    col: 3,
  },
];

export const customerFields: FieldConfig[] = [
  {
    label: "Cliente",
    getValue: (report: ReportDetails) => report.nombre_cliente,
    col: 6,
  },
  {
    label: "Teléfono",
    getValue: (report: ReportDetails) => report.telefono_cliente,
    col: 6,
  },
];

export const personnelFields: FieldConfig[] = [
  {
    label: "Técnico",
    getValue: (report: ReportDetails) => report.tecnico.name,
    type: "readonly",
    col: 6,
  },
  {
    label: "Supervisor",
    getValue: (report: ReportDetails) => report.supervisor?.name ?? "-",
    type: "readonly",
    col: 6,
  },
];

export const technicalFields: FieldConfig[] = [
  {
    label: "Tecnología",
    getValue: (report: ReportDetails) => report.tecnologia,
    type: "select",
    col: 4,
    options: [
      {
        value: "FIBRA",
        label: "Fibra",
      },
      {
        value: "COBRE",
        label: "Cobre",
      },
    ],
  },
  {
    label: "Distrito",
    getValue: (report: ReportDetails) => report.distrito,
    col: 4,
  },
  {
    label: "Terminal",
    getValue: (report: ReportDetails) => report.terminal,
    col: 4,
  },
  {
    label: "Par",
    getValue: (report: ReportDetails) => report.par,
    col: 4,
  },
  {
    label: "Metraje",
    getValue: (report: ReportDetails) => report.metraje,
    type: "number",
    col: 4,
  },
  {
    label: "Tipo de OS",
    getValue: (report: ReportDetails) => report.tipo_os,
    type: "select",
    col: 4,
    options: [
      {
        value: "AEREA",
        label: "Aérea",
      },
      {
        value: "SUBTERRANEA",
        label: "Subterránea",
      },
    ],
  },
  {
    label: "Alfanumérico",
    getValue: (report: ReportDetails) => report.alfanumerico,
    col: 4,
  },
];
