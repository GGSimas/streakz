export type PermissionStatus =
  | "granted"
  | "denied"
  | "undetermined"
  | "blocked"
  | "unavailable";

export type PermissionName = "camera" | "photoLibrary";

export type PermissionService = {
  request: (name: PermissionName) => Promise<PermissionStatus>;
  check: (name: PermissionName) => Promise<PermissionStatus>;
};
