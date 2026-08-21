/**
 * LIFEWOVEN — Centralised public URL configuration
 *
 * All external URLs are read from Vite env variables (VITE_* prefix).
 * These are public URLs, not secrets — they are safe to ship in the
 * client bundle. The env vars exist so you can change a URL in one
 * place (.env) without touching component files.
 *
 * To override locally, create a .env file at the project root:
 *   VITE_APP_URL=https://app.lifewoven.click
 *   VITE_APPLY_ENDPOINT=https://api.lifewoven.click/apply
 *   VITE_SHOP_URL=https://soulengineer.online/shop
 */

/** Base URL of the Lifewoven app (no trailing slash). */
export const APP_URL =
  (import.meta.env.VITE_APP_URL as string | undefined) ?? "https://app.lifewoven.click";

/** Full URL of the Load-Bearing Survey page. */
export const AUDIT_URL = `${APP_URL}/audit`;

/** Sign-in page URL. */
export const SIGNIN_URL = `${APP_URL}/login`;

/** API endpoint for the Founding Member application form POST. */
export const APPLY_ENDPOINT =
  (import.meta.env.VITE_APPLY_ENDPOINT as string | undefined) ??
  "https://api.lifewoven.click/apply";

/** Standalone product shop URL. */
export const SHOP_URL =
  (import.meta.env.VITE_SHOP_URL as string | undefined) ?? "https://soulengineer.online/shop";

/**
 * URL for The First Honest Week in the Lifewoven app.
 * Falls back to the Load-Bearing Survey until a dedicated app route is confirmed.
 */
export const FIRST_HONEST_WEEK_URL: string =
  (import.meta.env.VITE_FIRST_HONEST_WEEK_URL as string | undefined) ?? AUDIT_URL;
