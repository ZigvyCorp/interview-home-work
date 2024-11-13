export function contentTruncate(content: string): string {
  const truncatedString = content.split(" ").splice(0, 100).join(" ");
  return truncatedString + "...";
}
