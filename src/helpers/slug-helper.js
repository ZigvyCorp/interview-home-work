//Didn't use, decided to use id instead,
//since there's no guarantee this is unique and have only have single space between words
export function getTitleSlug(title) {
  return title.trim().toLowerCase().replace(/\s+/g, '-');
}
