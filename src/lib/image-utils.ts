/**
 * Image utility functions for handling missing images
 */

/**
 * Generate a placeholder image URL using placehold.co
 */
export function getPlaceholderImage(
  width: number,
  height: number,
  text: string,
  bgColor: string = '6C5CE7',
  textColor: string = 'FFFFFF'
): string {
  const encodedText = encodeURIComponent(text)
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`
}

/**
 * Check if image exists, return placeholder if not
 * For development only - in production, ensure all images exist
 */
export function getImageWithFallback(
  imagePath: string,
  placeholderText: string,
  width: number = 1200,
  height: number = 600
): string {
  // In development, we'll use placeholders
  // In production, this should return the actual path
  if (process.env.NODE_ENV === 'development') {
    // For now, return placeholder
    return getPlaceholderImage(width, height, placeholderText)
  }
  return imagePath
}

/**
 * Project image placeholders
 */
export const projectPlaceholders = {
  'ttrac-hero': getPlaceholderImage(1200, 600, 'T-Trac', '6C5CE7'),
  'ttrac-screens': getPlaceholderImage(1200, 800, 'T-Trac Screens', '00CEC9'),
  'chessmaster-hero': getPlaceholderImage(1200, 600, 'ChessMaster AI', '6C5CE7'),
  'chessmaster-screens': getPlaceholderImage(1200, 800, 'ChessMaster Screens', '00CEC9'),
  'masjid-hero': getPlaceholderImage(1200, 600, 'The Masjid', '6C5CE7'),
  'masjid-screens': getPlaceholderImage(1200, 800, 'Masjid Screens', '00CEC9'),
  'floorplan-hero': getPlaceholderImage(1200, 600, 'AI Floor Plan', '6C5CE7'),
  'floorplan-screens': getPlaceholderImage(1200, 800, 'Floor Plan Screens', '00CEC9'),
}

/**
 * Creative image placeholders
 */
export const creativePlaceholders = {
  'seer': getPlaceholderImage(800, 800, 'Seer', 'FFEAA7', '000000'),
  'duke': getPlaceholderImage(800, 800, 'Duke', 'FFEAA7', '000000'),
  'mama-patsy': getPlaceholderImage(800, 800, 'Mama Patsy', 'FFEAA7', '000000'),
}

/**
 * Profile placeholder
 */
export const profilePlaceholder = getPlaceholderImage(400, 400, 'Profile', '6C5CE7')
