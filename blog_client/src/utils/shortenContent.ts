export const shortenContent = (content: string, maxLength = 200) => {
  if (content.length <= maxLength) {
    return content;
  }
  const words = content.split(" ");
  words.length = maxLength;

  const shortenedContent = words.join(" ");

  return `${shortenedContent}...`;
};
