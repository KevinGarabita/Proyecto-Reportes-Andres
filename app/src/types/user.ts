import type { RoleType } from "./userRole";

export type User = {
  id: string;
  name: string;
  role: RoleType;
};

export type UserReference = {
  id: string;
  name: string;
};
