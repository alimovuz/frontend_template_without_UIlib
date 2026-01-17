export function truncate(str: string, limit: number = 100, suffix: string = "..."): string {
  if (!str) return "";
  if (str.length <= limit) return str;
  return str.slice(0, limit) + suffix;
}