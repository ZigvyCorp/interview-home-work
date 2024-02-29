function getContentSummary(
  content: string,
  charactersCount: number = 100
): string {
  return content.slice(0, charactersCount) + "...";
}

export default getContentSummary;
