/**
 * Resolve a path inside /public against the deployment base.
 *
 * Vite's BASE_URL is '/' in both production and dev for this root-served site,
 * and it ALWAYS ends in a slash, so the argument must NOT start with one.
 *
 *   assetUrl('videos/g1_slope-FADA.mp4')  ->  '/videos/g1_slope-FADA.mp4'
 */
export function assetUrl(path: string): string {
  const clean = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
