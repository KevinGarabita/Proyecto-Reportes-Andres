import type { FieldConfig } from "../types/reportFields";

export const identificationFields: FieldConfig[] = [
  { key: "folio_pisa", label: "Folio Pisa", col: 4 },
  { key: "folio_plex", label: "Folio Plex", col: 4 },
  { key: "expediente_pic", label: "Expediente PIC", col: 4 },
  { key: "tipo_tarea", label: "Tipo de tarea", col: 4 },
  { key: "cope", label: "Cope", col: 4 },
  {
    key: "fecha_liquidacion",
    label: "Fecha liquidación",
    type: "date",
    col: 4,
  },
];

export const customerFields: FieldConfig[] = [
  {
    key: "nombre_cliente",
    label: "Cliente",
    col: 6,
  },
  {
    key: "telefono_cliente",
    label: "Teléfono",
    col: 6,
  },
];

export const personnelFields: FieldConfig[] = [
  {
    key: "tecnico.name",
    label: "Técnico",
    type: "readonly",
    col: 6,
  },
  {
    key: "supervisor.name",
    label: "Supervisor",
    type: "readonly",
    col: 6,
  },
];

export const technicalFields: FieldConfig[] = [
  {
    key: "tecnologia",
    label: "Tecnología",
    type: "select",
    col: 4,
    options: [
      { value: "FIBER", label: "Fibra" },
      { value: "COPPER", label: "Cobre" },
    ],
  },
  {
    key: "distrito",
    label: "Distrito",
    col: 4,
  },
  {
    key: "terminal",
    label: "Terminal",
    col: 4,
  },
  {
    key: "par",
    label: "Par",
    col: 4,
  },
  {
    key: "metraje",
    label: "Metraje",
    type: "number",
    col: 4,
  },
  {
    key: "tipo_os",
    label: "Tipo OS",
    type: "select",
    col: 4,
    options: [
      { value: "AERIAL", label: "Aérea" },
      { value: "UNDERGROUND", label: "Subterránea" },
    ],
  },
  {
    key: "alfanumerico",
    label: "Alfanumérico",
    col: 4,
  },
];
