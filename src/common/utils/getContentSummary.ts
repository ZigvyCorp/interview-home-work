function getContentSummary(content: string, length: number = 100): string {
  const summary = content.substring(0, length);
  return summary;
}

export default getContentSummary;
