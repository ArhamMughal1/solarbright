/**
 * Cloudflare Image Loader for Next.js
 * Optimizes images using Cloudflare's CDN
 */

interface CloudflareImageLoaderProps {
  src: string
  width: number
  quality?: number
}

export default function cloudflareImageLoader({
  src,
  width,
  quality = 75,
}: CloudflareImageLoaderProps): string {
  // Handle external URLs
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  // For local images, use Cloudflare's image resizing
  const params = new URLSearchParams({
    width: width.toString(),
    quality: quality.toString(),
    format: 'auto', // Automatically serve WebP/AVIF when supported
  })

  // Remove leading slash if present
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src

  return `/cdn-cgi/image/${params.toString()}/${cleanSrc}`
}
