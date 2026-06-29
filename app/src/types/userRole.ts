export const Role = {
  TECHNICIAN: "TECHNICIAN",
  SUPERVISOR: "SUPERVISOR",
  PORTALERO: "PORTALERO",
} as const;

export type RoleType = (typeof Role)[keyof typeof Role];
