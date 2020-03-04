export const capitalize = text => {
  const firstChar = text.charAt(0);
  const restChars = text.slice(1, text.length);
  return `${firstChar.toUpperCase()}${restChars}`.toString();
};
