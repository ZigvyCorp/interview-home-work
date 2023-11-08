import { AUTH_CRED, AUTH_PERMISSION } from "@/modules/shared";

// export const allowedRoles = [SUPER_ADMIN, STORE_OWNER, STAFF];
// export const adminAndOwnerOnly = [SUPER_ADMIN, STORE_OWNER];
// export const adminOwnerAndStaffOnly = [SUPER_ADMIN, STORE_OWNER, STAFF];
// export const adminOnly = [SUPER_ADMIN];
// export const ownerOnly = [STORE_OWNER];

export function setAuthCredentials(token: string, user_id: any, permissions: string[], user_name: string) {
  localStorage.setItem(AUTH_CRED, JSON.stringify({ token, user_id: user_id, user_name: user_name }));
  sessionStorage.setItem(AUTH_PERMISSION, JSON.stringify(permissions));
}

// export function setPermissions(permissions: string[]) {
//   sessionStorage.setItem(AUTH_PERMISSION, JSON.stringify(permissions));
// }

// export function getPermissions() {
//   const authPermission = window.sessionStorage.getItem(AUTH_PERMISSION);
//   if (authPermission) {
//     return { permissions: JSON.parse(authPermission) };
//   }
//   return { Permissions: null };
// }

// export function setUserName(user_name: string) {
//   sessionStorage.setItem(USER_NAME, JSON.stringify({ user_name: user_name }));
// }

// export function getUserName() {
//   const userName = window.sessionStorage.getItem(USER_NAME);
//   if (userName) {
//     return JSON.parse(userName)?.user_name;
//   }
//   return null;
// }

export function getAuthCredentials(): {
  token: string | null;
  user_id: any | null;
  permissions: string[] | null;
  user_name: string | null;
} {
  const authCred = window.localStorage.getItem(AUTH_CRED);
  const authPermission = window.sessionStorage.getItem(AUTH_PERMISSION);

  if (authCred && authPermission) {
    return { ...JSON.parse(authCred), permissions: JSON.parse(authPermission) };
  } else if (authCred) {
    return { ...JSON.parse(authCred), permissions: null };
  }

  return { token: null, user_id: null, permissions: null, user_name: null };
}

// export function hasAccess(_permissions: string[], _userPermissions: string[] | undefined | null) {
//   if (_userPermissions) {
//     return Boolean(_permissions?.find((permission) => _userPermissions.includes(permission)));
//   }
//   return false;
// }
// export function isAuthenticated(_cookies: any) {
//   return (
//     !!_cookies[TOKEN] &&
//     !!_cookies[KEY_PERMISSIONS] &&
//     Array.isArray(_cookies[KEY_PERMISSIONS]) &&
//     !!_cookies[KEY_PERMISSIONS].length
//   );
// }
