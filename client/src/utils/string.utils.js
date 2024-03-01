export function getFirstCharacters(inputString, numberOfCharacters = 100) {
  if (inputString.length > numberOfCharacters) {
    return inputString.slice(0, numberOfCharacters) + "...";
  } else {
    return inputString;
  }
}

export function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export function getFirstWords(paragraph, numberOfWords = 100) {
  const words = paragraph.split(/\s+/);

  const first100Words =
    words.length > numberOfWords ? words.slice(0, numberOfWords).join(" ") + "..." : paragraph;

  return first100Words?.trim();
}
