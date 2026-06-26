import type { RoleType } from "./userRole";

export type AuthUser = {
  id: string;
  name: string;
  role: RoleType;
};
