export const Role = {
  TECHNICIAN: "TECHNICIAN",
  SUPERVISOR: "SUPERVISOR",
} as const;

export type RoleType = (typeof Role)[keyof typeof Role];
