const shortText = (text, maxLength) => {

  if (typeof text === 'string' && text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }

  return text;
}

export default shortText;
