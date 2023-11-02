export default function truncateTextWithEllipsis(content: string, maxLength = 10) {
  if (content.length > maxLength) {
    return content.slice(0, maxLength) + "…";
  }
  return content;
}
