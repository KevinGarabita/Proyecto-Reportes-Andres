import { useAuth } from "./useAuth";

export function usePermissions() {
  const { user } = useAuth();

  const role = user?.role;

  return {
    role,

    isTechnician: role === "TECHNICIAN",

    isSupervisor: role === "SUPERVISOR",

    isPortalero: role === "PORTALERO",

    hasRole: (...roles: string[]) => !!role && roles.includes(role),
  };
}
