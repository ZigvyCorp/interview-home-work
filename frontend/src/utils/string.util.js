export function getWords(content, limit) {
  const split = content.split(" ");
  return split.length > limit ? split.slice(0, limit).join(" ") + "..." : content;
}