export function formatDate(dateString) {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return date.toLocaleDateString('es-ES', options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}