export function handleError(error, context = '') {
  const errorMessage = error?.message || 'An unknown error occurred';
  const errorDetails = error?.details || '';
  
  console.error(`Error${context ? ` in ${context}` : ''}: ${errorMessage}`);
  if (errorDetails) {
    console.error('Details:', errorDetails);
  }
  
  return null;
}