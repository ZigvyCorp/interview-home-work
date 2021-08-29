export const handleCutText = (text, lengthLext = 100) => {
  if (!text) return
  if (text.split(" ").length > lengthLext) {
    const start = text.split(" ").slice(0, lengthLext);
    return start.join(" ") + ' ...'
  }
  return text;
};