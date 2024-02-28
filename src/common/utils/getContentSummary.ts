function getContentSummary(content: string, wordCount: number = 100): string {
  const words = content.split(" ");
  const summary = words.slice(0, wordCount).join(" ");
  return summary + "...";
}

export default getContentSummary;
