function normalizePublicPath(path: string, rootFolder: string): string {
  return path
    .replace(/^\/+/, "")
    .replace(/^DGME168-Noa\//, "")
    .replace(new RegExp(`^${rootFolder}/`), "");
}

export function resolveAsset(path: string): string {
  const normalized = normalizePublicPath(path, "assets");
  return `${import.meta.env.BASE_URL}assets/${normalized}`;
}

export function resolveModel(path: string): string {
  const normalized = normalizePublicPath(path, "models");
  return `${import.meta.env.BASE_URL}models/${normalized}`;
}
