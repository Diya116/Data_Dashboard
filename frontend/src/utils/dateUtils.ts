/**
 * Date utility functions for handling date conversions and formatting
 */

/**
 * Converts ISO date string to YYYY-MM-DD format for HTML date input
 * @param isoDate - ISO 8601 date string (e.g., '2025-11-21T00:00:00.000Z')
 * @returns Date string in YYYY-MM-DD format (e.g., '2025-11-21')
 */
export const formatDateForInput = (isoDate: string | Date | undefined | null): string => {
  if (!isoDate) return '';
  
  try {
    const date = new Date(isoDate);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return '';
    }
    
    // Format as YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  } catch (error) {
    console.error('Error formatting date for input:', error);
    return '';
  }
};

/**
 * Converts date to ISO string format for API
 * @param date - Date string, Date object, or date input value
 * @returns ISO 8601 date string
 */
export const formatDateForAPI = (date: string | Date | undefined | null): string => {
  if (!date) return '';
  
  try {
    const dateObj = new Date(date);
    
    // Check if date is valid
    if (isNaN(dateObj.getTime())) {
      return '';
    }
    
    return dateObj.toISOString();
  } catch (error) {
    console.error('Error formatting date for API:', error);
    return '';
  }
};

/**
 * Formats date for display in UI (e.g., "Nov 21, 2025")
 * @param isoDate - ISO 8601 date string
 * @param options - Intl.DateTimeFormatOptions for custom formatting
 * @returns Formatted date string
 */
export const formatDateForDisplay = (
  isoDate: string | Date | undefined | null,
  options?: Intl.DateTimeFormatOptions
): string => {
  if (!isoDate) return 'N/A';
  
  try {
    const date = new Date(isoDate);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    
    return date.toLocaleDateString('en-US', options || defaultOptions);
  } catch (error) {
    console.error('Error formatting date for display:', error);
    return 'Invalid Date';
  }
};

/**
 * Gets relative time string (e.g., "2 days ago", "in 3 months")
 * @param isoDate - ISO 8601 date string
 * @returns Relative time string
 */
export const getRelativeTime = (isoDate: string | Date | undefined | null): string => {
  if (!isoDate) return 'N/A';
  
  try {
    const date = new Date(isoDate);
    const now = new Date();
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays === -1) return 'Tomorrow';
    if (diffInDays > 0 && diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInDays < 0 && diffInDays > -30) return `in ${Math.abs(diffInDays)} days`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths > 0 && diffInMonths < 12) return `${diffInMonths} months ago`;
    if (diffInMonths < 0 && diffInMonths > -12) return `in ${Math.abs(diffInMonths)} months`;
    
    const diffInYears = Math.floor(diffInDays / 365);
    if (diffInYears > 0) return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    return `in ${Math.abs(diffInYears)} year${Math.abs(diffInYears) > 1 ? 's' : ''}`;
  } catch (error) {
    console.error('Error getting relative time:', error);
    return 'Invalid Date';
  }
};

/**
 * Checks if a date is valid
 * @param date - Date to validate
 * @returns True if date is valid
 */
export const isValidDate = (date: string | Date | undefined | null): boolean => {
  if (!date) return false;
  
  try {
    const dateObj = new Date(date);
    return !isNaN(dateObj.getTime());
  } catch {
    return false;
  }
};

/**
 * Gets today's date in YYYY-MM-DD format
 * @returns Today's date string
 */
export const getTodayFormatted = (): string => {
  return formatDateForInput(new Date());
};
