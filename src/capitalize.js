function capitalize(text) {
  if (text === '' || (typeof text) === 'number') {
    return '';
  }
  const firstSymbol = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstSymbol}${restSubstring}`;
}

export default capitalize;